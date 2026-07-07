export type DocumentItem = {
  /**
   * Title of the document. Plain text. The component will visually superscript
   * any literal "™" character so designers don't need to embed JSX in data.
   */
  title: string;
  href?: string;
  /** Optional override icon for this row (defaults to download arrow). */
  icon?: React.ReactNode;
};

export type DocumentsCardData = {
  title: string;
  items: DocumentItem[];
};

interface DocumentsCardProps {
  data: DocumentsCardData;
  className?: string;
}

/* ── Default download icon (right-pointing arrow into tray) ───────── */
function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/* ── Render "IronCAP™ ..." with a small superscript ™ ────────────── */
function renderTitle(title: string) {
  return title.split(/(™)/g).map((part, i) =>
    part === "™" ? (
      <sup key={i} className="text-[9.675px]">
        ™
      </sup>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/**
 * DocumentsCard
 * ─────────────
 * White card listing downloadable resources (User Guides, Downloads, FAQs).
 * Each row is a link with an icon, separated by horizontal dividers.
 */
export function DocumentsCard({ data, className = "" }: DocumentsCardProps) {
  return (
    <article
      className={`bg-white w-full max-w-[408px] mx-auto h-full p-6 sm:p-8 sm:pt-9 shadow-sm flex flex-col ${className}`}
    >
      <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-4 sm:mb-6">
        {data.title}
      </h3>

      <ul className="flex flex-col">
        {data.items.map((item, i) => (
          <li
            key={i}
            className={`flex items-start sm:items-center justify-between gap-3 sm:gap-4 py-4 ${
              i === 0 ? "pt-0" : ""
            } ${
              i < data.items.length - 1 ? "border-b border-[#dfe6ea]" : ""
            }`}
          >
            {item.href ? (
              <>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-gray text-[15px] leading-[24px] hover:text-quantum-blue transition-colors flex-1 min-w-0"
                >
                  {renderTitle(item.title)}
                </a>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.title}`}
                  className="text-quantum-green shrink-0 flex items-center justify-center hover:text-quantum-blue transition-colors"
                >
                  {item.icon ?? <DownloadIcon />}
                </a>
              </>
            ) : (
              <>
                <span className="text-steel-gray text-[15px] leading-[24px] flex-1 min-w-0">
                  {renderTitle(item.title)}
                </span>
                <span
                  aria-hidden
                  className="text-quantum-green/40 shrink-0 flex items-center justify-center"
                >
                  {item.icon ?? <DownloadIcon />}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default DocumentsCard;
