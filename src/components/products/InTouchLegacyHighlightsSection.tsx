"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const newsUpdates = [
  {
    label: "I'm InTouch v11 is available",
    href: "https://www.01com.com/imintouch/v11.0/en/",
  },
  {
    label: "Read this month's newsletter",
    href: "https://www.01com.com/newsletter/Latest/letter01.html",
  },
];

const usageTips = [
  "You can temporarily add Guest Users to I'm InTouch, perfect for conducting online meetings and presentations.",
  "You can remotely control your I'm InTouch computer using a Pocket PC with an Internet connection.",
  "You can discreetly monitor your children's computer activities using I'm InTouch's Stealth Mode.",
  "I'm InTouch can notify your cell phone whenever you receive an email on your computer.",
  "You can print files from your distant computer to a local printer using I'm InTouch.",
  "With the Remote Audio feature, you can listen to music on your distant PC from anywhere.",
  "You can remotely view all the monitors connected to your Host PC using I'm InTouch's Multi Monitor feature.",
  "You can stream video from a webcam on your Host PC to any Computer or Pocket PC.",
  "You can view a list of all your computers on one screen and access them with a single click in I'm InTouch.",
  "You can access your computer even if it is turned off with the I'm InTouch Wake-up feature.",
  "I'm InTouch provides you with direct access to your Outlook or Windows Mail Emails from any wireless device.",
  "You can transfer files between your computers using I'm InTouch's File Transfer feature.",
];

const pressEndorsement = {
  imageSrc:
    "https://cdn.sanity.io/images/7o47py1b/production/44619fde8cfca29449338928ae6fdb079acc7130-131x84.jpg",
  imageAlt: "top remote access companies 2021",
  articleHref:
    "https://www.enterprisesecuritymag.com/magazines/November2021/Access_Control/#page=20",
};

function LinkArrowIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-6 w-8 shrink-0 text-quantum-blue"
    >
      <path d="M5 12h18" />
      <path d="m17 6 6 6-6 6" />
    </svg>
  );
}

function CardHeader({
  iconSrc,
  title,
}: {
  iconSrc: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[20px] bg-[#EEF7FF] ring-1 ring-[#D6EAFE]">
        <Image src={iconSrc} alt="" aria-hidden width={42} height={42} />
      </div>

      <h2 className="text-[22px] font-medium leading-[30px] text-quantum-blue sm:text-[24px] sm:leading-[34px]">
        {title}
      </h2>
    </div>
  );
}

function CardCta({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex self-start text-[12px] font-semibold uppercase tracking-[0.12em] text-quantum-blue transition-colors hover:text-quantum-green"
    >
      {children}
    </Link>
  );
}

export default function InTouchLegacyHighlightsSection() {
  const [activeTipIndex, setActiveTipIndex] = useState(0);

  const activeTip = usageTips[activeTipIndex];
  const activeTipNumber = activeTipIndex + 1;

  const showPreviousTip = () => {
    setActiveTipIndex((current) =>
      current === 0 ? usageTips.length - 1 : current - 1,
    );
  };

  const showNextTip = () => {
    setActiveTipIndex((current) =>
      current === usageTips.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)] py-12 md:py-16">
        <div className="mx-auto max-w-[1512px] px-6 md:px-[95px]">
          <div className="grid items-stretch gap-6 xl:grid-cols-3 xl:gap-8">
            <article className="flex h-full flex-col rounded-[24px] border border-[#D7DEE3] bg-white p-6 shadow-[0_14px_32px_rgba(27,27,39,0.06)] sm:p-8">
              <CardHeader
                iconSrc="/resources_assets/news_i.svg"
                title="News & Updates"
              />

              <div className="mt-6 flex-1">
                {newsUpdates.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[72px] items-start justify-between gap-5 border-t border-[#D7DEE3] py-4"
                  >
                    <span className="text-[15px] leading-[24px] text-steel-gray transition-colors group-hover:text-quantum-blue">
                      {item.label}
                    </span>
                    <LinkArrowIcon />
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <CardCta href="/resources/newsletters">View All</CardCta>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-[24px] border border-[#D7DEE3] bg-white p-6 shadow-[0_14px_32px_rgba(27,27,39,0.06)] sm:p-8">
              <CardHeader
                iconSrc="/product_assets/practical.svg"
                title="Usage Tips"
              />

              <div className="mt-6 flex-1 rounded-[20px] border border-[#D7DEE3] bg-[#F7FBFF] p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-quantum-green">
                    Tip {activeTipNumber} of {usageTips.length}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={showPreviousTip}
                      aria-label="Previous usage tip"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#D7DEE3] text-quantum-blue transition-colors hover:border-quantum-blue hover:bg-white"
                    >
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={showNextTip}
                      aria-label="Next usage tip"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#D7DEE3] text-quantum-blue transition-colors hover:border-quantum-blue hover:bg-white"
                    >
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m9 6 6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mt-4 line-clamp-5 text-[15px] leading-[24px] text-steel-gray">
                  {activeTip}
                </p>
              </div>

              <div className="mt-6">
                <CardCta href="/products/ironcap-intouch/features">
                  Learn More
                </CardCta>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-[24px] border border-[#D7DEE3] bg-white p-6 shadow-[0_14px_32px_rgba(27,27,39,0.06)] sm:p-8">
              <CardHeader
                iconSrc="/resources_assets/rewar_i.svg"
                title="Press Endorsements"
              />

              <a
                href={pressEndorsement.articleHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex flex-1 items-center justify-center rounded-[20px] border border-[#D7DEE3] bg-[#F7FBFF] p-6 transition-colors hover:border-[#BFD7E8] sm:p-8"
              >
                <Image
                  src={pressEndorsement.imageSrc}
                  alt={pressEndorsement.imageAlt}
                  width={131}
                  height={84}
                  className="h-auto w-full max-w-[180px] object-contain"
                />
              </a>

              <div className="mt-6">
                <CardCta href="/resources/rewards">Learn More</CardCta>
              </div>
            </article>
          </div>
        </div>
    </section>
  );
}
