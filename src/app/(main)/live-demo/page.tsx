import Image from "next/image";
import { Button } from "@/components/ui/button";

/* ── Bracket card with SVG bracket frame ─────────────────────────── */
function BracketCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full max-w-[494px] h-[311px]">
      {/* Bracket frame */}
      <Image
        src="/live_demo_assets/Bracket.svg"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none select-none object-contain"
      />
      {/* Content */}
      <div className="relative px-12 py-10 flex flex-col items-center">
        <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-6 self-start">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

/* ── SSO Button ───────────────────────────────────────────────────── */
function SsoButton({
  iconSrc,
  label,
  iconSize = 18,
}: {
  iconSrc: string;
  label: string;
  iconSize?: number;
}) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 w-[260px] h-[40px] px-4 bg-white rounded-[4px] text-steel-gray text-[14px] leading-[20px] hover:bg-[#f2f6f7] transition-colors"
      style={{
        outline: "0.30px solid #B6BBCD",
        outlineOffset: "-0.15px",
      }}
    >
      <span
        className="shrink-0 flex items-center justify-center"
        style={{ width: iconSize, height: iconSize }}
      >
        <Image
          src={iconSrc}
          alt=""
          width={iconSize}
          height={iconSize}
          className="object-contain max-w-full max-h-full"
        />
      </span>
      <span>{label}</span>
    </button>
  );
}

/* ── Section with optional divider above ─────────────────────────── */
function InfoSection({
  title,
  items,
  divider = true,
}: {
  title: React.ReactNode;
  items: React.ReactNode[];
  divider?: boolean;
}) {
  return (
    <div>
      {divider && <hr className="border-t border-[#dfe6ea] mb-6" />}
      <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-1">
        {title}
      </h3>
      <div className="flex flex-col text-steel-gray text-[15px] leading-[24px]">
        {items.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function LiveDemo() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)] w-full bg-white"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ─── Page Title ─── */}
      <section className="bg-black flex items-center px-6 md:px-24 min-h-[196px]">
        <h1 className="text-white text-[28px] md:text-[50px] font-medium leading-[50px]">
          IronCAP<sup className="text-[18px] md:text-[30px] align-super leading-none">™</sup>{" "}
          Live Demo
        </h1>
      </section>

      {/* ─── Intro ─── */}
      <section className="bg-white">
        <div className="px-6 md:px-[95px] pt-12 pb-8">
          <p className="text-steel-gray text-[15px] leading-[24px] max-w-[1230px]">
            IronCAP<sup className="text-[9.675px]">™</sup> is our latest
            innovation for the post-quantum cybersecurity. This
            patent-protected, post-quantum cryptographic system is based on the
            Goppa Code-based cryptographic technology. It has embedded our
            proprietary subclass of (L, G) making it not only more secured but
            also has faster cryptographic operations (key generation, encryption,
            decryption) than the traditional Goppa Code-based technology
            (McEliece). We are offering a live demonstration for the general
            public to try and experience the strength of IronCAP™ post-quantum
            encryption easily.
          </p>
        </div>
      </section>

      {/* ─── Two-column layout ─── */}
      <section className="bg-white">
        <div className="px-6 md:px-[95px] pb-16 flex flex-col md:flex-row gap-12 items-start">
          {/* Left column – instructions + info */}
          <div className="w-full md:w-[479px] shrink-0 flex flex-col gap-6">
            {/* Try IronCAP™ encryption */}
            <div>
              <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-1">
                Try IronCAP<sup className="text-[12.9px]">™</sup> encryption
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                &nbsp;&nbsp;&nbsp;Upload any file (Max: 2MB) to be encrypted
              </p>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                &nbsp;&nbsp;&nbsp;Click &ldquo;Encrypt&rdquo; to encrypt the
                uploaded file
              </p>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                &nbsp;&nbsp;&nbsp;The encrypted file will be downloaded
              </p>
            </div>

            {/* Try IronCAP™ decryption */}
            <div>
              <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-1">
                Try IronCAP<sup className="text-[12.9px]">™</sup> decryption
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                &nbsp;&nbsp;&nbsp;Upload any file previously encrypted by
                IronCAP<sup className="text-[9.675px]">™</sup>
              </p>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                &nbsp;&nbsp;&nbsp;Click &ldquo;Decrypt&rdquo; to decrypt the
                uploaded file
              </p>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                &nbsp;&nbsp;&nbsp;The decrypted file will be downloaded (files
                not encrypted by IronCAP<sup className="text-[9.675px]">™</sup>{" "}
                will fail to decrypt)
              </p>
            </div>

            <hr className="border-t border-[#dfe6ea]" />

            {/* Eligibility */}
            <InfoSection
              divider={false}
              title="Eligibility"
              items={[
                "Anyone with a Facebook or Google account",
                "Any country",
                "You need to agree to the official Rules, Terms + Conditions as set forth in the sign up process.",
              ]}
            />

            <hr className="border-t border-[#dfe6ea]" />

            {/* How it Works */}
            <InfoSection
              divider={false}
              title="How it Works"
              items={[
                "Register an account",
                "Login to the account",
                <>Try the IronCAP<sup className="text-[9.675px]">™</sup> encryption/decryption</>,
              ]}
            />

            <hr className="border-t border-[#dfe6ea]" />

            {/* Notes */}
            <InfoSection
              divider={false}
              title="Notes"
              items={[
                <>Each demo account has a different set of IronCAP<sup className="text-[9.675px]">™</sup> keys</>,
                <>Files you have encrypted can ONLY be decrypted in your account</>,
              ]}
            />
          </div>

          {/* Right column – registration boxes */}
          <div className="flex flex-col gap-8 shrink-0 w-full md:w-auto md:ml-[150px]">
            {/* Registration */}
            <BracketCard title="Registration">
              <div className="flex flex-col gap-3 items-center">
                <SsoButton
                  iconSrc="/live_demo_assets/Facebook_icon.svg"
                  label="Continue with Facebook"
                  iconSize={16}
                />
                <SsoButton
                  iconSrc="/live_demo_assets/Google_icon.svg"
                  label="Continue with Google"
                />
              </div>
            </BracketCard>

            {/* Already Registered? */}
            <BracketCard title="Already Registered?">
              <div className="flex flex-col gap-3 items-center">
                <SsoButton
                  iconSrc="/live_demo_assets/Facebook_icon.svg"
                  label="Login with Facebook"
                  iconSize={16}
                />
                <SsoButton
                  iconSrc="/live_demo_assets/Google_icon.svg"
                  label="Login with Google"
                />
              </div>
            </BracketCard>
          </div>
        </div>
      </section>

      {/* ─── Learn More CTA ─── */}
      <section className="bg-white py-16 flex justify-center">
        <Button
          text="LEARN MORE ABOUT 01 QUANTUM PRODUCTS · · ·"
          url="/products"
          border="border-quantum-green/60"
          textColor="text-quantum-green"
          hoverBg="hover:bg-quantum-green/10"
        />
      </section>
    </main>
  );
}
