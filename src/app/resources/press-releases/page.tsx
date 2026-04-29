import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  PressCard,
  type PressCardData,
} from "@/components/resources/PressCard";
import { Pagination } from "@/components/resources/Pagination";

const PAGE_SIZE = 9;
const BASE_PATH = "/resources/press_releases";

/* ── Data ─────────────────────────────────────────────────────────── */
const pressReleases: PressCardData[] = [
  {
    date: "March 19, 2026",
    title:
      "01 Quantum Reports First Quarter 2026 Results and Provides an Update on Business Developments..",
    href: "#",
  },
  {
    date: "March 16, 2026",
    title: "01 Quantum to report fiscal Q1 2026.",
    href: "#",
  },
  {
    date: "February 11, 2026",
    title:
      "01 Quantum and qLABS Announce Live Trading of $qONE, Laying the Foundation for Post-Quantum Web3 Security.",
    href: "#",
  },
  {
    date: "February 11, 2026",
    title:
      "01 Quantum and qLABS Announce Live Trading of $qONE, Laying the Foundation for Post-Quantum Web3 Security.",
    href: "#",
  },
  {
    date: "February 3, 2026",
    title:
      "01 Quantum Announces Launching of $qONE token and the Quantum-Resistant Layer 1 Migration Toolkit by qLABS..",
    href: "#",
  },
  {
    date: "January 22, 2025",
    title:
      "01 Quantum Reports Fourth Quarter 2025 Results and Provides an Update on Business Developments",
    href: "#",
  },
  {
    date: "January 20, 2026",
    title: "01 Quantum Announces Strategic Partnership with SuperQ Quantum",
    href: "#",
  },
  {
    date: "January 15, 2026",
    title:
      "01 Quantum Inc. and Hitachi Solutions Create, Ltd. Announce Remote Access System Enhanced with Post-Quantum Cryptography",
    href: "#",
  },
  {
    date: "December 11, 2025",
    title:
      "01 Quantum Announces qLABS to Launch Quantum-Sig Wallet to Protect Crypto from Quantum Attacks",
    href: "#",
  },
  {
    date: "December 9, 2025",
    title:
      "01 Quantum Collaborates with Bullfrog Power Adding Quantum-Safety to their Environmental Token",
    href: "#",
  },
  {
    date: "December 2, 2025",
    title:
      "01 Quantum Announces Groundbreaking Quantum DeFi Wrapper (QDW) Technology to protect DeFi from Quantum Attacks",
    href: "#",
  },
  {
    date: "November 12, 2025",
    title:
      "01 Quantum Announces Quantum AI Wrapper (QAW) Technology to Protect Privacy in the AI Market",
    href: "#",
  },
];

/* ── Page ─────────────────────────────────────────────────────────── */
export default async function ResourcesPressReleases({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(pressReleases.length / PAGE_SIZE));

  const requested = Number.parseInt(page ?? "1", 10);
  if (page !== undefined && (!Number.isFinite(requested) || requested < 1)) {
    notFound();
  }
  const currentPage = Math.min(Math.max(requested || 1, 1), totalPages);
  if (page !== undefined && requested > totalPages) {
    notFound();
  }

  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = pressReleases.slice(start, start + PAGE_SIZE);

  return (
    <>
      {/* ─── Content ─── */}
      <section className="bg-[#f5f6f8] py-16">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
          {/* Header row */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
              Press Releases
            </h2>
            <div className="flex-1 h-px bg-lite-gray/60" />
            <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
              <img
                src="/resources_assets/press_i.svg"
                alt=""
                aria-hidden="true"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">
            {visible.map((item, i) => (
              <PressCard key={start + i} item={item} />
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
