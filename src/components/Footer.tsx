const imgLogo = "/assets/Home_assets/logo.svg";
const imgSocial = "/assets/Home_assets/social.svg";
import Image from "next/image";

const footerColumns = [
  {
    heading: "Company",
    links: ["Products", "Services", "Customers"],
  },
  {
    heading: "Resources",
    links: ["Use Cases", "Investor Relations", "Press Room"],
  },
  {
    heading: "About",
    links: ["Investor Relations", "About", "Newsletters"],
  },
  {
    heading: "Legal",
    links: ["Blog", "Product FAQ", "General FAQ"],
  },
  {
    heading: "Support",
    links: ["Support", "Contact", "Login"],
  },
];
export default function Footer() {
    return(
        <>
        
              {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-black border-t border-white/10">
        {/* CTA row */}
        <div className="max-w-[1512px] mx-auto px-[95px] py-16 flex justify-center gap-20">
          <a
            href="#"
            className="text-white text-[12px] font-medium uppercase tracking-widest border border-white/30 px-10 py-3 hover:bg-white/10 transition-colors"
          >
            CONTACT
          </a>
          <a
            href="#"
            className="text-white text-[12px] font-medium uppercase tracking-widest border border-white/30 px-10 py-3 hover:bg-white/10 transition-colors"
          >
            DEMO
          </a>
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

          {footerColumns.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-2">
              <p className="text-white/40 text-[11px] uppercase tracking-wide mb-1">
                {heading}
              </p>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
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
    )

}