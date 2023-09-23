import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { PressCard } from './PressCard';
import { CardGrid } from './CardGrid';
import { PaginateContainer } from './PaginateContainer';
import { useWindowSize } from 'usehooks-ts';

function Items({ currentItems }) {
  return (
    <CardGrid>
      {currentItems &&
        currentItems.map((item) => (
          <PressCard date={item.date} description={item.description} link={item.link} img={item.img} imgAlt={item.imgAlt} />
        ))}
    </CardGrid>
  );
}

export const PaginatedPressItems = ({ itemsPerPage, items }: {
  itemsPerPage: number,
  items: Array<any>
}) => {
  const { width } = useWindowSize()
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <PaginateContainer>
        <ReactPaginate
          breakLabel="..."
          nextLabel={width > 560 ? "Next" : ">"}
          onPageChange={handlePageClick}
          pageRangeDisplayed={width > 640 ? 2 : 1}
          pageCount={pageCount}
          previousLabel={width > 560 ? "Previous" : "<"}
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
          marginPagesDisplayed={width > 640 ? 2 : 1}
          activeClassName="active"
        />
      </PaginateContainer>
    </>
  );
}
