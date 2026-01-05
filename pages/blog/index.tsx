import type { GetStaticProps } from "next";
import { client } from "../../sanity/lib/client";

import styled from "styled-components";
import { Box, Text, TextVariants, TextColors } from "../../components/core";
import Head from "next/head";
import Heading, { HeadingVariants } from "../../components/core/heading";
import { theme } from "../../theme";
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

type Props = { posts: BlogListItem[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await client.fetch<BlogListItem[]>(`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc){
    title,
    "slug": slug.current,
    publishedAt
  }
`)

  return { props: { posts } };
};

const StyledHeading = styled(Heading)`
  font-size: 36px;
  margin-bottom: 48px;
  ${breakpoints("font-size", "", [{ 760: "28px" }])}
`;

const ListContainer = styled(Box)`
  width: 100%;
  margin: 0 0 48px 0;
`;

const ListRow = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
  border-top: 1px solid ${theme.colors.neutral.md};

  &:last-child {
    border-bottom: 1px solid ${theme.colors.neutral.md};
  }

  ${breakpoints("flex-direction", "", [{ 760: "column" }])}
  ${breakpoints("align-items", "", [{ 760: "flex-start" }])}
  ${breakpoints("gap", "", [{ 760: "8px" }])}
`;

const TitleLink = styled.a`
  color: ${theme.colors.neutral.xl};
  text-decoration: none;
  font-size: 18px;
  line-height: 28px;
  font-weight: ${theme.fontWeight[400]};

  &:hover {
    text-decoration: underline;
  }

  ${breakpoints("font-size", "", [{ 760: "16px" }])}
  ${breakpoints("line-height", "", [{ 760: "26px" }])}
`;

const Date = styled(Text)`
  color: ${theme.colors.neutral.lg};
  opacity: 0.7;
  white-space: nowrap;
  font-size: 12px;
  line-height: 18px;

  ${breakpoints("align-self", "", [{ 760: "flex-start" }])}
`;

function formatDate(date?: string) {
  if (!date) return "";
  const d = new globalThis.Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogIndexPage({ posts }: Props) {
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
        <PaginatedBlogItems itemsPerPage={10} items={posts} />
      </PageContentContainer>
    </BlogLayout>
  );
}
