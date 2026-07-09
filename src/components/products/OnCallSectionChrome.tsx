"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const onCallSectionItems = [
  { label: "Features", href: "/products/ironcap-oncall/features" },
  { label: "Support", href: "/products/ironcap-oncall/support" },
  {
    label: "Pricing & Comparison",
    href: "/products/ironcap-oncall/pricing-and-comparison",
  },
  {
    label: "Referral Discount",
    href: "/products/ironcap-oncall/referral-discount",
  },
];

const MAIN_PAGE_HREF = "/products/ironcap-oncall";

const normalizePath = (path: string | null) => {
  if (!path) {
    return "";
  }

  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
};

export function OnCallSectionChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = normalizePath(usePathname());
  const showBackArrow = pathname !== MAIN_PAGE_HREF;

  return (
    <div
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      <section className="relative bg-black px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[196px] lg:px-16 xl:px-24">
        <div className="flex min-h-[140px] items-center">
          <h1 className="text-white text-[35px] font-medium leading-tight sm:text-[40px] lg:text-[50px] lg:leading-[50px]">
            Products
          </h1>
        </div>
      </section>

      <section className="relative flex items-center justify-center bg-black py-4 sm:py-5 lg:h-[88px] lg:py-0">
        <div
          aria-hidden
          className="absolute left-1/2 top-[15px] h-px w-[980px] max-w-[calc(100%-3rem)] -translate-x-1/2 bg-white/30"
        />
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[12px] sm:grid-cols-3 lg:flex lg:items-center lg:gap-6">
          {onCallSectionItems.map((item, i) => {
            const active = pathname === normalizePath(item.href);

            return (
              <li
                key={item.href}
                className="flex items-center justify-center gap-4 lg:justify-start"
              >
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-center transition-colors lg:text-left ${
                    active
                      ? "text-quantum-blue font-medium"
                      : "text-white hover:text-quantum-blue"
                  }`}
                >
                  {item.label}
                </Link>
                {i < onCallSectionItems.length - 1 && (
                  <span aria-hidden className="hidden text-white/50 lg:inline">
                    |
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {showBackArrow && (
        <section className="bg-white py-5">
          <div className="px-4 sm:px-5 lg:px-6">
            <Link
              href={MAIN_PAGE_HREF}
              aria-label="Back to IronCAP OnCall"
              className="inline-flex items-center text-quantum-blue transition-colors hover:text-quantum-green"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 sm:h-9 sm:w-9"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {children}
    </div>
  );
}

export default OnCallSectionChrome;
