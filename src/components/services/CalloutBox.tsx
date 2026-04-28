import type { ReactNode } from "react";
import LottiePlayer from "@/components/LottiePlayer";

interface CalloutBoxProps {
  animation: object;
  heading: ReactNode;
  body: ReactNode;
  /** Optional bullet list rendered after the body. */
  bullets?: ReactNode;
}

/**
 * "Real-World Integration Experience" style callout: rounded dark box on a black band,
 * with a Lottie graphic on the left and copy on the right.
 */
export function CalloutBox({
  animation,
  heading,
  body,
  bullets,
}: CalloutBoxProps) {
  return (
    <section className="bg-[##171515] py-20">
      <div className="max-w-[1512px] mx-auto px-[95px]">
        <div className="bg-[#000000] border border-white/10 rounded-[28px] flex items-center gap-10 px-12 py-10 max-w-[1107px] mx-auto">
          <div className="flex-shrink-0 w-[260px] h-auto">
            <LottiePlayer src={animation} className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-4 flex-1 text-white">
            <h3 className="text-quantum-blue text-[28px] font-semibold leading-[34px]">
              {heading}
            </h3>
            <div className="text-lite-gray text-[15px] leading-[24px]">
              {body}
            </div>
            {bullets ? (
              <div className="text-[14px] leading-[22px] flex flex-col gap-2">
                {bullets}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
