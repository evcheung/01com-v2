import { Button } from "@/components/ui/button";
import { IRONCAP_X_FREE_DOWNLOAD_URL } from "@/components/products/ironcapDownloadLinks";

const CONTACT_URL = "/contact";
const SALES_CONTACT_URL = "/contact?department=sales";

const Trademark = () => (
  <sup className="ml-0.5 align-super text-[0.48em] font-semibold">TM</sup>
);

function XMailName({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      IronCAP
      <Trademark /> XMail
    </span>
  );
}

type Plan = {
  name: string;
  eyebrow: string;
  price: string;
  cadence: string;
  description: string;
  features: readonly string[];
  cta: {
    text: string;
    url: string;
    variant: "green" | "blue";
    isBlank?: boolean;
  };
  highlighted?: boolean;
};

const plans: readonly Plan[] = [
  {
    name: "Personal Usage",
    eyebrow: "Free forever",
    price: "$0.00",
    cadence: "personal use",
    description:
      "For individuals who need quantum-safe email, file encryption, and signing without a business account.",
    features: [
      "Protected by IronCAP Cryptography",
      "Send/Receive Encrypted Emails",
      "Encrypt Sensitive Files",
      "Digitally Sign your Emails/Files",
      "Free Unlimited Personal Usage",
      "No Credit Card Required",
      "One User Per Account",
    ],
    cta: {
      text: "Free Download",
      url: IRONCAP_X_FREE_DOWNLOAD_URL,
      variant: "green",
      isBlank: true,
    },
  },
  {
    name: "Business Usage",
    eyebrow: "For teams",
    price: "$99.95",
    cadence: "per user/yr",
    description:
      "For organizations that need unlimited business use with centralized user and account administration.",
    features: [
      "Protected by IronCAP Cryptography",
      "Send/Receive Encrypted Emails",
      "Encrypt Sensitive Files",
      "Digitally Sign your Emails/Files",
      "Unlimited Business Usage",
      "Central Business Administration",
      "Multiple Users per Account",
    ],
    cta: {
      text: "Contact Sales",
      url: SALES_CONTACT_URL,
      variant: "blue",
    },
    highlighted: true,
  },
  {
    name: "IronCAP Key",
    eyebrow: "Optional add-on",
    price: "$199.95",
    cadence: "one-time purchase",
    description:
      "A physical authentication device that keeps cryptographic processing outside the operating system.",
    features: [
      "Add Physical Authentication",
      "Compatible with Free and Business Users",
      "Cryptographic Processing Inside the IronCAP Key",
      "Extra Protection Outside the Operating System",
    ],
    cta: {
      text: "Ask About Key",
      url: CONTACT_URL,
      variant: "green",
    },
  },
] as const;

const comparisonRows = [
  {
    capability: "Protected by IronCAP Cryptography",
    personal: "Included",
    business: "Included",
    key: "Enhances protection",
  },
  {
    capability: "Send/Receive Encrypted Emails",
    personal: "Included",
    business: "Included",
    key: "Compatible",
  },
  {
    capability: "Encrypt Sensitive Files",
    personal: "Included",
    business: "Included",
    key: "Compatible",
  },
  {
    capability: "Digitally Sign Emails/Files",
    personal: "Included",
    business: "Included",
    key: "Compatible",
  },
  {
    capability: "Usage Allowance",
    personal: "Free unlimited personal usage",
    business: "Unlimited business usage",
    key: "Optional one-time purchase",
  },
  {
    capability: "Account Structure",
    personal: "One user per account",
    business: "Multiple users per account",
    key: "Works with either plan",
  },
  {
    capability: "Administration",
    personal: "Personal account controls",
    business: "Central business administration",
    key: "Physical authentication layer",
  },
] as const;

function CheckIcon() {
  return (
    <span
      aria-hidden
      className="mt-[3px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-quantum-green text-[12px] font-semibold text-black"
    >
      ✓
    </span>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`flex h-full flex-col rounded-[28px] border p-6 shadow-[0_18px_44px_rgba(27,27,39,0.07)] sm:p-8 ${
        plan.highlighted
          ? "border-quantum-blue bg-[linear-gradient(180deg,#0B1824_0%,#101F2F_100%)] text-white"
          : "border-[#D7DEE3] bg-white text-black"
      }`}
    >
      <div className="flex flex-1 flex-col">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
          {plan.eyebrow}
        </p>
        <h3 className="mt-3 text-[24px] font-medium leading-[32px] text-quantum-blue">
          {plan.name}
        </h3>
        <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
          <p className="text-[42px] font-medium leading-none text-quantum-green sm:text-[50px]">
            {plan.price}
          </p>
          <p
            className={`pb-1 text-[15px] leading-[24px] ${
              plan.highlighted ? "text-lite-gray" : "text-steel-gray"
            }`}
          >
            {plan.cadence}
          </p>
        </div>
        <p
          className={`mt-5 text-[15px] leading-[24px] ${
            plan.highlighted ? "text-lite-gray" : "text-steel-gray"
          }`}
        >
          {plan.description}
        </p>

        <ul className="mt-7 space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className={`flex gap-3 text-[14px] leading-[22px] ${
                plan.highlighted ? "text-white" : "text-steel-gray"
              }`}
            >
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Button
          text={plan.cta.text}
          url={plan.cta.url}
          border={
            plan.cta.variant === "green"
              ? "border-quantum-green"
              : "border-quantum-blue"
          }
          textColor={
            plan.cta.variant === "green"
              ? "text-quantum-green"
              : "text-quantum-blue"
          }
          hoverBg={
            plan.cta.variant === "green"
              ? "hover:bg-quantum-green/10"
              : "hover:bg-quantum-blue/10"
          }
          bgDots={plan.cta.variant === "green" ? undefined : "bg-quantum-blue"}
          isBlank={plan.cta.isBlank ? "true" : undefined}
        />
      </div>
    </article>
  );
}

export default function XMailPricingComparisonSection() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
        <div className="mx-auto max-w-[1512px] px-6 pb-14 md:px-[95px] md:pb-[72px]">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-quantum-green">
              IronCAP XMail Plans
            </p>
            <h2 className="mt-3 text-[30px] font-medium leading-[40px] text-quantum-blue sm:text-[38px] sm:leading-[46px]">
              Pricing &amp; Comparison
            </h2>
            <p className="mt-4 text-[15px] leading-[24px] text-steel-gray sm:text-[16px] sm:leading-[28px]">
              Choose free personal protection, business licensing for teams, or
              the optional IronCAP Key for hardware-backed authentication with
              {" "}
              <XMailName className="font-medium text-quantum-blue" />.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-[1512px] px-6 py-14 md:px-[95px] md:py-[72px]">
          <div className="rounded-[28px] border border-white/10 bg-white p-6 shadow-[0_18px_44px_rgba(0,0,0,0.2)] sm:p-8 md:p-10">
            <div className="flex flex-col gap-4 border-b border-[#D7DEE3] pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                  Plan Comparison
                </p>
                <h3 className="mt-2 text-[24px] font-medium leading-[34px] text-quantum-blue">
                  Compare personal, business, and key options
                </h3>
              </div>
              <p className="max-w-[420px] text-[14px] leading-[22px] text-steel-gray md:text-right">
                Personal and business plans share the same core quantum-safe
                email and file protection. Business usage adds centralized
                administration for multiple users.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[820px] border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="w-[31%] border-b border-[#D7DEE3] px-4 py-4 text-left text-[14px] font-semibold uppercase tracking-[0.1em] text-steel-gray">
                      Capability
                    </th>
                    <th className="w-[23%] border-b border-[#D7DEE3] px-4 py-4 text-left text-[18px] font-medium text-quantum-blue">
                      Personal Usage
                    </th>
                    <th className="w-[23%] border-b border-[#D7DEE3] bg-[#F0F7FE] px-4 py-4 text-left text-[18px] font-medium text-quantum-blue">
                      Business Usage
                    </th>
                    <th className="w-[23%] border-b border-[#D7DEE3] px-4 py-4 text-left text-[18px] font-medium text-quantum-blue">
                      IronCAP Key
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.capability}>
                      <td className="border-b border-[#D7DEE3] px-4 py-4 text-[15px] font-medium leading-[24px] text-steel-gray">
                        {row.capability}
                      </td>
                      <td className="border-b border-[#D7DEE3] px-4 py-4 text-[15px] leading-[24px] text-steel-gray">
                        {row.personal}
                      </td>
                      <td className="border-b border-[#D7DEE3] bg-[#F0F7FE] px-4 py-4 text-[15px] leading-[24px] text-steel-gray">
                        {row.business}
                      </td>
                      <td className="border-b border-[#D7DEE3] px-4 py-4 text-[15px] leading-[24px] text-steel-gray">
                        {row.key}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[20px] border border-[#D7DEE3] bg-[#F7FBFF] p-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                  Personal
                </p>
                <p className="mt-2 text-[15px] leading-[24px] text-steel-gray">
                  Free unlimited personal usage with no credit card required.
                </p>
              </div>
              <div className="rounded-[20px] border border-[#D7DEE3] bg-[#F7FBFF] p-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                  Business
                </p>
                <p className="mt-2 text-[15px] leading-[24px] text-steel-gray">
                  Annual per-user licensing for unlimited business usage and
                  central administration.
                </p>
              </div>
              <div className="rounded-[20px] border border-[#D7DEE3] bg-[#F7FBFF] p-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                  Hardware Key
                </p>
                <p className="mt-2 text-[15px] leading-[24px] text-steel-gray">
                  Optional one-time purchase for users who want an added
                  physical authentication factor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
