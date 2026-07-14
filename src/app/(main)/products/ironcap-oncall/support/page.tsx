import Link from "next/link";
import LiveChatLink from "@/components/LiveChatLink";

function OnCallTrademarkName() {
  return (
    <>
      IronCAP
      <sup className="ml-0.5 align-super text-[0.48em] font-semibold">TM</sup>
      {" "}OnCall
    </>
  );
}

const contactItems = [
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
  {
    label: "Office Hours",
    value: "Monday - Friday 9am to 6pm EST",
  },
];

const agentRequirements = [
  "\"Always-on\" high-speed Internet connection)",
  "Windows Server 2008+, Windows 7, 8, 10, 11",
  "Latest version of Edge, Google, Chrome, Firefox",
];

const endUserRequirements = [
  "\"Always-on\" high-speed Internet connection",
  "Windows Server 2008+, Windows 7, 8, 10, 11",
  "OSX 10.5 \"Leopard\" or higher (Apple)",
  "Latest version of Edge, Google, Chrome, Firefox",
  "Latest version of Safari Internet browser (Apple)",
];

function LiveChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function IroncapOnCallSupportPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1512px] px-6 pb-16 md:px-[95px] md:pb-20">
        <div className="space-y-4 text-center">
          <h2 className="text-[28px] font-medium leading-[36px] text-quantum-blue sm:text-[32px] sm:leading-[42px]">
            General Support
          </h2>
          <p className="mx-auto max-w-[900px] text-[15px] leading-[26px] text-steel-gray sm:text-[16px]">
            The <OnCallTrademarkName />{" "}
            <Link
              href="/products/ironcap-oncall/features"
              className="text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
            >
              remote IT support service
            </Link>{" "}
            technology is hosted in our secure data center. You don&apos;t need
            to invest in any expensive new hardware or software. Be our
            subscriber and you can focus on delivering superb support services
            to your valuable customers in no time. It is that easy and
            affordable!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-1 text-[15px] font-medium">
            <a
              href="https://www.01com.com/01com/imoncall/webhelp/desktop/welcome.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
            >
              User&apos;s Guide
            </a>
            <Link
              href="/faq/ironcap-oncall"
              className="text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
            >
              FAQ
            </Link>
          </div>
        </div>

        <section className="mt-10 flex justify-center">
          <div className="inline-flex max-w-full flex-col items-center rounded-[24px] border border-[#C7C7D0] bg-[#F7F9FC] px-4 py-4 sm:px-5 sm:py-5">
            <div className="flex flex-wrap justify-center gap-4">
              <LiveChatLink
                href="https://imoncall.01com.com/pre-sales/"
                windowName="live-chat-pre-sales"
                className="group rounded-[16px] border border-white bg-white px-4 py-3 transition-colors hover:border-[#9FD8B4]"
              >
                <span className="flex items-center gap-3 whitespace-nowrap">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#71bfff] text-black transition-colors group-hover:bg-[#5aaff0]">
                    <LiveChatIcon />
                  </span>
                  <span className="text-[15px] font-medium leading-[22px] text-quantum-blue">
                    Live Chat (pre-sales)
                  </span>
                </span>
              </LiveChatLink>
              <LiveChatLink
                href="https://imoncall.01com.com/ironcapchat/"
                windowName="live-chat-after-sales"
                className="group rounded-[16px] border border-white bg-white px-4 py-3 transition-colors hover:border-[#9FD8B4]"
              >
                <span className="flex items-center gap-3 whitespace-nowrap">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#71bfff] text-black transition-colors group-hover:bg-[#5aaff0]">
                    <LiveChatIcon />
                  </span>
                  <span className="text-[15px] font-medium leading-[22px] text-quantum-blue">
                    Live Chat (after-sales)
                  </span>
                </span>
              </LiveChatLink>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
          <p className="text-[24px] font-medium leading-[32px] text-quantum-blue sm:text-[28px] sm:leading-[36px]">
            System Requirements for Agents (Windows only):
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {agentRequirements.map((item) => (
              <li
                key={item}
                className="rounded-[18px] border border-white bg-white px-5 py-4 text-[15px] leading-[24px] text-steel-gray"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-[24px] border border-[#C7C7D0] bg-white p-6 sm:p-8">
          <p className="text-[24px] font-medium leading-[32px] text-quantum-blue sm:text-[28px] sm:leading-[36px]">
            System Requirements for End-users:
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {endUserRequirements.map((item) => (
              <li
                key={item}
                className="rounded-[18px] border border-[#E5E7ED] bg-[#F7F9FC] px-5 py-4 text-[15px] leading-[24px] text-steel-gray"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
