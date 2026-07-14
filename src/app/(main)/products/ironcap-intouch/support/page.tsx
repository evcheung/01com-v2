import Link from "next/link";
import type { ReactNode } from "react";

const inTouchTrademarkName = (
  <>
    IronCAP
    <sup className="ml-0.5 align-super text-[0.48em] font-semibold">TM</sup>
    {" "}InTouch
  </>
);

const contactItems = [
  {
    label: "Office Hours",
    value: "Monday - Friday 9am to 6pm EST",
  },
  {
    label: "Sales (Toll-Free):",
    value: "1-800-668-2185",
    href: "tel:1-800-668-2185",
  },
  {
    label: "Tech Support:",
    value: "(905) 795-8166",
    href: "tel:905-795-8166",
  },
  {
    label: "Email:",
    value: "help@01com.com",
    href: "mailto:help@01com.com",
  },
];

const systemRequirements: { key: string; content: ReactNode }[] = [
  {
    key: "windows",
    content: "Windows Server, Windows 7, 8, 10, and 11 (32-bit or 64-bit)",
  },
  {
    key: "disk-space",
    content: "Minimum 40M+ free disk space",
  },
  {
    key: "outlook",
    content: "Outlook 2003+ (for Outlook mobilization features)",
  },
  {
    key: "browsers",
    content: "Edge, Google Chrome, Firefox, Internet Explorer",
  },
  {
    key: "intouch-go",
    content: (
      <>Mobile app: {inTouchTrademarkName} Go for iOS, Android, and Windows Tablet</>
    ),
  },
  {
    key: "intouch-gomail",
    content: <>Mobile app: {inTouchTrademarkName} GoMail for iOS and Android</>,
  },
];

export default function InTouchSupportPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1512px] px-6 pb-16 md:px-[95px] md:pb-20">
        <div className="space-y-4 text-center">
          <h2 className="text-[28px] font-medium leading-[36px] text-quantum-blue sm:text-[32px] sm:leading-[42px]">
            General Support
          </h2>
          <p className="mx-auto max-w-[860px] text-[15px] leading-[26px] text-steel-gray sm:text-[16px]">
            Contact our knowledgeable staff anytime for immediate assistance.
            Whether you need technical support while operating one of our
            programs or have questions regarding pricing or features of our
            remote access and remote control software, we are available at your
            convenience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-1 text-[15px] font-medium">
            <a
              href="https://www.01com.com/01com/imintouch/webhelp/desktop/Welcome.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
            >
              User&apos;s Guide
            </a>
            <Link
              href="/faq/ironcap-intouch"
              className="text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
            >
              FAQ
            </Link>
          </div>
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="rounded-[18px] border border-[#C7C7D0] bg-white p-5"
            >
              <p className="text-[12px] font-semibold tracking-[0.04em] text-quantum-green">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-3 inline-flex text-[17px] font-medium leading-[26px] text-quantum-blue transition-colors hover:text-quantum-green"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 text-[17px] font-medium leading-[26px] text-quantum-blue">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-[24px] border border-[#C7C7D0] bg-[#F7F9FC] p-6 sm:p-8">
          <p className="text-[12px] font-semibold tracking-[0.04em] text-quantum-green">
            System Requirements
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {systemRequirements.map((item) => (
              <li
                key={item.key}
                className="rounded-[18px] border border-white bg-white px-5 py-4 text-[15px] leading-[24px] text-steel-gray"
              >
                {item.content}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-[24px] border border-[#C7C7D0] bg-white p-6 sm:p-8">
          <p className="text-[12px] font-semibold tracking-[0.04em] text-quantum-green">
            Remote wake-up feature requirement
          </p>
          <p className="mt-4 text-[15px] leading-[26px] text-steel-gray">
            This feature requires a minimum of 2 computers on the same wired
            network with I&apos;m InTouch installed and at least one of them
            must be &quot;on&quot;.
          </p>
        </section>
      </div>
    </section>
  );
}
