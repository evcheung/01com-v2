import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { REWARD_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function RewardItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(REWARD_QUERY, { slug });
  if (!post) notFound();

  return (
    <section className="bg-[#f5f6f8] py-16 min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 md:px-[95px]">
        <Link href="/resources/rewards" className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline mb-10 inline-block">
          ← Back to Rewards
        </Link>
        {post.image && (
          <Image src={post.image} alt={post.title} className="max-h-[120px] w-auto object-contain mb-8" width={120} height={120} />
        )}
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
