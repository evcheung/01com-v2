import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
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
    entries: [
      { month: "January" },
      { month: "February" },
      { month: "March" },
    ],
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

/* ── Search / filter icon ────────────────────────────────────────── */
function SearchIcon() {
  return (
    <button
      type="button"
      aria-label="Search newsletters"
      className="w-[49px] h-[49px] rounded-full border border-quantum-blue/40 flex items-center justify-center text-quantum-blue hover:bg-quantum-blue/10 transition-colors"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  );
}

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
      <section className="bg-gradient-to-l from-[#f2f6f7] via-white to-[#f2f6f7] py-12">
        <div className="max-w-[1512px] mx-auto px-[106px]">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
              Newsletters
            </h2>
            <SearchIcon />
          </div>

          {/* Divider */}
          <hr className="border-t border-[#dfe6ea] mb-10" />

          {/* Year cards grid */}
          <div className="grid grid-cols-3 gap-x-7 gap-y-8 items-stretch auto-rows-fr">
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

      {/* ─── Learn More CTA ─── */}
      <section className="bg-white py-16 flex justify-center">
        <Button
          text="LEARN MORE ABOUT 01 QUANTUM PRODUCTS · · ·"
          url="/products"
          border="border-quantum-green/60"
          textColor="text-quantum-green"
          hoverBg="hover:bg-quantum-green/10"
        />
      </section>
    </>
  );
}
