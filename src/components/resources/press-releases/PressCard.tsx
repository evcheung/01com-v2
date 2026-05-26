export type PressCardData = {
  date: string;
  description: string;
  link?: string;
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
  return (
    <article
      className={`bg-white w-[408px] h-[201px] p-8 flex flex-col gap-2 shadow-sm ${className}`}
    >
      <p className="text-steel-gray text-[15px] leading-[24px]">{new Date(item.date).toDateString()}</p>
      <p className="text-steel-gray text-[15px] leading-[24px] flex-1 line-clamp-3">
        {item.description}
      </p>
      <a
        href={item.link}
        className="text-quantum-blue text-[12px] font-medium leading-[24px] uppercase tracking-wider hover:underline mt-auto"
      >
        Read Article
      </a>
    </article>
  );
}

export default PressCard;
