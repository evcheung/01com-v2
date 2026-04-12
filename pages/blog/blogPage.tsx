import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import BlogLayout from "../../components/blog/BlogLayout";
import { BlogPageContentContainer } from "../../components/blog/BlogPageContentContainer";
import Heading, { HeadingVariants } from "../../components/core/heading";
import { Text, TextVariants, TextColors } from "../../components/core";
import { BlogBreadcrumb } from "../../components/blog/BlogBreadcrumb";
import { BlogReadBanner } from "../../components/blog/BlogReadBanner";
import Link from "next/link";

type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
};

export type Post = {
  _id?: string;
  title: string;
  slug: string;
  publishedAt?: string;
  summary?: string;
  body?: any;
  mainImage: SanityImage;
  previous?: { title: string; slug: string; publishedAt?: string } | null;
  next?: { title: string; slug: string; publishedAt?: string } | null;
};

type Props = {
  post: Post | null;
  loading?: boolean;
};

const Divider = () => (
  <div
    style={{
      width: "100%",
      height: "1px",
      backgroundColor: "rgba(0,0,0,0.2)",
      margin: "96px 0",
    }}
  />
);

const BlogPage = ({ post, loading = false }: Props) => {
  if (loading) {
    return (
      <BlogLayout>
        <BlogReadBanner heading="">
          <Text
            variant={TextVariants.Body1}
            textColor={TextColors.White}
          ></Text>
        </BlogReadBanner>

        <BlogPageContentContainer>
          <Heading variant={HeadingVariants.Heading3}>Loading post...</Heading>
        </BlogPageContentContainer>
      </BlogLayout>
    );
  }

  if (!post) {
    return (
      <BlogPageContentContainer>
        <Heading variant={HeadingVariants.Heading3}>Post not found</Heading>
      </BlogPageContentContainer>
    );
  }

  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(800).height(400).url()
    : "";

  return (
    <BlogLayout>
      <BlogReadBanner heading="">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}></Text>
      </BlogReadBanner>
      <title>{post.title} | 01 Quantum Blog</title>

      <BlogPageContentContainer>
        <BlogBreadcrumb label="" />

        <Heading
          variant={HeadingVariants.Heading1}
          style={{
            lineHeight: "1.2",
            marginBottom: "24px",
            fontFamily: "Cardo, serif",
            fontWeight: 400,
          }}
        >
          {post.title}
        </Heading>

        {post.publishedAt && (
          <Text
            variant={TextVariants.Body2}
            textColor={TextColors.Neutral}
            style={{ marginBottom: "32px", opacity: 0.8 }}
          >
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
        )}

        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post.mainImage.alt || post.title}
            width={800}
            height={400}
            style={{ marginBottom: "32px" }}
          />
        )}

        {post.summary && (
          <Text
            variant={TextVariants.Body2}
            style={{ marginBottom: "32px", fontWeight: "700" }}
          >
            {post.summary}
          </Text>
        )}

        <div
          style={{
            lineHeight: "28px",
            marginTop: "32px",
            marginBottom: "32px",
          }}
        >
          <style jsx>{`
            div {
              font-family: "Cardo", serif;
            }

            div :global(h1),
            div :global(h2),
            div :global(h3),
            div :global(h4),
            div :global(h5),
            div :global(h6) {
              margin-top: 32px;
              margin-bottom: 20px;
              line-height: 1.25;
              font-weight: 600;
              font-family: "Cardo", serif;
            }

            div :global(p) {
              margin-bottom: 24px;
              font-weight: 400;
              font-family: "Cardo", serif;
              font-size: 18px;
            }

            div :global(p:last-of-type) {
              font-weight: 500;
            }

            div :global(h1:first-child),
            div :global(h2:first-child),
            div :global(h3:first-child) {
              margin-top: 0;
            }
          `}</style>

          <PortableText value={post.body} />
        </div>

        <Divider />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 64,
            marginTop: "48px",
          }}
        >
          <div style={{ flex: 1, textAlign: "left" }}>
            {post.previous && (
              <Link
                href={`/blog/post?slug=${post.previous.slug}`}
                style={{ textDecoration: "underline" }}
              >
                <Text variant={TextVariants.Body2}>
                  ← Previous: {post.previous.title}
                </Text>
              </Link>
            )}
          </div>

          <div style={{ flex: 1, textAlign: "right" }}>
            {post.next && (
              <Link
                href={`/blog/post?slug=${post.next.slug}`}
                style={{ textDecoration: "underline" }}
              >
                <Text variant={TextVariants.Body2}>
                  Next: {post.next.title} →
                </Text>
              </Link>
            )}
          </div>
        </div>
      </BlogPageContentContainer>
    </BlogLayout>
  );
};

export default BlogPage;
