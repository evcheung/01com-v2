import Image from "next/image";
import { notFound } from "next/navigation";

export type OnCallFeatureDetail = {
  slug: string;
  title: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  }>;
};

export const onCallFeatureDetails: OnCallFeatureDetail[] = [
  {
    slug: "remote-desktop-control",
    title: "Remote Control",
    description:
      "As a support agent, nothing is more effective than temporarily taking remote control of your customers' computers to resolve their technical issues. In addition to controlling the screen you may also do remote file transfer.",
    images: [
      {
        src: "/oncall_assets/features/ioc_remote_control.png",
        alt: "IronCAP OnCall remote control session screen",
        width: 1366,
        height: 768,
      },
    ],
  },
  {
    slug: "chat",
    title: "Live Chat",
    description:
      "This essentially can eliminate your customer service phone lines. Your customers can submit live chat requests through a queue (clicking the Live-Chat button on your web site embedded with an URL given to you by I'm OnCall). Your agents simply pick up requests and perform real-time live chat with the customers via the Internet. Your customers may leave call-back requests if the queue is busy.",
    images: [
      {
        src: "/oncall_assets/features/ioc_live_chat.png",
        alt: "IronCAP OnCall agent multi-session chat screen",
        width: 900,
        height: 398,
        caption: "Agent's multi-session chat-screen",
      },
      {
        src: "/oncall_assets/features/ioc_live_chat_user.png",
        alt: "IronCAP OnCall customer chat screen",
        width: 900,
        height: 507,
        caption: "Customer's chat-screen",
      },
    ],
  },
  {
    slug: "multi-sessions",
    title: "Multi-session",
    description: "Agents can chat with many customers at the same time.",
    images: [
      {
        src: "/oncall_assets/features/ioc_multisession.png",
        alt: "IronCAP OnCall multi-session queue and chat screen",
        width: 900,
        height: 398,
      },
    ],
  },
  {
    slug: "survey",
    title: "Post-session Survey",
    description:
      "You can ensure customer satisfaction by sending a survey to them automatically. Customers can rate on the support service they have just received.",
    images: [
      {
        src: "/oncall_assets/features/ioc_survey.png",
        alt: "IronCAP OnCall post-session survey screen",
        width: 900,
        height: 231,
      },
    ],
  },
  {
    slug: "easy-customization",
    title: "Customization",
    description:
      "A wide range of customization options including customizing your banner, agents' photos, etc. on the support session page are available in I'm OnCall.",
    images: [
      {
        src: "/oncall_assets/features/ioc_customization.png",
        alt: "IronCAP OnCall customization settings screen",
        width: 900,
        height: 508,
      },
    ],
  },
  {
    slug: "incident-status-viewing",
    title: "Incident Tracking",
    description:
      "Your agents or service representatives can view all open incidents including time stamping, priority and categories. Closed incidents are also available via the History feature.",
    images: [
      {
        src: "/oncall_assets/features/ioc_incidents.png",
        alt: "IronCAP OnCall incidents status screen",
        width: 900,
        height: 402,
      },
    ],
  },
  {
    slug: "technician-management",
    title: "Users Hierarchy",
    description:
      "You can classify users into Agents, Supervisors, and Adminstrators according to your company requirements.",
    images: [
      {
        src: "/oncall_assets/features/ioc_users.png",
        alt: "IronCAP OnCall user hierarchy management screen",
        width: 900,
        height: 327,
      },
    ],
  },
];

export function getOnCallFeatureDetail(slug: string) {
  return onCallFeatureDetails.find((feature) => feature.slug === slug);
}

export default function OnCallFeatureDetailPage({ slug }: { slug: string }) {
  const feature = getOnCallFeatureDetail(slug);

  if (!feature) {
    notFound();
  }

  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
      <div className="mx-auto max-w-[1512px] px-6 pt-10 pb-16 md:px-[95px] md:pt-16 md:pb-20">
        <div className="mx-auto w-full max-w-[1134px] text-center">
          <h2 className="text-[30px] font-medium leading-[40px] text-quantum-blue sm:text-[38px] sm:leading-[46px]">
            {feature.title}
          </h2>

          <p className="mt-11 text-[15px] leading-[26px] text-steel-gray sm:text-[16px] sm:leading-[28px]">
            {feature.description}
          </p>

          {feature.images.map((image) => (
            <figure key={image.src} className="mt-11">
              {image.caption ? (
                <figcaption className="mb-1 text-right text-[15px] leading-[24px] text-steel-gray sm:text-[16px] sm:leading-[28px]">
                  {image.caption}
                </figcaption>
              ) : null}
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto w-full"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
