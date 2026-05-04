import { Button } from "@/components/ui/button";
import {
  DocumentsCard,
  type DocumentsCardData,
} from "@/components/resources/documents/DocumentsCard";
import Image from "next/image";

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

/* ── Page ─────────────────────────────────────────────────────────── */
export default function ResourcesDocuments() {
  return (
    <>
      {/* ─── Content ─── */}
      <section className="bg-[#f5f6f8] py-16">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
          {/* Header row */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
              Documents
            </h2>
            <div className="flex-1 h-px bg-lite-gray/60" />
            <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
              <Image
                src="/resources_assets/news_i.svg"
                alt=""
                aria-hidden="true"
                className="object-contain"
                width={64}
                height={64}
              />
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8 items-stretch auto-rows-fr">
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
              Call us to find out how to transform your business or your product
              offerings to be Quantum-Safe..
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
    </>
  );
}
