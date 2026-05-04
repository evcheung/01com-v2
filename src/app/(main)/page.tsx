import HomeAnimation from "@/assets/home-banner-animation.svg";
import { HeroSpline } from "@/components/ui/hero-spline";
import { Button } from "@/components/ui/button";
import { IronCapSection } from "@/components/home/IronCapSection";
import Image from "next/image";
const products = [
  {
    name: "IronCAP™ Engine",
    desc: "Software Toolkit",
    icon: "/home_assets/p_1.svg",
  },
  {
    name: "IronCAP™ Xmail",
    desc: "Outlook Email Encryption",
    icon: "/home_assets/p_2.svg",
  },
  {
    name: "IronCAP™ OnCall",
    desc: "Encrypted Customer Support",
    icon: "/home_assets/p_3.svg",
  },
  {
    name: "IronCAP™ InTouch",
    desc: "Encrypted Remote Desktop",
    icon: "/home_assets/p_4.svg",
  },
];

const services = [
  {
    name: "Quantum AI Wrapper QAW",
    desc: "AI Prompt + Model Security",
    icon: "/home_assets/s_1.svg",
  },
  {
    name: "Digital Asset Protection",
    desc: "Quantum-safe Digital Assets",
    icon: "/home_assets/s_2.svg",
  },
  {
    name: "Cryptographic Integration Services",
    desc: "Open-source Integration + Managed Services",
    icon: "/home_assets/s_3.svg",
  },
];

const applications = [
  {
    title: "AI Prompts + Models",
    desc: "Secure model IP, training data and prompt-privacy with quantum safe encryption.",
    icon: "/home_assets/a_1.svg",
  },
  {
    title: "Blockchain",
    desc: "Allow blockchain vendors including cryptocurrencies to digitally sign new blocks to ensure security today and in tomorrow's post-quantum world.",
    icon: "/home_assets/a_2.svg",
  },
  {
    title: "Remote Access / VPN",
    desc: "Ensure privacy of remote access channels such as VPNs today and in tomorrow's post-quantum world.",
    icon: "/home_assets/a_3.svg",
  },
  {
    title: "Email / Digital Signature",
    desc: "Securely encrypt emails and send quantum-safe encrypted files in a post-quantum world.",
    icon: "/home_assets/a_4.svg",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative min-h-[704px] bg-black overflow-hidden">
        <HeroSpline />
        <div className="relative z-10 max-w-[1512px] mx-auto px-6 md:px-[95px] pt-[80px] md:pt-[155px] pb-12 md:pb-24">
          <p className="text-white text-[18px] md:text-[30px] font-medium leading-none mb-3">
            Solutions for the
          </p>
          <h1 className="text-[32px] md:text-[50px] font-semibold leading-tight bg-gradient-to-r from-[#71bfff] to-[#79c99c] bg-clip-text text-transparent mb-10">
            Post-Quantum Era
          </h1>
          <Button text="discover" url="#discover" bgDots="bg-white" />
        </div>
      </section>

      {/* ── 01 Quantum secures what matters most ───────────────── */}
      <section className="bg-white py-12 md:py-24">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: circular animation */}
          <div className="relative h-[250px] md:h-[500px] flex items-center justify-center">
            <HomeAnimation className="max-h-full max-w-full" />
          </div>

          {/* Right: content */}
          <div className="relative p-6 md:p-12">
            {/* Bracket decorations */}
            <div className="absolute -left-1 top-0 bottom-0 hidden md:flex flex-col items-center pointer-events-none ">
              <Image
                width={100}
                height={100}
                alt=""
                src="/home_assets/bracket_bottom.svg"
                aria-hidden="true"
                className="w-[60px] h-[60px] position-absolute"
                style={{ transform: "scaleY(-1)" }}
              />
              <div className="flex-1 w-px" />
              <Image
                width={100}
                height={100}
                alt=""
                src="/home_assets/bracket_bottom.svg"
                aria-hidden="true"
                className="w-[60px] h-[60px]"
              />
            </div>

            <h2 className="text-[28px] md:text-[45px] font-bold leading-tight md:leading-[50px] bg-gradient-to-r from-[#71bfff] to-[#79c99c] bg-clip-text text-transparent mb-6">
              01 Quantum secures what matters most
            </h2>
            <p className="text-[#b6bbcd] text-[16px] md:text-[21px] font-normal leading-[26px] md:leading-[30px] mb-8">
              Our standards-based, quantum-safe cryptography protects every
              system and every byte of data against today&apos;s most advanced
              cyberattacks and tomorrow&apos;s quantum threats. From critical
              infrastructure, AI, and digital assets to email security,
              communications, and remote access, we keep organizations
              resilient, secure, and ready for what&apos;s next.
            </p>
            <a
              href="#applications"
              className="text-[#b6bbcd] text-[12px] font-medium uppercase tracking-wide hover:text-[#71bfff] transition-colors"
            >
              See Applications · · ·
            </a>
          </div>
        </div>
      </section>

      {/* ── IronCAP Products & Services ────────────────────────── */}
      <section className="bg-black py-24">
        <IronCapSection products={products} services={services} />
      </section>

      {/* ── What is the Post-Quantum Threat? ───────────────────── */}
      <section className="bg-white py-12 md:py-24">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
          <div className="flex gap-12 items-start">
            {/* Side bracket + icon — hidden on mobile */}
            <div className="hidden md:flex flex-col items-center flex-none gap-12">
              
              <Image
                alt=""
                src="/home_assets/bracket_bottom.svg"
                aria-hidden="true"
                className="w-[60px] h-[60px]"
                style={{ transform: "scaleY(-1)" }}
                width={60}
                height={60}
              />
               
              {/* Linea vertical */}
              {/* Logo circular */}
              <Image
                alt=""
                src="/home_assets/icon_quantum.svg"
                aria-hidden="true"
                className="w-[74px] h-[74px] object-contain"
                width={74}
                height={74}
              />

               
              <Image
                alt=""
                src="/home_assets/bracket_bottom.svg"
                aria-hidden="true"
                className="w-[60px] h-[60px]"
                width={60}
                height={60}
              />
            </div>

            {/* Content */}
            <div className="pt-2">
              <h2 className="text-[28px] md:text-[45px] font-bold leading-tight md:leading-[50px] bg-gradient-to-r from-[#71bfff] to-[#79c99c] bg-clip-text text-transparent mb-6">
                What is the post-quantum threat?
              </h2>
              <p className="text-[#abacac] text-[16px] md:text-[21px] font-normal leading-[26px] md:leading-[30px] mb-8 max-w-[928px]">
                With the advent of scaled-up quantum computers, critical forms
                of the cryptography we have relied on for 40 years fails,
                exposing of biggest investments in AI, digital assets and
                general day to day communications to unmitigated risks. 01
                Quantum brings practical experience and working products to your
                solution.
              </p>
              <a
                href="#"
                className="text-[#b6bbcd] text-[14px] font-normal uppercase tracking-wide hover:text-[#71bfff] transition-colors"
              >
                Read more on quantum threat · · ·
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Applications ───────────────────────────────────────── */}
      <section id="applications" className="bg-black py-12 md:py-24">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[95px]">
          <h2 className="text-[#71bfff] text-[22px] md:text-[30px] font-medium mb-8 md:mb-12">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {applications.map(({ title, desc, icon }, index) => {
              // Each card expands from the corner closest to the grid center
              const origins = ["bottom right", "bottom left", "top right", "top left"];
              const delay = index * 0.12;
              return (
                <div
                  key={title}
                  className="border border-white/20 rounded-[1vw] p-6 md:p-8 hover:border-[#71bfff]/40 transition-colors"
                  style={{
                    transformOrigin: origins[index],
                    animation: `card-expand 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both`,
                  }}
                >
                  <h3 className="text-[#71bfff] text-[16px] md:text-[18px] font-semibold uppercase leading-[20px] mb-4">
                    {title}
                  </h3>
                  
                  <Image
                    width={100}
                    height={100}
                    alt=""
                    src={icon}
                    aria-hidden="true"
                    className="w-10 h-10 object-contain mb-4"
                    style={{
                      animation: `icon-fade-in 0.4s ease-out ${delay + 0.4}s both`,
                    }}
                  />
                  <p className="text-white text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[24px]">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
