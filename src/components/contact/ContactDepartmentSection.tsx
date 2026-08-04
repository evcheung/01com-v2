"use client";

import { useEffect, useState } from "react";

import { ContactEmailForm } from "@/components/contact/ContactEmailForm";
import { GreenDots } from "@/components/ui/GreenDots";

type DepartmentButton = {
  label: string;
  email: string;
};

type ContactDepartmentSectionProps = {
  departmentButtons: DepartmentButton[];
};

function normalizeDepartmentValue(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function ContactDepartmentSection({
  departmentButtons,
}: ContactDepartmentSectionProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentButton>(
    departmentButtons[0],
  );

  useEffect(() => {
    const requestedDepartment = new URLSearchParams(window.location.search).get(
      "department",
    );

    if (!requestedDepartment) {
      return;
    }

    const normalizedRequest = normalizeDepartmentValue(requestedDepartment);
    const matchedDepartment = departmentButtons.find((department) => {
      return (
        normalizeDepartmentValue(department.label).includes(normalizedRequest) ||
        normalizeDepartmentValue(department.email).includes(normalizedRequest)
      );
    });

    if (matchedDepartment) {
      setSelectedDepartment(matchedDepartment);
    }
  }, [departmentButtons]);

  return (
    <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] pb-8 flex flex-col md:flex-row gap-8 items-center">
      <aside className="flex-1 flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span
              aria-hidden
              className="flex h-[40px] w-[34px] shrink-0 items-center justify-center text-quantum-green"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <a
              href="tel:+18006682185"
              className="text-lite-gray text-[20px] font-medium leading-[34px] break-words hover:text-quantum-green transition-colors"
            >
              1 800 668-2185
            </a>
          </div>

          <a
            href="#live-chat"
            className="flex items-center gap-4 text-lite-gray text-[20px] font-medium leading-[34px] break-words hover:text-quantum-green transition-colors"
          >
            <span
              aria-hidden
              className="flex h-[40px] w-[34px] shrink-0 items-center justify-center text-quantum-green"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </span>
            <span>Live Chat</span>
          </a>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          {departmentButtons.map((department) => {
            const isSelected = department.email === selectedDepartment.email;

            return (
              <button
                key={department.label}
                type="button"
                onClick={() => setSelectedDepartment(department)}
                aria-pressed={isSelected}
                className={`inline-flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-2 border rounded-bl-lg rounded-tr-lg text-[12px] font-medium uppercase tracking-widest text-center leading-[1.4] px-5 sm:px-6 py-3 whitespace-normal sm:flex-nowrap sm:whitespace-nowrap transition-colors ${
                  isSelected
                    ? "border-quantum-green bg-quantum-green/10 text-quantum-green"
                    : "border-quantum-green/60 text-quantum-green hover:bg-quantum-green/10"
                }`}
              >
                {department.label}
                <GreenDots />
              </button>
            );
          })}
        </div>

        <address className="not-italic mt-4">
          <p className="text-quantum-green text-[20px] font-medium leading-[34px] break-words mb-0">
            01 Quantum
          </p>
          <p className="text-steel-gray text-[15px] font-normal leading-[24px] break-words">
            789 Don Mills Road, Suite #700
          </p>
          <p className="text-steel-gray text-[15px] font-normal leading-[24px] break-words">
            Toronto, Ontario, M3C 1T5
          </p>
          <p className="text-steel-gray text-[15px] font-normal leading-[24px] break-words">
            Canada
          </p>
          <p className="text-quantum-green text-[20px] font-medium leading-[34px] break-words mt-4">
            Office Hours
          </p>
          <p className="text-steel-gray text-[15px] font-normal leading-[24px] break-words">
            Monday – Friday
          </p>
          <p className="text-steel-gray text-[15px] font-normal leading-[24px] break-words">
            9 am to 6 pm EST
          </p>
        </address>
      </aside>

      <div className="w-full md:w-[705px] shrink-0 bg-gradient-to-br from-[#f2f6f7] to-white rounded-[17px] p-8 md:p-12 shadow-sm">
        <p className="text-steel-gray text-[20px] leading-[32px] max-w-[446px] mb-8">
          Contact us to receive updates, white papers, brochures, articles or
          to answer specific questions.
        </p>

        <ContactEmailForm
          contactEmail={selectedDepartment.email}
          contactLabel={selectedDepartment.label}
        />
      </div>
    </div>
  );
}
