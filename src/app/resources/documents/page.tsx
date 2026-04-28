import { Button } from "@/components/ui/button";
import {
  DocumentsCard,
  type DocumentsCardData,
} from "@/components/resources/DocumentsCard";

/* ── Data ─────────────────────────────────────────────────────────── */
const cards: DocumentsCardData[] = [
  {
    title: "User Guides",
    items: [
      { title: "IronCAP XMail™ (FREE Personal Usage)", href: "#" },
      { title: "IronCAP XMail™ (Business Usage)", href: "#" },
      { title: "IronCAP XMail™ Tutorial", href: "#" },
      { title: "IronCAP™ InTouch", href: "#" },
      { title: "IronCAP™ OnCall", href: "#" },
    ],
  },
  {
    title: "Downloads",
    items: [
      { title: "IronCAP™ XMail (FREE Personal Usage)", href: "#" },
      { title: "IronCAP™ XMail (Business Usage)", href: "#" },
      { title: "IronCAP™ Co-Branding Guideline", href: "#" },
    ],
  },
  {
    title: "FAQs",
    items: [
      { title: "IronCAP™", href: "#" },
      { title: "IronCAP™ Key (coming soon)", href: "#" },
      { title: "IronCAP™ Toolkits", href: "#" },
      { title: "IronCAP™ InTouch", href: "#" },
      { title: "IronCAP™ OnCall", href: "#" },
      { title: "General Post-Quantum Security", href: "#" },
    ],
  },
];

/* ── Search / filter icon ────────────────────────────────────────── */
function SearchIcon() {
  return (
    <button
      type="button"
      aria-label="Search documents"
      className="w-[49px] h-[49px] rounded-full border border-quantum-blue/40 flex items-center justify-center text-quantum-blue hover:bg-quantum-blue/10 transition-colors"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function ResourcesDocuments() {
  return (
    <>
      {/* ─── Content ─── */}
      <section className="bg-gradient-to-l from-[#f2f6f7] via-white to-[#f2f6f7] py-12">
        <div className="max-w-[1512px] mx-auto px-[95px]">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
              Documents
            </h2>
            <SearchIcon />
          </div>

          {/* Divider */}
          <hr className="border-t border-[#dfe6ea] mb-10" />

          {/* Cards grid */}
          <div className="grid grid-cols-3 gap-x-7 gap-y-8 items-stretch auto-rows-fr">
            {cards.map((c) => (
              <DocumentsCard key={c.title} data={c} />
            ))}
          </div>

          {/* ─── Support section ─── */}
          <div className="mt-16 max-w-[1230px]">
            <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-2">
              Support
            </h3>
            <p className="text-steel-gray text-[15px] leading-[24px]">
              Contact our knowledgeable staff anytime for immediate assistance.
              Whether you need technical support while operating one of our
              programs or have questions regarding pricing or features of our
              product offering, we are available at your convenience. For
              pre-sales support, our product specialists will recommend you the
              appropriate solutions based on your industry or personal needs.
              Call us to find out how to transform your business or your
              product offerings to be Quantum-Safe..
            </p>

            <div className="mt-6">
              <Button
                text="CONTACT · · ·"
                url="/contact"
                border="border-quantum-green/60"
                textColor="text-quantum-green"
                hoverBg="hover:bg-quantum-green/10"
              />
            </div>
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
    </>
  );
}
