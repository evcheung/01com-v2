import type { ReactNode } from "react";
import LiveChatLink from "@/components/LiveChatLink";
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
    title: "Emails/Files Encryption",
    description: (
      <>
        IronCAP<Trademark /> post-quantum cryptography can encrypt emails and
        sensitive files so that only the intended recipient can read them.
      </>
    ),
    icon: EmailFilesIcon,
  },
  {
    title: "Digital Signature",
    description: (
      <>
        IronCAP<Trademark /> can digitally sign electronic documents, emails,
        and files to certify their authenticity to recipients.
      </>
    ),
    icon: DigitalSignatureIcon,
  },
  {
    title: "Blockchain",
    description: (
      <>
        IronCAP<Trademark /> helps blockchain and cryptocurrency vendors sign
        new blocks for security today and in tomorrow&apos;s post-quantum world.
      </>
    ),
    icon: BlockchainIcon,
  },
  {
    title: "Remote Access/VPN",
    description: (
      <>
        IronCAP<Trademark /> can help remote access and VPN vendors protect the
        privacy of their remote access channels.
      </>
    ),
    icon: RemoteAccessIcon,
  },
  {
    title: "Password Management",
    description: (
      <>
        Password-management vendors can use IronCAP<Trademark /> to generate
        passwords with unpredictability against classical and quantum attacks.
      </>
    ),
    icon: PasswordIcon,
  },
  {
    title: "Credit Card Security",
    description: (
      <>
        Smart cards on credit cards or smartphones can use IronCAP<Trademark />{" "}
        encryption to protect data into the post-quantum era.
      </>
    ),
    icon: CreditCardIcon,
  },
  {
    title: "Cloud Storage",
    description: (
      <>
        IronCAP<Trademark /> post-quantum cryptography can help keep cloud data
        safe against hackers now and in the post-quantum world.
      </>
    ),
    icon: CloudStorageIcon,
  },
  {
    title: "Website Security",
    description: (
      <>
        Websites can use IronCAP<Trademark /> to help protect identification and
        channel privacy by encrypting channel session keys.
      </>
    ),
    icon: WebsiteSecurityIcon,
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

function RemoteAccessIcon({ className }: IconProps) {
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
      <path d="M8 12h32v22H8z" />
      <path d="M18 40h12" />
      <path d="M24 34v6" />
      <path d="M18 24a8 8 0 0 1 12 0" />
      <path d="M14 20a14 14 0 0 1 20 0" />
      <path d="M22 28h4" />
    </svg>
  );
}

function PasswordIcon({ className }: IconProps) {
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
      <path d="M14 22h20v17H14z" />
      <path d="M18 22v-5a6 6 0 0 1 12 0v5" />
      <path d="M20 30h.01" />
      <path d="M24 30h.01" />
      <path d="M28 30h.01" />
      <path d="M24 34h.01" />
    </svg>
  );
}

function CreditCardIcon({ className }: IconProps) {
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
      <path d="M7 14h34v22H7z" />
      <path d="M7 21h34" />
      <path d="M14 28h8v5h-8z" />
      <path d="M28 30h7" />
    </svg>
  );
}

function CloudStorageIcon({ className }: IconProps) {
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
      <path d="M17 36h19a8 8 0 0 0 1-15.9A12 12 0 0 0 13.8 23 6.5 6.5 0 0 0 17 36z" />
      <path d="M24 30v-9" />
      <path d="m20 25 4-4 4 4" />
    </svg>
  );
}

function WebsiteSecurityIcon({ className }: IconProps) {
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
      <circle cx="24" cy="24" r="16" />
      <path d="M8 24h32" />
      <path d="M24 8a24 24 0 0 1 0 32" />
      <path d="M24 8a24 24 0 0 0 0 32" />
      <path d="M27 25h9v7c0 5-4.5 7.5-4.5 7.5S27 37 27 32v-7z" />
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
            Post-Quantum
          </p>
          <h2 className="mt-4 text-[34px] font-medium leading-[42px] text-quantum-blue sm:text-[42px] sm:leading-[50px]">
            IronCAP<Trademark /> Toolkits
          </h2>
          <p className="mt-6 text-[17px] leading-[28px] text-steel-gray sm:text-[18px] sm:leading-[30px]">
            Our IronCAP<Trademark /> Toolkits allow vendors of vertical
            applications to transform their products for protection against
            cyber attacks from the classical computers of today and future
            attacks from quantum computers.
          </p>
          <div className="mt-8 flex justify-center">
            <LiveChatLink
              href="https://imoncall.01com.com/pre-sales/"
              windowName="live-chat-pre-sales"
              className="group inline-flex rounded-[16px] border border-[#C7C7D0] bg-white px-4 py-3 transition-colors hover:border-[#9FD8B4] hover:bg-[#F7F9FC]"
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
          </div>
        </section>

        <section className="mt-16 border-t border-lite-gray/40 pt-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[28px] font-medium leading-[36px] text-quantum-blue sm:text-[30px] sm:leading-[40px]">
                Vertical Applications Integration
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-[25px] text-steel-gray sm:text-[16px] sm:leading-[26px]">
              <p>
                IronCAP<Trademark /> Toolkits can be used by vendors to build
                highly secure systems for blockchain security, IoT devices,
                data storage, remote access, encryption, digital signing, and
                other vertical applications.
              </p>
              <p>
                The toolkits use NIST-approved post-quantum cryptography
                technologies to protect customers from evolving malicious
                access to their data today and from quantum computers in the
                future.
              </p>
              <p>
                To support seamless integration, IronCAP<Trademark /> Toolkits
                are compliant with OpenSSL, PKCS#11, and OpenPGP (RFC4880)
                industry standards.
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
            text=" LEARN MORE ABOUT 01 QUANTUM PRODUCTS"
            url="/use-cases"
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
