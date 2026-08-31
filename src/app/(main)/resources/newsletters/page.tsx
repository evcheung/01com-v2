import { NewsletterCard } from "@/components/resources/newsletters/NewsletterCard";
import { Pagination } from "@/components/resources/Pagination";
import { fetchSanity } from "@/sanity/lib/client";
import { NEWSLETTERS_COUNT_QUERY, NEWSLETTERS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

const PAGE_SIZE = 12;

export default async function ResourcesNewsletters() {
  const currentPage = 1;
  const start = 0;
  const end = start + PAGE_SIZE;

  const [newsletters, total] = await Promise.all([
    fetchSanity(NEWSLETTERS_QUERY, { start, end }),
    fetchSanity(NEWSLETTERS_COUNT_QUERY),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
            Newsletters
          </h2>
          <div className="flex-1 h-px bg-lite-gray/60" />
          <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
            <Image src="/resources_assets/nletter_i.svg" alt="" aria-hidden="true" className="object-contain" width={64} height={64} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">
          {newsletters.map((item: { _id: string; year: string; month: string; link: string; slug?: string }) => (
            <NewsletterCard key={item._id} year={item.year} month={item.month} link={item.link} slug={item.slug} />
          ))}
        </div>
        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/resources/newsletters"
          />
        </div>
      </div>
    </section>
  );
}
