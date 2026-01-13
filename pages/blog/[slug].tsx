import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { client } from "../../sanity/lib/client";
import BlogPage, { Post } from "./blogPage";

type Props = { post: Post | null };

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await client.fetch<{ slug: string }[]>(`
    *[_type == "blogPost" && defined(slug.current)]{
      "slug": slug.current
    }
  `);

  return {
    paths: slugs.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug || "");

  const post = await client.fetch<Post>(
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
    { slug }
  );

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};

const Page: NextPage<Props> = (props) => <BlogPage {...props} />;

export default Page;
