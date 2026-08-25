import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const ProductName = () => (
  <>
    IronCAP<sup className="text-[0.55em] leading-none">™</sup> XMail
  </>
);

const integrationImages = [
  {
    title: "Outlook Integration",
    note: "(You must restart your Outlook for these changes to take effect)",
    src: "/product_assets/ironcap-xmail-welcome/outlook-integration.png",
    alt: "Outlook Integration",
    width: 2209,
    height: 655,
  },
  {
    title: "Browser Integration",
    note: (
      <>
        (IronCAP<sup className="text-[0.55em] leading-none">™</sup> browser app
        required)
      </>
    ),
    src: "/product_assets/ironcap-xmail-welcome/browser-integration.png",
    alt: "Browser Integration",
    width: 2500,
    height: 655,
  },
] as const;

const importantLinks = [
  {
    label: "Manage your account",
    href: "https://www.01com.com/01com/ironcap-x/webhelp/index.htm#t=IronCAP_X%2FMy_Account%2Flaunch_My_Account.htm",
    external: true,
  },
  {
    label: "Upgrade to Business Account",
    href: "https://www.01com.com/01com/ironcap-x/webhelp/index.htm#t=IronCAP_X%2FMy_Account%2FMy_Account_-_FREE.htm",
    external: true,
  },
  {
    label: "User's Guide",
    href: "https://www.01com.com/01com/ironcap-x/webhelp/index.htm",
    external: true,
  },
  {
    label: "FAQ",
    href: "/faq/ironcap-x",
    external: false,
  },
] as const;

export const metadata: Metadata = {
  title: "Welcome to IronCAP™ XMail | 01 Quantum",
  description:
    "Welcome information for IronCAP™ XMail account setup, email encryption, digital signing, and important account links.",
};

export default function IroncapXMailWelcomePage() {
  return (
    <main
      className="bg-white font-[family-name:var(--font-urbanist)] text-black"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      <section className="relative isolate overflow-hidden bg-black px-6 py-20 text-white sm:px-10 lg:px-16 xl:px-24">
        <Image
          src="/product_assets/ironcap-xmail-welcome/header-banner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.66)_45%,rgba(0,0,0,0.35)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[220px] max-w-[1512px] flex-col justify-center">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-quantum-green">
            Account Ready
          </p>
          <h1 className="max-w-[960px] text-[35px] font-medium leading-tight sm:text-[44px] lg:text-[56px]">
            Welcome to <ProductName />
          </h1>
          <p className="mt-5 max-w-[780px] text-[17px] leading-[28px] text-lite-gray sm:text-[18px]">
            You must restart your computer to begin using your <ProductName />
          </p>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
        <div className="mx-auto max-w-[1512px] px-6 py-12 sm:px-10 md:py-16 lg:px-16 xl:px-[95px]">
          <div className="mx-auto max-w-[1040px]">
            <div className="flex flex-col gap-5 text-[16px] leading-[28px] text-steel-gray sm:text-[17px] sm:leading-[31px]">
              <p>
                Your <ProductName /> account is now ready for use on the device
                that you have installed the <ProductName /> software. If you use
                more than one device to send or receive messages for the same
                email address, please make sure you have <ProductName />{" "}
                installed on them as well.
              </p>
              <p>
                You can now exchange secure emails with other <ProductName />{" "}
                users and safeguard yourselves against cyber attacks not only
                from conventional computers but also those from future quantum
                computers.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-12">
              <section>
                <h2 className="text-[24px] font-medium leading-[34px] text-quantum-blue sm:text-[28px] sm:leading-[38px]">
                  Sending encrypted emails to non-<ProductName /> users
                </h2>
                <p className="mt-4 text-[16px] leading-[28px] text-steel-gray sm:text-[17px] sm:leading-[31px]">
                  Recipients who are not <ProductName /> users will receive your
                  encrypted message together with instructions on how to sign up
                  for a FREE <ProductName /> account in order to open it.
                </p>
              </section>

              <section>
                <h2 className="text-[24px] font-medium leading-[34px] text-quantum-blue sm:text-[28px] sm:leading-[38px]">
                  Encrypt and/or digitally sign your emails
                </h2>
                <p className="mt-4 text-[16px] leading-[28px] text-steel-gray sm:text-[17px] sm:leading-[31px]">
                  <ProductName /> integrates with popular email clients to
                  ensure you are up and running in no time. As easy as 1-2-3,
                  you can send encrypted emails by selecting the <ProductName />{" "}
                  encryptions options on the compose screen. It&apos;s that
                  simple!
                </p>

                <div className="mt-8 flex flex-col gap-10">
                  {integrationImages.map((image) => (
                    <figure key={image.title}>
                      <figcaption className="mb-4 flex flex-col gap-1 text-[18px] font-semibold leading-[26px] text-black sm:flex-row sm:items-baseline">
                        <span>{image.title}</span>
                        <span className="text-[14px] font-medium leading-[22px] text-steel-gray">
                          {image.note}
                        </span>
                      </figcaption>
                      <div className="overflow-hidden rounded-[8px] border border-[#D7DEE3] bg-white shadow-[0_18px_44px_rgba(27,27,39,0.07)]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes="(min-width: 1280px) 1040px, calc(100vw - 48px)"
                          className="h-auto w-full"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-[24px] font-medium leading-[34px] text-quantum-blue sm:text-[28px] sm:leading-[38px]">
                  Encrypt and/or digitally sign your files
                </h2>
                <p className="mt-4 text-[16px] leading-[28px] text-steel-gray sm:text-[17px] sm:leading-[31px]">
                  <ProductName /> integrates seamlessly with the file system of
                  your computer. Simply right-mouse click on the file name you
                  wish to encrypt or digitally sign and then select the{" "}
                  <ProductName /> options.
                </p>

                <figure className="mt-8">
                  <figcaption className="mb-4 text-[18px] font-semibold leading-[26px] text-black">
                    Windows/Mac Integration
                  </figcaption>
                  <div className="overflow-hidden rounded-[8px] border border-[#D7DEE3] bg-white shadow-[0_18px_44px_rgba(27,27,39,0.07)]">
                    <Image
                      src="/product_assets/ironcap-xmail-welcome/files-integration.png"
                      alt="Windows/Mac Integration"
                      width={2209}
                      height={655}
                      sizes="(min-width: 1280px) 1040px, calc(100vw - 48px)"
                      className="h-auto w-full"
                    />
                  </div>
                </figure>
              </section>

              <section>
                <p className="text-[16px] leading-[28px] text-steel-gray sm:text-[17px] sm:leading-[31px]">
                  Thank you for choosing <ProductName />,
                  <span className="mt-1 block">
                    <em>
                      <ProductName /> Customer Service Team
                    </em>
                  </span>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-12 text-white sm:px-10 md:py-16 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1512px]">
          <div className="mx-auto max-w-[1040px]">
            <h2 className="text-[24px] font-medium leading-[34px] text-quantum-blue sm:text-[28px] sm:leading-[38px]">
              Links to Important Information
            </h2>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {importantLinks.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-[8px] border border-white/15 px-5 py-4 text-[15px] font-medium text-white transition-colors hover:border-quantum-green hover:text-quantum-green"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-[8px] border border-white/15 px-5 py-4 text-[15px] font-medium text-white transition-colors hover:border-quantum-green hover:text-quantum-green"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[15px] leading-[26px] text-lite-gray">
              <ProductName /> services require agreement to our{" "}
              <a
                href="https://www.01com.com/pdf/ironcapx-terms-of-service.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-quantum-green transition-colors hover:text-quantum-blue"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://www.01com.com/pdf/ironcapx-privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-quantum-green transition-colors hover:text-quantum-blue"
              >
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
