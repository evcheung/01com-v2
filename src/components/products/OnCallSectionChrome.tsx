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
const FEATURES_PAGE_HREF = "/products/ironcap-oncall/features";

const featureDetailLabels: Record<string, string> = {
  "remote-desktop-control": "Remote Control",
  chat: "Live Chat",
  "multi-sessions": "Multi-session",
  survey: "Post-session Survey",
  "easy-customization": "Customization",
  "incident-status-viewing": "Incident Tracking",
  "technician-management": "Users Hierarchy",
};

const normalizePath = (path: string | null) => {
  if (!path) {
    return "";
  }

  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
};

function getFeatureBreadcrumb(pathname: string) {
  const featurePrefix = `${FEATURES_PAGE_HREF}/`;

  if (!pathname.startsWith(featurePrefix)) {
    return null;
  }

  const slug = pathname.slice(featurePrefix.length);

  if (!slug || slug.includes("/")) {
    return null;
  }

  const label = featureDetailLabels[slug];

  if (!label) {
    return null;
  }

  return { label, href: pathname };
}

export function OnCallSectionChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = normalizePath(usePathname());
  const featureBreadcrumb = getFeatureBreadcrumb(pathname);
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
            const normalizedHref = normalizePath(item.href);
            const active =
              pathname === normalizedHref ||
              pathname.startsWith(`${normalizedHref}/`);

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
        <section className="bg-white py-2">
          <div className="flex items-center gap-4 px-4 sm:px-5 lg:px-6">
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
                className="h-7 w-7 sm:h-8 sm:w-8"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>

            {featureBreadcrumb ? (
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[9px] font-medium uppercase tracking-[0.06em] text-quantum-blue">
                  <li className="flex items-center gap-1.5">
                    <Link
                      href={FEATURES_PAGE_HREF}
                      className="transition-colors hover:text-quantum-green"
                    >
                      Features
                    </Link>
                    <span aria-hidden className="text-quantum-blue/60">
                      &gt;
                    </span>
                  </li>
                  <li aria-current="page" className="text-quantum-blue/75">
                    {featureBreadcrumb.label}
                  </li>
                </ol>
              </nav>
            ) : null}
          </div>
        </section>
      )}

      {children}
    </div>
  );
}

export default OnCallSectionChrome;
