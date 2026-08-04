"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ResourceMenuItem = {
  label: string;
  href: string;
};

const resourceMenuItems: ResourceMenuItem[] = [
  { label: "Brochures", href: "/resources/brochures" },
  { label: "White Papers", href: "/resources/white-papers-use-cases" },
  { label: "Videos", href: "/resources/videos" },
];

const pressRoomMenuItems: ResourceMenuItem[] = [
  { label: "Press Releases", href: "/resources/press-releases" },
  { label: "Newsletters", href: "/resources/newsletters" },
];

const pressRoomPaths = [
  "/resources/press-releases-newsletters",
  "/resources/press-releases",
  "/resources/newsletters",
];

const blogPaths = ["/resources/blog"];
const intellectualPropertiesPaths = ["/resources/intellectual-properties"];

/**
 * ResourcesSubMenu
 * ────────────────
 * Black sub-navigation bar shown on every page under /resources.
 * The active item is determined from the current pathname.
 */
export function ResourcesSubMenu() {
  const pathname = usePathname() ?? "";
  const isPressRoom = pressRoomPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
  const isBlog = blogPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
  const isIntellectualProperties = intellectualPropertiesPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
  const menuItems = isPressRoom ? pressRoomMenuItems : resourceMenuItems;

  if (isBlog || isIntellectualProperties) return null;

  return (
    <section className="bg-black relative flex items-center justify-center py-4 sm:py-5 lg:h-[88px] lg:py-0">
      {/* Top divider line */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-[15px] h-px w-[806px] max-w-[calc(100%-3rem)] bg-white/30"
      />
      {/* Responsive resource tabs */}
      <ul className="grid grid-cols-2 gap-x-6 gap-y-3 px-6 text-[12px] sm:grid-cols-3 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-4 lg:gap-y-3 lg:px-8 xl:gap-x-6">
        {menuItems.map((m, i) => {
          const active = pathname === m.href || pathname.startsWith(`${m.href}/`);
          return (
            <li key={m.label} className="flex items-center justify-center gap-4 lg:gap-4 lg:justify-start xl:gap-6">
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
              {i < menuItems.length - 1 && (
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
