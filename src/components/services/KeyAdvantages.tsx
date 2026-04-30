import type { ReactNode } from "react";
import Image from "next/image";
import { Section } from "./Section";

export interface Advantage {
  /** Sub-heading shown in green uppercase (e.g. "HYBRID FHE OPTIMIZATIONS"). */
  title: string;
  /** Body copy shown beneath the sub-heading. */
  description: string;
  /** Optional rich content rendered after the description (e.g. inline highlights). */
  extra?: ReactNode;
  /** Optional icon filename shown next to the title. */
  icon?: string;
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

      <div className="grid grid-cols-2 divide-x divide-lite-gray/40">
        {[items.filter((_, i) => i % 2 === 0), items.filter((_, i) => i % 2 !== 0)].map(
          (col, colIdx) => (
            <div key={colIdx} className="flex flex-col divide-y divide-lite-gray/40">
              {col.map((item) => (
                <div
                  key={item.title}
                  className={[
                    "relative py-8",
                    colIdx === 0 ? "pr-10" : "pl-10",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {item.icon ? (
                      <Image src={item.icon} alt="" width={20} height={20} className="flex-shrink-0" />
                    ) : (
                      <DefaultAdvantageIcon />
                    )}
                    <h3 className="text-quantum-green text-[16px] font-semibold uppercase tracking-wide leading-none">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-steel-gray text-[15px] leading-[22px] max-w-[480px]">
                    {item.description}
                  </p>
                  {item.extra ? <div className="mt-3">{item.extra}</div> : null}                  
                </div>
              ))}
            </div>
          )
        )}
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
