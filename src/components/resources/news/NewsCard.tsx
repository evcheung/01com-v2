interface NewsCardProps {
  date: string;
  title: string;
  href?: string;
}

export const NewsCard = ({ date, title, href = "#" }: NewsCardProps) => {
  return (
    <article className="bg-white rounded-bl-[12px] rounded-tr-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] w-full max-w-[408px] min-h-[201px] px-8 py-8 flex flex-col">
      <p className="text-steel-gray text-[13px] leading-[20px] mb-3">{date}</p>
      <h3 className="text-[#2b2f38] text-[15px] leading-[22px] font-normal mb-6 flex-1">
        {title}
      </h3>
      <a
        href={href}
        className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline self-start"
      >
        Read Article
      </a>
    </article>
  );
};

export default NewsCard;
