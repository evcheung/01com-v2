const imgLogo = "/header_assets/logo.svg";
const socialLinks = [
  {
    icon: "/header_assets/x.svg",
    url: "https://x.com/01quantuminc",
    label: "X",
  },
  {
    icon: "/header_assets/in.svg",
    url: "https://linkedin.com/company/01-quantum/",
    label: "LinkedIn",
  },
  {
    icon: "/header_assets/yt.svg",
    url: "https://www.youtube.com/channel/UCrbGgkSemPtfQgpKX8stySg",
    label: "YouTube",
  },
  {
    icon: "/resources_assets/blog_i.svg",
    url: "/resources/blog",
    label: "Blog",
  },
];
const socialIconSize = 15;

import { Button } from "@/components/ui/button";

import Image from "next/image";

const footerColumns = [
  {
    heading: "Company",
    links: ["Products", "Services", "Customers", "Partners"],
    urls: ["/products/ironcap-engine", "/services", "/customers", "/partners"],
  },
  {
    heading: "Resources",
    links: [
      "Brochures",
      "White Papers",
      "Press Room",
      "Videos",
      "Use Cases",
      "Blog",
      "FAQs",
    ],
    urls: [
      "/resources/brochures",
      "/resources/white-papers-use-cases",
      "/resources/press-releases-newsletters",
      "/resources/videos",
      "/resources/use-cases",
      "/resources/blog",
      "/faq/ironcap-x",
    ],
  },
  {
    heading: "About",
    links: [
      "About",
      "Investor Relations",
      "Intellectual Properties",
      "Press Releases",
      "Newsletters",
    ],
    urls: [
      "/about",
      "/investor-relations",
      "/resources/intellectual-properties",
      "/resources/press-releases",
      "/resources/newsletters",
    ],
  },
  {
    heading: "Legal",
    links: ["Terms of Use", "Privacy Policy"],
    urls: ["/terms-of-use", "/privacy-policy"],
  },
  {
    heading: "Support",
    links: ["Support", "Contact"],
    urls: ["/support", "/contact"],
  },
];
export default function Footer() {
  return (
    <>
      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-black border-t border-white/10">
        {/* CTA row */}
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[95px] py-10 sm:py-12 md:py-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-20">
          <Button text="CONTACT" url="/contact" bgDots="bg-white" />
          {/* <Button text="DEMO" url="/live-demo" bgDots="bg-white" /> */}
        </div>

        {/* Links row */}
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[95px] pb-10 sm:pb-12">
          {/* Logo + social */}
          <div className="flex flex-col gap-4 mb-10 lg:mb-0 lg:hidden">
            <Image
              alt="01 Quantum"
              src={imgLogo}
              width={58}
              height={58}
              className="object-contain"
            />
            
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between gap-8">
            {/* Logo + social — desktop only */}
            <div className="hidden lg:flex flex-col gap-4">
              <Image
                alt="01 Quantum"
                src={imgLogo}
                width={58}
                height={58}
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
            <div className="col-span-2 sm:col-span-3 lg:col-auto">
              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-6 w-6 items-center justify-center rounded-full"
                  >
                    <Image
                      alt={label}
                      src={icon}
                      width={socialIconSize}
                      height={socialIconSize}
                      className="h-full w-full object-contain"
                    />
                  </a>
                ))}
              </div>
              {/* Copyright */}
              <div className="py-4 lg:py-5 text-left lg:text-center">
                <p className="text-white text-[12px] font-normal">
                  © 2026 01 Quantum All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
