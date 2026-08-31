"use client";

import { FormEvent, useState } from "react";

const formFields: {
  name: keyof ContactFormValues;
  label: string;
  type: "text" | "email" | "tel";
  autoComplete?: string;
}[] = [
  { name: "firstName", label: "First Name*", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last Name*", type: "text", autoComplete: "family-name" },
  { name: "title", label: "Title*", type: "text", autoComplete: "organization-title" },
  { name: "company", label: "Company*", type: "text", autoComplete: "organization" },
  { name: "email", label: "Email*", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone*", type: "tel", autoComplete: "tel" },
];

type ContactFormValues = {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  title: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

type ContactEmailFormProps = {
  contactEmail: string;
  contactLabel: string;
};

export function ContactEmailForm({
  contactEmail,
  contactLabel,
}: ContactEmailFormProps) {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const missingField = Object.entries(values).find(([, value]) => value.trim().length === 0);

    if (missingField) {
      setError("Please complete all required fields before continuing.");
      return;
    }

    setError(null);

    const subject = `${values.firstName} ${values.lastName} - Contact Form Submission`;
    const body = [
      `First Name: ${values.firstName}`,
      `Last Name: ${values.lastName}`,
      `Title: ${values.title}`,
      `Company: ${values.company}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      "",
      "Message:",
      values.message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const updateValue = (name: keyof ContactFormValues, value: string) => {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <label key={field.name} className="block">
          <span className="sr-only">{field.label}</span>
          <input
            type={field.type}
            name={field.name}
            value={values[field.name]}
            placeholder={field.label}
            autoComplete={field.autoComplete}
            onChange={(event) => updateValue(field.name, event.target.value)}
            required
            className="w-full h-9 px-4 bg-white border border-[#dfe6ea] rounded-md text-steel-gray text-[15px] leading-[22px] placeholder:text-steel-gray/70 focus:outline-none focus:border-quantum-green focus:ring-1 focus:ring-quantum-green/40 transition-colors"
          />
        </label>
      ))}

      <label className="block">
        <span className="sr-only">Message*</span>
        <textarea
          name="message"
          value={values.message}
          placeholder="Message*"
          onChange={(event) => updateValue("message", event.target.value)}
          required
          rows={6}
          className="w-full px-4 py-3 bg-white border border-[#dfe6ea] rounded-md text-steel-gray text-[15px] leading-[22px] placeholder:text-steel-gray/70 focus:outline-none focus:border-quantum-green focus:ring-1 focus:ring-quantum-green/40 transition-colors resize-none"
        />
      </label>

      <p className="text-steel-gray text-[13px] leading-[20px]">
        This site opens your email application with a prefilled message to{" "}
        {contactLabel} at {contactEmail}.
      </p>

      {error ? (
        <p className="text-[#b64747] text-[13px] leading-[20px]" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-2">
        <button
          type="submit"
          className="inline-block border border-quantum-green/60 rounded-bl-lg rounded-tr-lg text-quantum-green text-[14px] font-medium uppercase tracking-widest px-8 py-3 hover:bg-quantum-green/10 transition-colors"
        >
          Go · · ·
        </button>
      </div>
    </form>
  );
}
