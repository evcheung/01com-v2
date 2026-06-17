import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { NEWSLETTER_QUERY, NEWSLETTER_SLUGS_QUERY } from "@/sanity/lib/queries";
import { SANITY_QUERY_TAGS } from "@/sanity/lib/revalidation";

type NewsletterItem = {
  year: string;
  month: string;
  link: string;
};

export default async function NewsletterItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const knownSlugs = await sanityFetch<Array<{ slug: string | null }>>({
    query: NEWSLETTER_SLUGS_QUERY,
    tags: [...SANITY_QUERY_TAGS.newsletters],
  });
  if (!knownSlugs.some((item) => item.slug === slug)) notFound();

  const item = await sanityFetch<NewsletterItem>({
    query: NEWSLETTER_QUERY,
    params: { slug },
    tags: [...SANITY_QUERY_TAGS.newsletters],
  });
  if (!item) notFound();

  return (
    <section className="bg-[#f5f6f8] py-16 min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 md:px-[95px]">
        <Link href="/resources/newsletters" className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline mb-10 inline-block">
          ← Back to Newsletters
        </Link>
        <h1 className="text-[#2b2f38] text-[28px] md:text-[36px] font-semibold leading-tight mb-8">
          {item.month} {item.year}
        </h1>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-quantum-blue text-white text-[13px] font-semibold uppercase tracking-[0.12em] px-6 py-3 rounded hover:opacity-90"
        >
          View Newsletter
        </a>
      </div>
    </section>
  );
}
