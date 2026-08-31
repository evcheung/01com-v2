import Image from "next/image";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

const OLD_MEDIA_BASE_URL = "https://www.01com.com/_next/static/media";

function InTouchTrademarkName() {
  return (
    <>
      IronCAP<sup className="text-[0.55em]">™</sup> InTouch
    </>
  );
}

export type InTouchFeatureDetail = {
  slug: string;
  title: string;
  description: ReactNode;
  metadataDescription: string;
  image: {
    src: string;
    alt: string;
  };
  note?: ReactNode;
};

export const inTouchFeatureDetails = [
  {
    slug: "2-factor-authentication",
    title: "2-Factor Authentication",
    description: (
      <>
        <InTouchTrademarkName /> allows you to opt for a 2nd factor one-time
        password (OTP) authentication. This is a very effective 2nd line of
        defense in case your password has been breached.
      </>
    ),
    metadataDescription:
      "IronCAP(TM) InTouch allows you to opt for a 2nd factor one-time password (OTP) authentication. This is a very effective 2nd line of defense in case your password has been breached.",
    image: {
      src: `${OLD_MEDIA_BASE_URL}/2FA.6cff4d00.jpg`,
      alt: "Two factor authentication screen prompting for 6 digit auth code",
    },
  },
  {
    slug: "ldap-authentication",
    title: "LDAP Authentication",
    description: (
      <>
        <InTouchTrademarkName /> allows you to optionally select to authenticate
        through a corporate LDAP (Lightweight Directory Access Protocol)
        environment. This effectively allows IT managers to maintain a single
        password management protocol and policy.
      </>
    ),
    metadataDescription:
      "IronCAP(TM) InTouch allows you to optionally select to authenticate through a corporate LDAP (Lightweight Directory Access Protocol) environment. This effectively allows IT managers to maintain a single password management protocol and policy.",
    image: {
      src: `${OLD_MEDIA_BASE_URL}/ldap.09e5d6f7.jpg`,
      alt: "Screen asking for LDAP credentials",
    },
  },
  {
    slug: "mac-address-restriction",
    title: "MAC Address Restriction",
    description: (
      <>
        <InTouchTrademarkName /> allows you to optionally restrict access from
        only the computer with a specific MAC address (e.g. a specific laptop
        computer). This essentially imposes a strong restriction in such a way
        that even your password has been compromised, the bad actor still cannot
        access without using your designated laptop computer.
      </>
    ),
    metadataDescription:
      "IronCAP(TM) InTouch allows you to optionally restrict access from only the computer with a specific MAC address (e.g. a specific laptop computer). This essentially imposes a strong restriction in such a way that even your password has been compromised, the bad actor still cannot access without using your designated laptop computer.",
    image: {
      src: `${OLD_MEDIA_BASE_URL}/mac-address.812f0882.jpg`,
      alt: "Screen with MAC address violation error",
    },
  },
  {
    slug: "remote-wakeup",
    title: "Remote Wakeup",
    description: (
      <>
        <InTouchTrademarkName /> allows you to remotely power on your computer
        by using the remote wakeup feature. This means you may shutdown your
        computer when you are not using it in order to save on energy and
        maximize security.
      </>
    ),
    metadataDescription:
      "IronCAP(TM) InTouch allows you to remotely power on your computer by using the remote wakeup feature. This means you may shutdown your computer when you are not using it in order to save on energy and maximize security.",
    image: {
      src: `${OLD_MEDIA_BASE_URL}/remote-wakeup.ad543adc.jpg`,
      alt: "Screen prompting to wake up the remote computer",
    },
  },
  {
    slug: "remote-control",
    title: "Remote Control",
    description: (
      <>
        <InTouchTrademarkName /> lets you work remotely by controlling your
        office computer as if you are physically in the office. You can control
        your distant computer from any other Windows computer or a mobile device
        such as an iPhone, iPad, Android, or Windows Tablet from any part of the
        world with an Internet connection.
      </>
    ),
    metadataDescription:
      "IronCAP(TM) InTouch lets you work remotely by controlling your office computer as if you are physically in the office. You can control your distant computer from any other Windows computer or a mobile device such as an iPhone, iPad, Android, or Windows Tablet from any part of the world with an Internet connection.",
    image: {
      src: `${OLD_MEDIA_BASE_URL}/remote-control.ef4c5693.jpg`,
      alt: "One computer signalling to many",
    },
  },
  {
    slug: "remote-printing",
    title: "Remote Printing",
    description: (
      <>
        Remote Printing enables you to print any document on your remote
        computer to a local printer. Simply select printing to the special
        &quot;<InTouchTrademarkName /> Remote Printer&quot;.
      </>
    ),
    metadataDescription:
      'Remote Printing enables you to print any document on your remote computer to a local printer. Simply select printing to the special "IronCAP(TM) InTouch Remote Printer".',
    image: {
      src: `${OLD_MEDIA_BASE_URL}/remote-printing.d33979a8.jpg`,
      alt: "Printer screen",
    },
  },
  {
    slug: "file-transfer",
    title: "File Transfer",
    description: (
      <>
        Using <InTouchTrademarkName /> you can copy files back-and-forth easily
        between your remote and local computers. Simply drag-and-drop the files
        between the 2 computers.
      </>
    ),
    metadataDescription:
      "Using IronCAP(TM) InTouch you can copy files back-and-forth easily between your remote and local computers. Simply drag-and-drop the files between the 2 computers.",
    image: {
      src: `${OLD_MEDIA_BASE_URL}/file-transfer.21b47728.jpg`,
      alt: "Screen showing files from both local and remote computers",
    },
  },
  {
    slug: "remote-audio",
    title: "Remote 2-Way Audio",
    description: (
      <>
        <InTouchTrademarkName /> allows you to stream audio from the speakers on
        the remote computer to your local computer. It also allows you to stream
        the microphone input on the local computer to your remote computer.
      </>
    ),
    metadataDescription:
      "IronCAP(TM) InTouch allows you to stream audio from the speakers on the remote computer to your local computer. It also allows you to stream the microphone input on the local computer to your remote computer.",
    image: {
      src: `${OLD_MEDIA_BASE_URL}/remote-audio.7288014b.jpg`,
      alt: "IronCAP(TM) InTouch screen with audio setting button",
    },
  },
  {
    slug: "multi-monitor",
    title: "Multi-monitor",
    description: (
      <>
        <InTouchTrademarkName /> allows you to remote control a distant computer
        with up to 10 monitors connected. You can choose to see all the monitors
        at once or to select a particular one to display.
      </>
    ),
    metadataDescription:
      "IronCAP(TM) InTouch allows you to remote control a distant computer with up to 10 monitors connected. You can choose to see all the monitors at once or to select a particular one to display.",
    image: {
      src: `${OLD_MEDIA_BASE_URL}/multi-monitor.019e4d11.jpg`,
      alt: "Two monitors remote controlling the same computer",
    },
  },
  {
    slug: "email-notification",
    title: "Notification of Important Emails",
    description:
      "Real-time Notification can be configured to notify you on your mobile device when new emails arrive at your Outlook inbox. It can also be configured to receive notifications from certain email senders only. Hence, you can eliminate junk mail notifications.",
    metadataDescription:
      "Real-time Notification can be configured to notify you on your mobile device when new emails arrive at your Outlook inbox. It can also be configured to receive notifications from certain email senders only. Hence, you can eliminate junk mail notifications.",
    note: (
      <>
        * You need to download the free <InTouchTrademarkName /> GoMail app in
        order to use this feature.
      </>
    ),
    image: {
      src: `${OLD_MEDIA_BASE_URL}/email-notification.ad1747d7.png`,
      alt: "Email push notifications on mobile and tablet",
    },
  },
  {
    slug: "outlook-access",
    title: "Access your Outlook Inbox",
    description: (
      <>
        <InTouchTrademarkName /> allows you to open, read, and operate your
        Outlook Inbox remotely. Everything you read, compose, reply, etc. will
        be instantly reflected on your Outlook at your remote computer. This
        feature is handy when using in conjunction with the notification
        feature.
      </>
    ),
    metadataDescription:
      "IronCAP(TM) InTouch allows you to open, read, and operate your Outlook Inbox remotely. Everything you read, compose, reply, etc. will be instantly reflected on your Outlook at your remote computer. This feature is handy when using in conjunction with the notification feature.",
    note: (
      <>
        * You need to download the free <InTouchTrademarkName /> GoMail app in
        order to use this feature.
      </>
    ),
    image: {
      src: `${OLD_MEDIA_BASE_URL}/outlook-access.1862f54e.png`,
      alt: "Email apps on mobile and tablet",
    },
  },
  {
    slug: "central-administration",
    title: "Central Administration",
    description: (
      <>
        An <InTouchTrademarkName /> account allows unlimited scalability from a
        single user, small businesses with a few users, all the way to
        corporations with thousands of users. The central administration tools
        allow you to centrally manage every user, reset the access password,
        etc. The administrator can also group users according to branches,
        departments, etc. for easy administration purposes.
      </>
    ),
    metadataDescription:
      "An IronCAP(TM) InTouch account allows unlimited scalability from a single user, small businesses with a few users, all the way to corporations with thousands of users. The central administration tools allow you to centrally manage every user, reset the access password, etc. The administrator can also group users according to branches, departments, etc. for easy administration purposes.",
    image: {
      src: `${OLD_MEDIA_BASE_URL}/central-admin.c788383c.jpg`,
      alt: "Admin panel for IronCAP(TM) InTouch",
    },
  },
] satisfies InTouchFeatureDetail[];

export function getInTouchFeatureDetail(slug: string) {
  return inTouchFeatureDetails.find((feature) => feature.slug === slug);
}

export default function InTouchFeatureDetailPage({ slug }: { slug: string }) {
  const feature = getInTouchFeatureDetail(slug);

  if (!feature) {
    notFound();
  }

  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
      <div className="mx-auto max-w-[1512px] px-6 pt-10 pb-16 md:px-[95px] md:pt-16 md:pb-20">
        <div className="mx-auto max-w-[1020px] text-center">
          <h2 className="text-[30px] font-medium leading-[40px] text-quantum-blue sm:text-[38px] sm:leading-[46px]">
            {feature.title}
          </h2>

          <p className="mt-11 text-[15px] leading-[26px] text-steel-gray sm:text-[16px] sm:leading-[28px]">
            {feature.description}
          </p>

          {feature.note ? (
            <p className="mt-6 text-[15px] leading-[24px] text-steel-gray">
              {feature.note}
            </p>
          ) : null}

          <div className="mx-auto mt-12">
            <Image
              src={feature.image.src}
              alt={feature.image.alt}
              width={1000}
              height={548}
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
