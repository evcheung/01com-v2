const imgLogo = "/header_assets/logo.svg";
const imgSocial = "/assets/Home_assets/social.svg";
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
    urls: ["/use-cases", "/investor-relations", "/press-room"],
  },
  {
    heading: "About",
    links: ["Investor Relations", "About", "Newsletters"],
    urls: ["/investor-relations", "/about", "/newsletters"],
  },
  {
    heading: "Legal",
    links: ["Blog", "Product FAQ", "General FAQ"],
    urls: ["/blog", "/product-faq", "/general-faq"],
  },
  {
    heading: "Support",
    links: ["Support", "Contact", "Login"],
    urls: ["/support", "/contact", "/login"],
  },
];
export default function Footer() {
  return (
    <>
      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-black border-t border-white/10">
        {/* CTA row */}
        <div className="max-w-[1512px] mx-auto px-[95px] py-16 flex justify-center gap-20">
          <Button text="CONTACT · · ·" url="#" />
          <Button text="DEMO · · ·" url="#" />
        </div>

        {/* Links row */}
        <div className="max-w-[1512px] mx-auto px-[95px] pb-12 flex items-start justify-between gap-8">
          {/* Logo + social */}
          <div className="flex flex-col gap-4">
            <Image
              alt="01 Quantum"
              src={imgLogo}
              width={48}
              height={48}
              className="object-contain"
            />
            <Image
              alt="Social media links"
              src={imgSocial}
              width={100}
              height={100}
              className="object-contain"
            />
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
