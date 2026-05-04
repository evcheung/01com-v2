import Image from "next/image";
import Link from "next/link";

interface RewardCardProps {
  date: string;
  title: string;
  image: string;
  slug: string;
}

export const RewardCard = ({ date, title, image, slug }: RewardCardProps) => {
  return (
    <article className="bg-white rounded-bl-[12px] rounded-tr-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] w-full max-w-[408px] min-h-[291px] px-8 py-8 flex flex-col">
      <div className="relative h-[84px] w-[84px] mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <p className="text-steel-gray text-[13px] leading-[20px] mb-3">
        {new Date(date).toDateString()}
      </p>
      <p className="text-[#2b2f38] text-[14px] leading-[22px] font-normal mb-5 flex-1">
        {title}
      </p>
      <Link
        href={`/resources/rewards/${slug}`}
        className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline self-start"
      >
        Read Article
      </Link>
    </article>
  );
};

export default RewardCard;
