import { Titles } from "@/components/Titles";
import LiveDemoPanel from "@/components/live-demo/LiveDemoPanel";
import { Bottom } from "@/components/resources/Bottom";

/* ── Requirement bullet list ─────────────────────────────────────── */
function RequirementList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="ml-5 list-disc space-y-3 text-steel-gray marker:text-quantum-green text-[15px] leading-[24px]">
      {children}
    </ul>
  );
}

/* ── Section with optional divider above ─────────────────────────── */
function InfoSection({
  title,
  items,
  divider = true,
  arrows = false,
}: {
  title: React.ReactNode;
  items: React.ReactNode[];
  divider?: boolean;
  arrows?: boolean;
}) {
  return (
    <div>
      {divider && <hr className="border-t border-[#dfe6ea] mb-6" />}
      <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-1">
        {title}
      </h3>
      <div className="flex flex-col text-steel-gray text-[15px] leading-[24px]">
        {items.map((item, i) => (
          <p key={i} className={arrows ? "flex gap-2" : undefined}>
            {arrows && (
              <span
                aria-hidden
                className="relative mt-[11px] h-[2px] w-2 shrink-0 bg-quantum-green"
              >
                <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-quantum-green" />
              </span>
            )}
            <span>{item}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
const Trademark = () => <sup className="text-[0.55em]">™</sup>;
/* ── Page ─────────────────────────────────────────────────────────── */
export default function LiveDemo() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)] w-full bg-white"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ─── Page Title ─── */}
      <Titles
        text={
          <>
            IronCAP
            <sup className="text-[18px] md:text-[30px] align-super leading-none">
              ™
            </sup>{" "}
            Live Demo
          </>
        }
      />

      {/* ─── Intro ─── */}
      <div className="bg-white flex flex-col max-w-[1512px] mx-auto">
        <section>
          <div className="px-6 sm:px-8 lg:px-10 xl:px-[95px] pt-12 pb-8">
            <p className="text-steel-gray text-[15px] leading-[24px] max-w-[1230px]">
              IronCAP<sup className="text-[9.675px]">™</sup> is our latest
              innovation for the post-quantum cybersecurity. This
              patent-protected, post-quantum cryptographic system is based on
              the Goppa Code-based cryptographic technology. It has embedded our
              proprietary subclass of (L, G) making it not only more secured but
              also has faster cryptographic operations (key generation,
              encryption, decryption) than the traditional Goppa Code-based
              technology (McEliece). We are offering a live demonstration for
              the general public to try and experience the strength of IronCAP<Trademark />
              post-quantum encryption easily.
            </p>
          </div>
        </section>

        {/* ─── Two-column layout ─── */}
        <section className="bg-white">
          <div className="px-6 sm:px-8 lg:px-10 xl:px-[95px] pb-16 flex flex-col lg:flex-row gap-12 items-start">
            {/* Left column – instructions + info */}
            <div className="w-full lg:w-[479px] lg:shrink-0 flex flex-col gap-6">
              {/* Try IronCAP™ encryption */}
              <div>
                <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-1">
                  Try IronCAP<sup className="text-[12.9px]">™</sup> encryption
                </h3>
                <RequirementList>
                  <li>Upload any file (Max: 2MB) to be encrypted</li>
                  <li>
                    Click &ldquo;Encrypt&rdquo; to encrypt the uploaded file
                  </li>
                  <li>The encrypted file will be downloaded</li>
                </RequirementList>
              </div>

              {/* Try IronCAP™ decryption */}
              <div>
                <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-1">
                  Try IronCAP<sup className="text-[12.9px]">™</sup> decryption
                </h3>
                <RequirementList>
                  <li>
                    Upload any file previously encrypted by IronCAP
                    <sup className="text-[9.675px]">™</sup>
                  </li>
                  <li>
                    Click &ldquo;Decrypt&rdquo; to decrypt the uploaded file
                  </li>
                  <li>
                    The decrypted file will be downloaded (files not encrypted
                    by IronCAP
                    <sup className="text-[9.675px]">™</sup> will fail to
                    decrypt)
                  </li>
                </RequirementList>
              </div>

              <hr className="border-t border-[#dfe6ea]" />

              {/* Eligibility */}
              <InfoSection
                divider={false}
                arrows
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
                arrows
                title="How it Works"
                items={[
                  "Register an account",
                  "Login to the account",
                  <>
                    Try the IronCAP<sup className="text-[9.675px]">™</sup>{" "}
                    encryption/decryption
                  </>,
                ]}
              />

              <hr className="border-t border-[#dfe6ea]" />

              {/* Notes */}
              <InfoSection
                divider={false}
                title="Notes"
                items={[
                  <>
                    Each demo account has a different set of IronCAP
                    <sup className="text-[9.675px]">™</sup> keys
                  </>,
                  <>
                    Files you have encrypted can ONLY be decrypted in your
                    account
                  </>,
                ]}
              />
            </div>

            <LiveDemoPanel />
          </div>
        </section>
      </div>
      {/* ─── Learn More CTA ─── */}
      <section className="bg-white py-16 flex justify-center">
        <Bottom />
      </section>
    </main>
  );
}
