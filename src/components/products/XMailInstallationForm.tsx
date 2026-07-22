"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
const KEYSERVER_API_URL =
  process.env.NEXT_PUBLIC_KEYSERVER_API_URL ||
  "https://keyserver000101.01com.com";
const INSTALLATION_API_URL = `${KEYSERVER_API_URL.replace(
  /\/+$/,
  ""
)}/api/v1/installation`;

type InstallationFormValues = {
  email: string;
  firstname: string;
  lastname: string;
};

type RecaptchaWidget = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    }
  ) => number;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: RecaptchaWidget;
  }
}

const initialValues: InstallationFormValues = {
  email: "",
  firstname: "",
  lastname: "",
};

const fields: {
  name: keyof InstallationFormValues;
  label: string;
  type: "email" | "text";
  autoComplete: string;
}[] = [
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    name: "firstname",
    label: "First Name",
    type: "text",
    autoComplete: "given-name",
  },
  {
    name: "lastname",
    label: "Last Name",
    type: "text",
    autoComplete: "family-name",
  },
];

function loadRecaptchaScript() {
  const scriptId = "google-recaptcha-api";
  const existingScript = document.getElementById(scriptId) as
    | HTMLScriptElement
    | null;

  if (existingScript) {
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;
  script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

function getProvisionIdFromUrl() {
  return new URLSearchParams(window.location.search).get("provid")?.trim() || "";
}

function getCookie(name: string) {
  const prefix = `${name}=`;
  const cookie = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix));

  return cookie ? cookie.slice(prefix.length) : "";
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; secure;`;
}

function eraseCookie(name: string) {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export function XMailInstallationForm({
  buttonText,
}: {
  buttonText: string;
}) {
  const [values, setValues] = useState<InstallationFormValues>(initialValues);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successEmail, setSuccessEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaContainerRef = useRef<HTMLDivElement | null>(null);
  const recaptchaWidgetIdRef = useRef<number | null>(null);
  const provisionIdRef = useRef("");

  useEffect(() => {
    const provisionIdFromUrl = getProvisionIdFromUrl();

    if (provisionIdFromUrl) {
      setCookie("prov_id", provisionIdFromUrl, 1);
      provisionIdRef.current = provisionIdFromUrl;
      return;
    }

    provisionIdRef.current = getCookie("prov_id");
  }, []);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) {
      return;
    }

    loadRecaptchaScript();

    const interval = window.setInterval(() => {
      if (
        !window.grecaptcha ||
        !recaptchaContainerRef.current ||
        recaptchaWidgetIdRef.current !== null
      ) {
        return;
      }

      recaptchaWidgetIdRef.current = window.grecaptcha.render(
        recaptchaContainerRef.current,
        {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (token) => {
            setRecaptchaToken(token);
            setError(null);
          },
          "expired-callback": () => setRecaptchaToken(""),
          "error-callback": () => {
            setRecaptchaToken("");
            setError("Verification failed. Please try again.");
          },
        }
      );

      window.clearInterval(interval);
    }, 300);

    return () => window.clearInterval(interval);
  }, []);

  const updateValue = (name: keyof InstallationFormValues, value: string) => {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const resetRecaptcha = () => {
    if (window.grecaptcha && recaptchaWidgetIdRef.current !== null) {
      window.grecaptcha.reset(recaptchaWidgetIdRef.current);
    }

    setRecaptchaToken("");
  };

  const isComplete =
    values.email.trim().length > 0 &&
    values.firstname.trim().length > 0 &&
    values.lastname.trim().length > 0 &&
    (!RECAPTCHA_SITE_KEY || recaptchaToken.length > 0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const missingField = Object.entries(values).find(
      ([, value]) => value.trim().length === 0
    );

    if (missingField) {
      setError("Please complete email, first name, and last name.");
      return;
    }

    if (RECAPTCHA_SITE_KEY && !recaptchaToken) {
      setError("Please complete verification before continuing.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(INSTALLATION_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          firstname: values.firstname,
          lastname: values.lastname,
          provisionid: provisionIdRef.current,
          g_recaptcha_response: recaptchaToken,
        }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "The installation email could not be sent. Please try again."
        );
      }

      setSuccessEmail(values.email);
      setValues(initialValues);
      eraseCookie("prov_id");
      resetRecaptcha();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "The installation email could not be sent. Please try again."
      );
      resetRecaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successEmail) {
    return (
      <div className="rounded-[8px] border border-[#D7DEE3] bg-white p-6 text-center shadow-[0_18px_44px_rgba(27,27,39,0.07)] sm:p-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
          Installation Email Sent
        </p>
        <h2 className="mt-4 text-[28px] font-medium leading-[36px] text-quantum-blue">
          Check your inbox
        </h2>
        <p className="mt-3 text-[15px] leading-[24px] text-steel-gray">
          Installation email sent to{" "}
          <span className="font-medium text-quantum-green">{successEmail}</span>
          . Please check your inbox and spam folder.
        </p>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-left text-[14px] leading-[22px] text-steel-gray">
          <li>Go to the computer where you normally send and receive email.</li>
          <li>Open the installation email from IronCAP XMail.</li>
          <li>Follow the instructions in that email to install IronCAP XMail.</li>
        </ol>
        <button
          type="button"
          onClick={() => setSuccessEmail("")}
          className="mt-6 inline-flex min-h-[44px] max-w-full items-center justify-center rounded-bl-lg rounded-tr-lg border border-quantum-green px-5 py-3 text-center text-[12px] font-medium uppercase leading-[1.4] tracking-widest text-quantum-green transition-colors hover:bg-quantum-green/10 sm:px-6"
        >
          Send Another Email
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-[8px] border border-[#D7DEE3] bg-white p-6 shadow-[0_18px_44px_rgba(27,27,39,0.07)] sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4">
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="sr-only">{field.label}</span>
            <input
              type={field.type}
              name={field.name}
              value={values[field.name]}
              placeholder={field.label}
              autoComplete={field.autoComplete}
              required
              onChange={(event) => updateValue(field.name, event.target.value)}
              className="h-12 w-full rounded-[4px] border border-[#D7DEE3] bg-white px-4 text-[15px] leading-[24px] text-steel-gray outline-none transition-colors placeholder:text-steel-gray/70 focus:border-quantum-green focus:ring-1 focus:ring-quantum-green/40"
            />
          </label>
        ))}
      </div>

      <p className="mt-6 text-[13px] leading-[22px] text-steel-gray">
        By clicking below, I agree to the{" "}
        <a
          href="https://www.01com.com/pdf/ironcapx-terms-of-service.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
        >
          Terms
        </a>{" "}
        and{" "}
        <a
          href="https://www.01com.com/pdf/ironcap-privacy-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
        >
          Privacy Policy
        </a>
        . An email will be sent to the above address with a link to install
        IronCAP XMail.
      </p>

      {RECAPTCHA_SITE_KEY ? (
        <div className="mt-6 min-h-[78px] rounded-[4px] border border-dashed border-[#D7DEE3] bg-[#F7FBFF] px-4 py-4">
          <div className="flex justify-center" ref={recaptchaContainerRef} />
        </div>
      ) : null}

      {error ? (
        <p className="mt-4 text-[13px] leading-[20px] text-[#b64747]" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting || !isComplete}
        className="mt-6 inline-flex min-h-[44px] max-w-full flex-wrap items-center justify-center rounded-bl-lg rounded-tr-lg border border-quantum-green px-5 py-3 text-center text-[12px] font-medium uppercase leading-[1.4] tracking-widest text-quantum-green transition-colors hover:bg-quantum-green/10 disabled:cursor-not-allowed disabled:opacity-60 sm:flex-nowrap sm:px-6"
      >
        {isSubmitting ? "Sending..." : buttonText}
      </button>
    </form>
  );
}
