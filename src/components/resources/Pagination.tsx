import Link from "next/link";

interface PaginationProps {
  /** Current 1-based page number. */
  currentPage: number;
  /** Total number of pages. */
  totalPages: number;
  /** Base path for links. Page 1 points to basePath, page N to `${basePath}/page/N`. */
  basePath: string;
  /** Maximum visible numeric buttons (excluding first / last / ellipsis). Defaults to 3. */
  siblingCount?: number;
}

const DOTS = "…" as const;

function buildPageList(
  current: number,
  total: number,
  siblingCount: number,
): (number | typeof DOTS)[] {
  if (total <= 1) return total === 1 ? [1] : [];

  const firstPage = 1;
  const lastPage = total;

  // Always show: first page, last page, current ± siblings, with ellipses to fill gaps.
  const left = Math.max(current - siblingCount, firstPage + 1);
  const right = Math.min(current + siblingCount, lastPage - 1);

  const pages: (number | typeof DOTS)[] = [firstPage];

  if (left > firstPage + 1) pages.push(DOTS);

  for (let p = left; p <= right; p++) pages.push(p);

  if (right < lastPage - 1) pages.push(DOTS);

  if (lastPage !== firstPage) pages.push(lastPage);

  return pages;
}

function buildHref(
  basePath: string,
  page: number,
): string {
  const normalizedBase =
    basePath.length > 1 && basePath.endsWith("/")
      ? basePath.slice(0, -1)
      : basePath;

  if (page <= 1) return normalizedBase;
  return `${normalizedBase}/page/${page}`;
}

/**
 * Pagination
 * ──────────
 * Server-friendly pagination that uses path segments `/page/N`, which works
 * with static export. Renders Previous / page numbers (with ellipses) / Next
 * links following the project's design system.
 */
export function Pagination({
  currentPage,
  totalPages,
  basePath,
  siblingCount = 1,
}: PaginationProps) {
  if (totalPages < 1) return null;

  const pages = buildPageList(currentPage, totalPages, siblingCount);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const linkBase =
    "transition-colors text-steel-gray hover:text-quantum-blue";
  const disabledBase = "text-steel-gray/40 pointer-events-none select-none";

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-6 text-[12px] leading-none"
    >
      {hasPrev ? (
        <Link
          href={buildHref(basePath, currentPage - 1)}
          rel="prev"
          className={linkBase}
        >
          Previous
        </Link>
      ) : (
        <span className={disabledBase}>Previous</span>
      )}

      <ul className="flex items-center gap-6">
        {pages.map((p, i) =>
          p === DOTS ? (
            <li key={`dots-${i}`} aria-hidden className="text-steel-gray">
              {DOTS}
            </li>
          ) : (
            <li key={p}>
              {p === currentPage ? (
                <span
                  aria-current="page"
                  className="text-quantum-blue font-medium"
                >
                  {p}
                </span>
              ) : (
                <Link href={buildHref(basePath, p)} className={linkBase}>
                  {p}
                </Link>
              )}
            </li>
          ),
        )}
      </ul>

      {hasNext ? (
        <Link
          href={buildHref(basePath, currentPage + 1)}
          rel="next"
          className={linkBase}
        >
          Next
        </Link>
      ) : (
        <span className={disabledBase}>Next</span>
      )}
    </nav>
  );
}

export default Pagination;
