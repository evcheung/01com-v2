"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Title } from "@/components/faq/Title";

const Trademark = () => <sup className="text-[0.55em]">™</sup>;

type Category = { label: React.ReactNode; href?: string };

const categories: Category[] = [
  { label: "General Questions" },
  { label: "Free vs Business Account" },
  { label: "Security" },
  { label: "Administrator Functions" },
  {
    label: (
      <>
        Using IronCAP X<Trademark />
      </>
    ),
  },
  { label: "Billing" },
  { label: "Special Situations" },
];

type Faq = { id: string; question: React.ReactNode; answer?: React.ReactNode };

const faqs: Faq[] = [
  {
    id: "what-is-ironcap-x",
    question: (
      <>
        What is IronCAP X<Trademark />?
      </>
    ),
    answer: (
      <>
        IronCAP X<Trademark /> is the world&apos;s first Quantum-safe end-to-end
        email encryption system utilizing IronCAP Crypto (ICC) as its
        cryptographic foundation with post-quantum cryptographic algorithms that
        are approved by NIST (National Institute of Standards and Technology in
        the US).
      </>
    ),
  },
  {
    id: "free-account-signup",
    question: <>How do I sign up for a FREE account?</>,
    answer: (
      <>
        IronCAP X<Trademark /> is free for personal usage. To sign up for a FREE
        account, simply visit{" "}
        <a
          href="https://www.ironcapx.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-quantum-blue hover:underline"
        >
          www.ironcapx.com
        </a>{" "}
        and click &ldquo;FREE Personal Usage&rdquo;. Enter your name and email
        address. Then click &ldquo;Send Installation Email&rdquo;. An email will
        be sent to you with a link to install IronCAP X<Trademark /> onto your
        computer.
      </>
    ),
  },
  {
    id: "system-requirements",
    question: (
      <>
        What is the system requirement to use IronCAP X<Trademark />?
      </>
    ),
    answer: (
      <>
        IronCAP X<Trademark /> requires Windows 7 or above with Outlook 2010+ as
        the email client. Note: Web-based clients such as Gmail, Yahoo, and
        Hotmail will be supported in a future version.
      </>
    ),
  },
  {
    id: "outlook",
    question: (
      <>
        Can IronCAP X<Trademark /> work with Outlook?
      </>
    ),
    answer: (
      <>
        Yes, IronCAP X<Trademark /> works with Outlook 2010 or above.
      </>
    ),
  },
  {
    id: "webmail",
    question: (
      <>
        Can IronCAP X<Trademark /> work with other web-based email (e.g. Gmail)?
      </>
    ),
    answer: (
      <>
        Not in the current version. Future version of IronCAP X<Trademark />{" "}
        will work with web-based email clients such as Gmail, Yahoo, and Hotmail
        via installation of a browser plug-in. Compatible browsers are Chrome
        and Firefox.
      </>
    ),
  },
  {
    id: "mobile",
    question: (
      <>
        Does IronCAP X<Trademark /> support mobile email clients?
      </>
    ),
    answer: (
      <>
        Current version of IronCAP X<Trademark /> supports Windows-based
        Outlook. Support of webmail clients is coming soon.
      </>
    ),
  },
  {
    id: "multiple-addresses",
    question: <>Can I manage more than 1 email address on one computer?</>,
    answer: (
      <>
        Current version of IronCAP X<Trademark /> only supports 1 email address
        per license. Future version will allow up to 3 email addresses on the
        same computer.
      </>
    ),
  },
];

function GreenDots() {
  return (
    <span aria-hidden className="inline-flex items-center gap-0.75">
      <span className="block size-1.25 rounded-full bg-quantum-green" />
      <span className="block size-1.25 rounded-full bg-quantum-green" />
      <span className="block size-1.25 rounded-full bg-quantum-green" />
    </span>
  );
}

export default function FaqIronCapXPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="bg-white font-urbanist">
      <Title />

      {/* ─── Body: 2-column layout (Categories | Q&A) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-[405px_1fr]">
        {/* ─── Left Column (black) ─── */}
        <aside className="bg-black text-white px-12 py-16 lg:min-h-197.5">
          <h2 className="text-[20px] font-medium leading-8.5 text-white">
            Categories
          </h2>

          <ul className="mt-6 space-y-1.5">
            {categories.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <GreenDots />
                {c.href ? (
                  <Link
                    href={c.href}
                    className="text-quantum-green text-[15px] font-medium uppercase leading-8.5 hover:underline"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-quantum-green text-[15px] font-medium uppercase leading-8.5">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <p className="text-quantum-green text-[20px] font-medium leading-8.5">
              Still have questions?
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-3 rounded-full border border-quantum-green px-5 py-2 text-[12px] font-medium uppercase text-quantum-green transition-colors hover:bg-quantum-green hover:text-black"
            >
              <span>Contact Us</span>
              <GreenDots />
            </Link>
          </div>
        </aside>

        {/* ─── Right Column (Q&A) ─── */}
        <section className="px-6 py-16 lg:px-13">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-11.5">
            IronCAP X<Trademark /> FAQs
          </h2>

          {/* divider */}
          <div className="mt-2 h-px w-full max-w-156.75 bg-lite-gray/40" />

          <ul className="mt-8 flex flex-col gap-3">
            {faqs.map((f) => {
              const open = openId === f.id;
              return (
                <li key={f.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : f.id)}
                    aria-expanded={open}
                    aria-controls={`${f.id}-panel`}
                    className="flex w-full items-center justify-between gap-6 rounded-[9px] bg-linear-to-r from-[#f2f6f7] via-white to-[#f2f6f7] px-7 py-3 text-left transition-shadow hover:shadow-sm"
                  >
                    <span className="text-quantum-green text-[21px] font-normal leading-7.5">
                      {f.question}
                    </span>
                    <span
                      aria-hidden
                      className={`flex shrink-0 items-center gap-0.75 transition-transform ${
                        open ? "rotate-90" : ""
                      }`}
                    >
                      <span className="block size-1.25 rounded-full bg-quantum-green" />
                      <span className="block size-1.25 rounded-full bg-quantum-green" />
                      <span className="block size-1.25 rounded-full bg-quantum-green" />
                    </span>
                  </button>

                  {open && f.answer && (
                    <div
                      id={`${f.id}-panel`}
                      className="mt-2 rounded-[9px] bg-white px-7 py-4 text-[15px] leading-6 text-steel-gray shadow-sm"
                    >
                      {f.answer}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Learn-more pill button */}
          <section className="bg-white py-16 flex justify-center">
            <Button
              text=" LEARN MORE ABOUT 01 QUANTUM PRODUCTS"
              url="/products/ironcap-engine"
              border="border-quantum-green/60"
              textColor="text-quantum-green"
              hoverBg="hover:bg-quantum-green/10"
            />
          </section>
        </section>
      </div>
    </div>
  );
}
