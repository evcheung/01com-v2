import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { fetchSanity } from "@/sanity/lib/client";
import { BLOG_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function PostBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await fetchSanity(BLOG_QUERY, { slug });

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
        <p className="text-steel-gray text-[0.9rem] mb-4">{new Date(post.publishedAt).toDateString()}</p>
        <h1 className="blog-post-title text-[#2b2f38] font-semibold mb-8">
          {post.title}
        </h1>
        <p className="text-[#171717] text-[1.05rem] font-bold leading-[1.55] mb-8">
          {post.summary}
        </p>
        {post.body && (
          <div className="blog-article-content max-w-none text-gray-800">
            <PortableText value={post.body} />
          </div>
        )}
        {(post.previousPost || post.nextPost) && (
          <nav aria-label="Blog post navigation" className="mt-14 border-t border-[#d7dce2] pt-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {post.previousPost && (
                <Link
                  href={`/resources/blog/${post.previousPost.slug}`}
                  className="group max-w-sm text-left"
                >
                  <span className="block text-[0.75rem] font-medium uppercase tracking-[0.12em] text-quantum-blue">
                    ← Previous post
                  </span>
                  <span className="mt-2 block text-[1.05rem] font-medium leading-snug text-[#2b2f38] group-hover:underline">
                    {post.previousPost.title}
                  </span>
                </Link>
              )}
              {post.nextPost && (
                <Link
                  href={`/resources/blog/${post.nextPost.slug}`}
                  className={`group max-w-sm text-right sm:justify-self-end ${post.previousPost ? "" : "sm:col-start-2"}`}
                >
                  <span className="block text-[0.75rem] font-medium uppercase tracking-[0.12em] text-quantum-blue">
                    Next post →
                  </span>
                  <span className="mt-2 block text-[1.05rem] font-medium leading-snug text-[#2b2f38] group-hover:underline">
                    {post.nextPost.title}
                  </span>
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}
