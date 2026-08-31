import { Button } from "@/components/ui/button";
import type { StaticImageData } from "next/image";

import childIcon from "@/assets/images/products/intouch-why/child.30e105aa.png";
import entrepreneurshipIcon from "@/assets/images/products/intouch-why/entrepreneurship.fa2a96ee.png";
import ethicsIcon from "@/assets/images/products/intouch-why/ethics.d0d7fb11.png";
import responsiveIcon from "@/assets/images/products/intouch-why/responsive.537746a5.png";
import suitcaseIcon from "@/assets/images/products/intouch-why/suitcase.43517559.png";
import workFromHomeIcon from "@/assets/images/products/intouch-why/work-from-home.9cfda9a4.png";

const WHY_INTOUCH_BUY_NOW_URL = "https://locator.01com.com/ecommerce/?pid=5&b=1";
const WHY_INTOUCH_TRY_IT_FREE_URL = "https://locator.01com.com/ecommerce/?pid=5";

type WhyInTouchCard = {
  title: string;
  description: string;
  icon: StaticImageData;
};

const whyInTouchCards: WhyInTouchCard[] = [
  {
    title: "Working From Home",
    description:
      "Cannot be easier than remotely controlling your computer in the office as if you are physically there.",
    icon: workFromHomeIcon,
  },
  {
    title: "Mobile Device Users",
    description:
      "Can remote control their computers via our mobile apps and receive notifications when important emails arrive.",
    icon: responsiveIcon,
  },
  {
    title: "Lawyers and Accountants",
    description:
      "Can ensure all their emails and files never have to leave their offices. Hence, no more risk of losing confidential data.",
    icon: ethicsIcon,
  },
  {
    title: "Sales Professionals",
    description:
      "Can manage everything back at the distant computer from anywhere. No more sync or copy data.",
    icon: entrepreneurshipIcon,
  },
  {
    title: "Travellers",
    description:
      "Can enjoy anytime, anywhere remote access to their distant computers with no geographical boundary.",
    icon: suitcaseIcon,
  },
  {
    title: "Parents",
    description:
      "Can monitor and control their child's usage of the Internet by watching their activities in real-time.",
    icon: childIcon,
  },
];

function TintedPngIcon({
  icon,
  className,
}: {
  icon: StaticImageData;
  className: string;
}) {
  return (
    <span
      aria-hidden
      className={`block bg-quantum-blue ${className}`}
      style={{
        WebkitMaskImage: `url("${icon.src}")`,
        maskImage: `url("${icon.src}")`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

function WhyInTouchCard({ card }: { card: WhyInTouchCard }) {
  return (
    <article className="rounded-[24px] border border-[#D7DEE3] bg-white p-6 shadow-[0_14px_32px_rgba(27,27,39,0.06)] sm:p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[20px] bg-[#EEF7FF] ring-1 ring-[#D6EAFE]">
          <TintedPngIcon icon={card.icon} className="h-[42px] w-[42px]" />
        </div>

        <h3 className="text-[20px] font-medium leading-[30px] text-quantum-blue sm:text-[24px] sm:leading-[34px]">
          {card.title}
        </h3>
      </div>

      <p className="mt-6 text-[15px] leading-[24px] text-steel-gray sm:text-[16px] sm:leading-[28px]">
        {card.description}
      </p>
    </article>
  );
}

export default function InTouchWhySection() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
      <div className="mx-auto max-w-[1512px] px-6 pt-0 pb-10 md:px-[95px] md:pt-0 md:pb-14">
        <div className="mx-auto max-w-[920px] -mt-3 text-center md:-mt-5">
          <h2 className="text-[30px] font-medium leading-[40px] text-quantum-blue sm:text-[38px] sm:leading-[46px]">
            Why InTouch?
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button
              text="Buy Now"
              url={WHY_INTOUCH_BUY_NOW_URL}
              border="border-quantum-green"
              textColor="text-quantum-green"
              hoverBg="hover:bg-quantum-green/10"
              isBlank="true"
            />
            <Button
              text="Try It Free"
              url={WHY_INTOUCH_TRY_IT_FREE_URL}
              border="border-quantum-blue"
              textColor="text-quantum-blue"
              hoverBg="hover:bg-quantum-blue/10"
              isBlank="true"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {whyInTouchCards.map((card) => (
            <WhyInTouchCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
