import { Button } from "@/components/ui/button";
import { XMailInstallationForm } from "./XMailInstallationForm";

const Trademark = () => <sup className="text-[0.55em]">TM</sup>;

const sharedFeatures = [
  "Protected by IronCAP Cryptography",
  "Send/Receive Encrypted Emails",
  "Encrypt Sensitive Files",
  "Digitally Sign your Emails/Files",
] as const;

const usagePages = {
  personal: {
    eyebrow: "Free Personal Usage",
    title: "Personal Usage",
    price: "$0.00",
    cadence: "Free unlimited personal usage",
    description: (
      <>
        IronCAP<Trademark /> XMail provides unlimited free usage for personal
        accounts. Business and commercial usage are handled separately.
      </>
    ),
    highlights: [
      "Free Unlimited Personal Usage",
      "No Credit Card Required",
      "One User Per Account",
    ],
    buttonText: "Send Installation Email",
  },
  business: {
    eyebrow: "Business Usage",
    title: "Business Usage",
    price: "$99.95",
    cadence: "per user/yr",
    description:
      "Business usage adds commercial licensing, centralized administration, and support for multiple users under one account.",
    highlights: [
      "Unlimited Business Usage",
      "Central Business Administration",
      "Multiple Users per Account",
    ],
    notes: [
      {
        title: "Risk-Free Trial",
        body: "Install and activate a FREE Personal Usage account to try the software. The Terms of Service allows a business entity to use a FREE Personal account for 30 days.",
      },
      {
        title: "Already have a FREE Personal account?",
        body: 'There is no need to reinstall. Select "My Account" in your IronCAP XMail software to upgrade to a Business account.',
      },
    ],
    buttonText: "Send Installation Email",
  },
} as const;

type UsageType = keyof typeof usagePages;

function CheckIcon() {
  return (
    <span
      aria-hidden
      className="mt-[3px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-quantum-green text-black"
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3"
      >
        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
      </svg>
    </span>
  );
}

export default function XMailUsageDownloadPage({ type }: { type: UsageType }) {
  const page = usagePages[type];
  const features = [...sharedFeatures, ...page.highlights];

  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
      <div className="mx-auto max-w-[1512px] px-6 pb-14 md:px-[95px] md:pb-[72px]">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-quantum-green">
            IronCAP<Trademark /> XMail
          </p>
          <h1 className="mt-3 text-[30px] font-medium leading-[40px] text-quantum-blue sm:text-[38px] sm:leading-[46px]">
            {page.eyebrow}
          </h1>
          <p className="mt-4 text-[15px] leading-[24px] text-steel-gray sm:text-[16px] sm:leading-[28px]">
            {page.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.05fr_0.9fr]">
          <article className="rounded-[8px] border border-[#D7DEE3] bg-white p-6 shadow-[0_18px_44px_rgba(27,27,39,0.07)] sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
              {page.title}
            </p>
            <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
              <p className="text-[46px] font-medium leading-none text-quantum-green sm:text-[54px]">
                {page.price}
              </p>
              <p className="pb-1 text-[15px] leading-[24px] text-steel-gray">
                {page.cadence}
              </p>
            </div>

            {"notes" in page && (
              <div className="mt-8 space-y-5">
                {page.notes.map((note) => (
                  <div key={note.title}>
                    <p className="text-[15px] font-semibold leading-[24px] text-quantum-blue">
                      {note.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-[22px] text-steel-gray">
                      {note.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </article>

          <XMailInstallationForm buttonText={page.buttonText} />

          <article className="rounded-[8px] border border-quantum-blue/25 bg-black p-6 text-white shadow-[0_18px_44px_rgba(0,0,0,0.14)] sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
              Included
            </p>
            <ul className="mt-6 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[14px] leading-[22px]">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 rounded-[8px] border border-[#D7DEE3] bg-white p-6 text-center shadow-[0_18px_44px_rgba(27,27,39,0.07)] sm:p-8">
          <h2 className="text-[24px] font-medium leading-[34px] text-quantum-blue">
            Learn More About the IronCAP<Trademark /> Cryptographic System
          </h2>
          <div className="mt-6">
            <Button
              text="Learn More"
              url="/products/ironcap-engine"
              border="border-quantum-green"
              textColor="text-quantum-green"
              hoverBg="hover:bg-quantum-green/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
