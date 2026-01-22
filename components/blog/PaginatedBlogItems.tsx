import { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import Link from "next/link";
import { Box, Text, TextVariants } from "../core";
import { PaginateContainer } from "../PaginateContainer";
import { breakpoints } from "../../utils/breakpoints";
import { theme } from "../../theme";
import { BlogPaginateContainer } from "./BlogPaginateContainer";

type BlogListItem = {
  title: string;
  slug: string;
  publishedAt?: string;
};

const ListContainer = styled(Box)`
  width: 100%;
  margin: 0 0 48px 0;
`;

const ListRow = styled(Box)<{ index: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
  border-bottom: 1px solid ${theme.colors.neutral.md};
  border-top: ${({ index }) =>
    index === 0 ? `1px solid ${theme.colors.neutral.md}` : "none"};

  ${breakpoints("flex-direction", "", [{ 760: "column" }])}
  ${breakpoints("align-items", "", [{ 760: "flex-start" }])}
  ${breakpoints("gap", "", [{ 760: "8px" }])}
`;

const TitleLink = styled.a`
  color: ${theme.colors.neutral.xl};
  text-decoration: none;
  font-size: 18px;
  line-height: 28px;
  font-weight: ${theme.fontWeight[300]};

  &:hover {
    text-decoration: underline;
  }

  ${breakpoints("font-size", "", [{ 760: "16px" }])}
  ${breakpoints("line-height", "", [{ 760: "26px" }])}
`;

const DateText = styled(Text)`
  color: ${theme.colors.neutral.lg};
  opacity: 0.7;
  white-space: nowrap;
  font-size: 14px;
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

function Items({ currentItems }: { currentItems: BlogListItem[] }) {
  return (
    <ListContainer>
      {currentItems?.map((post, index) => (
        <ListRow key={post.slug} index={index}>
          <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
            <TitleLink>{post.title}</TitleLink>
          </Link>

          {!!post.publishedAt && (
            <DateText variant={TextVariants.Body1}>
              {formatDate(post.publishedAt)}
            </DateText>
          )}
        </ListRow>
      ))}
    </ListContainer>
  );
}

export const PaginatedBlogItems = ({
  itemsPerPage,
  items,
}: {
  itemsPerPage: number;
  items: BlogListItem[];
}) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <BlogPaginateContainer margin="0 0 96px 0">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-item"
          previousClassName="page-nav-label"
          nextClassName="page-nav-label"
          breakClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakLinkClassName="page-link"
          marginPagesDisplayed={2}
          activeClassName="active"
        />
      </BlogPaginateContainer>
    </>
  );
};