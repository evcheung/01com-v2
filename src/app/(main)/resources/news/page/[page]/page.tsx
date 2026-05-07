import { NewsCard } from "@/components/resources/news/NewsCard";
import { Pagination } from "@/components/resources/Pagination";
import { client } from "@/sanity/lib/client";
import { NEWS_COUNT_QUERY, NEWS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Key } from "react";

const PAGE_SIZE = 12;

export const dynamicParams = false;

export async function generateStaticParams() {
  const total = await client.fetch<number>(NEWS_COUNT_QUERY);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1),
  }));
}

export default async function NewsPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const currentPage = Number(page);

  if (!Number.isInteger(currentPage) || currentPage < 1) {
    notFound();
  }

  const [newsItems, total] = await Promise.all([
    client.fetch(NEWS_QUERY, {
      start: (currentPage - 1) * PAGE_SIZE,
      end: currentPage * PAGE_SIZE,
    }),
    client.fetch<number>(NEWS_COUNT_QUERY),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);
  if (currentPage > totalPages) {
    notFound();
  }

  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
            Featured News
          </h2>
          <div className="flex-1 h-px bg-lite-gray/60" />
          <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
            <Image src="/resources_assets/news_i.svg" alt="" aria-hidden="true" className="object-contain" width={64} height={64} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {newsItems.map((item: { _id: Key | null | undefined; date: string; title: string; description: string; slug: string }) => (
            <NewsCard key={item._id} date={item.date} title={item.title} description={item.description} slug={item.slug} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/resources/news"
          />
        </div>
      </div>
    </section>
  );
}
