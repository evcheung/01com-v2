import { PostCard } from "@/components/resources/blog/PostCard";
import { Pagination } from "@/components/resources/Pagination";
import { client } from "@/sanity/lib/client";
import { BLOGS_COUNT_QUERY, BLOGS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Key } from "react";

const PAGE_SIZE = 12;

export const dynamicParams = false;

export async function generateStaticParams() {
  const total = await client.fetch<number>(BLOGS_COUNT_QUERY);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1),
  }));
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const currentPage = Number(page);

  if (!Number.isInteger(currentPage) || currentPage < 1) {
    notFound();
  }

  const [blogPosts, total] = await Promise.all([
    client.fetch(BLOGS_QUERY, {
      start: (currentPage - 1) * PAGE_SIZE,
      end: currentPage * PAGE_SIZE,
    }),
    client.fetch<number>(BLOGS_COUNT_QUERY),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);
  if (currentPage > totalPages) {
    notFound();
  }

  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {blogPosts.map((item: { _id: Key | null | undefined; publishedAt: string; title: string; slug: string }) => (
            <PostCard
              key={item._id}
              publishedAt={item.publishedAt}
              title={item.title}
              slug={item.slug}
            />
          ))}
        </div>
        <div className="mt-14">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/resources/blog"
          />
        </div>
      </div>
    </section>
  );
}
