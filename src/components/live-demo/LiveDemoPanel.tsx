"use client";

import Image from "next/image";
import { useState } from "react";

type AuthProvider = "facebook" | "google";
type AuthIntent = "register" | "login";
type DemoMode = "welcome" | "agreement" | "declined" | "authenticated";
type LoginType = "f" | "g";
type EncryptMode = "text" | "file";

type ProviderProfile = {
  email: string;
  firstname: string;
  lastname: string;
  photo?: string;
  logintype: LoginType;
  token: string;
};

type PendingAuth = ProviderProfile & {
  userId: string;
};

type DemoSession = PendingAuth & {
  agreementId: string;
};

type RegisterResponse = {
  id: string | number;
  agreement_id?: string | number | null;
};

type AgreementResponse = {
  id: string | number;
};

type ToolResponse = {
  data: unknown;
  fileUploadedName?: string;
};

type GoogleTokenClient = {
  requestAccessToken: (options?: { prompt?: string }) => void;
};

type GoogleAccounts = {
  oauth2?: {
    initTokenClient: (config: {
      client_id: string;
      scope: string;
      ux_mode?: "popup";
      callback: (response: { access_token?: string; error?: string }) => void;
    }) => GoogleTokenClient;
  };
};

type FacebookSdk = {
  init: (config: {
    appId: string;
    cookie: boolean;
    xfbml: boolean;
    version: string;
  }) => void;
  login: (
    callback: (response: {
      authResponse?: { accessToken?: string };
      status?: string;
    }) => void,
    options?: { scope?: string }
  ) => void;
  api: (
    path: string,
    params: { fields: string },
    callback: (response: {
      email?: string;
      first_name?: string;
      last_name?: string;
      name?: string;
      picture?: { data?: { url?: string } };
      error?: { message?: string };
    }) => void
  ) => void;
};

declare global {
  interface Window {
    FB?: FacebookSdk;
    google?: { accounts?: GoogleAccounts };
  }
}

const demoApiUrl =
  process.env.DEMO_SERVER_API_URL ||
  process.env.NEXT_PUBLIC_DEMO_SERVER_API_URL ||
  "";
const googleClientId =
  process.env.GOOGLE_API_ID || process.env.NEXT_PUBLIC_GOOGLE_API_ID || "";
const googleAuthorizedOrigins =
  process.env.GOOGLE_AUTHORIZED_ORIGINS ||
  process.env.NEXT_PUBLIC_GOOGLE_AUTHORIZED_ORIGINS ||
  "";
const facebookAppId =
  process.env.FACEBOOK_API_ID || process.env.NEXT_PUBLIC_FACEBOOK_API_ID || "";
const facebookApiVersion =
  process.env.FACEBOOK_API_VERSION ||
  process.env.NEXT_PUBLIC_FACEBOOK_API_VERSION || "v21.0";

const scriptLoads = new Map<string, Promise<void>>();

class DemoApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "DemoApiError";
    this.status = status;
  }
}

function joinApiUrl(path: string) {
  return `${demoApiUrl.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}

function getDemoApiConfigMessage(url: string) {
  const target = new URL(url, window.location.href);
  const isSameOrigin = target.origin === window.location.origin;
  const hint = isSameOrigin
    ? " The demo API URL currently points at this Next.js site, so the request is reaching a page route instead of the demo backend."
    : "";

  return `Demo API returned HTML instead of JSON from ${target.href}.${hint} Configure DEMO_SERVER_API_URL or NEXT_PUBLIC_DEMO_SERVER_API_URL to the live demo API root.`;
}

function loadScript(id: string, src: string) {
  if (typeof document === "undefined") {
    return Promise.reject(new Error("This action is only available in a browser."));
  }

  const existing = document.getElementById(id) as HTMLScriptElement | null;
  if (existing?.dataset.loaded === "true") {
    return Promise.resolve();
  }

  const cached = scriptLoads.get(id);
  if (cached) {
    return cached;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const script = existing || document.createElement("script");

    script.id = id;
    script.src = src;
    script.async = true;

    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };

    script.onerror = () => {
      scriptLoads.delete(id);
      reject(new Error(`Failed to load external script: ${src}`));
    };

    if (!existing) {
      document.body.appendChild(script);
    }
  });

  scriptLoads.set(id, promise);
  return promise;
}

function getFacebookProtocolError() {
  if (typeof window === "undefined" || window.location.protocol === "https:") {
    return null;
  }

  return `Facebook Login requires HTTPS before it will open the sign-in popup. Current origin: ${window.location.origin}. For local testing, restart Next with yarn dev:https and open https://localhost:3000/live-demo/.`;
}

function getGoogleOriginError() {
  if (typeof window === "undefined" || !googleAuthorizedOrigins.trim()) {
    return null;
  }

  const allowedOrigins = googleAuthorizedOrigins
    .split(",")
    .map((origin) => origin.trim().replace(/\/+$/, ""))
    .filter(Boolean);

  if (!allowedOrigins.length || allowedOrigins.includes(window.location.origin)) {
    return null;
  }

  return `Google sign-in is blocked for ${window.location.origin}. Add this exact origin to the Google Cloud OAuth client's Authorized JavaScript origins, or use a GOOGLE_API_ID whose OAuth client already includes it. Current configured origins: ${allowedOrigins.join(", ")}.`;
}

async function readErrorMessage(response: Response) {
  const contentType = response.headers.get("content-type") || "";
  const text = await response.text();
  const trimmed = text.trim();

  if (contentType.includes("application/json")) {
    try {
      const data = JSON.parse(trimmed) as { message?: string; error?: string };
      return data.message || data.error || `Request failed with ${response.status}.`;
    } catch {
      return `Request failed with ${response.status}.`;
    }
  }

  if (
    contentType.includes("text/html") ||
    trimmed.toLowerCase().startsWith("<!doctype") ||
    trimmed.startsWith("<html")
  ) {
    return getDemoApiConfigMessage(response.url);
  }

  return text || `Request failed with ${response.status}.`;
}

async function readJson<T>(response: Response) {
  const text = await response.text();
  const contentType = response.headers.get("content-type") || "";
  const trimmed = text.trim();

  if (!trimmed) {
    throw new DemoApiError(
      response.status,
      `Demo API returned an empty response from ${response.url}.`
    );
  }

  if (
    contentType.includes("text/html") ||
    trimmed.toLowerCase().startsWith("<!doctype") ||
    trimmed.startsWith("<html")
  ) {
    throw new DemoApiError(response.status, getDemoApiConfigMessage(response.url));
  }

  try {
    return JSON.parse(trimmed) as T;
  } catch {
    throw new DemoApiError(
      response.status,
      `Demo API returned a non-JSON response from ${response.url}.`
    );
  }
}

async function postJson<T>(path: string, body: Record<string, unknown>) {
  const response = await fetch(joinApiUrl(path), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new DemoApiError(response.status, await readErrorMessage(response));
  }

  return readJson<T>(response);
}

async function postForm<T>(path: string, body: FormData) {
  const response = await fetch(joinApiUrl(path), {
    method: "POST",
    body,
  });

  if (!response.ok) {
    throw new DemoApiError(response.status, await readErrorMessage(response));
  }

  return readJson<T>(response);
}

function toHex(value: string) {
  return Array.from(new TextEncoder().encode(value))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function toUint8Array(payload: unknown) {
  if (payload instanceof Uint8Array) {
    return payload;
  }

  if (Array.isArray(payload)) {
    return Uint8Array.from(payload.map((value) => Number(value) || 0));
  }

  if (
    payload &&
    typeof payload === "object" &&
    "data" in payload &&
    Array.isArray((payload as { data: unknown }).data)
  ) {
    return Uint8Array.from(
      ((payload as { data: unknown[] }).data || []).map(
        (value) => Number(value) || 0
      )
    );
  }

  if (typeof payload === "string") {
    const normalized = payload.replace(/\s+/g, "");

    try {
      const binary = atob(normalized);
      return Uint8Array.from(binary, (character) => character.charCodeAt(0));
    } catch {
      return new TextEncoder().encode(payload);
    }
  }

  throw new Error("Unexpected download payload received from the demo API.");
}

function downloadBytes(bytes: Uint8Array, fileName: string) {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);

  const blob = new Blob([copy.buffer as ArrayBuffer], {
    type: "application/octet-stream",
  });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = objectUrl;
  link.download = fileName;
  link.click();

  setTimeout(() => {
    URL.revokeObjectURL(objectUrl);
  }, 1000);
}

function BracketCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full max-w-[494px] min-h-[311px] h-auto">
      <Image
        src="/live_demo_assets/Bracket.svg"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none select-none object-contain"
      />
      <div className="relative px-6 py-10 flex flex-col items-center sm:px-10 sm:py-12 lg:px-16 lg:py-16 xl:px-20">
        <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-6 self-start">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

function LiveDemoTitle() {
  return (
    <p className="mx-auto flex w-full max-w-[260px] items-center justify-center text-center text-[20px] font-medium leading-[34px] text-quantum-green">
      Login for Live Demo
    </p>
  );
}

function SsoButton({
  provider,
  intent,
  onClick,
  disabled,
}: {
  provider: AuthProvider;
  intent: AuthIntent;
  onClick: () => void;
  disabled?: boolean;
}) {
  const isFacebook = provider === "facebook";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="flex min-h-[40px] w-full max-w-[260px] items-center gap-2 rounded-[4px] bg-white px-4 text-left text-[14px] leading-[20px] text-steel-gray transition-colors hover:bg-[#f2f6f7] disabled:cursor-not-allowed disabled:opacity-60"
      style={{
        outline: "0.30px solid #B6BBCD",
        outlineOffset: "-0.15px",
      }}
      aria-label={`${intent === "login" ? "Log in" : "Register"} with ${
        isFacebook ? "Facebook" : "Google"
      }`}
    >
      <span
        className="flex shrink-0 items-center justify-center"
        style={{ width: isFacebook ? 16 : 18, height: isFacebook ? 16 : 18 }}
      >
        <Image
          src={
            isFacebook
              ? "/live_demo_assets/Facebook_icon.svg"
              : "/live_demo_assets/Google_icon.svg"
          }
          alt=""
          width={isFacebook ? 16 : 18}
          height={isFacebook ? 16 : 18}
          className="max-h-full max-w-full object-contain"
        />
      </span>
      <span>Continue with {isFacebook ? "Facebook" : "Google"}</span>
    </button>
  );
}

function SectionRule({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-[15px] leading-[24px] text-steel-gray">
      <span className="h-[2px] flex-1 bg-quantum-green/70" />
      <span>{label}</span>
      <span className="h-[2px] flex-1 bg-quantum-green/70" />
    </div>
  );
}

function PanelButton({
  children,
  active = false,
  disabled = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`min-h-[42px] rounded-[4px] border px-4 text-[15px] leading-[22px] transition-colors disabled:cursor-not-allowed disabled:opacity-55 ${
        active
          ? "border-quantum-green bg-quantum-green text-black"
          : "border-quantum-green/70 bg-white text-steel-gray hover:bg-quantum-green/10"
      }`}
    >
      {children}
    </button>
  );
}

export default function LiveDemoPanel() {
  const [mode, setMode] = useState<DemoMode>("welcome");
  const [session, setSession] = useState<DemoSession | null>(null);
  const [pendingAuth, setPendingAuth] = useState<PendingAuth | null>(null);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [marketingOptOut, setMarketingOptOut] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [encryptMode, setEncryptMode] = useState<EncryptMode>("text");
  const [encryptText, setEncryptText] = useState("");
  const [encryptFile, setEncryptFile] = useState<File | null>(null);
  const [decryptFile, setDecryptFile] = useState<File | null>(null);
  const [pageError, setPageError] = useState<string | null>(null);
  const [encryptError, setEncryptError] = useState<string | null>(null);
  const [decryptError, setDecryptError] = useState<string | null>(null);
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  const canUseGoogle = Boolean(demoApiUrl && googleClientId);
  const canUseFacebook = Boolean(demoApiUrl && facebookAppId);
  const isBusy = Boolean(pendingMessage);

  function resetToolState() {
    setEncryptText("");
    setEncryptFile(null);
    setDecryptFile(null);
    setEncryptError(null);
    setDecryptError(null);
  }

  function resetToWelcome(message?: string) {
    setMode("welcome");
    setSession(null);
    setPendingAuth(null);
    setRegistrationOpen(false);
    setMarketingOptOut(false);
    setAgreementChecked(false);
    setPendingMessage(null);
    resetToolState();
    setPageError(message || null);
  }

  function applyError(
    error: unknown,
    fallback: string,
    target: "page" | "encrypt" | "decrypt" = "page"
  ) {
    const message = error instanceof Error ? error.message : fallback;

    if (error instanceof DemoApiError && error.status === 440) {
      resetToWelcome("Your demo session expired. Please sign in again.");
      return;
    }

    if (target === "encrypt") {
      setEncryptError(message);
      return;
    }

    if (target === "decrypt") {
      setDecryptError(message);
      return;
    }

    setPageError(message);
  }

  function getProviderConfigError(provider: AuthProvider) {
    const missingVars = ["DEMO_SERVER_API_URL"];

    if (provider === "google" && !googleClientId) {
      missingVars.push("GOOGLE_API_ID");
    }

    if (provider === "facebook" && !facebookAppId) {
      missingVars.push("FACEBOOK_API_ID");
    }

    return `Native ${provider === "google" ? "Google" : "Facebook"} sign-in is not configured yet. Set ${missingVars.join(
      " and "
    )}.`;
  }

  async function requestGoogleProfile() {
    const originError = getGoogleOriginError();
    if (originError) {
      throw new Error(originError);
    }

    await loadScript("google-gsi-client", "https://accounts.google.com/gsi/client");

    const googleOauth = window.google?.accounts?.oauth2;
    if (!googleOauth?.initTokenClient) {
      throw new Error("Google sign-in is not available in this browser.");
    }

    return new Promise<ProviderProfile>((resolve, reject) => {
      const tokenClient = googleOauth.initTokenClient({
        client_id: googleClientId,
        scope: "profile email",
        ux_mode: "popup",
        callback: async (tokenResponse) => {
          if (!tokenResponse.access_token || tokenResponse.error) {
            reject(new Error("Google sign-in was cancelled."));
            return;
          }

          try {
            const response = await fetch(
              `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${encodeURIComponent(
                tokenResponse.access_token
              )}`
            );

            if (!response.ok) {
              throw new Error("Google profile lookup failed.");
            }

            const data = (await response.json()) as {
              email?: string;
              given_name?: string;
              family_name?: string;
              picture?: string;
            };

            if (!data.email) {
              throw new Error("Google did not return an email address.");
            }

            resolve({
              email: data.email,
              firstname: data.given_name || "",
              lastname: data.family_name || "",
              photo: data.picture,
              logintype: "g",
              token: tokenResponse.access_token,
            });
          } catch (error) {
            reject(error);
          }
        },
      });

      tokenClient.requestAccessToken({ prompt: "" });
    });
  }

  async function requestFacebookProfile() {
    const protocolError = getFacebookProtocolError();
    if (protocolError) {
      throw new Error(protocolError);
    }

    await loadScript("facebook-jssdk", "https://connect.facebook.net/en_US/sdk.js");

    if (!window.FB) {
      throw new Error("Facebook sign-in is not available in this browser.");
    }

    window.FB.init({
      appId: facebookAppId,
      cookie: false,
      xfbml: false,
      version: facebookApiVersion,
    });

    return new Promise<ProviderProfile>((resolve, reject) => {
      window.FB?.login(
        (loginResponse) => {
          const accessToken = loginResponse.authResponse?.accessToken;

          if (!accessToken) {
            reject(new Error("Facebook sign-in was cancelled."));
            return;
          }

          window.FB?.api(
            "/me",
            { fields: "first_name,last_name,email,name,picture" },
            (profileResponse) => {
              if (profileResponse.error?.message) {
                reject(new Error(profileResponse.error.message));
                return;
              }

              if (!profileResponse.email) {
                reject(new Error("Facebook did not return an email address."));
                return;
              }

              resolve({
                email: profileResponse.email,
                firstname: profileResponse.first_name || "",
                lastname: profileResponse.last_name || "",
                photo: profileResponse.picture?.data?.url,
                logintype: "f",
                token: accessToken,
              });
            }
          );
        },
        { scope: "public_profile,email" }
      );
    });
  }

  async function registerWithDemo(intent: AuthIntent, profile: ProviderProfile) {
    const response = await postJson<RegisterResponse>("register", {
      email: profile.email,
      firstname: profile.firstname,
      lastname: profile.lastname,
      logintype: profile.logintype,
      token: profile.token,
    });

    const pending: PendingAuth = {
      ...profile,
      userId: String(response.id),
    };
    const agreementId = response.agreement_id ? Number(response.agreement_id) : 0;

    if (agreementId > 0) {
      setSession({
        ...pending,
        agreementId: String(response.agreement_id),
      });
      setPendingAuth(null);
      setRegistrationOpen(false);
      setPageError(null);
      resetToolState();
      setMode("authenticated");
      return;
    }

    if (intent === "register") {
      setPendingAuth(pending);
      setRegistrationOpen(true);
      setPageError(null);
      return;
    }

    setPendingAuth(null);
    setPageError("You must register before using the live demo login flow.");
  }

  async function handleProviderAuth(provider: AuthProvider, intent: AuthIntent) {
    const providerConfigured = provider === "google" ? canUseGoogle : canUseFacebook;
    const providerLabel = provider === "google" ? "Google" : "Facebook";

    setPageError(null);
    setEncryptError(null);
    setDecryptError(null);

    if (!providerConfigured) {
      setPageError(getProviderConfigError(provider));
      return;
    }

    try {
      setPendingMessage(
        `${intent === "login" ? "Signing in" : "Registering"} with ${providerLabel}...`
      );

      const profile =
        provider === "google"
          ? await requestGoogleProfile()
          : await requestFacebookProfile();

      await registerWithDemo(intent, profile);
    } catch (error) {
      applyError(error, `${providerLabel} sign-in failed.`);
    } finally {
      setPendingMessage(null);
    }
  }

  async function finishSignup() {
    if (!pendingAuth) {
      return;
    }

    try {
      setPendingMessage("Finishing sign-up...");
      await postJson("subscription", {
        id: pendingAuth.userId,
        subscription: marketingOptOut ? "n" : "y",
        logintype: pendingAuth.logintype,
        token: pendingAuth.token,
      });
      setRegistrationOpen(false);
      setMode("agreement");
      setPageError(null);
    } catch (error) {
      applyError(error, "Could not finish sign-up.");
    } finally {
      setPendingMessage(null);
    }
  }

  async function acceptAgreement() {
    if (!pendingAuth) {
      return;
    }

    try {
      setPendingMessage("Accepting agreement...");
      const response = await postJson<AgreementResponse>("agreement", {
        id: pendingAuth.userId,
        accepted: "y",
        logintype: pendingAuth.logintype,
        token: pendingAuth.token,
      });

      setSession({
        ...pendingAuth,
        agreementId: String(response.id),
      });
      setPendingAuth(null);
      setAgreementChecked(false);
      setPageError(null);
      resetToolState();
      setMode("authenticated");
    } catch (error) {
      applyError(error, "Could not accept the live demo agreement.");
    } finally {
      setPendingMessage(null);
    }
  }

  async function declineAgreement() {
    if (!pendingAuth) {
      return;
    }

    try {
      setPendingMessage("Updating agreement...");
      await postJson("agreement", {
        id: pendingAuth.userId,
        accepted: "n",
        logintype: pendingAuth.logintype,
        token: pendingAuth.token,
      });
      setMode("declined");
      setPageError(null);
    } catch (error) {
      applyError(error, "Could not update the live demo agreement.");
    } finally {
      setPendingMessage(null);
    }
  }

  function handleEncryptFileChange(file: File | null) {
    setEncryptError(null);

    if (file && file.size > 2 * 1024 * 1024) {
      setEncryptFile(null);
      setEncryptError("File size must be smaller than 2MB.");
      return;
    }

    setEncryptFile(file);
  }

  async function encrypt() {
    if (!session) {
      return;
    }

    const data = new FormData();
    data.append("id", session.userId);
    data.append("agreement_id", session.agreementId);
    data.append("logintype", session.logintype);
    data.append("token", session.token);
    data.append("convert", "e");
    data.append("out", "binary");

    let downloadName = "encrypted.bin";

    if (encryptMode === "file") {
      if (!encryptFile) {
        return;
      }

      data.append("file", encryptFile);
      data.append("isFileUpload", "1");
      downloadName = `${encryptFile.name}.bin`;
    } else {
      const text = encryptText.trim();

      if (!text) {
        return;
      }

      const byteLength = new TextEncoder().encode(text).byteLength;
      if (byteLength > 2 * 1024 * 1024) {
        setEncryptError("Max 2MB is allowed.");
        return;
      }

      data.append("input", toHex(text));
      data.append("isFileUpload", "0");
    }

    try {
      setPendingMessage("Encrypting...");
      setEncryptError(null);
      const response = await postForm<ToolResponse>("tool", data);
      downloadBytes(toUint8Array(response.data), downloadName);
    } catch (error) {
      applyError(error, "Encryption failed.", "encrypt");
    } finally {
      setPendingMessage(null);
    }
  }

  async function decrypt() {
    if (!session || !decryptFile) {
      return;
    }

    const data = new FormData();
    data.append("id", session.userId);
    data.append("agreement_id", session.agreementId);
    data.append("logintype", session.logintype);
    data.append("token", session.token);
    data.append("convert", "d");
    data.append("out", "binary");
    data.append("file", decryptFile);
    data.append("isFileUpload", "1");

    try {
      setPendingMessage("Decrypting...");
      setDecryptError(null);
      const response = await postForm<ToolResponse>("tool", data);
      downloadBytes(
        toUint8Array(response.data),
        response.fileUploadedName || "decrypted.bin"
      );
    } catch (error) {
      applyError(error, "Decryption failed.", "decrypt");
    } finally {
      setPendingMessage(null);
    }
  }

  function renderProviderButtons(intent: AuthIntent) {
    return (
      <>
        <SsoButton
          provider="facebook"
          intent={intent}
          disabled={isBusy}
          onClick={() => handleProviderAuth("facebook", intent)}
        />
        <SsoButton
          provider="google"
          intent={intent}
          disabled={isBusy}
          onClick={() => handleProviderAuth("google", intent)}
        />
      </>
    );
  }

  function renderWelcome() {
    return (
      <>
        <LiveDemoTitle />
        <div className="flex flex-col gap-8">
          <BracketCard title="Registration">
            <div className="flex flex-col gap-3 items-center">
              {renderProviderButtons("register")}
            </div>
          </BracketCard>

          <BracketCard title="Already Registered?">
            <div className="flex flex-col gap-3 items-center">
              {renderProviderButtons("login")}
              <p className="max-w-[260px] text-center text-[12px] leading-[18px] text-steel-gray/80">
                Authentication stays on this page. Missing provider or demo API
                config will show an inline error here.
              </p>
            </div>
          </BracketCard>
        </div>
      </>
    );
  }

  function renderAgreement() {
    return (
      <div className="w-full max-w-[640px] rounded-[8px] border border-[#dfe6ea] bg-white p-6 shadow-[0_18px_50px_-34px_rgba(12,42,67,0.4)]">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-quantum-green">
          Live Demo Agreement
        </p>
        <h3 className="mt-2 text-[24px] font-medium leading-[34px] text-steel-gray">
          Review and accept the demo terms
        </h3>
        <div className="mt-5 max-h-[250px] overflow-y-auto rounded-[8px] border border-[#dfe6ea] bg-[#f8fbfc] p-4 text-[14px] leading-[22px] text-steel-gray">
          <p>
            Each IronCAP Live Demo account receives its own key material. Files
            encrypted in one account can only be decrypted from that same account.
          </p>
          <ul className="mt-4 ml-5 list-disc space-y-2 marker:text-quantum-green">
            <li>Use a valid Facebook or Google account to access the demo.</li>
            <li>Do not upload unlawful, abusive, or harmful content.</li>
            <li>The demo is provided as a public test environment.</li>
          </ul>
        </div>
        <label className="mt-5 flex items-start gap-3 text-[14px] leading-[22px] text-steel-gray">
          <input
            type="checkbox"
            checked={agreementChecked}
            disabled={isBusy}
            onChange={(event) => setAgreementChecked(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-lite-gray accent-quantum-green"
          />
          <span>I agree to continue into the IronCAP Live Demo.</span>
        </label>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            disabled={!agreementChecked || isBusy}
            onClick={acceptAgreement}
            className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-quantum-green bg-quantum-green px-5 text-[14px] font-medium text-black transition-colors hover:bg-quantum-green/80 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Accept and Continue
          </button>
          <button
            type="button"
            disabled={isBusy}
            onClick={declineAgreement}
            className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-[#dfe6ea] px-5 text-[14px] font-medium text-steel-gray transition-colors hover:bg-[#f8fbfc] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Decline
          </button>
        </div>
      </div>
    );
  }

  function renderDeclined() {
    return (
      <div className="w-full max-w-[640px] rounded-[8px] border border-[#dfe6ea] bg-white p-6">
        <h3 className="text-[24px] font-medium leading-[34px] text-quantum-green">
          Registration was not completed
        </h3>
        <p className="mt-2 text-[15px] leading-[24px] text-steel-gray">
          You need to accept the demo agreement before using the encryption and
          decryption tools.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <PanelButton active disabled={isBusy} onClick={() => setMode("agreement")}>
            Review Agreement
          </PanelButton>
          <PanelButton disabled={isBusy} onClick={() => resetToWelcome()}>
            Cancel
          </PanelButton>
        </div>
      </div>
    );
  }

  function renderAuthenticated() {
    const encryptEnabled =
      encryptMode === "file" ? Boolean(encryptFile) : encryptText.trim().length > 0;

    return (
      <div className="w-full max-w-[760px] rounded-[8px] border border-[#dfe6ea] bg-[#f8fbfc] p-5 shadow-[0_22px_70px_-46px_rgba(12,42,67,0.45)] sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-[30px] font-medium leading-[38px] text-steel-gray sm:text-[36px] sm:leading-[44px]">
              Welcome to IronCAP
              <sup className="text-[16px] align-super leading-none">™</sup>{" "}
              Live Demo
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[15px] leading-[22px] text-steel-gray sm:justify-end">
            <span className="break-all">{session?.email}</span>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] bg-quantum-green text-[12px] font-semibold text-black">
              {(session?.email || session?.logintype || "u").charAt(0)}
            </span>
            <button
              type="button"
              onClick={() => resetToWelcome()}
              className="ml-1 text-[12px] font-medium uppercase tracking-[0.12em] text-quantum-green hover:text-quantum-blue"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mt-7 space-y-7">
          <section className="space-y-4">
            <SectionRule label="Encryption" />
            <div className="grid gap-3 lg:grid-cols-[142px_minmax(0,1fr)_140px] lg:items-stretch">
              <div className="grid gap-2 content-start">
                <PanelButton
                  active={encryptMode === "text"}
                  disabled={isBusy}
                  onClick={() => {
                    setEncryptMode("text");
                    setEncryptFile(null);
                    setEncryptError(null);
                  }}
                >
                  Write Something
                </PanelButton>
                <PanelButton
                  active={encryptMode === "file"}
                  disabled={isBusy}
                  onClick={() => {
                    setEncryptMode("file");
                    setEncryptText("");
                    setEncryptError(null);
                  }}
                >
                  Upload a File
                </PanelButton>
              </div>
              {encryptMode === "text" ? (
                <textarea
                  value={encryptText}
                  disabled={isBusy}
                  onChange={(event) => {
                    setEncryptText(event.target.value);
                    setEncryptError(null);
                  }}
                  placeholder="Write something to encrypt"
                  className="min-h-[86px] resize-y rounded-[2px] border border-[#c7d2d8] bg-white px-4 py-3 text-[15px] leading-[22px] text-steel-gray outline-none transition-colors placeholder:text-steel-gray/70 focus:border-quantum-green focus:ring-1 focus:ring-quantum-green/40"
                />
              ) : (
                <div className="flex min-h-[86px] items-center rounded-[2px] border border-[#c7d2d8] bg-white px-4">
                  <input
                    type="file"
                    disabled={isBusy}
                    onChange={(event) =>
                      handleEncryptFileChange(event.target.files?.[0] || null)
                    }
                    className="w-full text-[15px] text-steel-gray file:mr-4 file:rounded-[2px] file:border file:border-[#9ba8b2] file:bg-white file:px-3 file:py-2 file:text-[14px] file:text-steel-gray"
                  />
                </div>
              )}
              <PanelButton active disabled={!encryptEnabled || isBusy} onClick={encrypt}>
                Encrypt &gt;
              </PanelButton>
            </div>
            {encryptError && (
              <p className="text-[13px] leading-[20px] text-[#c04b4b]">
                {encryptError}
              </p>
            )}
          </section>

          <section className="space-y-4">
            <SectionRule label="Decryption" />
            <div className="grid gap-3 lg:grid-cols-[142px_minmax(0,1fr)_140px] lg:items-stretch">
              <p className="text-[13px] leading-[19px] text-steel-gray">
                <span className="block text-quantum-green">Notes:</span>
                Only those files you encrypted previously can be decrypted here.
              </p>
              <div className="flex min-h-[92px] items-center rounded-[2px] border border-[#c7d2d8] bg-white px-4">
                <input
                  type="file"
                  disabled={isBusy}
                  onChange={(event) => {
                    setDecryptError(null);
                    setDecryptFile(event.target.files?.[0] || null);
                  }}
                  className="w-full text-[15px] text-steel-gray file:mr-4 file:rounded-[2px] file:border file:border-[#9ba8b2] file:bg-white file:px-3 file:py-2 file:text-[14px] file:text-steel-gray"
                />
              </div>
              <PanelButton active disabled={!decryptFile || isBusy} onClick={decrypt}>
                Decrypt &gt;
              </PanelButton>
            </div>
            {decryptError && (
              <p className="text-[13px] leading-[20px] text-[#c04b4b]">
                {decryptError}
              </p>
            )}
          </section>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={
          mode === "authenticated"
            ? "flex w-full flex-col lg:ml-8 lg:min-w-0 lg:flex-1 xl:ml-12"
            : "flex w-full flex-col lg:w-auto lg:shrink-0 lg:ml-12 xl:ml-[150px]"
        }
      >
        {mode === "welcome" && renderWelcome()}
        {mode === "agreement" && renderAgreement()}
        {mode === "declined" && renderDeclined()}
        {mode === "authenticated" && renderAuthenticated()}

        {(pendingMessage || pageError) && (
          <div className="mt-4 w-full max-w-[760px] rounded-[8px] border border-[#dfe6ea] bg-white px-5 py-4">
            {pendingMessage && (
              <p className="text-[14px] leading-[22px] text-steel-gray">
                {pendingMessage}
              </p>
            )}
            {pageError && (
              <p className="text-[14px] leading-[22px] text-[#c04b4b]">
                {pageError}
              </p>
            )}
          </div>
        )}
      </div>

      {registrationOpen && pendingAuth && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#09131d]/55 px-4">
          <div className="w-full max-w-[560px] rounded-[8px] bg-white p-6 shadow-[0_20px_60px_-20px_rgba(8,26,43,0.55)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-quantum-green">
                  Registration
                </p>
                <h3 className="mt-2 text-[24px] font-medium leading-[34px] text-steel-gray">
                  Complete your demo profile
                </h3>
                <p className="mt-2 text-[15px] leading-[24px] text-steel-gray">
                  Review the information returned by your social login before
                  proceeding to the demo agreement.
                </p>
              </div>
              <button
                type="button"
                disabled={isBusy}
                onClick={() => setRegistrationOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d6dde2] text-[22px] leading-none text-steel-gray transition-colors hover:bg-[#f6f8f9] disabled:cursor-not-allowed disabled:opacity-60"
              >
                x
              </button>
            </div>

            <div className="mt-6 grid gap-4">
              {[
                ["First Name", pendingAuth.firstname],
                ["Last Name", pendingAuth.lastname],
                ["Email", pendingAuth.email],
              ].map(([label, value]) => (
                <label key={label} className="grid gap-2">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                    {label}
                  </span>
                  <input
                    readOnly
                    value={value}
                    className="h-[46px] rounded-[4px] border border-[#d6dde2] bg-[#f8fbfc] px-4 text-[15px] text-steel-gray"
                  />
                </label>
              ))}
            </div>

            <label className="mt-5 flex items-start gap-3 text-[14px] leading-[22px] text-steel-gray">
              <input
                type="checkbox"
                checked={marketingOptOut}
                disabled={isBusy}
                onChange={(event) => setMarketingOptOut(event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-lite-gray accent-quantum-green"
              />
              <span>I do not want to receive marketing emails from IronCAP.</span>
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                disabled={isBusy}
                onClick={finishSignup}
                className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-quantum-green bg-quantum-green px-5 text-[14px] font-medium text-black transition-colors hover:bg-quantum-green/80 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Finish Signing Up
              </button>
              <button
                type="button"
                disabled={isBusy}
                onClick={() => setRegistrationOpen(false)}
                className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-[#dfe6ea] px-5 text-[14px] font-medium text-steel-gray transition-colors hover:bg-[#f8fbfc] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
