import Image from "next/image";

import discountBanner from "@/assets/images/products/oncall-referral-discount.png";

function OnCallTrademarkName() {
  return (
    <>
      IronCAP
      <sup className="ml-0.5 align-super text-[0.48em] font-semibold">TM</sup>
      {" "}OnCall
    </>
  );
}

export default function OnCallReferralDiscountSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
      <div className="mx-auto max-w-[1512px] px-6 pb-16 md:px-[95px] md:pb-20">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-[30px] font-medium leading-[40px] text-quantum-blue sm:text-[38px] sm:leading-[46px]">
            Tell a Friend
          </h2>
          <p className="mt-4 text-[15px] leading-[26px] text-steel-gray sm:text-[16px] sm:leading-[28px]">
            Spread the word to your friends and family about this great remote
            support tool. You can quickly entice them for a free and no
            obligation 30-day trial. As a token of our appreciation, we will
            send you a Promotional Code to take a 20% off your{" "}
            <OnCallTrademarkName /> subscription fee.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="overflow-hidden rounded-[24px] border border-[#D7DEE3] bg-white p-3 shadow-[0_18px_44px_rgba(27,27,39,0.06)]">
              <Image
                src={discountBanner}
                alt="IOC Discount"
                priority
                className="h-auto w-full max-w-[291px] rounded-[16px]"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[980px] rounded-[28px] border border-[#D7DEE3] bg-white p-6 shadow-[0_18px_44px_rgba(27,27,39,0.06)] sm:p-8 md:mt-14 md:p-10">
          <div>
            <p className="text-[16px] font-semibold leading-[24px] text-quantum-blue">
              Email address(es) to receive this invitation:
            </p>
            <p className="mt-2 text-[15px] leading-[24px] text-steel-gray">
              Email address(es) to receive this invitation: (up to 10 addresses
              by separating them with semicolons &apos;;&apos;)
            </p>
            <input
              type="text"
              className="mt-4 h-12 w-full rounded-[16px] border border-[#D7DEE3] bg-white px-4 text-[15px] text-steel-gray outline-none transition-colors focus:border-quantum-green focus:ring-2 focus:ring-quantum-green/15"
            />
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-[16px] font-semibold leading-[24px] text-quantum-blue">
                Your name:
              </span>
              <input
                type="text"
                className="mt-4 h-12 w-full rounded-[16px] border border-[#D7DEE3] bg-white px-4 text-[15px] text-steel-gray outline-none transition-colors focus:border-quantum-green focus:ring-2 focus:ring-quantum-green/15"
              />
            </label>

            <label className="block">
              <span className="text-[16px] font-semibold leading-[24px] text-quantum-blue">
                Your email address:
              </span>
              <input
                type="email"
                className="mt-4 h-12 w-full rounded-[16px] border border-[#D7DEE3] bg-white px-4 text-[15px] text-steel-gray outline-none transition-colors focus:border-quantum-green focus:ring-2 focus:ring-quantum-green/15"
              />
            </label>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="inline-flex min-w-[130px] items-center justify-center rounded-bl-lg rounded-tr-lg border border-quantum-green px-6 py-3 text-[12px] font-medium uppercase tracking-widest text-quantum-green transition-colors hover:bg-quantum-green/10"
            >
              Send
            </button>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-[24px] text-steel-gray">
          Note: Your email address must be valid in order to receive the 20%
          off Promotional Code.
        </p>
      </div>
    </section>
  );
}
