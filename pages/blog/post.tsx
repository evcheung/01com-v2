import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import BlogPage, { Post } from "./blogPage";

export default function BlogPostRuntimePage() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!slug || typeof slug !== "string") {
      setLoading(false);
      setPost(null);
      return;
    }

    const loadPost = async () => {
      try {
        const fetchedPost = await client.fetch<Post>(
          `
          *[_type == "blogPost" && slug.current == $slug][0]{
            _id,
            title,
            "slug": slug.current,
            publishedAt,
            summary,
            body,
            mainImage,

            "previous": *[
              _type == "blogPost" &&
              defined(slug.current) &&
              slug.current != $slug &&
              !(_id in path("drafts.**")) &&
              (
                publishedAt > ^.publishedAt ||
                (publishedAt == ^.publishedAt && _id > ^._id)
              )
            ] | order(publishedAt asc, _id asc)[0]{
              title,
              "slug": slug.current,
              publishedAt
            },

            "next": *[
              _type == "blogPost" &&
              defined(slug.current) &&
              slug.current != $slug &&
              !(_id in path("drafts.**")) &&
              (
                publishedAt < ^.publishedAt ||
                (publishedAt == ^.publishedAt && _id < ^._id)
              )
            ] | order(publishedAt desc, _id desc)[0]{
              title,
              "slug": slug.current,
              publishedAt
            }
          }
          `,
          { slug },
        );

        setPost(fetchedPost || null);
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [router.isReady, slug]);

  const pageTitle = post?.title
    ? `${post.title} | 01 Quantum Blog`
    : "01 Quantum Blog";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <BlogPage post={post} loading={loading} />
    </>
  );
}
