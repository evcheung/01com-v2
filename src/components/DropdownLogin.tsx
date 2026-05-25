"use client";

import Image from "next/image";
import { useState } from "react";

const loginOptions = [
  { label: "Access My PC", href: "https://locator.01com.com/login.php?" },
  { label: "I'm OnCall Agent", href: "https://www.01com.com/imoncall-remote-help-desk/login/?" },
  { label: "Connect An Agent", href: "https://www.01com.com/imoncall-remote-help-desk/connect/?" },
];

export default function DropdownLogin() {
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
        Login
      </button>

      {/* Panel — outer div starts at top-full (no gap) with pt-3 as a transparent bridge */}
      {open && (
        <div className="absolute top-full left-0 z-50 pt-3">
          <div
            role="menu"
            className="relative overflow-hidden -translate-y-1 -left-[0.04rem] rounded-b-lg border border-l-white/70 border-b-white/70 border-r-white/70 border-t-white/0 w-[300px]"
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
            <div className="relative z-10 flex flex-col px-5 py-5">
              {loginOptions.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="font-[family-name:var(--font-urbanist)] text-[12px] font-normal text-white hover:text-[#71bfff] transition-colors py-3 px-2"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
