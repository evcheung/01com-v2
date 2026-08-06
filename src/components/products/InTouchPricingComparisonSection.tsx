"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const BUY_NOW_URL = "https://locator.01com.com/ecommerce/?pid=5&b=1";
const TRY_IT_FREE_URL = "https://locator.01com.com/ecommerce/?pid=5";
const SALES_PHONE_HREF = "tel:18006682185";
const SALES_PHONE_LABEL = "1-800-668-2185";

type ComparisonRow = {
  feature: string;
  featureNote?: string;
  intouch: Status;
  competitors: Status;
};

const comparisonRows: readonly ComparisonRow[] = [
  { feature: "Remote Control", intouch: "full", competitors: "full" },
  { feature: "Remote Printing", intouch: "full", competitors: "full" },
  { feature: "File Transfer", intouch: "full", competitors: "full" },
  { feature: "Central Administration", intouch: "full", competitors: "full" },
  { feature: "Free Mobile Apps", intouch: "full", competitors: "full" },
  {
    feature: "2-Factor Authentication",
    intouch: "full",
    competitors: "partial",
  },
  {
    feature: "Remote Wake-up",
    featureNote: "1",
    intouch: "full",
    competitors: "partial",
  },
  { feature: "LDAP Authentication", intouch: "full", competitors: "none" },
  {
    feature: "MAC Address Restriction",
    intouch: "full",
    competitors: "none",
  },
  { feature: "Remote 2-Way Audio", intouch: "full", competitors: "none" },
  {
    feature: "Outlook Mobilization",
    featureNote: "2",
    intouch: "full",
    competitors: "none",
  },
] as const;

const feeRows = [
  {
    licenses: "1st license",
    monthly: "$9.95/mo",
    annual: "$99.95/yr",
    annualNote: "17% discount",
  },
  {
    licenses: "2nd - 5th licenses",
    monthly: "$9.50/mo",
    annual: "$95.00/yr",
    annualNote: "17% discount",
  },
  {
    licenses: "6th - 10th licenses",
    monthly: "$9.00/mo",
    annual: "$90.00/yr",
    annualNote: "17% discount",
  },
  {
    licenses: "11th +",
    monthly: `Please call ${SALES_PHONE_LABEL}`,
    annual: "",
    annualNote: "",
  },
] as const;

const priceTiers = [
  { monthly: 9.95, annual: 99.95 },
  { monthly: 9.5, annual: 95 },
  { monthly: 9.5, annual: 95 },
  { monthly: 9.5, annual: 95 },
  { monthly: 9.5, annual: 95 },
  { monthly: 9, annual: 90 },
  { monthly: 9, annual: 90 },
  { monthly: 9, annual: 90 },
  { monthly: 9, annual: 90 },
  { monthly: 9, annual: 90 },
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

type Status = "full" | "partial" | "none";
type BillingFrequency = "Annual" | "Monthly";
type CurrencyCode = "US$" | "CN$";

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

  if (status === "partial") {
    return (
      <span
        aria-label="Limited"
        title="Limited"
        className="inline-flex h-5 w-5 rounded-full border border-[#AFC8DA] bg-[linear-gradient(90deg,#79C99C_0%,#79C99C_50%,#FFFFFF_50%,#FFFFFF_100%)]"
      />
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

export default function InTouchPricingComparisonSection() {
  const [licenseCount, setLicenseCount] = useState("1");
  const [billingFrequency, setBillingFrequency] =
    useState<BillingFrequency>("Annual");
  const [currency, setCurrency] = useState<CurrencyCode>("US$");
  const [promoCode, setPromoCode] = useState("");

  const selectedQuantity = Number(licenseCount);
  const needsCustomQuote = selectedQuantity > 10;
  const tierSlice = priceTiers.slice(0, Math.min(selectedQuantity, 10));
  const calculatorTotal = tierSlice.reduce((sum, tier) => {
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
            <p className="mt-4 text-[15px] leading-[24px] text-steel-gray sm:text-[16px] sm:leading-[28px]">
              Compare the full
              {" "}
              <Link
                href="/products/ironcap-intouch/features"
                className="font-medium text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
              >
                <InTouchTrademarkName /> feature set
              </Link>
              {" "}
              against conventional remote-access subscriptions and
              estimate your service plan using the current public fee table.
            </p>

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
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                  Feature Snapshot
                </p>
                <h3 className="mt-2 text-[24px] font-medium leading-[34px] text-quantum-blue">
                  Why teams choose
                  {" "}
                  <InTouchTrademarkName />
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 text-[13px] leading-[20px] text-steel-gray">
                <span className="inline-flex items-center gap-2">
                  <StatusBadge status="full" />
                  Included
                </span>
                <span className="inline-flex items-center gap-2">
                  <StatusBadge status="partial" />
                  Limited
                </span>
                <span className="inline-flex items-center gap-2">
                  <StatusBadge status="none" />
                  Not included
                </span>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-[680px] w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="w-[52%] border-b border-[#D7DEE3] px-4 py-4 text-left text-[14px] font-semibold uppercase tracking-[0.1em] text-steel-gray">
                      Capability
                    </th>
                    <th className="w-[24%] border-b border-[#D7DEE3] bg-[#F0F7FE] px-4 py-4 text-center text-[18px] font-medium text-quantum-blue">
                      <InTouchTrademarkName />
                    </th>
                    <th className="w-[24%] border-b border-[#D7DEE3] px-4 py-4 text-center text-[18px] font-medium text-quantum-blue">
                      Competitors
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="border-b border-[#D7DEE3] px-4 py-4 text-[15px] leading-[24px] text-steel-gray">
                        {row.feature}
                        {row.featureNote ? (
                          <sup className="ml-1 text-[0.72em] font-semibold text-quantum-blue">
                            {row.featureNote}
                          </sup>
                        ) : null}
                      </td>
                      <td className="border-b border-[#D7DEE3] bg-[#F0F7FE] px-4 py-4 text-center">
                        <StatusBadge status={row.intouch} />
                      </td>
                      <td className="border-b border-[#D7DEE3] px-4 py-4 text-center">
                        <StatusBadge status={row.competitors} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-2 text-[13px] leading-[20px] text-steel-gray">
              <p>
                <span className="font-semibold text-quantum-blue">1</span>
                {" "}
                This feature requires subscription of 2 or more licenses.
              </p>
              <p>
                <span className="font-semibold text-quantum-blue">2</span>
                {" "}
                Real-time notification of new emails and manage your mobile
                mailbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-[1512px] px-6 py-14 md:px-[95px] md:py-[72px]">
          <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <article className="rounded-[28px] border border-white/10 bg-white p-6 shadow-[0_18px_44px_rgba(0,0,0,0.2)] sm:p-8 md:p-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                Public Fee Table
              </p>
              <h3 className="mt-2 text-[24px] font-medium leading-[34px] text-quantum-blue">
                License Fees
              </h3>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-[560px] w-full border-separate border-spacing-0">
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
                          {row.licenses === "11th +" ? (
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
                              <span className="font-medium text-quantum-blue">
                                {row.annual}
                              </span>
                              <span className="text-steel-gray">
                                {" "}
                                ({row.annualNote})
                              </span>
                            </>
                          ) : (
                            <span className="text-steel-gray/70">Custom quote</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#0B1824_0%,#101F2F_100%)] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.28)] sm:p-8 md:p-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                Service Plan Calculator
              </p>
              <h3 className="mt-2 text-[24px] font-medium leading-[34px] text-quantum-blue">
                Estimate Your Subscription
              </h3>
              <p className="mt-3 text-[15px] leading-[24px] text-lite-gray">
                Use the current public pricing tiers to estimate your
                subscription before checkout.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="# of licenses"
                  value={licenseCount}
                  onChange={setLicenseCount}
                  options={quantityOptions}
                />
                <SelectField
                  label="Payment frequency"
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
                  label="Currency"
                  value={currency}
                  onChange={(value) => setCurrency(value as CurrencyCode)}
                  options={[
                    { label: "US$", value: "US$" },
                    { label: "CN$", value: "CN$" },
                  ]}
                />
                <label className="block">
                  <span className="mb-3 block text-[13px] font-semibold uppercase tracking-[0.12em] text-quantum-green">
                    Promotional code
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
                  Result
                </p>
                {needsCustomQuote ? (
                  <div className="mt-3">
                    <p className="text-[20px] font-medium leading-[30px] text-quantum-blue">
                      Custom quote required for 11+ licenses
                    </p>
                    <p className="mt-2 text-[15px] leading-[24px] text-lite-gray">
                      Please call
                      {" "}
                      <a
                        href={SALES_PHONE_HREF}
                        className="font-medium text-quantum-green transition-colors hover:text-quantum-blue"
                      >
                        {SALES_PHONE_LABEL}
                      </a>
                      {" "}
                      for volume pricing.
                    </p>
                  </div>
                ) : (
                  <div className="mt-3">
                    <p className="text-[20px] font-medium leading-[30px] text-quantum-blue sm:text-[24px] sm:leading-[34px]">
                      {formatAmount(calculatorTotal, currency)}
                      {" "}
                      per
                      {" "}
                      {billingFrequency === "Annual" ? "year" : "month"}
                    </p>
                    {billingFrequency === "Annual" ? (
                      <p className="mt-2 text-[15px] leading-[24px] text-lite-gray">
                        Save
                        {" "}
                        <span className="font-medium text-quantum-green">
                          {formatAmount(savings, currency)}
                        </span>
                        {" "}
                        over the monthly plan.
                      </p>
                    ) : null}
                  </div>
                )}
              </div>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <ul className="space-y-3 text-[14px] leading-[22px] text-lite-gray">
                  <li>
                    License is per computer that can be accessed using
                    {" "}
                    <InTouchTrademarkName className="font-medium text-quantum-blue" />
                    .
                  </li>
                  <li>
                    No setup or installation fee with free technical support
                    and upgrade.
                  </li>
                  <li>Charges will be billed to your credit card.</li>
                  <li>Prices are subject to change.</li>
                  {promoCode.trim() ? (
                    <li>Promotional codes are applied during checkout.</li>
                  ) : null}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
