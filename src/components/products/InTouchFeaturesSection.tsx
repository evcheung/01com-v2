import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

import infinityIcon from "@/assets/images/products/intouch-features/infinity.fe7e6c27.png";
import outlookIcon from "@/assets/images/products/intouch-features/outlook.6feddd19.png";
import puzzleIcon from "@/assets/images/products/intouch-features/puzzle.13a0b0c9.png";
import shieldIcon from "@/assets/images/products/intouch-features/shield-2.686efb10.png";

const OLD_SITE_BASE_URL = "https://01com.com";

type FeatureItem = {
  description: string;
  href?: string;
};

type FeatureCard = {
  title: string;
  icon: StaticImageData;
  tintIcon?: boolean;
  columns?: 1 | 2;
  items: FeatureItem[];
};

const featureCards: FeatureCard[] = [
  {
    title: "Zero-Trust Security",
    icon: shieldIcon,
    columns: 1,
    items: [
      { description: "End-to-end encryption to maintain 100% privacy" },
      {
        description: "2-Factor Authentication",
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/2-factor-authentication`,
      },
      {
        description: "LDAP authentication",
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/ldap-authentication`,
      },
      {
        description: "MAC address restriction",
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/mac-address-restriction`,
      },
      {
        description: "Wake up a remote computer that is powered off",
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/remote-wakeup`,
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
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/remote-control`,
      },
      { description: "Free mobile apps" },
      {
        description: "Remote printing",
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/remote-printing`,
      },
      { description: "Keyboard/mouse lock" },
      {
        description: "File transfer",
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/file-transfer`,
      },
      { description: "Blanking screen" },
      {
        description: "Remote 2-way audio",
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/remote-audio`,
      },
      { description: "Clipboard sync" },
      {
        description: "Multi-monitor support",
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/multi-monitor`,
      },
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
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/email-notification`,
      },
      {
        description: "Access your Outlook Inbox remotely",
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/outlook-access`,
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
        href: `${OLD_SITE_BASE_URL}/imintouch-remote-pc-desktop/features/central-administration`,
      },
      { description: "Users grouping" },
    ],
  },
];

function TintedPngIcon({
  icon,
  className,
}: {
  icon: StaticImageData;
  className: string;
}) {
  // These source assets are single-color PNG line icons, so masking preserves
  // their shape while retinting them to the current site blue.
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

function FeatureItemRow({ item }: { item: FeatureItem }) {
  const content = (
    <>
      <span className="text-[15px] leading-[24px] text-steel-gray transition-colors group-hover:text-quantum-blue">
        {item.description}
      </span>
      {item.href ? <LinkArrowIcon /> : null}
    </>
  );

  const rowClassName =
    "group flex min-h-[72px] items-start justify-between gap-5 border-t border-[#D7DEE3] py-4";

  if (!item.href) {
    return <div className={rowClassName}>{content}</div>;
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={rowClassName}
    >
      {content}
    </a>
  );
}

function FeatureCard({ card }: { card: FeatureCard }) {
  return (
    <article className="rounded-[24px] border border-[#D7DEE3] bg-white p-6 shadow-[0_14px_32px_rgba(27,27,39,0.06)] sm:p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[20px] bg-[#EEF7FF] ring-1 ring-[#D6EAFE]">
          {card.tintIcon === false ? (
            <Image
              src={card.icon}
              alt=""
              className="h-auto w-[42px]"
              priority={false}
            />
          ) : (
            <TintedPngIcon icon={card.icon} className="h-[42px] w-[42px]" />
          )}
        </div>

        <h3 className="text-[20px] font-medium leading-[30px] text-quantum-blue sm:text-[24px] sm:leading-[34px]">
          {card.title}
        </h3>
      </div>

      <div
        className={`mt-6 ${
          card.columns === 2 ? "grid gap-x-8 lg:grid-cols-2" : "grid"
        }`}
      >
        {card.items.map((item) => (
          <FeatureItemRow key={item.description} item={item} />
        ))}
      </div>
    </article>
  );
}

export default function InTouchFeaturesSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
      <div className="mx-auto max-w-[1512px] px-6 pt-0 pb-10 md:px-[95px] md:pt-0 md:pb-14">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-[30px] font-medium leading-[40px] text-quantum-blue sm:text-[38px] sm:leading-[46px]">
            Features
          </h2>
          <p className="mt-4 text-[15px] leading-[24px] text-steel-gray sm:text-[16px] sm:leading-[28px]">
            IronCAP InTouch lets you work remotely by controlling your office
            computer as if you are physically there. It combines top security
            with the features you need into one simple, affordable subscription.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[15px] font-medium">
            <a
              href="https://www.01com.com/01com/imintouch/webhelp/desktop/Welcome.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-quantum-blue transition-colors hover:text-quantum-green"
            >
              User&apos;s Guide
            </a>
            <Link
              href="/faq/ironcap-intouch"
              className="text-quantum-blue transition-colors hover:text-quantum-green"
            >
              FAQ
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid gap-6 xl:grid-cols-2 xl:gap-8">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
