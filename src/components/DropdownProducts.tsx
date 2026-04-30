"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  { label: "Engine",  href: "/products/ironcap-engine" },
  { label: "OnCall",  href: "/products/ironcap-xmail#ironcap-oncall" },
  { label: "XMail",   href: "/products/ironcap-xmail" },
  { label: "Intouch", href: "/products/ironcap-intouch" },
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
        className="text-white text-[12px] font-normal hover:text-[#71bfff] transition-colors px-6 cursor-pointer"
      >
        Products +
      </button>

      {/* Panel — outer div starts at top-full (no gap) with pt-3 as a transparent bridge */}
      {open && (
        <div className="absolute top-full left-0 z-50 pt-3">
          <div
            role="menu"
            className="relative overflow-hidden -translate-y-1 -left-[0.04rem] rounded-b-lg border border-l-white/70 border-b-white/70 border-r-white/70 border-t-white/0 w-[400px]"
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
          <div className="relative z-10 flex items-center gap-4 px-5 py-5">
            {/* Shield icon */}
            <div className="flex-shrink-0 w-10 h-10">
              <Image
                src="/home_assets/products_icon.svg"
                alt="Products"
                className="w-full h-full"
                width={40}
                height={40}
              />
            </div>

            {/* Vertical divider */}
            <div className="w-px h-[45px] bg-[#B6BBCD]/50 flex-shrink-0" />

            {/* 2×2 product grid */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {products.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  role="menuitem"
                  className="font-[family-name:var(--font-urbanist)] text-[12px] font-normal text-white hover:text-[#71bfff] transition-colors whitespace-nowrap"
                >
                  IronCAP<sup className="text-[6.5px] align-super">™</sup>{" "}
                  {label}
                </Link>
              ))}
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
