import { client } from "@/sanity/lib/client";
import {
  INVESTOR_LATEST_PRESENTATION_QUERY,
  INVESTOR_RECENT_EVENTS_QUERY,
  INVESTOR_FINANCIAL_RESULTS_QUERY,
  INVESTOR_VIDEOS_FEATURED_QUERY,
} from "@/sanity/lib/queries";
import { Button } from "@/components/ui/button";
import { Bottom } from "@/components/resources/Bottom";

type RelevantLink = { _key: string; label: string; linkType: string | null; url: string | null };

type Presentation = { _id: string; date: string; description: string; isFeatured: boolean; relevantLinks: RelevantLink[] | null };
type PressRelease  = { _id: string; date: string; description: string; relevantLinks: RelevantLink[] | null };
type FinancialResult = { _id: string; description: string; relevantLinks: RelevantLink[] | null };
type InvestorVideo = { _id: string; title: string; description: string; link: string; isFeatured: boolean };

function formatIsoDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function toEmbedUrl(url: string): { type: "iframe" | "video"; src: string } {
  // youtube.com/watch?v=ID or youtu.be/ID  →  embed
  const ytWatch = url.match(/(?:youtube\.com\/watch\?.*v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (ytWatch) return { type: "iframe", src: `https://www.youtube.com/embed/${ytWatch[1]}` };

  // already an embed URL
  if (url.includes("youtube.com/embed/") || url.includes("player.vimeo.com")) {
    return { type: "iframe", src: url };
  }

  // direct file
  return { type: "video", src: url };
}

function VideoEmbed({ src, title }: { src: string; title: string }) {
  const { type, src: embedSrc } = toEmbedUrl(src);
  const cls = "absolute inset-0 w-full h-full rounded-md";

  if (type === "iframe") {
    return (
      <iframe
        className={cls}
        src={embedSrc}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <video
      className={`${cls} object-cover`}
      src={embedSrc}
      controls
      preload="metadata"
      title={title}
    />
  );
}

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
      className={`flex flex-col md:flex-row items-start md:items-center py-4 gap-1 md:gap-0 ${isLast ? "" : "border-b border-[#dfe6ea]"}`}
    >
      {cells.map((cell, i) => (
        <div key={i} className={cell.width}>
          <p className="text-steel-gray text-[15px] leading-[24px]">
            {cell.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function RelevantLinks({ links, withPlayIcon = false }: { links: RelevantLink[]; withPlayIcon?: boolean }) {
  return (
    <span className="inline-flex flex-col gap-1">
      {links.map((link, i) => (
        <span key={link._key} className="inline-flex items-center gap-2">
          {withPlayIcon && i === 0 && (
            <span
              aria-hidden
              className="inline-block w-[16px] h-[16px] rounded-full border-2 border-quantum-green relative shrink-0"
            >
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0"
                style={{
                  borderLeft: "5px solid #79c99c",
                  borderTop: "3px solid transparent",
                  borderBottom: "3px solid transparent",
                }}
              />
            </span>
          )}
          <a
            href={link.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-quantum-green transition-colors"
          >
            {link.label}
          </a>
        </span>
      ))}
    </span>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default async function InvestorRelations() {
  const [presentations, pressReleases, financialResults, featuredVideos] =
    await Promise.all([
      client.fetch<Presentation[]>(INVESTOR_LATEST_PRESENTATION_QUERY),
      client.fetch<PressRelease[]>(INVESTOR_RECENT_EVENTS_QUERY),
      client.fetch<FinancialResult[]>(INVESTOR_FINANCIAL_RESULTS_QUERY),
      client.fetch<InvestorVideo[]>(INVESTOR_VIDEOS_FEATURED_QUERY),
    ]);

  const featuredVideo = featuredVideos[0] ?? null;

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

          {featuredVideo && (
            <div className="bg-gradient-to-r from-[#141313] to-[#141313]/0 rounded-[17px] px-6 md:px-6 md:px-[95px] py-10 md:py-14 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="flex-1 md:max-w-[414px] flex flex-col gap-2 md:pt-6">
                <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px] mb-2">
                  Featured Video
                </h2>
                <p className="text-white text-[15px] leading-[24px]">
                  {featuredVideo.title}
                </p>
                <p className="text-white text-[15px] leading-[24px]">
                  {featuredVideo.description}
                </p>
              </div>

              <div className="relative w-full md:w-[540px] h-[220px] md:h-[303px] shrink-0">
                <VideoEmbed src={featuredVideo.link} title={featuredVideo.title} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── Latest Presentation ─── */}
      <SectionTitle>Latest Presentation</SectionTitle>
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          <TableHeader cols={tableCols} />
          {presentations.map((row, i) => (
            <TableRow
              key={row._id}
              isLast={i === presentations.length - 1}
              cells={[
                { content: row.date, width: "w-[228px] shrink-0" },
                { content: row.description, width: "w-[316px] shrink-0" },
                {
                  content: <RelevantLinks links={row.relevantLinks ?? []} />,
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
              key={row._id}
              isLast={i === pressReleases.length - 1}
              cells={[
                { content: formatIsoDate(row.date), width: "w-[228px] shrink-0" },
                { content: row.description, width: "w-[316px] shrink-0" },
                {
                  content: (
                    <RelevantLinks
                      links={row.relevantLinks ?? []}
                      withPlayIcon={i === 0}
                    />
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
            or +1 800 668-2185 (US/Canada), or email{" "}
            <a
              href="mailto:investorrelations@01com.com"
              className="text-quantum-green hover:underline"
            >
              investorrelations@01com.com
            </a>{" "}
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
          {financialResults.map((row) => (
            <div key={row._id} className="flex flex-col md:flex-row gap-4 md:gap-16 py-4 border-b border-[#dfe6ea] last:border-0">
              <p className="text-steel-gray text-[15px] leading-[24px] w-[228px] shrink-0">
                {row.description}
              </p>
              <div className="flex flex-col gap-1">
                {(row.relevantLinks ?? []).map((link: RelevantLink) => (
                  <a
                    key={link._key}
                    href={link.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-gray text-[15px] leading-[24px] hover:text-quantum-green transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
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
        <Bottom />
      </section>
    </main>
  );
}
