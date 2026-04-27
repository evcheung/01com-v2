import type { ReactNode } from "react";
import { Section } from "./Section";

export interface Advantage {
  /** Sub-heading shown in green uppercase (e.g. "HYBRID FHE OPTIMIZATIONS"). */
  title: string;
  /** Body copy shown beneath the sub-heading. */
  description: string;
  /** Optional rich content rendered after the description (e.g. inline highlights). */
  extra?: ReactNode;
  /** Optional small decorative icon shown next to the title. */
  icon?: ReactNode;
}

interface KeyAdvantagesProps {
  /** 2-column grid; supports any number but designed for 4 items. */
  items: Advantage[];
}

/**
 * Reusable "Key Advantages" block used three times on the Services page.
 */
export function KeyAdvantages({ items }: KeyAdvantagesProps) {
  return (
    <Section bg="bg-white" className="py-20">
      <h2 className="text-quantum-blue text-[30px] font-medium leading-[30px] mb-10">
        Key Advantages
      </h2>

      <div className="grid grid-cols-2 gap-x-10">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isFirstRow = index < 2;
          return (
            <div
              key={item.title}
              className={[
                "relative px-4 py-8",
                isLeft ? "pr-8" : "pl-8",
                isFirstRow ? "" : "border-t border-lite-gray/40",
                isLeft ? "border-r border-lite-gray/40" : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-2 mb-3">
                {item.icon ?? <DefaultAdvantageIcon />}
                <h3 className="text-quantum-green text-[16px] font-semibold uppercase tracking-wide leading-none">
                  {item.title}
                </h3>
              </div>
              <p className="text-steel-gray text-[15px] leading-[22px] max-w-[480px]">
                {item.description}
              </p>
              {item.extra ? <div className="mt-3">{item.extra}</div> : null}

              {/* Decorative dot at the divider crossings (top of every left-col item starting on row 2) */}
              {!isFirstRow && isLeft ? (
                <span
                  aria-hidden="true"
                  className="absolute -top-[3px] right-0 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-lite-gray"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function DefaultAdvantageIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0 text-lite-gray"
    >
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="10" cy="10" r="1.6" fill="currentColor" />
    </svg>
  );
}
