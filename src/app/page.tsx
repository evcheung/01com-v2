import HomeAnimation from "@/assets/home-banner-animation.svg";
import { HeroSpline } from "@/components/ui/hero-spline";
import { Button } from "@/components/ui/button";
const imgIcon =
  "https://www.figma.com/api/mcp/asset/b8395f35-fefb-472a-bd18-13d72628093c";
const imgBracketBottom =
  "https://www.figma.com/api/mcp/asset/6b1f8fc9-43a0-43b6-b45d-0790af127873";
const imgIronCapEnginIcon =
  "https://www.figma.com/api/mcp/asset/4f35e063-0b79-4ce0-845c-6614638b5185";
const imgProductsIcon =
  "https://www.figma.com/api/mcp/asset/263b8a70-024a-4a77-a4f5-91ec2f14c0a4";

const products = [
  { name: "IronCAP™ Engine", desc: "Software Toolkit" },
  { name: "IronCAP™ Xmail", desc: "Outlook Email Encryption" },
  { name: "IronCAP™ OnCall", desc: "Encrypted Customer Support" },
  { name: "IronCAP™ InTouch", desc: "Encrypted Remote Desktop" },
];

const services = [
  { name: "Quantum AI Wrapper QAW", desc: "AI Prompt + Model Security" },
  { name: "Digital Asset Protection", desc: "Quantum-safe Digital Assets" },
  {
    name: "Cryptographic Integration Services",
    desc: "Open-source Integration + Managed Services",
  },
];

const applications = [
  {
    title: "AI Prompts + Models",
    desc: "Secure model IP, training data and prompt-privacy with quantum safe encryption.",
  },
  {
    title: "Blockchain",
    desc: "Allow blockchain vendors including cryptocurrencies to digitally sign new blocks to ensure security today and in tomorrow's post-quantum world.",
  },
  {
    title: "Remote Access / VPN",
    desc: "Ensure privacy of remote access channels such as VPNs today and in tomorrow's post-quantum world.",
  },
  {
    title: "Email / Digital Signature",
    desc: "Securely encrypt emails and send quantum-safe encrypted files in a post-quantum world.",
  },
];

export default function Home() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative min-h-[704px] bg-black overflow-hidden">
        <HeroSpline />
        <div className="relative z-10 max-w-[1512px] mx-auto px-[95px] pt-[155px] pb-24">
          <p className="text-white text-[30px] font-medium leading-none mb-3">
            Solutions for the
          </p>
          <h1 className="text-[50px] font-semibold leading-tight bg-gradient-to-r from-[#71bfff] to-[#79c99c] bg-clip-text text-transparent mb-10">
            Post-Quantum Era
          </h1>
          <Button text="discover · · ·" url="#discover" />
        </div>
      </section>

      {/* ── 01 Quantum secures what matters most ───────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1512px] mx-auto px-[95px] grid grid-cols-2 gap-16 items-center">
          {/* Left: circular animation */}
          <div className="relative h-[500px] flex items-center justify-center">
            <HomeAnimation className="max-h-full max-w-full" />
          </div>

          {/* Right: content */}
          <div className="relative p-12">
            {/* Bracket decorations */}
            <div className="absolute -left-1 top-0 bottom-0 flex flex-col items-center pointer-events-none ">
            
              <img
                alt=""
                src={imgBracketBottom}
                aria-hidden="true"
                className="w-[60px] h-[60px] position-absolute"
                style={{ transform: "scaleY(-1)" }}
              />
              <div className="flex-1 w-px" />
              <img
                alt=""
                src={imgBracketBottom}
                aria-hidden="true"
                className="w-[60px] h-[60px]"
              />
            </div>

            <h2 className="text-[45px] font-bold leading-[50px] bg-gradient-to-r from-[#71bfff] to-[#79c99c] bg-clip-text text-transparent mb-6">
              01 Quantum secures what matters most
            </h2>
            <p className="text-[#b6bbcd] text-[21px] font-normal leading-[30px] mb-8">
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
        <div className="max-w-[1512px] mx-auto px-[95px] grid grid-cols-2 gap-10">
          {/* Products */}
          <div className="border border-white/10 rounded p-10">
            <div className="flex items-center gap-3 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={imgIronCapEnginIcon}
                aria-hidden="true"
                className="w-5 h-5 object-contain"
              />
              <h3 className="text-white text-[30px] font-medium leading-none">
                IronCAP<sup className="text-[10px] align-super">™</sup> Products
              </h3>
            </div>
            <p className="text-white/70 text-[15px] font-normal leading-[24px] mb-8">
              From end-to-end quantum-safe email and file encryption to secure
              remote access, blockchain transactions, and digital signatures,
              IronCAP secures your data in a post-quantum world.
            </p>
            <ul className="space-y-6">
              {products.map(({ name, desc }) => (
                <li key={name}>
                  <p className="text-[#79c99c] text-[18px] font-semibold uppercase leading-none mb-2">
                    {name}
                  </p>
                  <p className="text-white text-[16px] font-normal leading-none mb-2">
                    {desc}
                  </p>
                  <p className="text-[#6e8090] text-[12px] font-medium uppercase">
                    More · · ·
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="border border-white/10 rounded p-10">
            <div className="flex items-center gap-3 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={imgProductsIcon}
                aria-hidden="true"
                className="w-5 h-5 object-contain"
              />
              <h3 className="text-white text-[30px] font-medium leading-none">
                IronCAP<sup className="text-[10px] align-super">™</sup> Services
              </h3>
            </div>
            <p className="text-white/70 text-[15px] font-normal leading-[24px] mb-8">
              Professional and managed services securing AI and digital assets
              via open source cryptography integration and hardware
              acceleration.
            </p>
            <ul className="space-y-6">
              {services.map(({ name, desc }) => (
                <li key={name}>
                  <p className="text-[#71bfff] text-[18px] font-semibold uppercase leading-none mb-2">
                    {name}
                  </p>
                  <p className="text-white text-[16px] font-normal leading-none mb-2">
                    {desc}
                  </p>
                  <p className="text-[#6e8090] text-[12px] font-medium uppercase">
                    More · · ·
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── What is the Post-Quantum Threat? ───────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1512px] mx-auto px-[95px]">
          <div className="flex gap-12 items-start">
            {/* Side bracket + icon */}
            <div className="flex flex-col items-center flex-none pt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={imgBracketBottom}
                aria-hidden="true"
                className="w-[60px] h-[60px]"
                style={{ transform: "scaleY(-1)" }}
              />
              <div className="h-[74px] w-px bg-black/15" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={imgIcon}
                aria-hidden="true"
                className="w-[74px] h-[74px] object-contain"
              />
              <div className="h-[74px] w-px bg-black/15" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={imgBracketBottom}
                aria-hidden="true"
                className="w-[60px] h-[60px]"
              />
            </div>

            {/* Content */}
            <div className="pt-2">
              <h2 className="text-[45px] font-bold leading-[50px] bg-gradient-to-r from-[#71bfff] to-[#79c99c] bg-clip-text text-transparent mb-6">
                What is the post-quantum threat?
              </h2>
              <p className="text-[#abacac] text-[21px] font-normal leading-[30px] mb-8 max-w-[928px]">
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
      <section id="applications" className="bg-black py-24">
        <div className="max-w-[1512px] mx-auto px-[95px]">
          <h2 className="text-[#71bfff] text-[30px] font-medium mb-12">
            Applications
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {applications.map(({ title, desc }) => (
              <div
                key={title}
                className="border border-white/10 rounded p-8 hover:border-[#71bfff]/40 transition-colors"
              >
                <h3 className="text-[#71bfff] text-[18px] font-semibold uppercase leading-[20px] mb-4">
                  {title}
                </h3>
                <p className="text-white text-[15px] font-normal leading-[24px]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}