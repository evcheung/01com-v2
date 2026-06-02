import Image from "next/image";
import { Titles } from "@/components/Titles";
import { Bottom } from "@/components/resources/Bottom";
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
      <div className="relative px-20 py-16 flex flex-col items-center">
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
          <div className="px-6 md:px-[95px] pt-12 pb-8">
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
          <div className="px-6 md:px-[95px] pb-16 flex flex-col md:flex-row gap-12 items-start">
            {/* Left column – instructions + info */}
            <div className="w-full md:w-[479px] shrink-0 flex flex-col gap-6">
              {/* Try IronCAP™ encryption */}
              <div>
                <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-1">
                  Try IronCAP<sup className="text-[12.9px]">™</sup> encryption
                </h3>
                <ul className="text-steel-gray text-[15px] leading-[24px] flex flex-col gap-3 list-disc list-inside"></ul>

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
                  not encrypted by IronCAP
                  <sup className="text-[9.675px]">™</sup> will fail to decrypt)
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

            {/* Right column – registration boxes */}
            <div className="flex flex-col gap-8 shrink-0 w-full md:w-auto md:ml-[150px]">
              {/* Registration */}
              <BracketCard title="Registration">
                <div className="flex flex-col gap-3 items-center">
                  <a
                    href="https://www.facebook.com/v2.3/dialog/oauth?app_id=1597333030401506&auth_type=&cbt=1780076033489&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfff05cd97f7e20cc7%26domain%3Dwww.ironcap.ca%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.ironcap.ca%252Ffa87d8e0a118ef8da%26relation%3Dopener&client_id=1597333030401506&display=popup&domain=www.ironcap.ca&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fwww.ironcap.ca%2Fdemo%2F&locale=en_US&logger_id=f19986f2bfcc3b883&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df87d83b5be1114b0d%26domain%3Dwww.ironcap.ca%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.ironcap.ca%252Ffa87d8e0a118ef8da%26relation%3Dopener%26frame%3Df272c21d07129ddb5&response_type=token%2Csigned_request%2Cgraph_domain&return_scopes=false&scope=public_profile%2C%20email&sdk=joey&version=v2.3"
                    className="flex items-center gap-2 w-[260px] h-[40px] px-4 bg-white rounded-[4px] text-steel-gray text-[14px] leading-[20px] hover:bg-[#f2f6f7] transition-colors"
                  >
                    <span
                      className="shrink-0 flex items-center justify-center"
                      style={{ width: 16, height: 16 }}
                    >
                      <Image
                        src="/live_demo_assets/Facebook_icon.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="object-contain max-w-full max-h-full"
                      />
                    </span>
                    <span>Continue with Facebook</span>
                  </a>
                  <a
                    href="https://accounts.google.com/v3/signin/accountchooser?client_id=784107785027-u5k96i9hcp0hue8gbbj1ef02ko96gnf6.apps.googleusercontent.com&display=popup&enable_granular_consent=true&gis_params=GBMqKzdLS0VHQjJPdHY3cURlNm93bXdGck8xUFk2SktONHpvQmVLYUFObC8yclk4AUIJYXV0aDI2OTc0aAE&gsiwebsdk=gis_attributes&include_granted_scopes=true&origin=https%3A%2F%2Fwww.ironcap.ca&redirect_uri=gis_transform&response_mode=form_post&response_type=token&scope=profile+email&dsh=S993516758%3A1780075977225822&o2v=1&service=lso&flowName=GeneralOAuthFlow&opparams=%253Fenable_granular_consent%253Dtrue%2526gis_params%253DGBMqKzdLS0VHQjJPdHY3cURlNm93bXdGck8xUFk2SktONHpvQmVLYUFObC8yclk4AUIJYXV0aDI2OTc0aAE%2526response_mode%253Dform_post&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAPtpiTNLDM6jcLg3gJhknAazYSvQpxVDbhvtNrJqR_VUOF1kqdZnI1sVeeYrjZgRRcR2D75KZGFJrknvUdUVANHSGmjwj3YzJlO_FEX1j5k5AQKIMNJAbdVU_C2qiomIaKx3zmSJGNFBB2uc9iYoyGhQUO_n70WGzfgSxvT5PKQK4GdGVWpQziaeu24oPIQOlER0MtRkyACnXa2EBuw1lIO1NXYxpFkTjOOZPSa8TEzzl9ZJkHNT6Ms5oZmzCAfWQ0ITBRK9pI-bG6RzgHDr08y5Pm2gywlScCOzvoCX7-mKXjp7nxZVOI8yR8_LtVUdRIISI-6artWnRBIhpcS7uvsU6cu2BJs_gQGAIvbFwvpgqvPSemDSl31G2dJCMtgqKo30ZMzBkexiH4avMPO30ztzPMiamDHvKstxRbwUBqntKRxNUE8f5Y-tr2fBNONE9MXG3nnHnucsMmhy-lILerCMVx41g%26flowName%3DGeneralOAuthFlow%26as%3DS993516758%253A1780075977225822%26client_id%3D784107785027-u5k96i9hcp0hue8gbbj1ef02ko96gnf6.apps.googleusercontent.com%26requestPath%3D%252Fsignin%252Foauth%252Fconsent%23&app_domain=https%3A%2F%2Fwww.ironcap.ca"
                    className="flex items-center gap-2 w-[260px] h-[40px] px-4 bg-white rounded-[4px] text-steel-gray text-[14px] leading-[20px] hover:bg-[#f2f6f7] transition-colors"
                  >
                    <span
                      className="shrink-0 flex items-center justify-center"
                      style={{ width: 18, height: 18 }}
                    >
                      <Image
                        src="/live_demo_assets/Google_icon.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="object-contain max-w-full max-h-full"
                      />
                    </span>
                    <span>Continue with Google</span>
                  </a>
                </div>
              </BracketCard>

              {/* Already Registered? */}
              <BracketCard title="Already Registered?">
                <div className="flex flex-col gap-3 items-center">
                  <a
                    href="https://www.facebook.com/v2.3/dialog/oauth?app_id=1597333030401506&auth_type=&cbt=1780076136350&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df0fc24e584661c399%26domain%3Dwww.ironcap.ca%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.ironcap.ca%252Ffa87d8e0a118ef8da%26relation%3Dopener&client_id=1597333030401506&display=popup&domain=www.ironcap.ca&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fwww.ironcap.ca%2Fdemo%2F&locale=en_US&logger_id=f54f45cb64c9b74ba&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb12311929852306b%26domain%3Dwww.ironcap.ca%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.ironcap.ca%252Ffa87d8e0a118ef8da%26relation%3Dopener%26frame%3Df2b62a6ac1c2619c9&response_type=token%2Csigned_request%2Cgraph_domain&return_scopes=false&scope=public_profile%2C%20email&sdk=joey&version=v2.3"
                    className="flex items-center gap-2 w-[260px] h-[40px] px-4 bg-white rounded-[4px] text-steel-gray text-[14px] leading-[20px] hover:bg-[#f2f6f7] transition-colors"
                  >
                    <span
                      className="shrink-0 flex items-center justify-center"
                      style={{ width: 16, height: 16 }}
                    >
                      <Image
                        src="/live_demo_assets/Facebook_icon.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="object-contain max-w-full max-h-full"
                      />
                    </span>
                    <span>Continue with Facebook</span>
                  </a>
                  <a
                    href="https://accounts.google.com/v3/signin/accountchooser?client_id=784107785027-u5k96i9hcp0hue8gbbj1ef02ko96gnf6.apps.googleusercontent.com&display=popup&enable_granular_consent=true&gis_params=GBMqK1I1ZzdUVTI1SVJ0Znl5OWtvSUNJNisyU211YnNVTGR0eUR1aWFXNmQ2cEU4AUIKYXV0aDMxOTYwN2gB&gsiwebsdk=gis_attributes&include_granted_scopes=true&origin=https%3A%2F%2Fwww.ironcap.ca&redirect_uri=gis_transform&response_mode=form_post&response_type=token&scope=profile+email&dsh=S638636705%3A1780076259094326&o2v=1&service=lso&flowName=GeneralOAuthFlow&opparams=%253Fenable_granular_consent%253Dtrue%2526gis_params%253DGBMqK1I1ZzdUVTI1SVJ0Znl5OWtvSUNJNisyU211YnNVTGR0eUR1aWFXNmQ2cEU4AUIKYXV0aDMxOTYwN2gB%2526response_mode%253Dform_post&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMBAxA3gsZ601cU5A6hJ5JpFhOaw3spqFv278M1VnWJGJoFutfgBh62YMHSk93pBCggxK1h9WmmQmPfckOBX4qegKpoq9-UAZ6rZaBSGXHudmEPuhDtgjBgon004UjY0iTrhA99aOaORCSSpDU24kCdDbXWG3ME0t6PXUnWkoitTs_vwXr0dwSPcJOzQWcBwJSW7yQ_T2A-qKRBkCwaG62VIp0cA8fz6YlbI4YaeO5gcsrhatqsImqgwv0fox9UGWZG03SmWRPqW2K1TBUoO1nq6jfcBKKZOXajJxg94kvqTyX-y6Ix_OJfgVHH20v41-SYxnyVmr6YzdK-xBYuxabwBamD8fzwwBxlfMh9NKoqPfr-G21hrMvkCIn0oDYClUOSRFXas1JQWhptI4jA5Wgk0HvqSMoFilCZHVQrJ8FOAiINuXACXC_Qjebj_xweGHDjoMYr5nH3k0f3bhrvq4iQ6bT6oA%26flowName%3DGeneralOAuthFlow%26as%3DS638636705%253A1780076259094326%26client_id%3D784107785027-u5k96i9hcp0hue8gbbj1ef02ko96gnf6.apps.googleusercontent.com%26requestPath%3D%252Fsignin%252Foauth%252Fconsent%23&app_domain=https%3A%2F%2Fwww.ironcap.ca"
                    className="flex items-center gap-2 w-[260px] h-[40px] px-4 bg-white rounded-[4px] text-steel-gray text-[14px] leading-[20px] hover:bg-[#f2f6f7] transition-colors"
                  >
                    <span
                      className="shrink-0 flex items-center justify-center"
                      style={{ width: 18, height: 18 }}
                    >
                      <Image
                        src="/live_demo_assets/Google_icon.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="object-contain max-w-full max-h-full"
                      />
                    </span>
                    <span>Continue with Google</span>
                  </a>
                </div>
              </BracketCard>
            </div>
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
