"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  getProductFeatureBreadcrumb,
  normalizeProductPath,
  ProductFeatureBreadcrumb,
} from "@/components/products/ProductFeatureBreadcrumb";

export const inTouchSectionItems = [
  { label: "Features", href: "/products/ironcap-intouch/features" },
  { label: "Why InTouch?", href: "/products/ironcap-intouch/why-intouch" },
  { label: "Support", href: "/products/ironcap-intouch/support" },
  {
    label: "Pricing and Comparison",
    href: "/products/ironcap-intouch/pricing-and-comparison",
  },
];

const MAIN_PAGE_HREF = "/products/ironcap-intouch";
const FEATURES_PAGE_HREF = "/products/ironcap-intouch/features";

const featureDetailLabels: Record<string, string> = {
  "2-factor-authentication": "2-Factor Authentication",
  "ldap-authentication": "LDAP Authentication",
  "mac-address-restriction": "MAC Address Restriction",
  "remote-wakeup": "Remote Wakeup",
  "remote-control": "Remote Control",
  "remote-printing": "Remote Printing",
  "file-transfer": "File Transfer",
  "remote-audio": "Remote 2-Way Audio",
  "multi-monitor": "Multi-monitor",
  "email-notification": "Notification of Important Emails",
  "outlook-access": "Access your Outlook Inbox",
  "central-administration": "Central Administration",
};

export function InTouchSectionChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = normalizeProductPath(usePathname());
  const featureBreadcrumb = getProductFeatureBreadcrumb({
    pathname,
    featuresPageHref: FEATURES_PAGE_HREF,
    featureDetailLabels,
  });
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
          {inTouchSectionItems.map((item, i) => {
            const normalizedHref = normalizeProductPath(item.href);
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
                {i < inTouchSectionItems.length - 1 && (
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
              aria-label="Back to IronCAP InTouch"
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
              <ProductFeatureBreadcrumb
                label={featureBreadcrumb.label}
                featuresPageHref={FEATURES_PAGE_HREF}
              />
            ) : null}
          </div>
        </section>
      )}

      {children}
    </div>
  );
}

export default InTouchSectionChrome;
