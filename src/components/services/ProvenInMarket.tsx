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
    <section className="bg-white py-20">
      <div className="max-w-[1512px] mx-auto px-[95px]">
        <div className="relative bg-gradient-to-br from-[#eaf3fb] via-white to-[#eaf6ee] rounded-[28px] px-16 py-14 max-w-[1129px] mx-auto">
          <div className="flex gap-12">
            {/* Logo + bracket */}
            <Image
              width={100}
              height={100}
              alt=""
              aria-hidden="true"
              src="/service_assets/market.svg"
              className="object-contain"
            />

            {/* Content */}
            <div className="flex flex-col gap-5 max-w-[909px]">
              <h2 className="text-[45px] font-bold leading-[50px] bg-gradient-to-r from-[#71bfff] to-[#79c99c] bg-clip-text text-transparent">
                Proven in Market
              </h2>
              <div className="text-steel-gray text-[15px] leading-[24px] flex flex-col gap-3">
                {body}
              </div>
              <a
                href={ctaHref}
                className="text-steel-gray text-[14px] font-medium uppercase tracking-wide hover:text-quantum-blue transition-colors mt-2"
              >
                {ctaLabel} · · ·
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
