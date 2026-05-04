import { Button } from "@/components/ui/button";

/* ── Data ─────────────────────────────────────────────────────────── */
const departmentButtons: { label: string; href: string }[] = [
  { label: "Sales/VARs", href: "#sales" },
  { label: "Investor Relations", href: "#investor-relations" },
  { label: "Technical Support", href: "#technical-support" },
  { label: "Marketing", href: "#marketing" },
  { label: "Customer Service", href: "#customer-service" },
  { label: "Human resources", href: "#human-resources" },
];

const formFields: {
  name: string;
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

/* ── Page ─────────────────────────────────────────────────────────── */
export default function Contact() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ─── Page Title ─── */}
      <section className="bg-black flex items-center px-6 md:px-24 min-h-[196px]">
        <h1 className="text-white text-[32px] md:text-[50px] font-medium leading-[50px]">
          Contact
        </h1>
      </section>

      {/* ─── Intro ─── */}
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] pt-16 pb-10">
          <p className="text-steel-gray text-[18px] leading-[28px] max-w-[1129px]">
            We love to hear from our customers or partners. Call or email us
            with your questions or comments!
          </p>
        </div>
      </section>

      {/* ─── Two Column: Contact Info + Form ─── */}
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] pb-20 flex flex-col md:flex-row gap-8 items-start">
          {/* Left Column - centered in remaining space */}
          <aside className="flex-1 flex flex-col gap-6 items-center">
            {/* Phone block */}
            <div className="flex items-start gap-4">
              {/* Phone icon */}
              <span
                aria-hidden
                className="shrink-0 w-[34px] h-[40px] flex items-center justify-center text-quantum-green"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+18006682185"
                  className="text-lite-gray text-[20px] font-medium leading-[34px] break-words hover:text-quantum-green transition-colors"
                >
                  1 800 668-2185
                </a>
                <a
                  href="#live-chat"
                  className="inline-flex items-center gap-2 text-lite-gray text-[20px] font-medium leading-[34px] break-words hover:text-quantum-green transition-colors"
                >
                  <span
                    aria-hidden
                    className="inline-flex w-7 h-7 items-center justify-center text-quantum-green"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </span>
                  Live Chat
                </a>
              </div>
            </div>

            {/* Department buttons */}
            <div className="flex flex-col gap-3 mt-2">
              {departmentButtons.map((b) => (
                <Button
                  key={b.label}
                  text={b.label}
                  url={b.href}
                  border="border-quantum-green/60"
                  textColor="text-quantum-green"
                  hoverBg="hover:bg-quantum-green/10"
                />
              ))}
            </div>

            {/* Address */}
            <address className="not-italic mt-4">
              <p className="text-quantum-green text-[20px] font-medium leading-[34px] break-words mb-0">01 Quantum</p>
              <p className="text-steel-gray text-[15px] font-normal leading-[24px] break-words">789 Don Mills Road, Suite #700</p>
              <p className="text-steel-gray text-[15px] font-normal leading-[24px] break-words">Toronto, Ontario, M3C 1T5</p>
              <p className="text-steel-gray text-[15px] font-normal leading-[24px] break-words">Canada</p>
              <p className="text-quantum-green text-[20px] font-medium leading-[34px] break-words mt-4">Office Hours</p>
              <p className="text-steel-gray text-[15px] font-normal leading-[24px] break-words">Monday – Friday</p>
              <p className="text-steel-gray text-[15px] font-normal leading-[24px] break-words">9 am to 6 pm EST</p>
            </address>
          </aside>

          {/* Contact Form */}
          <div className="w-full md:w-[705px] md:min-h-[879px] shrink-0 bg-gradient-to-br from-[#f2f6f7] to-white rounded-[17px] p-8 md:p-12 shadow-sm">
            <p className="text-steel-gray text-[20px] leading-[32px] max-w-[446px] mb-8">
              Contact us to receive updates, white papers, brochures, articles
              or to answer specific questions.
            </p>

            <form className="flex flex-col gap-4" action="#" method="post">
              {formFields.map((field) => (
                <label key={field.name} className="block">
                  <span className="sr-only">{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    autoComplete={field.autoComplete}
                    required
                    className="w-full h-9 px-4 bg-white border border-[#dfe6ea] rounded-md text-steel-gray text-[15px] leading-[22px] placeholder:text-steel-gray/70 focus:outline-none focus:border-quantum-green focus:ring-1 focus:ring-quantum-green/40 transition-colors"
                  />
                </label>
              ))}

              <label className="block">
                <span className="sr-only">Message*</span>
                <textarea
                  name="message"
                  placeholder="Message*"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-[#dfe6ea] rounded-md text-steel-gray text-[15px] leading-[22px] placeholder:text-steel-gray/70 focus:outline-none focus:border-quantum-green focus:ring-1 focus:ring-quantum-green/40 transition-colors resize-none"
                />
              </label>

              <div className="mt-2">
                <button
                  type="submit"
                  className="inline-block border border-quantum-green/60 rounded-bl-lg rounded-tr-lg text-quantum-green text-[14px] font-medium uppercase tracking-widest px-8 py-3 hover:bg-quantum-green/10 transition-colors"
                >
                  Go · · ·
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Learn More CTA ─── */}
      <section className="bg-white py-16 flex justify-center">
        <Button
          text="LEARN MORE ABOUT 01 QUANTUM PRODUCTS · · ·"
          url="/products"
          border="border-quantum-green/60"
          textColor="text-quantum-green"
          hoverBg="hover:bg-quantum-green/10"
        />
      </section>
    </main>
  );
}
