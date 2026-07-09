"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

const BUY_NOW_URL = "https://www.01com.com/free-trials/imoncall_free_trial.php?b=1";
const TRY_IT_FREE_URL = "https://imoncall.01com.com/go/freeversion.php";
const SALES_PHONE_HREF = "tel:18006682185";
const SALES_PHONE_LABEL = "1-800-668-2185";

type Status = "full" | "none";
type BillingFrequency = "Annual" | "Monthly";
type CurrencyCode = "US$" | "CN$";

type ComparisonRow = {
  feature: string;
  paidSubscription: Status;
  freeVersion: Status;
};

const comparisonRows: readonly ComparisonRow[] = [
  { feature: "Remote Control", paidSubscription: "full", freeVersion: "full" },
  { feature: "Live Chat", paidSubscription: "full", freeVersion: "none" },
  {
    feature: "Simultaneous Live Chat session",
    paidSubscription: "full",
    freeVersion: "none",
  },
  { feature: "File transfer", paidSubscription: "full", freeVersion: "none" },
  {
    feature: "Branding(banner, phoot, etc.)",
    paidSubscription: "full",
    freeVersion: "none",
  },
  {
    feature: "End-of-session survey",
    paidSubscription: "full",
    freeVersion: "none",
  },
  {
    feature: "Detailed support log and history",
    paidSubscription: "full",
    freeVersion: "none",
  },
  { feature: "Shareable license", paidSubscription: "full", freeVersion: "none" },
  {
    feature: "Central administration",
    paidSubscription: "full",
    freeVersion: "none",
  },
] as const;

const feeRows = [
  {
    licenses: "1 - 2 licenses",
    monthly: "$29.95/mo",
    annual: "$299.95/yr",
    annualNote: "(17% discount)",
  },
  {
    licenses: "2 - 5 licenses",
    monthly: "$29.95/mo",
    annual: "$270.00/yr",
    annualNote: "(17% discount)",
  },
  {
    licenses: "6 - 10 licenses",
    monthly: "$29.95/mo",
    annual: "$250.00/yr",
    annualNote: "(17% discount)",
  },
  {
    licenses: "11+ licenses",
    monthly: `Please call ${SALES_PHONE_LABEL}`,
    annual: "",
    annualNote: "",
  },
] as const;

const priceTiers = [
  { annual: 299.95, monthly: 29.95 },
  { annual: 299.95, monthly: 29.95 },
  { annual: 270, monthly: 29.95 },
  { annual: 270, monthly: 29.95 },
  { annual: 270, monthly: 29.95 },
  { annual: 250, monthly: 29.95 },
  { annual: 250, monthly: 29.95 },
  { annual: 250, monthly: 29.95 },
  { annual: 250, monthly: 29.95 },
  { annual: 250, monthly: 29.95 },
] as const;

const quantityOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
  { label: "11+", value: 11 },
] as const;

function OnCallTrademarkName({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      I&apos;m OnCall
    </span>
  );
}

function InTouchTrademarkName({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      IronCAP
      <sup className="ml-0.5 align-super text-[0.48em] font-semibold">TM</sup>
      {" "}InTouch
    </span>
  );
}

function StatusBadge({ status }: { status: Status }) {
  if (status === "full") {
    return (
      <span
        aria-label="Included"
        title="Included"
        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-quantum-green text-[12px] font-semibold text-black"
      >
        ✓
      </span>
    );
  }

  return (
    <span
      aria-label="Not included"
      title="Not included"
      className="inline-flex h-5 w-5 rounded-full border border-[#AFC8DA] bg-white"
    />
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly { label: string; value: string | number }[];
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[13px] font-semibold uppercase tracking-[0.12em] text-quantum-green">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-12 w-full appearance-none rounded-[16px] border border-[#D7DEE3] bg-white px-4 pr-12 text-[15px] text-steel-gray outline-none transition-colors focus:border-quantum-green focus:ring-2 focus:ring-quantum-green/15"
        >
          {options.map((option) => (
            <option key={option.label} value={String(option.value)}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-quantum-blue">
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m5 7.5 5 5 5-5" />
          </svg>
        </span>
      </div>
    </label>
  );
}

function formatAmount(amount: number, currency: CurrencyCode) {
  return `${currency}${amount.toFixed(2)}`;
}

export default function OnCallPricingComparisonSection() {
  const [licenseCount, setLicenseCount] = useState("1");
  const [billingFrequency, setBillingFrequency] =
    useState<BillingFrequency>("Annual");
  const [currency, setCurrency] = useState<CurrencyCode>("US$");
  const [promoCode, setPromoCode] = useState("");

  const selectedQuantity = Number(licenseCount);
  const needsCustomQuote = selectedQuantity > 10;
  const tierSlice = priceTiers.slice(0, Math.min(selectedQuantity, 10));
  const calculatorTotal = needsCustomQuote
    ? null
    : tierSlice.reduce((sum, tier) => {
        return sum + (billingFrequency === "Annual" ? tier.annual : tier.monthly);
      }, 0);
  const annualEquivalent = tierSlice.reduce((sum, tier) => sum + tier.annual, 0);
  const monthlyEquivalent = tierSlice.reduce(
    (sum, tier) => sum + tier.monthly * 12,
    0,
  );
  const savings = monthlyEquivalent - annualEquivalent;

  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)]">
        <div className="mx-auto max-w-[1512px] px-6 pb-14 md:px-[95px] md:pb-[72px]">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="text-[30px] font-medium leading-[40px] text-quantum-blue sm:text-[38px] sm:leading-[46px]">
              Pricing &amp; Comparison
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                text="Buy Now"
                url={BUY_NOW_URL}
                border="border-quantum-green"
                textColor="text-quantum-green"
                hoverBg="hover:bg-quantum-green/10"
                isBlank="true"
              />
              <Button
                text="Try It Free"
                url={TRY_IT_FREE_URL}
                border="border-quantum-blue"
                textColor="text-quantum-blue"
                hoverBg="hover:bg-quantum-blue/10"
                bgDots="bg-quantum-blue"
                isBlank="true"
              />
            </div>
          </div>

          <div className="mt-12 rounded-[28px] border border-[#D7DEE3] bg-white p-6 shadow-[0_18px_44px_rgba(27,27,39,0.06)] sm:p-8 md:mt-14 md:p-10">
            <div className="flex flex-col gap-4 border-b border-[#D7DEE3] pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-[24px] font-medium leading-[34px] text-quantum-blue">
                  <OnCallTrademarkName />
                </h3>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[680px] border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="w-[60%] border-b border-[#D7DEE3] px-4 py-4 text-left text-[14px] font-semibold uppercase tracking-[0.1em] text-steel-gray">
                      Capability
                    </th>
                    <th className="w-[20%] border-b border-[#D7DEE3] bg-[#F0F7FE] px-4 py-4 text-center text-[18px] font-medium text-quantum-blue">
                      Paid Subscription
                    </th>
                    <th className="w-[20%] border-b border-[#D7DEE3] px-4 py-4 text-center text-[18px] font-medium text-quantum-blue">
                      Free Version
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="border-b border-[#D7DEE3] px-4 py-4 text-[15px] leading-[24px] text-steel-gray">
                        {row.feature}
                      </td>
                      <td className="border-b border-[#D7DEE3] bg-[#F0F7FE] px-4 py-4 text-center">
                        <StatusBadge status={row.paidSubscription} />
                      </td>
                      <td className="border-b border-[#D7DEE3] px-4 py-4 text-center">
                        <StatusBadge status={row.freeVersion} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 rounded-[28px] border border-[#D7DEE3] bg-white p-6 shadow-[0_18px_44px_rgba(27,27,39,0.06)] sm:p-8 md:mt-14 md:p-10">
            <h3 className="text-[24px] font-medium leading-[34px] text-quantum-blue">
              Shareable Licensing Model
            </h3>
            <p className="mt-4 text-[15px] leading-[24px] text-steel-gray">
              Several agents can share one license. How many you should purchase
              is determined by how many of them will do remote support at the
              same time. For example, if you have 5 remote customer service
              agents. You know that no more than 3 will be using I&apos;m OnCall at
              the same time. Instead of buying 5 I&apos;m OnCall licenses, you only
              need to purchase 3.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-[1512px] px-6 py-14 md:px-[95px] md:py-[72px]">
          <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <article className="rounded-[28px] border border-white/10 bg-white p-6 shadow-[0_18px_44px_rgba(0,0,0,0.2)] sm:p-8 md:p-10">
              <h3 className="text-[24px] font-medium leading-[34px] text-quantum-blue">
                License Fee Table
              </h3>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[560px] border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="border-b border-[#D7DEE3] px-4 py-4 text-left text-[14px] font-semibold uppercase tracking-[0.1em] text-steel-gray">
                        Licenses
                      </th>
                      <th className="border-b border-[#D7DEE3] px-4 py-4 text-left text-[14px] font-semibold uppercase tracking-[0.1em] text-steel-gray">
                        Monthly Plan
                      </th>
                      <th className="border-b border-[#D7DEE3] px-4 py-4 text-left text-[14px] font-semibold uppercase tracking-[0.1em] text-steel-gray">
                        Annual Plan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeRows.map((row) => (
                      <tr key={row.licenses}>
                        <td className="border-b border-[#D7DEE3] px-4 py-4 text-[15px] leading-[24px] text-steel-gray">
                          {row.licenses}
                        </td>
                        <td className="border-b border-[#D7DEE3] px-4 py-4 text-[15px] leading-[24px] text-steel-gray">
                          {row.licenses === "11+ licenses" ? (
                            <a
                              href={SALES_PHONE_HREF}
                              className="font-medium text-quantum-blue transition-colors hover:text-quantum-green"
                            >
                              {row.monthly}
                            </a>
                          ) : (
                            row.monthly
                          )}
                        </td>
                        <td className="border-b border-[#D7DEE3] px-4 py-4 text-[15px] leading-[24px] text-steel-gray">
                          {row.annual ? (
                            <>
                              <span className="font-medium text-quantum-green">
                                {row.annual}
                              </span>
                              <span className="text-quantum-green">
                                {" "}
                                {row.annualNote}
                              </span>
                            </>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#0B1824_0%,#101F2F_100%)] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.28)] sm:p-8 md:p-10">
              <h3 className="text-[24px] font-medium leading-[34px] text-quantum-blue">
                Service Plan Calculator
              </h3>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="# of licenses:"
                  value={licenseCount}
                  onChange={setLicenseCount}
                  options={quantityOptions}
                />
                <SelectField
                  label="Payment Frequency:"
                  value={billingFrequency}
                  onChange={(value) =>
                    setBillingFrequency(value as BillingFrequency)
                  }
                  options={[
                    { label: "Annual", value: "Annual" },
                    { label: "Monthly", value: "Monthly" },
                  ]}
                />
                <SelectField
                  label="Currency:"
                  value={currency}
                  onChange={(value) => setCurrency(value as CurrencyCode)}
                  options={[
                    { label: "US$", value: "US$" },
                    { label: "CN$", value: "CN$" },
                  ]}
                />
                <label className="block">
                  <span className="mb-3 block text-[13px] font-semibold uppercase tracking-[0.12em] text-quantum-green">
                    Promotional code:
                  </span>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(event) => setPromoCode(event.target.value)}
                    className="h-12 w-full rounded-[16px] border border-[#D7DEE3] bg-white px-4 text-[15px] text-steel-gray outline-none transition-colors focus:border-quantum-green focus:ring-2 focus:ring-quantum-green/15"
                  />
                </label>
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                  Result:
                </p>
                <div className="mt-3">
                  {needsCustomQuote || calculatorTotal === null ? (
                    <p className="text-[20px] font-medium leading-[30px] text-lite-gray">
                      Please call
                      {" "}
                      <a
                        href={SALES_PHONE_HREF}
                        className="text-quantum-blue transition-colors hover:text-quantum-green"
                      >
                        {SALES_PHONE_LABEL}
                      </a>
                    </p>
                  ) : (
                    <p className="text-[20px] font-medium leading-[30px] text-lite-gray sm:text-[24px] sm:leading-[34px]">
                      <span className="text-quantum-green">
                        {formatAmount(calculatorTotal, currency)}
                        {" "}
                        per
                        {" "}
                        {billingFrequency === "Annual" ? "year" : "month"}
                      </span>
                      {billingFrequency === "Monthly" ? null : (
                        <>
                          {" "}
                          (save
                          {" "}
                          {formatAmount(savings, currency)}
                          {" "}
                          over monthly plan)
                        </>
                      )}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <ul className="ml-5 list-disc space-y-3 text-[14px] leading-[22px] text-lite-gray marker:text-quantum-green">
                  <li>
                    License is per computer that can be accessed using
                    {" "}
                    <InTouchTrademarkName className="font-medium text-quantum-blue" />
                  </li>
                  <li>No setup or installation fee with free technical support and upgrade</li>
                  <li>Charges will be billed to your credit card</li>
                  <li>Prices are subject to change</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
