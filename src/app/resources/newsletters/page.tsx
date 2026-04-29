import { notFound } from "next/navigation";
import {
  NewsletterCard,
  type NewsletterYearData,
} from "@/components/resources/NewsletterCard";
import { Pagination } from "@/components/resources/Pagination";

const PAGE_SIZE = 6;
const BASE_PATH = "/resources/newsletters";

/* ── Data ─────────────────────────────────────────────────────────── */
const years: NewsletterYearData[] = [
  {
    year: 2026,
    entries: [{ month: "January" }, { month: "February" }, { month: "March" }],
  },
  {
    year: 2025,
    entries: [
      { month: "December" },
      { month: "November" },
      { month: "October" },
      { month: "September" },
      { month: "August" },
      { month: "July" },
      { month: "June" },
      { month: "May" },
      { month: "April" },
      { month: "March" },
      { month: "February" },
      { month: "January" },
    ],
  },
  {
    year: 2024,
    entries: [
      { month: "December" },
      { month: "November" },
      { month: "October" },
      { month: "September" },
      { month: "August" },
      { month: "May" },
      { month: "March" },
      { month: "January" },
    ],
  },
  {
    year: 2023,
    entries: [
      { month: "December" },
      { month: "November" },
      { month: "October" },
      { month: "July" },
      { month: "May" },
      { month: "April" },
      { month: "March" },
      { month: "February" },
      { month: "January" },
    ],
  },
  {
    year: 2022,
    entries: [
      { month: "December" },
      { month: "November" },
      { month: "September" },
      { month: "August" },
      { month: "July" },
      { month: "June" },
      { month: "May" },
      { month: "April" },
      { month: "March" },
      { month: "February" },
      { month: "January" },
    ],
  },
  {
    year: 2021,
    entries: [
      { month: "December" },
      { month: "October" },
      { month: "September" },
      { month: "August", issues: [3, 2, 1] },
      { month: "July", issues: [3, 2, 1] },
      { month: "June", issues: [2, 1] },
      { month: "May", issues: [2, 1] },
      { month: "April", issues: [3, 2, 1] },
      { month: "March", issues: [2, 1] },
      { month: "February", issues: [4, 3, 2, 1] },
      { month: "January", issues: [4, 3, 2, 1] },
    ],
  },
];

/* ── Page ─────────────────────────────────────────────────────────── */
export default async function ResourcesNewsletters({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(years.length / PAGE_SIZE));

  const requested = Number.parseInt(page ?? "1", 10);
  if (page !== undefined && (!Number.isFinite(requested) || requested < 1)) {
    notFound();
  }
  const currentPage = Math.min(Math.max(requested || 1, 1), totalPages);
  if (page !== undefined && requested > totalPages) {
    notFound();
  }

  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = years.slice(start, start + PAGE_SIZE);

  return (
    <>
      {/* ─── Content ─── */}
      <section className="bg-[#f5f6f8] py-16">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
          {/* Header row */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
              Newsletters
            </h2>
            <div className="flex-1 h-px bg-lite-gray/60" />
            <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
              <img
                src="/resources_assets/nletter_i.svg"
                alt=""
                aria-hidden="true"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          {/* Year cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8 items-stretch auto-rows-fr">
            {visible.map((y) => (
              <NewsletterCard key={y.year} data={y} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={BASE_PATH}
            />
          </div>
        </div>
      </section>
    </>
  );
}
