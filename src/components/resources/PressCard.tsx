export type PressCardData = {
  /** Headline / title of the press release */
  title: string;
  /** Display date (already formatted, e.g. "March 19, 2026") */
  date: string;
  /** Link to the full article */
  href: string;
  /** Optional CTA label (defaults to "Read Article") */
  cta?: string;
};

interface PressCardProps {
  item: PressCardData;
  className?: string;
}

/**
 * PressCard
 * ─────────
 * White card used in resource listings (Press Releases, News, etc.).
 * Designed to be data-driven so it can be fed by a CMS such as Sanity.
 */
export function PressCard({ item, className = "" }: PressCardProps) {
  const cta = item.cta ?? "Read Article";

  return (
    <article
      className={`bg-white w-[408px] h-[201px] p-8 flex flex-col gap-2 shadow-sm ${className}`}
    >
      <p className="text-steel-gray text-[15px] leading-[24px]">{item.date}</p>
      <p className="text-steel-gray text-[15px] leading-[24px] flex-1 line-clamp-3">
        {item.title}
      </p>
      <a
        href={item.href}
        className="text-quantum-blue text-[12px] font-medium leading-[24px] uppercase tracking-wider hover:underline mt-auto"
      >
        {cta}
      </a>
    </article>
  );
}

export default PressCard;
