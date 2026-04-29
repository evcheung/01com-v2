"use client";

import { useState } from "react";
import Image from "next/image";
import Dropdown from "@/components/DropdownProducts";

const mobileProducts = [
  { label: "Engine",  href: "/products/ironcap-engine" },
  { label: "OnCall",  href: "/products/ironcap-xmail#ironcap-oncall" },
  { label: "XMail",   href: "/products/ironcap-xmail" },
  { label: "Intouch", href: "/products/ironcap-intouch" },
];

const navLinks = [
  { label: "Services +", href: "/services" },
  { label: "Customers", href: "/customers" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Demo", href: "/live-demo" },
  { label: "Login", href: "#" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/header_assets/bkgnd.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop header */}
      <div className="relative z-10 max-w-[1512px] mx-auto px-6 md:px-[95px] h-[91px] flex items-center justify-between">
        <a href="/">
          <Image
            alt="01 Quantum"
            src="/header_assets/logo.svg"
            width={60}
            height={60}
            className="object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center list-none">
            <li key="divider-products">
              <div className="w-px h-[45px] bg-[#B6BBCD]" />
            </li>
            <li key="products-dropdown">
              <Dropdown />
            </li>

            {navLinks.flatMap(({ label, href }, index) => {
              const items = [
                <li key={`divider-${label}`}>
                  <div className="w-px h-[45px] bg-[#B6BBCD]" />
                </li>,
                <li key={`link-${label}`}>
                  <a
                    href={href}
                    className="text-white text-[12px] font-normal hover:text-[#71bfff] transition-colors px-6"
                  >
                    {label}
                  </a>
                </li>,
              ];
              if (index === navLinks.length - 1) {
                items.push(
                  <li key="divider-end">
                    <div className="w-px h-[45px] bg-[#B6BBCD]" />
                  </li>
                );
              }
              return items;
            })}
          </ul>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-[2px] bg-white rounded" />
          <span className="block w-6 h-[2px] bg-white rounded" />
          <span className="block w-6 h-[2px] bg-white rounded" />
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden flex flex-col pt-8 px-6 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "#0a0a0a" }}
        aria-label="Mobile navigation"
      >
        {/* Close button */}
        <button
          className="self-end mb-8 text-white text-2xl leading-none"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Logo */}
        <a href="/" className="mb-10" onClick={() => setSidebarOpen(false)}>
          <Image
            alt="01 Quantum"
            src="/header_assets/logo.svg"
            width={50}
            height={50}
            className="object-contain"
          />
        </a>

        {/* Nav links */}
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-6 list-none">
            <li>
              <button
                className="flex items-center gap-2 text-white text-[14px] font-normal hover:text-[#71bfff] transition-colors w-full"
                onClick={() => setProductsOpen((v) => !v)}
                aria-expanded={productsOpen}
              >
                Products +
                <span
                  className={`ml-auto text-xs transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>
              {productsOpen && (
                <ul className="flex flex-col gap-3 mt-3 pl-3 border-l border-white/20 list-none">
                  {mobileProducts.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="text-white/80 text-[13px] hover:text-[#71bfff] transition-colors"
                        onClick={() => setSidebarOpen(false)}
                      >
                        IronCAP™ {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-white text-[14px] font-normal hover:text-[#71bfff] transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}
