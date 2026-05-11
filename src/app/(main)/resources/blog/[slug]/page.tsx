import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { BLOG_QUERY, BLOG_SLUGS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

const EMPTY_BLOG_STATIC_SLUG = "__no-blog__";

export const dynamicParams = false;

export async function generateStaticParams() {
  const items = await client.fetch(BLOG_SLUGS_QUERY);
  const slugs = (items ?? [])
    .filter((item: { slug: string | null }): item is { slug: string } => Boolean(item.slug))
    .map((item: { slug: string }) => ({ slug: item.slug }));

  return slugs.length > 0 ? slugs : [{ slug: EMPTY_BLOG_STATIC_SLUG }];
}

export default async function PostBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === EMPTY_BLOG_STATIC_SLUG) notFound();

  const post = await client.fetch(BLOG_QUERY, { slug });

  if (!post) notFound();

  return (
    <section className="bg-[#f5f6f8] py-16 min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 md:px-[95px]">
        <Link
          href="/resources/blog"
          className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline mb-10 inline-block"
        >
          ← Back to Blog
        </Link>
        <p className="text-steel-gray text-[13px] mb-4">{post.date}</p>
        <h1 className="text-[#2b2f38] text-[28px] md:text-[36px] font-semibold leading-tight mb-8">
          {post.title}
        </h1>
        <p className="text-steel-gray text-[15px] leading-[24px] mb-8 border-l-4 border-quantum-blue pl-4">
          {post.description}
        </p>
        {post.body && (
          <div className="prose prose-slate max-w-none text-[15px] leading-[26px] text-gray-800">
            <PortableText value={post.body} />
          </div>
        )}
      </div>
    </section>
  );
}
