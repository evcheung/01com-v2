"use client";

import { useState } from "react";
import { Title } from "@/components/faq/Title";

const Trademark = () => <sup className="text-[0.55em]">™</sup>;

type Faq = {
  id: string;
  question: React.ReactNode;
  answer: React.ReactNode;
};

type FaqCategory = {
  id: string;
  label: React.ReactNode;
  items: Faq[];
};

const faqCategories: FaqCategory[] = [
  {
    id: "generalQuestions",
    label: "General Questions",
    items: [
      {
        id: "what-is-icc",
        question: "What is ICC?",
        answer: (
          <>
            ICC stands for IronCAP Crypto, an NIST-approved quantum-safe
            cryptographic system utilizing NIST-approved post-quantum
            cryptography (PQC) algorithms and IronCAP<Trademark />&apos;s ground
            breaking technologies. IronCAP<Trademark /> Toolkits provide the
            application programming interface to developers to let them easily
            integrate ICC with their applications. This transforms their
            applications to be safe against cyberattacks from not only computers
            today but also against those from upcoming quantum computers.
          </>
        ),
      },
      {
        id: "cost",
        question: "What is the cost of using IronCAP Toolkits?",
        answer: (
          <>
            ICC Toolkits is designed to be extremely cost effective to fit all
            possible vertical industries. Please contact us to discuss your
            needs. We will tailor a deal to best fit your specific requirements
            and business nature.
          </>
        ),
      },
      {
        id: "license",
        question: "How do I license IronCAP Toolkits?",
        answer: (
          <>
            Please contact us by email at{" "}
            <a
              href="mailto:sales@ironcap.ca"
              className="text-quantum-blue hover:underline"
            >
              sales@ironcap.ca
            </a>{" "}
            or give us a call at 1-800-668-2185 for licensing information.
          </>
        ),
      },
    ],
  },
  {
    id: "howToUse",
    label: "How to use IronCAP Toolkits",
    items: [],
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

export default function FaqIronCapToolkitsPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(faqCategories[0].id);
  const [openId, setOpenId] = useState<string | null>(null);
  const activeCategory =
    faqCategories.find((category) => category.id === activeCategoryId) ??
    faqCategories[0];

  return (
    <div className="bg-white font-urbanist">
      <Title />

      <div className="grid grid-cols-1 lg:grid-cols-[405px_1fr]">
        <aside className="bg-black px-6 py-10 text-white sm:px-10 lg:min-h-197.5 lg:px-12 lg:py-16">
          <h2 className="text-[20px] font-medium leading-8.5 text-white">
            Categories
          </h2>

          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:flex lg:flex-col">
            {faqCategories.map((category) => {
              const active = activeCategory.id === category.id;

              return (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategoryId(category.id);
                      setOpenId(null);
                    }}
                    aria-pressed={active}
                    className={`flex w-full cursor-pointer items-center gap-3 py-1 text-left transition-colors ${
                      active
                        ? "text-quantum-green underline underline-offset-4"
                        : "text-quantum-green hover:underline hover:underline-offset-4"
                    }`}
                  >
                    <GreenDots />
                    <span className="text-[15px] font-medium uppercase leading-8.5 break-words">
                      {category.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <section className="px-6 py-16 lg:px-13">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-11.5">
            IronCAP<Trademark /> Toolkits FAQs
          </h2>

          <div className="mt-2 h-px w-full max-w-156.75 bg-lite-gray/40" />

          <ul className="mt-8 flex flex-col gap-3">
            {activeCategory.items.map((faq) => {
              const open = openId === faq.id;

              return (
                <li key={faq.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : faq.id)}
                    aria-expanded={open}
                    aria-controls={`${faq.id}-panel`}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 rounded-[9px] bg-linear-to-r from-[#f2f6f7] via-white to-[#f2f6f7] px-5 py-3 text-left transition-shadow hover:shadow-sm sm:px-7"
                  >
                    <span className="text-quantum-green text-[19px] font-normal leading-7.5 sm:text-[21px]">
                      {faq.question}
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

                  {open && (
                    <div
                      id={`${faq.id}-panel`}
                      className="mt-2 rounded-[9px] bg-white px-5 py-4 text-[15px] leading-6 text-steel-gray shadow-sm sm:px-7"
                    >
                      {faq.answer}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
