import { RewardCard } from "@/components/resources/rewards/RewardCard";
import { Pagination } from "@/components/resources/Pagination";
import { sanityFetch } from "@/sanity/lib/client";
import { REWARDS_COUNT_QUERY, REWARDS_QUERY } from "@/sanity/lib/queries";
import { SANITY_QUERY_TAGS } from "@/sanity/lib/revalidation";
import Image from "next/image";

const PAGE_SIZE = 12;
type RewardListItem = {
  _id: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
  imageAltText?: string;
};

export default async function RewardsPage() {
  const currentPage = 1;
  const start = 0;
  const end = start + PAGE_SIZE;

  const [rewards, total] = await Promise.all([
    sanityFetch<RewardListItem[]>({ query: REWARDS_QUERY, params: { start, end }, tags: [...SANITY_QUERY_TAGS.rewards] }),
    sanityFetch<number>({ query: REWARDS_COUNT_QUERY, tags: [...SANITY_QUERY_TAGS.rewards] }),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
            Reviews & Rewards
          </h2>
          <div className="flex-1 h-px bg-lite-gray/60" />
          <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
            <Image src="/resources_assets/rewar_i.svg" alt="" aria-hidden="true" className="object-contain" width={64} height={64} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {rewards.map((item: { _id: string; date: string; description: string; image?: string; link?: string; imageAltText?: string }) => (
            <RewardCard key={item._id} date={item.date} description={item.description} image={item.image ?? ""} link={item.link} imageAltText={item.imageAltText ?? ""} />
          ))}
        </div>
        <div className="mt-14">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/resources/rewards"
          />
        </div>
      </div>
    </section>
  );
}
