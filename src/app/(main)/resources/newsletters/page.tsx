import { NewsletterCard } from "@/components/resources/newsletters/NewsletterCard";
import { Pagination } from "@/components/resources/rewards/Pagination";
import { client } from "@/sanity/lib/client";
import { NEWSLETTERS_COUNT_QUERY, NEWSLETTERS_QUERY } from "@/sanity/lib/queries";

const PAGE_SIZE = 12;

export default async function ResourcesNewsletters({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const [newsletters, total] = await Promise.all([
    client.fetch(NEWSLETTERS_QUERY, { start, end }),
    client.fetch(NEWSLETTERS_COUNT_QUERY),
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
            <img src="/resources_assets/nletter_i.svg" alt="" aria-hidden="true" className="w-12 h-12 object-contain" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">
          {newsletters.map((item: { _id: string; year: string; month: string; slug: string }) => (
            <NewsletterCard key={item._id} year={item.year} month={item.month} slug={item.slug} />
          ))}
        </div>
        <div className="mt-12">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </section>
  );
}
