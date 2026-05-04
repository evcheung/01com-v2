const imgLogo = "/header_assets/logo.svg";
const socialLinks = [
  { icon: "/header_assets/x.svg", url: "https://x.com/01quantuminc", label: "X" },
  { icon: "/header_assets/fb.svg", url: "https://facebook.com/01QuantumInc", label: "Facebook" },
  { icon: "/header_assets/in.svg", url: "https://linkedin.com/company/01-quantum/", label: "LinkedIn" },
  { icon: "/header_assets/yt.svg", url: "https://www.youtube.com/channel/UCrbGgkSemPtfQgpKX8stySg", label: "YouTube" },
];

import { Button } from "@/components/ui/button";

import Image from "next/image";

const footerColumns = [
  {
    heading: "Company",
    links: ["Products", "Services", "Customers"],
    urls: ["/products/ironcap-engine", "/services", "/customers"],
  },
  {
    heading: "Resources",
    links: ["Use Cases", "Investor Relations", "Press Room"],
    urls: ["/use-cases", "/investor-relations", "/resources/press-releases"],
  },
  {
    heading: "About",
    links: ["Investor Relations", "About", "Newsletters"],
    urls: ["/investor-relations", "/about", "/resources/newsletters"],
  },
  {
    heading: "Legal",
    links: ["Blog", "Product FAQ", "General FAQ"],
    urls: ["/resources/blog", "/resources/documents", "/faq/ironcap-x"],
  },
  {
    heading: "Support",
    links: ["Support", "Contact", "Login"],
    urls: ["/support", "/contact", "#"],
  },
];
export default function Footer() {
  return (
    <>
      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-black border-t border-white/10">
        {/* CTA row */}
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-12 md:py-16 flex justify-center gap-6 md:gap-20">
          <Button text="CONTACT" url="#" bgDots="bg-white" />
          <Button text="DEMO" url="#"  bgDots="bg-white" />
        </div>

        {/* Links row */}
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] pb-12">
          {/* Logo + social */}
          <div className="flex flex-col gap-4 mb-10 md:mb-0 md:hidden">
            <Image
              alt="01 Quantum"
              src={imgLogo}
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="flex">
              {socialLinks.map(({ icon, url, label }) => (
                <a key={label} href={url} className="mr-4 last:mr-0">
                  <Image
                    alt={label}
                    src={icon}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:items-start md:justify-between gap-8">
            {/* Logo + social — desktop only */}
            <div className="hidden md:flex flex-col gap-4">
              <Image
                alt="01 Quantum"
                src={imgLogo}
                width={48}
                height={48}
                className="object-contain"
              />
              <div className="flex">
                {socialLinks.map(({ icon, url, label }) => (
                  <a key={label} href={url} className="mr-4 last:mr-0">
                    <Image
                      alt={label}
                      src={icon}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            {footerColumns.map(({ heading, links, urls }) => (
              <div key={heading} className="flex flex-col gap-2">
                <p className="text-white/40 text-[11px] uppercase tracking-wide mb-1">
                  {heading}
                </p>
                {links.map((link, index) => (
                  <a
                    key={link}
                    href={urls[index]}
                    className="text-white text-[12px] hover:text-[#71bfff] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-5 text-center">
          <p className="text-white text-[12px] font-normal">
            © 2026 01 Quantum All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
