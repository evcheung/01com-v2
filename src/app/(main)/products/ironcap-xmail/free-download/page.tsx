import { Button } from "@/components/ui/button";

const downloadOptions = [
  {
    label: "Personal Usage",
    description:
      "For individuals who want free quantum-safe email, file encryption, and digital signing for everyday personal communications.",
    buttonText: "Personal Download",
    href: "/products/ironcap-xmail/free-download/personal",
  },
  {
    label: "Business Usage",
    description:
      "For organizations that need IronCAP XMail protection with business account support and centralized user management.",
    buttonText: "Business Download",
    href: "/products/ironcap-xmail/free-download/business",
  },
] as const;

export default function IroncapXMailFreeDownloadPage() {
  return (
    <section className="min-h-[60vh] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
      <div className="mx-auto flex max-w-[1512px] flex-col gap-8 px-6 pb-14 md:gap-12 md:px-[95px] md:pb-[72px]">
        <div className="mx-auto flex max-w-[860px] flex-col gap-5 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-quantum-green">
            IronCAP<sup className="text-[0.55em]">TM</sup> XMail
          </p>
          <h2 className="text-[28px] font-medium leading-[36px] text-quantum-blue sm:text-[32px] sm:leading-[42px]">
            Try it Free
          </h2>
          <p className="text-[15px] leading-[26px] text-steel-gray sm:text-[16px]">
            Simply go to{" "}
            <a
              href="https://www.ironcap.ca/ironcap-x/personal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
            >
              www.ironcap.ca/ironcap-x/personal
            </a>{" "}
            and get the FREE personal version today! A Business version with a
            central user management tool for the IT department to manage their
            users and passwords are also available. Now your email/files are
            truly end-to-end encrypted with no third-party trust.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {downloadOptions.map((option) => (
            <article
              key={option.label}
              className="flex h-full flex-col gap-8 rounded-[8px] border border-[#D7DEE3] bg-white p-6 shadow-[0_18px_44px_rgba(27,27,39,0.07)] sm:p-8"
            >
              <div className="flex flex-1 flex-col gap-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                  Free Download
                </p>
                <h3 className="text-[24px] font-medium leading-[34px] text-quantum-blue">
                  {option.label}
                </h3>
                <p className="text-[15px] leading-[24px] text-steel-gray">
                  {option.description}
                </p>
              </div>

              <div>
                <Button
                  text={option.buttonText}
                  url={option.href}
                  border="border-quantum-green"
                  textColor="text-quantum-green"
                  hoverBg="hover:bg-quantum-green/10"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-8 rounded-[8px] border border-quantum-blue/25 bg-black p-6 text-white shadow-[0_18px_44px_rgba(0,0,0,0.14)] sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
              Partner Resource
            </p>
            <h3 className="text-[24px] font-medium leading-[34px] text-quantum-blue">
              Co branding guidelines
            </h3>
            <p className="max-w-[720px] text-[15px] leading-[24px] text-lite-gray">
              Review the IronCAP co-branding guidance for approved logo usage,
              visual standards, and partner presentation rules.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              text="View PDF"
              url="https://www.01com.com/pdf/ironcap-co-branding-guideline.pdf"
              border="border-quantum-green"
              textColor="text-quantum-green"
              hoverBg="hover:bg-quantum-green/10"
              isBlank="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
