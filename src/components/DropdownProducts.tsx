"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    heading: "ENGINE",
    label: "Engine",
    href: "/products/ironcap-engine",
  },
  {
    heading: "INTOUCH",
    label: "InTouch",
    href: "/products/ironcap-intouch",
  },
  {
    heading: "ONCALL",
    label: "OnCall",
    href: "/products/ironcap-oncall",
  },
  {
    heading: "XMAIL",
    label: "XMail",
    href: "/products/ironcap-xmail",
  },
];

export default function DropdownProducts() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className="text-white text-[17px] font-normal hover:text-[#71bfff] transition-colors px-6 cursor-pointer"
      >
        Products +
      </button>

      {/* Panel — outer div starts at top-full (no gap) with pt-3 as a transparent bridge */}
      {open && (
        <div className="absolute top-full left-0 z-50 pt-3">
          <div
            role="menu"
            className="relative w-fit min-w-[560px] max-w-[590px] overflow-hidden -translate-y-1 -left-[0.04rem] rounded-b-lg border border-l-white/70 border-b-white/70 border-r-white/70 border-t-white/0"
          >
            {/* Background image — same as header */}
            <Image
              src="/header_assets/bkgnd.svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              width={1512}
              height={91}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-7 px-5 py-5">
              <div className="relative flex h-[72px] w-[82px] flex-shrink-0 items-center justify-end">
                <div className="absolute left-[-1.25rem] top-1/2 h-px w-[34px] -translate-y-1/2 bg-[#71bfff]/75" />
                <div className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#71bfff]/80 bg-black/20 shadow-[0_0_20px_rgba(113,191,255,0.08)]">
                  <div className="h-[52px] w-[52px] overflow-hidden rounded-full">
                    <Image
                      src="/home_assets/products_icon.svg"
                      alt="Products"
                      className="h-full w-full scale-[1.14]"
                      width={55}
                      height={55}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-[family-name:var(--font-urbanist)] text-[10px] font-medium tracking-[0.18em] text-white/55">
                  IRONCAP
                </p>
                <div className="mt-2.5 grid grid-cols-2 gap-x-8 gap-y-5">
                  {products.map(({ heading, label, href }) => (
                    <div key={href} className="min-w-[200px]">
                      <p className="font-[family-name:var(--font-urbanist)] text-[11px] font-medium tracking-[0.18em] text-[#71bfff]">
                        {heading}
                      </p>
                      <Link
                        href={href}
                        role="menuitem"
                        className="mt-1.5 block font-[family-name:var(--font-urbanist)] text-[14px] font-normal text-white transition-colors hover:text-[#71bfff] whitespace-nowrap"
                      >
                        IronCAP<sup className="text-[7px] align-super">™</sup>{" "}
                        {label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
