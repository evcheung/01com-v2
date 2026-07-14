"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ResourceMenuItem = {
  label: string;
  href: string;
};

export const resourceMenuItems: ResourceMenuItem[] = [
  { label: "Brochures", href: "/resources/brochures" },
  {
    label: "White Papers & Use Cases",
    href: "/resources/white-papers-use-cases",
  },
  { label: "Videos", href: "/resources/videos" },
  // { label: "News", href: "/resources/news" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Newsletters", href: "/resources/newsletters" },
  { label: "Reviews + Awards", href: "/resources/rewards" },
  { label: "Press Releases", href: "/resources/press-releases" },
  { label: "Intellectual Properties", href: "/resources/intellectual-properties" },
];

/**
 * ResourcesSubMenu
 * ────────────────
 * Black sub-navigation bar shown on every page under /resources.
 * The active item is determined from the current pathname.
 */
export function ResourcesSubMenu() {
  const pathname = usePathname() ?? "";

  return (
    <section className="bg-black relative flex items-center justify-center py-4 sm:py-5 lg:h-[88px] lg:py-0">
      {/* Top divider line */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-[15px] h-px w-[806px] max-w-[calc(100%-3rem)] bg-white/30"
      />
      {/* Mobile: 3-col × 2-row grid | Desktop: single row */}
      <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[12px] sm:grid-cols-3 lg:flex lg:items-center lg:gap-6">
        {resourceMenuItems.map((m, i) => {
          const active = pathname === m.href;
          return (
            <li key={m.label} className="flex items-center justify-center gap-4 lg:gap-6 lg:justify-start">
              <Link
                href={m.href}
                aria-current={active ? "page" : undefined}
                className={`${
                  active
                    ? "text-quantum-blue font-semibold"
                    : "text-white hover:text-quantum-blue"
                } transition-colors text-center lg:text-left`}
              >
                {m.label}
              </Link>
              {/* Separator only visible in desktop row layout */}
              {i < resourceMenuItems.length - 1 && (
                <span aria-hidden className="hidden text-white/50 lg:inline">
                  |
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ResourcesSubMenu;
