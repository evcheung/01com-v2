import { Suspense } from "react";

import { Bottom } from "@/components/resources/Bottom";
import { ContactDepartmentSection } from "@/components/contact/ContactDepartmentSection";
/* ── Data ─────────────────────────────────────────────────────────── */
const departmentButtons: { label: string; email: string }[] = [
  { label: "General Inquiries", email: "01com@01com.com" },
  { label: "Sales/VARs", email: "sales@01com.com" },
  { label: "Investor Relations", email: "ir@01com.com" },
  { label: "Technical Support", email: "help@01com.com" },
  { label: "Marketing", email: "marketing@01com.com" },
  { label: "Customer Service", email: "customerservice@01com.com" },
  { label: "Human resources", email: "hr@01com.com" },
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
        <Suspense fallback={null}>
          <ContactDepartmentSection departmentButtons={departmentButtons} />
        </Suspense>
      </section>

      {/* ─── Learn More CTA ─── */}
      <section className="bg-white pt-10 pb-14 flex justify-center">
        <Bottom compact />
      </section>
    </main>
  );
}
