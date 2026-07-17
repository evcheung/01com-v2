import type { ReactNode } from "react";
import { Title } from "@/components/faq/Title";
import { Button } from "@/components/ui/button";

const Trademark = () => (
  <sup className="ml-0.5 align-super text-[0.48em] font-semibold">TM</sup>
);

type IconProps = {
  className?: string;
};

type ToolkitUseCase = {
  title: string;
  description: ReactNode;
  icon: (props: IconProps) => ReactNode;
};

const toolkitUseCases: ToolkitUseCase[] = [
  {
    title: "What is ICC?",
    description: (
      <>
        ICC stands for IronCAP Crypto, an NIST-approved quantum-safe
        cryptographic system utilizing NIST-approved post-quantum cryptography
        (PQC) algorithms and IronCAP<Trademark />&apos;s ground breaking
        technologies. IronCAP<Trademark /> Toolkits provide the application
        programming interface to developers to let them easily integrate ICC
        with their applications. This transforms their applications to be safe
        against cyberattacks from not only computers today but also against
        those from upcoming quantum computers.
      </>
    ),
    icon: EmailFilesIcon,
  },
  {
    title: "What is the cost of using IronCAP Toolkits?",
    description: (
      <>
        ICC Toolkits is designed to be extremely cost effective to fit all
        possible vertical industries. Please contact us to discuss your needs.
        We will tailor a deal to best fit your specific requirements and
        business nature.
      </>
    ),
    icon: DigitalSignatureIcon,
  },
  {
    title: "How do I license IronCAP Toolkits?",
    description: (
      <>
        Please contact us by email at sales@ironcap.ca or give us a call at
        1-800-668-2185 for licensing information.
      </>
    ),
    icon: BlockchainIcon,
  },
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
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function EmailFilesIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 15h22v16H8z" />
      <path d="m8 16 11 9 11-9" />
      <path d="M34 14h6v20H18v-3" />
      <path d="M34 14v7h6" />
    </svg>
  );
}

function DigitalSignatureIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M32 8 40 16 18 38l-9 2 2-9L32 8z" />
      <path d="M28 12l8 8" />
      <path d="M24 38h15" />
    </svg>
  );
}

function BlockchainIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 10h12v12H8z" />
      <path d="M28 26h12v12H28z" />
      <path d="M28 10h12v12H28z" />
      <path d="M20 16h8" />
      <path d="m18 22 12 6" />
      <path d="M34 22v4" />
    </svg>
  );
}

export default function FaqIronCapToolkitsPage() {
  return (
    <div className="bg-white font-urbanist">
      <Title />

      <main className="mx-auto max-w-[1512px] px-6 py-16 md:px-[95px] md:py-20">
        <section className="mx-auto max-w-[980px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-quantum-green">
            General Questions
          </p>
          <h2 className="mt-4 text-[34px] font-medium leading-[42px] text-quantum-blue sm:text-[42px] sm:leading-[50px]">
            IronCAP<Trademark /> Toolkits FAQs
          </h2>
          <p className="mt-6 text-[17px] leading-[28px] text-steel-gray sm:text-[18px] sm:leading-[30px]">
            Find answers about ICC, IronCAP<Trademark /> Toolkits costs, and
            licensing information.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/contact"
              className="group inline-flex rounded-[16px] border border-[#C7C7D0] bg-white px-4 py-3 transition-colors hover:border-[#9FD8B4] hover:bg-[#F7F9FC]"
            >
              <span className="flex items-center gap-3 whitespace-nowrap">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#71bfff] text-black transition-colors group-hover:bg-[#5aaff0]">
                  <LiveChatIcon />
                </span>
                <span className="text-[15px] font-medium leading-[22px] text-quantum-blue">
                  Contact Us
                </span>
              </span>
            </a>
          </div>
        </section>

        <section className="mt-16 border-t border-lite-gray/40 pt-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[28px] font-medium leading-[36px] text-quantum-blue sm:text-[30px] sm:leading-[40px]">
                Categories
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-[25px] text-steel-gray sm:text-[16px] sm:leading-[26px]">
              <p>
                General Questions
              </p>
              <p>
                How to use IronCAP Toolkits
              </p>
              <p>
                Still have questions: Contact Us
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {toolkitUseCases.map((item) => (
              <li
                key={item.title}
                className="rounded-[12px] border border-lite-gray/60 bg-[#F7F9FC] p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-quantum-green">
                  {item.icon({ className: "h-8 w-8" })}
                </span>
                <h3 className="mt-5 text-[17px] font-semibold uppercase leading-[23px] text-quantum-green">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[24px] text-steel-gray">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex justify-center bg-white pt-14 pb-4">
          <Button
            text=" CONTACT US"
            url="/contact"
            border="border-quantum-green/60"
            textColor="text-quantum-green"
            hoverBg="hover:bg-quantum-green/10"
            isBlank="false"
          />
        </section>
      </main>
    </div>
  );
}
