import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { client, previewClient } from "../../sanity/lib/client";
import BlogPage, { Post } from "./blogPage";

type Props = {
  post: Post | null;
  preview?: boolean;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await client.fetch<{ slug: string }[]>(`
    *[
      _type == "blogPost" &&
      defined(slug.current) &&
      !(_id in path("drafts.**"))
    ]{
      "slug": slug.current
    }
  `);

  return {
    paths: slugs.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
  preview = false,
}) => {
  const slug = String(params?.slug || "");
  const sanityClient = preview ? previewClient : client;

  const post = await sanityClient.fetch<Post>(
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

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
      preview,
    }, 
  };
}; 

const Page: NextPage<Props> = (props) => <BlogPage {...props} />;

export default Page;
