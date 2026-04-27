"use client";

import LottiePlayer from "@/components/LottiePlayer";
import { Button } from "@/components/ui/button";
import xmailIconAnim from "@/assets/animations/icon-IC-EmailX.json";
import onCallIconAnim from "@/assets/animations/icon-IC-onCall.json";
import emailEncryptionFlowchart from "@/assets/animations/EmailEncryptionFlowchart.json";
import digitalSignatureFlowchart from "@/assets/animations/DIgitalSignatureFlowchart.json";

/* ── Data ──────────────────────────────────────────────────────────── */
const xmailAdvantages = [
  {
    title: "Quick + Easy Setup",
    body: (
      <>
        IronCAP<sup className="text-[9.675px]">™</sup> XMail will automatically detect if your
        email recipient has an IronCAP<sup className="text-[9.675px]">™</sup> XMail account. If
        not, an invitation message with the link to install the software will be sent accordingly.
        Upon creating a free personal IronCAP<sup className="text-[9.675px]">™</sup> XMail
        account, the recipient can decrypt and read your encrypted email. It&apos;s that simple.
      </>
    ),
  },
  {
    title: "Zero Learning Curve",
    body: (
      <>
        IronCAP<sup className="text-[9.675px]">™</sup> XMail tightly integrates with your
        everyday email client such as Outlook, Gmail, Yahoo, etc. to ensure a zero learning
        curve. After composing your email, you can choose to encrypt and digitally sign this
        message with a simple click before sending it out.
      </>
    ),
  },
  {
    title: "Digital Document Authenticity",
    body: (
      <>
        IronCAP<sup className="text-[9.675px]">™</sup> XMail lets you sign your digital files to
        prove their authenticity that they are the original true copies from you rather than from
        a bogus hacker.
      </>
    ),
  },
  {
    title: "General File Encryption",
    body: (
      <>
        IronCAP<sup className="text-[9.675px]">™</sup> XMail allows you to encrypt your sensitive
        files such as personal finances, etc. to safeguard against cyber attacks.
      </>
    ),
  },
];

const onCallAdvantages = [
  {
    title: "Instant Live-Chat Support",
    body: "You can provide world-class Live Chat support to your customers within minutes. OnCall gives you private URLs for embedding into your web site. Simply implement a Live-Chat button with the given URL on your web site. Your customers can then request to chat with an agent easily. Each agent can have up to 10 simultaneous chat sessions to deal with volumes at peak times.",
  },
  {
    title: "Efficient Technical Support",
    body: "OnCall lets you setup a temporary connection to your customer's computer without any pre-installed software. You can quickly and efficiently resolve your customers' technical and IT support issues by remotely controlling their computers. Plus, your agents can login from anywhere in the world to support your customers, saving your time and traveling cost.",
  },
];

/* ── Component ─────────────────────────────────────────────────────── */
export default function IroncapXmailOncall() {
  return (
    <div
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ══ XMail section ═══════════════════════════════════════════ */}
      <section
        id="ironcap-xmail"
        className="relative overflow-hidden bg-white text-black scroll-mt-24"
      >
        {/* Product intro */}
        <div className="max-w-[1512px] mx-auto px-[95px] pb-20">
          <div className="flex items-start gap-14">
            {/* Lottie icon */}
            <div className="flex-shrink-0 w-[130px] pt-2">
              <LottiePlayer src={xmailIconAnim} className="w-full" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 max-w-[1140px] pt-10">
              <h2 className="text-[#71bfff] text-[30px] font-medium leading-[46px]">
                IronCAP<sup className="text-[11.61px]">™</sup> XMail
              </h2>
              <p className="text-[#79c99c] text-[20px] font-medium leading-[34px]">
                End-to-End, Quantum-Safe Email Security
              </p>
              <p className="text-[#6e8090] text-[15px] leading-[24px]">
                IronCAP<sup className="text-[9.675px]">™</sup> XMail is a quantum-safe,
                end-to-end email security system powered by IronCAP
                <sup className="text-[9.675px]">™</sup> Crypto (ICC)—our advanced post-quantum
                cryptographic foundation. Built to withstand attacks from both classical and
                quantum adversaries, XMail delivers protection that legacy email architectures
                were never designed to provide.
              </p>
              <p className="text-[#6e8090] text-[15px] leading-[24px]">
                By removing intermediary servers from the trust chain, IronCAP
                <sup className="text-[9.675px]">™</sup> XMail helps eliminate man-in-the-middle
                exposure and ensures only intended recipients can decrypt your communications.
                This end-to-end, zero-trust design keeps every email and attachment encrypted on
                your device, in transit, and at rest—even if networks, servers, or accounts are
                compromised.
              </p>
              <p className="text-[#6e8090] text-[15px] leading-[24px]">
                With quantum-safe digital signatures, recipients can verify authenticity
                instantly—confirming messages haven&apos;t been spoofed, forged, or altered.
                This strengthens defenses against phishing, impersonation, and business email
                compromise as these threats continue to rise worldwide.
              </p>
              <p className="text-[#6e8090] text-[15px] leading-[24px]">
                If a device is lost or an account is accessed without authorization, your
                sensitive content remains protected. Because it is built on quantum-resistant
                cryptography, IronCAP<sup className="text-[9.675px]">™</sup> XMail safeguards
                communications not only for today&apos;s risk landscape, but for the long-term
                realities of the post-quantum era.
              </p>
              <p className="text-[#6e8090] text-[15px] leading-[24px]">
                IronCAP<sup className="text-[9.675px]">™</sup> XMail sets a new standard for
                email security: end-to-end, quantum-safe, and engineered for enduring trust.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ── How it Works ────────────────────────────────────── */}
      <section className="bg-black text-white">
        <div className="max-w-[1512px] mx-auto px-[95px] pt-20 pb-20">
          <h3 className="text-[#71bfff] text-[30px] font-medium leading-[46px] mb-10">
            How it Works
          </h3>

          {/* End-to-End Encryption */}
          <div className="mb-16">
            <p className="text-[#79c99c] text-[20px] font-medium leading-[34px] mb-2">
              End-to-End Encryption
            </p>
            <p className="text-white text-[15px] leading-[24px] mb-8 max-w-[1246px]">
              Unlike some secure email systems that store your emails and require your recipients
              to read from their servers, IronCAP<sup className="text-[9.675px]">™</sup> XMail
              provides direct end-to-end encryption with no central storage point that&apos;s
              vulnerable to a cyber attack.
            </p>
            <LottiePlayer
              src={emailEncryptionFlowchart}
              className="w-full max-w-[1246px]"
              loop
              autoplay
            />
          </div>

          {/* End-to-End Digital Signature */}
          <div>
            <p className="text-[#79c99c] text-[20px] font-medium leading-[34px] mb-2">
              End-to-End Digital Signature
            </p>
            <p className="text-white text-[15px] leading-[24px] mb-8 max-w-[1246px]">
              IronCAP<sup className="text-[9.675px]">™</sup> XMail lets you digitally sign your
              emails. Recipients can easily distinguish between your legitimate emails from those
              phishing ones.
            </p>
            <LottiePlayer
              src={digitalSignatureFlowchart}
              className="w-full max-w-[1246px]"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

      {/* ── XMail Key Advantages ──────────────────────────────────── */}
      <section className="bg-black text-white">
        <div className="max-w-[1512px] mx-auto px-[95px] pb-20">
          <h3 className="text-[#71bfff] text-[30px] font-medium leading-[46px] mb-10">
            Key Advantages
          </h3>
          <div className="relative">
            {/* Decorative dividers */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/15 pointer-events-none" />
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/15 pointer-events-none" />
            <div className="grid grid-cols-2 gap-x-36 gap-y-16 py-14 relative">
              {xmailAdvantages.map((adv, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <p className="text-[#79c99c] text-[18px] font-semibold leading-[20px] uppercase">
                    {adv.title}
                  </p>
                  <p className="text-white text-[15px] leading-[24px]">{adv.body}</p>
                </div>
              ))}
            </div>
                <div className="max-w-[1512px] mx-auto px-[95px] pb-24 flex justify-center gap-6">
                  <Button
                    text="brochure · · ·"
                    url="#"
                    border="border-gray-200"
                    textColor="text-green-400"
                    hoverBg="hover:bg-green-500/10"
                />
              </div>
          </div>
        </div>

      </section>

      {/* ══ OnCall section ══════════════════════════════════════════ */}
      <section id="ironcap-oncall" className="bg-white text-black scroll-mt-24">
        <div className="max-w-[1512px] mx-auto px-[95px] pb-20">
          {/* Product intro */}
          <div className="flex items-start gap-14">
            {/* Lottie icon */}
            <div className="flex-shrink-0 w-[130px] pt-2">
              <LottiePlayer src={onCallIconAnim} className="w-full" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 max-w-[1140px] pt-10">
              <h2 className="text-[#71bfff] text-[30px] font-medium leading-[46px]">
                IronCAP<sup className="text-[11.61px]">™</sup> OnCall
              </h2>
              <p className="text-[#79c99c] text-[20px] font-medium leading-[34px]">
                End-to-End, Quantum-Safe Customer Support
              </p>
              <p className="text-[#6e8090] text-[15px] leading-[24px]">
                IronCAP<sup className="text-[9.675px]">™</sup> OnCall is a cost-effective, secure
                online help desk software which allows organizations to offer remote support over
                the Internet to their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OnCall Key Advantages ─────────────────────────────────── */}
      <section className="relative overflow-hidden text-white bg-black">
        <div className="max-w-[1512px] mx-auto px-[95px] py-20">
          <h3 className="text-[#71bfff] text-[30px] font-medium leading-[46px] mb-10">
            Key Advantages
          </h3>

          <div className="relative">
            {/* Centre vertical divider */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-white/15 pointer-events-none" />
            <div className="grid grid-cols-2 gap-x-36 gap-y-8">
              {onCallAdvantages.map((adv, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <p className="text-[#79c99c] text-[18px] font-semibold leading-[20px] uppercase">
                    {adv.title}
                  </p>
                  <p className="text-white text-[15px] leading-[24px]">{adv.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
