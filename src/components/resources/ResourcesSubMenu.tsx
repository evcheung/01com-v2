"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ResourceMenuItem = {
  label: string;
  href: string;
};

export const resourceMenuItems: ResourceMenuItem[] = [
  { label: "News", href: "/resources/news" },
  { label: "Press Releases", href: "/resources/press-releases" },
  { label: "Reviews + Awards", href: "/resources/rewards" },
  { label: "Newsletters", href: "/resources/newsletters" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Documents", href: "/resources/documents" },
];

/**
 * ResourcesSubMenu
 * ────────────────
 * Black sub-navigation bar shown on every page under /resources.
 * The active item is determined from the current pathname.
 */
export function ResourcesSubMenu() {
  const pathname = usePathname();

  return (
    <section className="bg-black relative flex items-center justify-center py-5 md:h-[88px] md:py-0">
      {/* Top divider line */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-[15px] h-px w-[806px] bg-white/30"
      />
      {/* Mobile: 3-col × 2-row grid | Desktop: single row */}
      <ul className="grid grid-cols-3 gap-x-6 gap-y-4 text-[12px] md:flex md:items-center md:gap-6">
        {resourceMenuItems.map((m, i) => {
          const active = pathname === m.href;
          return (
            <li key={m.label} className="flex items-center justify-center gap-6 md:justify-start">
              <Link
                href={m.href}
                aria-current={active ? "page" : undefined}
                className={`${
                  active
                    ? "text-quantum-blue font-semibold"
                    : "text-white hover:text-quantum-blue"
                } transition-colors text-center md:text-left`}
              >
                {m.label}
              </Link>
              {/* Separator only visible in desktop row layout */}
              {i < resourceMenuItems.length - 1 && (
                <span aria-hidden className="hidden text-white/50 md:inline">
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
