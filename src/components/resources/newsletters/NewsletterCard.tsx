import Link from "next/link";

interface NewsletterCardProps {
  year: string;
  month: string[];
  slug: string;
}

export function NewsletterCard({ year, month, slug }: NewsletterCardProps) {
  return (
    <article className="bg-white rounded-bl-[12px] rounded-tr-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] w-full max-w-[408px] px-8 py-8 flex flex-col">
      <h3 className="text-quantum-blue text-[30px] font-medium leading-[46px] mb-2">{year}</h3>
      <hr className="border-t border-[#dfe6ea] mb-4" />
      <p className="text-steel-gray text-[15px] flex-1">{month.join(", ")}</p>
      <Link
        href={`/resources/newsletters/${slug}`}
        className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline self-start mt-4"
      >
        View Newsletter
      </Link>
    </article>
  );
}

export default NewsletterCard;
