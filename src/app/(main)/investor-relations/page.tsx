import { Button } from "@/components/ui/button";
import Image from "next/image";

/* ── Data ─────────────────────────────────────────────────────────── */
const presentations = [
  {
    date: "February 2026",
    description: "Winter 2026 Investor Deck",
    link: "Open",
    href: "#",
  },
];

const pressReleases = [
  {
    date: "March 19, 2026",
    description: "01 reports fiscal Q1 2026",
    link: { label: "Read Press Release", href: "#" },
  },
  {
    date: "January 22, 2026",
    description: "01 reports fiscal Q4 2025",
    link: { label: "Read Press Release", href: "#" },
  },
  {
    date: "September 18, 2025",
    description: "01 reports fiscal Q3 2025",
    link: { label: "Read Press Release", href: "#" },
  },
  {
    date: "June 19, 2025",
    description: "01 reports fiscal Q2 2025",
    link: { label: "Read Press Release", href: "#" },
  },
];

const financialResults = [
  {
    date: "Latest Results 01 2026",
    link: { label: "Read Press Release", href: "#" },
  },
];

/* ── Reusable bits ────────────────────────────────────────────────── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-l from-[#f2f6f7] via-white to-[#f2f6f7] py-7">
      <div className="max-w-[1512px] mx-auto px-6 md:px-6 md:px-[95px]">
        <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
          {children}
        </h2>
      </div>
    </div>
  );
}

function TableHeader({
  cols,
}: {
  cols: { label: string; width: string }[];
}) {
  return (
    <div className="hidden md:flex border-b border-[#dfe6ea] pb-3">
      {cols.map((c, i) => (
        <div key={i} className={c.width}>
          <p className="text-quantum-green text-[20px] font-medium leading-[34px]">
            {c.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function TableRow({
  cells,
  isLast = false,
}: {
  cells: { content: React.ReactNode; width: string }[];
  isLast?: boolean;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row py-4 gap-1 md:gap-0 ${isLast ? "" : "border-b border-[#dfe6ea]"}`}
    >
      {cells.map((cell, i) => (
        <div key={i} className={`md:${cell.width}`}>
          <p className="text-steel-gray text-[15px] leading-[24px]">
            {cell.content}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function InvestorRelations() {
  const tableCols = [
    { label: "Date", width: "w-[228px] shrink-0" },
    { label: "Description", width: "w-[316px] shrink-0" },
    { label: "Relevant Links", width: "flex-1" },
  ];

  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ─── Page Title ─── */}
      <section className="bg-black flex items-center px-6 md:px-24 min-h-[196px]">
        <h1 className="text-white text-[28px] md:text-[50px] font-medium leading-[50px]">
          Investor Relations
        </h1>
      </section>

      {/* ─── Featured Video / Intro ─── */}
      <section className="bg-black">
        <div className="max-w-[1512px] mx-auto px-6 md:px-6 md:px-[95px] pt-4 pb-16 flex flex-col gap-10">
          <p className="text-white text-[15px] leading-[24px] max-w-[1129px]">
            01 Quantum&apos;s common shares are listed on the TSX Venture
            Exchange (TSX-V) under the symbol &lsquo;ONE&rsquo; and quoted on
            the OTCQB market under the symbol &lsquo;OONEF&rsquo;.
          </p>

          {/* Callout box */}
          <div className="bg-gradient-to-r from-[#141313] to-[#141313]/0 rounded-[17px] px-6 md:px-6 md:px-[95px] py-10 md:py-14 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Left column - text */}
            <div className="flex-1 md:max-w-[414px] flex flex-col gap-2 md:pt-6">
              <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px] mb-2">
                Featured Video
              </h2>
              <p className="text-white text-[15px] leading-[24px]">
                Andrew Cheung, CEO 01 Quantum Inc. featured by Quantum Economy
                Podcast
              </p>
              <p className="text-white text-[15px] leading-[24px]">
                01 Quantum talks about its Quantum-safe PQC solutions
              </p>
            </div>

            {/* Right column - video */}
            <div className="relative w-full md:w-[540px] h-[220px] md:h-[303px] shrink-0">
              <Image
                width={540}
                height={303}
                src="/investor_relations_assets/featured-video.png"
                alt="Featured video"
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              />
              <button
                type="button"
                aria-label="Play featured video"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/90 hover:bg-white transition-colors flex items-center justify-center shadow-lg"
              >
                <span
                  className="block w-0 h-0 ml-1"
                  style={{
                    borderLeft: "18px solid #79c99c",
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Latest Presentation ─── */}
      <SectionTitle>Latest Presentation</SectionTitle>
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          <TableHeader cols={tableCols} />
          {presentations.map((row, i) => (
            <TableRow
              key={i}
              isLast={i === presentations.length - 1}
              cells={[
                { content: row.date, width: "w-[228px] shrink-0" },
                { content: row.description, width: "w-[316px] shrink-0" },
                {
                  content: (
                    <a
                      href={row.href}
                      className="hover:text-quantum-green transition-colors"
                    >
                      {row.link}
                    </a>
                  ),
                  width: "flex-1",
                },
              ]}
            />
          ))}
        </div>
      </section>

      {/* ─── Press Releases ─── */}
      <SectionTitle>Press Releases</SectionTitle>
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          <TableHeader cols={tableCols} />
          {pressReleases.map((row, i) => (
            <TableRow
              key={i}
              isLast={i === pressReleases.length - 1}
              cells={[
                { content: row.date, width: "w-[228px] shrink-0" },
                { content: row.description, width: "w-[316px] shrink-0" },
                {
                  content: (
                    <span className="inline-flex items-center gap-2">
                      {i === 0 && (
                        <span
                          aria-hidden
                          className="inline-block w-[16px] h-[16px] rounded-full border-2 border-quantum-green relative"
                        >
                          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0"
                            style={{
                              borderLeft: "5px solid #79c99c",
                              borderTop: "3px solid transparent",
                              borderBottom: "3px solid transparent",
                            }}
                          />
                        </span>
                      )}
                      <a
                        href={row.link.href}
                        className="hover:text-quantum-green transition-colors"
                      >
                        {i === 0 ? "Webinar Replay" : row.link.label}
                      </a>
                    </span>
                  ),
                  width: "flex-1",
                },
              ]}
            />
          ))}
        </div>
      </section>

      {/* ─── Information Request ─── */}
      <SectionTitle>Information Request</SectionTitle>
      <section className="bg-gradient-to-l from-[#f2f6f7] via-white to-[#f2f6f7]">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] pb-12">
          <p className="text-steel-gray text-[15px] leading-[24px] max-w-[956px]">
            For more information about 01 Quantum contact us at +1 905 795-2888
            or +1 800 668-2185 (US/Canada), or email
            {" "}
            <a
              href="mailto:investorrelations@01com.com"
              className="text-quantum-green hover:underline"
            >
              investorrelations@01com.com
            </a>
            {" "}
            with any comments or suggestions.
          </p>
        </div>
      </section>

      {/* ─── Stock Quote ─── */}
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-12 flex flex-col gap-6">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
            Stock Quote
          </h2>
          <div>
            <Button
              text="SEE  STOCK QUOTE"
              url="#"
              border="border-quantum-green/60"
              textColor="text-quantum-green"
              hoverBg="hover:bg-quantum-green/10"
            />
          </div>
        </div>
      </section>

      {/* ─── Financial Results ─── */}
      <SectionTitle>Financial Results</SectionTitle>
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          {financialResults.map((row, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-16 py-4">
              <p className="text-steel-gray text-[15px] leading-[24px] w-[228px] shrink-0">
                {row.date}
              </p>
              <a
                href={row.link.href}
                className="text-steel-gray text-[15px] leading-[24px] hover:text-quantum-green transition-colors"
              >
                {row.link.label}
              </a>
            </div>
          ))}
          <p className="text-steel-gray text-[15px] leading-[24px] mt-8 max-w-[956px]">
            For further information on the company&apos;s financial results,
            please visit{" "}
            <a
              href="https://www.sedar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-quantum-green transition-colors"
            >
              www.sedar.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* ─── Learn More CTA ─── */}
      <section className="bg-white py-16 flex justify-center">
        <Button
          text=" LEARN MORE ABOUT 01 QUANTUM PRODUCTS"
          url="/products/ironcap-engine"
          border="border-quantum-green/60"
          textColor="text-quantum-green"
          hoverBg="hover:bg-quantum-green/10"
        />
      </section>
    </main>
  );
}
