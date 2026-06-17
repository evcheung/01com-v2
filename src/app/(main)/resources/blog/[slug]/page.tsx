import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/client";
import { BLOG_QUERY, BLOG_SLUGS_QUERY } from "@/sanity/lib/queries";
import { SANITY_QUERY_TAGS } from "@/sanity/lib/revalidation";
import { notFound } from "next/navigation";

type BlogPost = {
  mainImage?: string;
  mainImageAlt?: string | null;
  title: string;
  publishedAt: string;
  summary: string;
  body?: PortableTextBlock[];
};

export default async function PostBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const knownSlugs = await sanityFetch<Array<{ slug: string | null }>>({
    query: BLOG_SLUGS_QUERY,
    tags: [...SANITY_QUERY_TAGS.blog],
  });
  if (!knownSlugs.some((item) => item.slug === slug)) notFound();

  const post = await sanityFetch<BlogPost>({
    query: BLOG_QUERY,
    params: { slug },
    tags: [...SANITY_QUERY_TAGS.blog],
  });

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
        {post.mainImage && (
          <div className="relative w-full max-h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src={post.mainImage}
              alt={post.mainImageAlt ?? post.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}
        <p className="text-steel-gray text-[13px] mb-4">{new Date(post.publishedAt).toDateString()}</p>
        <h1 className="text-[#2b2f38] text-[28px] md:text-[36px] font-semibold leading-tight mb-8">
          {post.title}
        </h1>
        <p className="text-steel-gray text-[15px] leading-[24px] mb-8 border-l-4 border-quantum-blue pl-4">
          {post.summary}
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
