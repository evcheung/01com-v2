"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

/**
 * Builds the list of page items shown in the pagination bar.
 * Returns numbers for actual pages or the string "..." for ellipses.
 * Pattern: first 3 pages, ellipsis, last 3 pages (when there are gaps).
 */
function buildPageItems(
  currentPage: number,
  totalPages: number
): (number | "...")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const items: (number | "...")[] = [];
  const firstBlock = [1, 2, 3];
  const lastBlock = [totalPages - 2, totalPages - 1, totalPages];

  // If currentPage is near the start
  if (currentPage <= 4) {
    return [1, 2, 3, 4, "...", totalPages - 1, totalPages];
  }

  // If currentPage is near the end
  if (currentPage >= totalPages - 3) {
    return [1, 2, "...", ...lastBlock];
  }

  // Middle
  items.push(...firstBlock, "...", currentPage, "...", ...lastBlock);
  return items;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const items = buildPageItems(currentPage, totalPages);

  const handleClick = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange?.(page);
  };

  const baseLink =
    "px-2 text-[13px] leading-none transition-colors select-none";
  const inactive = "text-steel-gray hover:text-quantum-blue";
  const active = "text-quantum-blue font-medium";
  const disabled = "text-lite-gray cursor-not-allowed";

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center">
      <ul className="flex items-center gap-1">
        <li>
          <button
            type="button"
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${baseLink} ${currentPage === 1 ? disabled : inactive}`}
          >
            Previous
          </button>
        </li>
        {items.map((item, idx) =>
          item === "..." ? (
            <li key={`ellipsis-${idx}`}>
              <span className={`${baseLink} text-steel-gray`}>...</span>
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                onClick={() => handleClick(item)}
                aria-current={item === currentPage ? "page" : undefined}
                className={`${baseLink} ${
                  item === currentPage ? active : inactive
                }`}
              >
                {item}
              </button>
            </li>
          )
        )}
        <li>
          <button
            type="button"
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${baseLink} ${
              currentPage === totalPages ? disabled : inactive
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
