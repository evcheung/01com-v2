"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ResourceMenuItem = {
  label: string;
  href: string;
};

export const resourceMenuItems: ResourceMenuItem[] = [
  { label: "News", href: "/resources/news" },
  { label: "Press Releases", href: "/resources/press_releases" },
  { label: "Reviews + Awards", href: "/resources/reviews_awards" },
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
    <section className="bg-black h-[88px] relative flex items-center justify-center">
      {/* Top divider line */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-[15px] h-px w-[806px] bg-white/30"
      />
      <ul className="flex items-center gap-6 text-[12px]">
        {resourceMenuItems.map((m, i) => {
          const active = pathname === m.href;
          return (
            <li key={m.label} className="flex items-center gap-6">
              <Link
                href={m.href}
                aria-current={active ? "page" : undefined}
                className={`${
                  active
                    ? "text-quantum-blue font-semibold"
                    : "text-white hover:text-quantum-blue"
                } transition-colors`}
              >
                {m.label}
              </Link>
              {i < resourceMenuItems.length - 1 && (
                <span aria-hidden className="text-white/50">
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
