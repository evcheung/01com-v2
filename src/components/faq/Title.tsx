"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type FaqMenuItem = {
  /** Plain-text label (used for active matching / a11y). */
  label: string;
  /** Optional rich label (e.g. with trademark <sup>). Falls back to `label`. */
  display?: React.ReactNode;
  href: string;
};

const Trademark = () => <sup className="text-[0.55em]">™</sup>;

export const faqMenuItems: FaqMenuItem[] = [
  {
    label: "IronCAP X",
    display: (
      <>
        IronCAP X<Trademark />
      </>
    ),
    href: "/faq/ironcap-x",
  },
  {
    label: "IronCAP InTouch",
    display: (
      <>
        IronCAP<Trademark /> InTouch
      </>
    ),
    href: "/faq/ironcap-intouch",
  },
  {
    label: "IronCAP OnCall",
    display: (
      <>
        IronCAP<Trademark /> OnCall
      </>
    ),
    href: "/faq/ironcap-oncall",
  },
];

/**
 * FAQ Title
 * ─────────
 * Shared page header used across all `/faq/*` pages. Renders:
 *   1. Black "FAQ" page-title bar.
 *   2. Black sub-menu bar with the FAQ category links. The active item
 *      (matched against the current pathname) is highlighted in quantum blue.
 */
export function Title({ title = "FAQ" }: { title?: string }) {
  const pathname = usePathname();

  return (
    <div
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ─── Page Title ─── */}
      <section className="bg-black flex items-center px-24 min-h-[196px]">
        <h1 className="text-white text-[50px] font-medium leading-[50px]">
          {title}
        </h1>
      </section>

      {/* ─── Sub Menu ─── */}
      <section className="bg-black relative flex items-center justify-center py-5 md:h-[88px] md:py-0">
        {/* Top divider line */}
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 top-[15px] h-px w-[806px] max-w-[90%] bg-white/30"
        />
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px]">
          {faqMenuItems.map((m, i) => {
            const active = pathname === m.href;
            return (
              <li key={m.label} className="flex items-center gap-6">
                <Link
                  href={m.href}
                  aria-current={active ? "page" : undefined}
                  className={`${
                    active
                      ? "text-quantum-blue font-medium"
                      : "text-white hover:text-quantum-blue"
                  } transition-colors`}
                >
                  {m.display ?? m.label}
                </Link>
                {i < faqMenuItems.length - 1 && (
                  <span aria-hidden className="text-white/50">
                    |
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Title;
