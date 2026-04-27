import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  bg?: string;
  className?: string;
  innerClassName?: string;
  id?: string;
}

/**
 * Reusable section wrapper for the Services page.
 * Caps the inner content to 1512px and applies the standard horizontal padding,
 * while the outer band can stretch full-width with any background.
 */
export function Section({
  children,
  bg = "bg-black",
  className = "",
  innerClassName = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div
        className={`max-w-[1512px] mx-auto px-[95px] ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
