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
            <div className="flex flex-col items-center flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                aria-hidden="true"
                src="/home_assets/bracket_bottom.svg"
                className="w-[60px] h-[60px]"
                style={{ transform: "scaleY(-1)" }}
              />
              <div className="my-2 w-12 h-12 rounded-full border border-lite-gray flex items-center justify-center text-quantum-blue text-[18px] font-bold">
                01
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                aria-hidden="true"
                src="/home_assets/bracket_bottom.svg"
                className="w-[60px] h-[60px]"
              />
            </div>

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
