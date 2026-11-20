import Image from "next/image";
import type { ReactNode } from "react";
interface ProvenInMarketProps {
  body: ReactNode;
  /** CTA href, e.g. "/qlabs" */
  ctaHref?: string;
  ctaLabel?: string;
}

/**
 * "Proven in Market" callout — light gradient panel with a circular logo on the left
 * connected by a thin curved bracket to the title/body block on the right.
 */
export function ProvenInMarket({
  body,
  ctaHref = "#",
  ctaLabel = "Learn More about QLABS",
}: ProvenInMarketProps) {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="max-w-[1512px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[95px]">
        <div className="relative bg-gradient-to-br from-[#eaf3fb] via-white to-[#eaf6ee] rounded-[28px] px-6 sm:px-10 md:px-16 py-8 sm:py-14 max-w-[1129px] mx-auto">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            {/* Logo + bracket */}
            <Image
              width={100}
              height={100}
              alt=""
              aria-hidden="true"
              src="/service_assets/market.svg"
              className="object-contain mx-auto sm:mx-0"
            />

            {/* Content */}
            <div className="flex flex-col gap-5 max-w-full lg:max-w-[909px]">
              <h2 className="text-[30px] sm:text-[45px] font-bold leading-[36px] sm:leading-[50px] bg-gradient-to-r from-[#71bfff] to-[#79c99c] bg-clip-text text-transparent">
                Proven in Market
              </h2>
              <div className="text-steel-gray text-[15px] leading-[24px] flex flex-col gap-3">
                {body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
