"use client";

import LottiePlayer from "@/components/LottiePlayer";
import OnCallLegacyHighlightsSection from "@/components/products/OnCallLegacyHighlightsSection";
import onCallIconAnim from "@/assets/animations/icon-IC-onCall.json";
import { Button } from "@/components/ui/button";
const Trademark = () => <sup className="text-[0.55em]">™</sup>;

/* ── Data ──────────────────────────────────────────────────────────── */
const onCallAdvantages = [
  {
    title: "Instant Live-Chat Support",
    body: "You can provide world-class Live Chat support to your customers within minutes. OnCall gives you private URLs for embedding into your web site. Simply implement a Live-Chat button with the given URL on your web site. Your customers can then request to chat with an agent easily. Each agent can have up to 10 simultaneous chat sessions to deal with volumes at peak times.",
  },
  {
    title: "Efficient Technical Support",
    body: "OnCall lets you setup a temporary connection to your customer's computer without any pre-installed software. You can quickly and efficiently resolve your customers' technical and IT support issues by remotely controlling their computers. Plus, your agents can login from anywhere in the world to support your customers, saving your time and traveling cost.",
  },
];

/* ── Component ─────────────────────────────────────────────────────── */
export default function IroncapOncall() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ══ OnCall section ══════════════════════════════════════════ */}
      <section id="ironcap-oncall" className="bg-white text-black scroll-mt-24">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] pb-12 md:pb-20">
          {/* Product intro */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-14">
            {/* Lottie icon */}
            <div className="flex-shrink-0 w-[100px] md:w-[130px] pt-6 md:pt-2">
              <LottiePlayer src={onCallIconAnim} className="w-full" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 max-w-[1140px] pt-2 md:pt-10">
              <h2 className="text-[#71bfff] text-[24px] md:text-[30px] font-medium leading-[34px] md:leading-[46px]">
                IronCAP
                <Trademark /> OnCall
              </h2>
              <p className="text-[#79c99c] text-[17px] md:text-[20px] font-medium leading-[26px] md:leading-[34px]">
                End-to-End, Quantum-Safe Customer Support
              </p>
              <p className="text-[#6e8090] text-[15px] leading-[24px]">
                IronCAP<sup className="text-[9.675px]">™</sup> OnCall is a
                cost-effective, secure online help desk software which allows
                organizations to offer remote support over the Internet to their
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OnCall Key Advantages ─────────────────────────────────── */}
      <section className="relative overflow-hidden text-white bg-black">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-12 md:py-20">
          <h3 className="text-[#71bfff] text-[24px] md:text-[30px] font-medium leading-[34px] md:leading-[46px] mb-8 md:mb-10">
            Key Advantages
          </h3>

          <div className="relative">
            {/* Centre vertical divider (only on md+) */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-white/15 pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-36 gap-y-8">
              {onCallAdvantages.map((adv, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <p className="text-[#79c99c] text-[16px] md:text-[18px] font-semibold leading-[20px] uppercase">
                    {adv.title}
                  </p>
                  <p className="text-white text-[15px] leading-[24px]">
                    {adv.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 mt-16">
            <Button
              text="brochure"
              url="https://www.01com.com/pdf/brochures/IIT%20Brochure.pdf"
              border="border-quantum-green"
              textColor="text-quantum-green"
              hoverBg="hover:bg-quantum-green/10"
              isBlank="true"
            />
          </div>
        </div>
      </section>

      <OnCallLegacyHighlightsSection />
    </main>
  );
}
