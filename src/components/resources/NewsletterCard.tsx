export type NewsletterIssue = {
  /** Display label, e.g. "January", "August" */
  month: string;
  /** Optional issue numbers (most recent → oldest). Rendered as "#3 #2 #1". */
  issues?: number[];
  /** Optional link for the row (defaults to "#"). */
  href?: string;
};

export type NewsletterYearData = {
  year: number;
  /** List of month entries. Order is preserved as supplied. */
  entries: NewsletterIssue[];
};

interface NewsletterCardProps {
  data: NewsletterYearData;
  className?: string;
}

/**
 * NewsletterCard
 * ──────────────
 * Resource card listing newsletters published during a given year.
 * Designed to be CMS-driven (Sanity).
 */
export function NewsletterCard({ data, className = "" }: NewsletterCardProps) {
  const { year, entries } = data;

  // Split entries into two columns when there are more than ~5 rows so the
  // layout matches the design where months wrap to a second column.
  const useTwoColumns = entries.length > 5;
  const mid = Math.ceil(entries.length / 2);
  const left = useTwoColumns ? entries.slice(0, mid) : entries;
  const right = useTwoColumns ? entries.slice(mid) : [];

  const renderEntry = (entry: NewsletterIssue, key: number) => (
    <li key={key} className="leading-[24px]">
      <a
        href={entry.href ?? "#"}
        className="text-steel-gray hover:text-quantum-blue transition-colors"
      >
        {entry.month}
        {entry.issues && entry.issues.length > 0 && (
          <span className="ml-3 inline-flex gap-3 text-steel-gray">
            {entry.issues.map((n) => (
              <span key={n}>#{n}</span>
            ))}
          </span>
        )}
      </a>
    </li>
  );

  return (
    <article
      className={`bg-white w-[408px] h-full p-6 pt-7 shadow-sm flex flex-col gap-3 ${className}`}
    >
      <h3 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
        {year}
      </h3>
      <hr className="border-t border-[#dfe6ea]" />

      {useTwoColumns ? (
        <div className="grid grid-cols-2 gap-x-6 text-[15px]">
          <ul className="flex flex-col gap-1">
            {left.map((e, i) => renderEntry(e, i))}
          </ul>
          <ul className="flex flex-col gap-1">
            {right.map((e, i) => renderEntry(e, i + mid))}
          </ul>
        </div>
      ) : (
        <ul className="flex flex-col gap-1 text-[15px]">
          {left.map((e, i) => renderEntry(e, i))}
        </ul>
      )}
    </article>
  );
}

export default NewsletterCard;
