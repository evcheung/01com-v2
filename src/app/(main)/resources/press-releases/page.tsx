import { client } from "@/sanity/lib/client";
import { RELEASES_COUNT_QUERY, RELEASES_QUERY } from "@/sanity/lib/queries";
import { Pagination } from "@/components/resources/rewards/Pagination";
import Link from "next/link";

const PAGE_SIZE = 9;

export default async function ResourcesPressReleases({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const [releases, total] = await Promise.all([
    client.fetch(RELEASES_QUERY, { start, end }),
    client.fetch(RELEASES_COUNT_QUERY),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
            Press Releases
          </h2>
          <div className="flex-1 h-px bg-lite-gray/60" />
          <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
            <img src="/resources_assets/press_i.svg" alt="" aria-hidden="true" className="w-12 h-12 object-contain" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">
          {releases.map((item) => (
            <article key={item._id} className="bg-white rounded-bl-[12px] rounded-tr-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-8 py-8 flex flex-col">
              <p className="text-steel-gray text-[13px] leading-[20px] mb-3">{item.date}</p>
              <h3 className="text-[#2b2f38] text-[15px] leading-[22px] font-normal mb-6 flex-1">{item.title}</h3>
              <Link href={`/resources/press-releases/${item.slug}`} className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline self-start">
                Read More
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </section>
  );
}
