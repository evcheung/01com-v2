import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";

import styled from "styled-components";
import { Text, TextVariants, TextColors } from "../../components/core";
import Head from "next/head";
import Heading, { HeadingVariants } from "../../components/core/heading";
import { PageContentContainer } from "../../components/PageContentContainer";
import { breakpoints } from "../../utils/breakpoints";
import BlogLayout from "../../components/blog/BlogLayout";
import { BlogPageBanner } from "../../components/blog/BlogPageBanner";
import { PaginatedBlogItems } from "../../components/blog/PaginatedBlogItems";

type BlogListItem = {
  title: string;
  slug: string;
  publishedAt?: string;
};

const StyledHeading = styled(Heading)`
  font-size: 36px;
  margin-bottom: 48px;
  ${breakpoints("font-size", "", [{ 760: "28px" }])}
`;

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await client.fetch<BlogListItem[]>(`
          *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc){
            title,
            "slug": slug.current,
            publishedAt
          }
        `);

        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <BlogLayout>
      <Head>
        <title>01 Quantum Blog</title>
        <meta
          name="description"
          content="Check out the latest blog posts from 01 Quantum Inc."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlogPageBanner heading="01 Quantum Blog">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}>
          Quantum Innovation and Cybersecurity Leadership
        </Text>
      </BlogPageBanner>

      <PageContentContainer>
        <StyledHeading variant={HeadingVariants.Heading3}>
          Watch, Read, Listen
        </StyledHeading>

        {loading ? (
          <Text variant={TextVariants.Body2}>Loading posts...</Text>
        ) : (
          <PaginatedBlogItems itemsPerPage={10} items={posts} />
        )}
      </PageContentContainer>
    </BlogLayout>
  );
}
