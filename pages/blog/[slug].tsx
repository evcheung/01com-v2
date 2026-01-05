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
        title,
        publishedAt,
        body
      }
    `,
    { slug }
  );

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    // optional: revalidate in non-export mode; harmless here
    // revalidate: 60,
  };
};

const Page: NextPage<Props> = (props) => <BlogPage {...props} />;

export default Page;
