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
  "I'm OnCall's Shareable Licenses means you can have as many technicians as you want without having to purchase one license for each technician.",
  "You can personalize your I'm OnCall pages by using your company's logo.",
  "There is no pre-loaded software required for a remote session.",
  "You can support more than one customer at a time from the same machine.",
  "I'm OnCall is a secure encrypted connection.",
  "I'm OnCall can support computers behind firewalls without opening ports.",
  "A customer has the ability to start a chat session or terminate the session at any time.",
  "You can support Mac customers.",
  "Technicians can transfer files and folders.",
  "You will automatic reconnect after rebooting a customer's machine.",
  "Customers can join a remote support session by directly entering the Session ID.",
];

const pressEndorsement = {
  imageSrc:
    "https://cdn.sanity.io/images/7o47py1b/production/44619fde8cfca29449338928ae6fdb079acc7130-131x84.jpg",
  imageAlt: "Enterprise Security Magazine editor's choice award",
  articleHref:
    "https://www.enterprisesecuritymag.com/magazines/November2021/Access_Control/#page=20",
};

type HighlightMode = "all" | "news" | "usage" | "press";

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

function NewsUpdatesCard() {
  return (
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
  );
}

function UsageTipsCard() {
  const [activeTipIndex, setActiveTipIndex] = useState(0);
  const activeTip = usageTips[activeTipIndex];

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
    <article className="flex h-full flex-col rounded-[24px] border border-[#D7DEE3] bg-white p-6 shadow-[0_14px_32px_rgba(27,27,39,0.06)] sm:p-8">
      <CardHeader
        iconSrc="/product_assets/practical.svg"
        title="Usage Tips"
      />

      <div className="mt-6 flex-1 rounded-[20px] border border-[#D7DEE3] bg-[#F7FBFF] p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-quantum-green">
            Tip {activeTipIndex + 1} of {usageTips.length}
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
        <CardCta href="/products/ironcap-oncall/features">Learn More</CardCta>
      </div>
    </article>
  );
}

function PressEndorsementCard() {
  return (
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
  );
}

export default function OnCallLegacyHighlightsSection({
  mode = "all",
}: {
  mode?: HighlightMode;
}) {
  const content =
    mode === "all" ? (
      <div className="grid items-stretch gap-6 xl:grid-cols-3 xl:gap-8">
        <NewsUpdatesCard />
        <UsageTipsCard />
        <PressEndorsementCard />
      </div>
    ) : (
      <div className="mx-auto w-full max-w-[560px]">
        {mode === "news" ? <NewsUpdatesCard /> : null}
        {mode === "usage" ? <UsageTipsCard /> : null}
        {mode === "press" ? <PressEndorsementCard /> : null}
      </div>
    );

  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)] py-12 md:py-16">
      <div className="mx-auto max-w-[1512px] px-6 md:px-[95px]">{content}</div>
    </section>
  );
}
