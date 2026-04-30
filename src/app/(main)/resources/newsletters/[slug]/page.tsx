import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { NEWSLETTER_QUERY } from "@/sanity/lib/queries";

export default async function NewsletterItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await client.fetch(NEWSLETTER_QUERY, { slug });
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
