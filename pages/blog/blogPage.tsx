import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import BlogLayout from "../../components/blog/BlogLayout";
import { BlogPageContentContainer } from "../../components/blog/BlogPageContentContainer";
import Heading, { HeadingVariants } from "../../components/core/heading";
import { Text, TextVariants, TextColors } from "../../components/core";
import { BlogBreadcrumb } from "../../components/blog/BlogBreadcrumb";
import { BlogReadBanner } from "../../components/blog/BlogReadBanner";

type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
};

export type Post = {
  title: string;
  publishedAt?: string;
  summary?: string;
  body?: any;
  mainImage: SanityImage;
};

type Props = { post: Post | null };

const BlogPage = ({ post }: Props) => {
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

  console.log("mainImage:", post.mainImage);
  console.log("imageUrl:", imageUrl);

  return (
    <BlogLayout>
      <BlogReadBanner heading="">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}></Text>
      </BlogReadBanner>
      <title>{post.title} | 01 Quantum Blog</title>

      <BlogPageContentContainer>
        <BlogBreadcrumb label="" />

        <Heading variant={HeadingVariants.Heading2} style={{marginBottom: "32px"}}>{post.title}</Heading>

        {post.publishedAt && (
          <Text variant={TextVariants.Body2} textColor={TextColors.Neutral} style={{marginBottom: "32px"}}>
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
            style={{marginBottom: "32px"}}
          />
        )}

        {post.summary && (
          <Text variant={TextVariants.Body2} style={{marginBottom: "32px", fontWeight: "700"}}>
            {post.summary}
          </Text>
        )}

        <div style={{lineHeight: "28px", marginTop: "32px", marginBottom: "32px"}}>
          <PortableText value={post.body}/>
        </div>
      </BlogPageContentContainer>
    </BlogLayout>
  );
};

export default BlogPage;
