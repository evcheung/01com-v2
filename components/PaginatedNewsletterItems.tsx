import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { Box } from './core';
import { PressCard } from './PressCard';
import { theme } from '../theme';
import { NewsletterCard } from './NewsletterCard';

const StyledPaginateContainer = styled(Box)`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    font-weight: ${theme.fontWeight[700]};
    font-size: ${theme.fontSize.md};
    color: ${theme.colors.neutral};
  }

  .page-item {
    padding: 8px;
    margin: 0px 12px;
    cursor: pointer;
  }

  .page-nav-label {
    cursor: pointer;
    :first-of-type{
      margin-right: 48px;
    }
    :last-of-type{
      margin-left: 48px;
    }
  }

  .active {
    border-bottom: 2px solid ${theme.colors.brand.primary};
    color: ${theme.colors.brand.primary};
  }
`

const CardGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-gap: 24px;
  margin: 48px 0px;
  width: 100%;
`

function Items({ currentItems }) {
  return (
    <CardGrid>
      {currentItems &&
        currentItems.map((item) => (
          <NewsletterCard heading={item.year} items={item.items} key={item.year} />
        ))}
    </CardGrid>

  );
}


export const PaginatedNewsletterItems = ({ itemsPerPage, items }: {
  itemsPerPage: number,
  items: Array<any>
}) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <StyledPaginateContainer margin="0px 0px 96px 0px">
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
      </StyledPaginateContainer>
    </>
  );
}
