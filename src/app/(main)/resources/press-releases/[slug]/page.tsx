import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { RELEASE_QUERY, RELEASE_SLUGS_QUERY } from "@/sanity/lib/queries";
import { SANITY_QUERY_TAGS } from "@/sanity/lib/revalidation";

type ReleaseItem = {
  title?: string;
  date: string;
  description: string;
  body?: PortableTextBlock[];
};

export default async function ReleaseItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const knownSlugs = await sanityFetch<Array<{ slug: string | null }>>({
    query: RELEASE_SLUGS_QUERY,
    tags: [...SANITY_QUERY_TAGS.releases],
  });
  if (!knownSlugs.some((item) => item.slug === slug)) notFound();

  const post = await sanityFetch<ReleaseItem>({
    query: RELEASE_QUERY,
    params: { slug },
    tags: [...SANITY_QUERY_TAGS.releases],
  });
  if (!post) notFound();

  return (
    <section className="bg-[#f5f6f8] py-16 min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 md:px-[95px]">
        <Link href="/resources/press-releases" className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline mb-10 inline-block">
          ← Back to Press Releases
        </Link>
        <p className="text-steel-gray text-[13px] mb-4">{post.date}</p>
        <h1 className="text-[#2b2f38] text-[28px] md:text-[36px] font-semibold leading-tight mb-8">{post.title}</h1>
        <p className="text-steel-gray text-[15px] leading-[24px] mb-8 border-l-4 border-quantum-blue pl-4">{post.description}</p>
        {post.body && (
          <div className="prose prose-slate max-w-none text-[15px] leading-[26px] text-gray-800">
            <PortableText value={post.body} />
          </div>
        )}
      </div>
    </section>
  );
}
