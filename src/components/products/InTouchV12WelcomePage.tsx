import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import infinityIcon from "@/assets/images/products/intouch-features/infinity.fe7e6c27.png";
import outlookIcon from "@/assets/images/products/intouch-features/outlook.6feddd19.png";
import puzzleIcon from "@/assets/images/products/intouch-features/puzzle.13a0b0c9.png";
import shieldIcon from "@/assets/images/products/intouch-features/shield-2.686efb10.png";
import InTouchProductTitle from "@/components/products/InTouchProductTitle";

const FEATURE_BASE_PATH = "/imintouch-remote-pc-desktop/features";

type FeatureItem = {
  description: string;
  href?: string;
};

type FeatureGroup = {
  title: string;
  icon: StaticImageData;
  tintIcon?: boolean;
  columns?: 1 | 2;
  items: FeatureItem[];
};

const featureGroups: FeatureGroup[] = [
  {
    title: "Zero-Trust Security",
    icon: shieldIcon,
    columns: 1,
    items: [
      { description: "End-to-end encryption to maintain 100% privacy" },
      {
        description: "2-Factor Authentication",
        href: `${FEATURE_BASE_PATH}/2-factor-authentication`,
      },
      {
        description: "LDAP authentication",
        href: `${FEATURE_BASE_PATH}/ldap-authentication`,
      },
      {
        description: "MAC address restriction",
        href: `${FEATURE_BASE_PATH}/mac-address-restriction`,
      },
      {
        description: "Wake up a remote computer that is powered off",
        href: `${FEATURE_BASE_PATH}/remote-wakeup`,
      },
    ],
  },
  {
    title: "Every Feature You Need",
    icon: puzzleIcon,
    columns: 2,
    items: [
      {
        description: "Unlimited remote access",
        href: `${FEATURE_BASE_PATH}/remote-control`,
      },
      {
        description: "Remote printing",
        href: `${FEATURE_BASE_PATH}/remote-printing`,
      },
      {
        description: "File transfer",
        href: `${FEATURE_BASE_PATH}/file-transfer`,
      },
      {
        description: "Remote 2-way audio",
        href: `${FEATURE_BASE_PATH}/remote-audio`,
      },
      {
        description: "Multi-monitor support",
        href: `${FEATURE_BASE_PATH}/multi-monitor`,
      },
      { description: "Free mobile apps" },
      { description: "Keyboard/mouse lock" },
      { description: "Blanking screen" },
      { description: "Clipboard sync" },
      { description: "Whiteboard" },
    ],
  },
  {
    title: "Outlook Mobilization",
    icon: outlookIcon,
    tintIcon: false,
    columns: 1,
    items: [
      {
        description: "Notify your mobile device upon receiving important emails",
        href: `${FEATURE_BASE_PATH}/email-notification`,
      },
      {
        description: "Access your Outlook Inbox remotely",
        href: `${FEATURE_BASE_PATH}/outlook-access`,
      },
    ],
  },
  {
    title: "Unlimited Scalability",
    icon: infinityIcon,
    columns: 1,
    items: [
      {
        description:
          "Central users administration for 1 to unlimited number of users",
        href: `${FEATURE_BASE_PATH}/central-administration`,
      },
      { description: "Users grouping" },
    ],
  },
];

function InTouchTrademarkName() {
  return (
    <>
      IronCAP<sup className="text-[0.55em]">™</sup> InTouch
    </>
  );
}

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

function LinkIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      className="mt-1 h-5 w-5 shrink-0 text-quantum-blue"
    >
      <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.9 5.03" />
      <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07l1.22-1.22" />
    </svg>
  );
}

function FeatureItemRow({ item }: { item: FeatureItem }) {
  const content = (
    <>
      <span className="text-[15px] leading-[24px] text-steel-gray transition-colors group-hover:text-quantum-blue">
        {item.description}
      </span>
      {item.href ? <LinkIcon /> : null}
    </>
  );

  const className =
    "group flex min-h-[64px] items-start justify-between gap-5 border-t border-[#D7DEE3] py-4";

  if (!item.href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  );
}

function FeatureGroupCard({ group }: { group: FeatureGroup }) {
  return (
    <article className="grid gap-6 rounded-[24px] border border-[#D7DEE3] bg-white p-6 shadow-[0_14px_32px_rgba(27,27,39,0.06)] sm:p-8 lg:grid-cols-[240px_1fr] lg:gap-10">
      <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:justify-center">
        <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[20px] bg-[#EEF7FF] ring-1 ring-[#D6EAFE]">
          {group.tintIcon === false ? (
            <Image
              src={group.icon}
              alt=""
              aria-hidden
              className="h-auto w-[42px]"
            />
          ) : (
            <TintedPngIcon icon={group.icon} className="h-[42px] w-[42px]" />
          )}
        </div>

        <h2 className="text-[20px] font-medium leading-[30px] text-quantum-blue sm:text-[24px] sm:leading-[34px]">
          {group.title}
        </h2>
      </div>

      <div
        className={
          group.columns === 2
            ? "grid gap-x-8 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-5"
            : "grid"
        }
      >
        {group.items.map((item) => (
          <FeatureItemRow key={item.description} item={item} />
        ))}
      </div>
    </article>
  );
}

function IntroParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-[16px] leading-[28px] text-steel-gray sm:text-[18px] sm:leading-[30px]">
      {children}
    </p>
  );
}

export default function InTouchV12WelcomePage() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      <section className="bg-white">
        <div className="mx-auto max-w-[1512px] px-6 pb-12 pt-10 md:px-[95px] md:pb-16 md:pt-14">
          <InTouchProductTitle />
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
        <div className="mx-auto max-w-[1512px] px-6 pb-16 md:px-[95px] md:pb-20">
          <div className="max-w-[1040px] space-y-5">
            <IntroParagraph>
              Thank you for choosing <InTouchTrademarkName />.
            </IntroParagraph>

            <IntroParagraph>
              <InTouchTrademarkName /> lets you work remotely by controlling
              your office computer as if you are physically there. Here is a
              summary of all the powerful features of <InTouchTrademarkName />{" "}
              as well as the newly added features in this release.
            </IntroParagraph>
          </div>

          <div className="mt-10 grid gap-6 md:mt-12">
            {featureGroups.map((group) => (
              <FeatureGroupCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
