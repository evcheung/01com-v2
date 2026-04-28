interface RewardCardProps {
  date: string;
  description: string;
  image: string;
  imageAlt?: string;
  href?: string;
}

export const RewardCard = ({
  date,
  description,
  image,
  imageAlt = "",
  href = "#",
}: RewardCardProps) => {
  return (
    <article className="bg-white rounded-bl-[12px] rounded-tr-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] w-full max-w-[408px] min-h-[291px] px-8 py-8 flex flex-col">
      <div className="h-[84px] flex items-center mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          className="max-h-[84px] w-auto object-contain"
        />
      </div>
      <p className="text-steel-gray text-[13px] leading-[20px] mb-3">{date}</p>
      <p className="text-[#2b2f38] text-[14px] leading-[22px] font-normal mb-5 flex-1">
        {description}
      </p>
      <a
        href={href}
        className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline self-start"
      >
        Read Article
      </a>
    </article>
  );
};

export default RewardCard;
