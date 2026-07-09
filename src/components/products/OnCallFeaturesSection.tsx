import type { StaticImageData } from "next/image";

import browserIcon from "@/assets/images/products/oncall-features/browser.png";
import collaborationIcon from "@/assets/images/products/oncall-features/collaboration.png";
import conferenceIcon from "@/assets/images/products/oncall-features/conference.png";
import hierarchyStructureIcon from "@/assets/images/products/oncall-features/hierarchy-structure.png";
import liveChatIcon from "@/assets/images/products/oncall-features/live-chat.png";
import puzzleIcon from "@/assets/images/products/oncall-features/puzzle.png";
import remoteControlIcon from "@/assets/images/products/oncall-features/remote-control.png";
import trackingIcon from "@/assets/images/products/oncall-features/tracking.png";

const OLD_SITE_BASE_URL = "https://www.01com.com";

type FeatureCard = {
  title: string;
  description: string;
  href?: string;
  icon: StaticImageData;
};

const featureCards: FeatureCard[] = [
  {
    title: "Shareable Licensing Model",
    description:
      "All you will be paying is a low monthly/annual connection license fee. There is no limit on the number of agents you can set up to share the licenses as long as the simultaneous connections do not exceed the number of licenses subscribed.",
    icon: collaborationIcon,
  },
  {
    title: "Remote Control",
    description:
      "As a support agent, nothing is more effective than temporarily taking remote control of your customers' computers to resolve their technical issues. In addition to controlling the screen you may also do remote file transfer.",
    href: `${OLD_SITE_BASE_URL}/imoncall-remote-help-desk/features/remote-desktop-control/`,
    icon: remoteControlIcon,
  },
  {
    title: "Live Chat",
    description:
      "This essentially can eliminate your customer service phone lines. Your customers can submit live chat requests through a queue (clicking the Live-Chat button on your web site embedded with an URL given to you by I'm OnCall). Your agents simply pick up requests and perform real-time live chat with the customers via the Internet. Your customers may leave call-back requests if the queue is busy.",
    href: `${OLD_SITE_BASE_URL}/imoncall-remote-help-desk/features/chat/`,
    icon: liveChatIcon,
  },
  {
    title: "Multi-session",
    description: "Agents can chat with many customers at the same time.",
    href: `${OLD_SITE_BASE_URL}/imoncall-remote-help-desk/features/multi-sessions/`,
    icon: conferenceIcon,
  },
  {
    title: "Post-session Survey",
    description:
      "You can ensure customer satisfaction by sending a survey to them automatically. Customers can rate on the support service they have just received.",
    href: `${OLD_SITE_BASE_URL}/imoncall-remote-help-desk/features/survey/`,
    icon: browserIcon,
  },
  {
    title: "Customization",
    description:
      "A wide range of customization options including customizing your banner, agents' photos, etc. on the support session page are available in I'm OnCall.",
    href: `${OLD_SITE_BASE_URL}/imoncall-remote-help-desk/features/easy-customization/`,
    icon: puzzleIcon,
  },
  {
    title: "Incident Tracking",
    description:
      "Your agents or service representatives can view all open incidents including time stamping, priority and categories. Closed incidents are also available via the History feature.",
    href: `${OLD_SITE_BASE_URL}/imoncall-remote-help-desk/features/incident-status-viewing/`,
    icon: trackingIcon,
  },
  {
    title: "User Hierarchy",
    description:
      "You can classify users into Agents, Supervisors, and Adminstrators according to your company requirements.",
    href: `${OLD_SITE_BASE_URL}/imoncall-remote-help-desk/features/technician-management/`,
    icon: hierarchyStructureIcon,
  },
];

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
      className="mt-0.5 h-6 w-8 shrink-0 text-quantum-blue transition-transform duration-200 group-hover:translate-x-1"
    >
      <path d="M5 12h18" />
      <path d="m17 6 6 6-6 6" />
    </svg>
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
      className={`block bg-quantum-green ${className}`}
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

function FeatureCard({ card }: { card: FeatureCard }) {
  const content = (
    <article className="flex h-full flex-col rounded-[24px] border border-[#D7DEE3] bg-white p-6 shadow-[0_14px_32px_rgba(27,27,39,0.06)] transition-colors sm:p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[20px] bg-[#EEF7FF] ring-1 ring-[#D6EAFE]">
          <TintedPngIcon icon={card.icon} className="h-[42px] w-[42px]" />
        </div>

        <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
          <h3 className="text-[20px] font-medium leading-[30px] text-quantum-blue sm:text-[24px] sm:leading-[34px]">
            {card.title}
          </h3>
          {card.href ? <LinkArrowIcon /> : null}
        </div>
      </div>

      <p className="mt-6 text-[15px] leading-[24px] text-steel-gray sm:text-[16px] sm:leading-[28px]">
        {card.description}
      </p>
    </article>
  );

  if (!card.href) {
    return content;
  }

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      {content}
    </a>
  );
}

export default function OnCallFeaturesSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
      <div className="mx-auto max-w-[1512px] px-6 pt-0 pb-10 md:px-[95px] md:pt-0 md:pb-14">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-[30px] font-medium leading-[40px] text-quantum-blue sm:text-[38px] sm:leading-[46px]">
            Features
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:mt-14 xl:auto-rows-fr xl:grid-cols-2 xl:gap-8">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
