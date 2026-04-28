import type { ReactNode } from "react";
import LottiePlayer from "@/components/LottiePlayer";
import { Section } from "./Section";

interface ServiceIntroProps {
  /** Lottie JSON imported via require("@/assets/animations/...") */
  animation: object;
  heading: ReactNode;
  body: ReactNode;
  /** Optional sub-heading shown below body in quantum-blue (e.g. "Apply certified, industry-standard..."). */
  subheading?: ReactNode;
  /** Whether to render a divider line at the top of the section (used for stacked black sections). */
  topDivider?: boolean;
  id?: string;
}

/**
 * Reusable intro block: icon-on-left + heading + body, on a black background.
 * Used for the 3 service intros on the Services page (QAW, Digital Asset Protection, Open Source Crypto).
 */
export function ServiceIntro({
  animation,
  heading,
  body,
  subheading,
  topDivider = false,
  id,
}: ServiceIntroProps) {
  return (
    <Section
      id={id}
      bg="bg-black"
      className="pb-16"
      innerClassName="text-white"
    >
      {topDivider ? (
        <div
          aria-hidden="true"
          className="h-px bg-white/10 mb-12"
        />
      ) : null}

      <div className="flex gap-8">
        <div className="flex-shrink-0 w-[130px]">
          <LottiePlayer
            src={animation}
            className="w-[130px] h-[168px]"
          />
        </div>

        <div className="flex flex-col gap-4 max-w-[1140px]">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[40px]">
            {heading}
          </h2>

          {subheading ? (
            <p className="text-quantum-blue text-[18px] font-medium leading-[26px]">
              {subheading}
            </p>
          ) : null}

          <div className="text-white/70 text-[15px] leading-[24px] flex flex-col gap-3">
            {body}
          </div>
        </div>
      </div>
    </Section>
  );
}
