import { Button } from "@/components/ui/button";
import { IRONCAP_X_FREE_DOWNLOAD_ROUTE } from "@/components/products/ironcapDownloadLinks";

const Trademark = () => <sup className="text-[0.55em]">™</sup>;

export default function IroncapXMailWhyXMailPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1512px] px-6 pb-14 md:px-[95px] md:pb-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="text-center">
            <h1 className="mt-0 text-[#71bfff] text-[30px] font-medium leading-[46px]">
              Why IronCAP
              <Trademark />{" "}XMail?
            </h1>
          </div>
          <div className="mt-5">
            <p className="text-[#79c99c] text-[20px] font-medium leading-[34px]">
              Your Antidote to Phishing
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 text-[#6e8090] text-[15px] leading-[24px]">
            <p>
              Email is the most commonly used method for communications
              nowadays, and unfortunately it&apos;s also the most common channel
              for cyber criminals to breach private information. Phishing email
              is a major means of ransomware attack. Hackers bait you to open
              their fake emails and click on the malicious links. This can open
              a back door to your computer allowing hackers to steal your
              private information, lock your data and demand a ransom. These
              kinds of criminal activities are skyrocketing and will only get
              more serious with the arrival of quantum computers.
            </p>
            <p>
              IronCAP<Trademark />{" "}XMail is truly end-to-end with zero
              third-party trust. It lets you send end-to-end, quantum-safe
              encrypted email which can only be decrypted by the designated
              recipients.
              Additionally, you can digitally sign your emails so your
              recipients can easily distinguish your legitimate email from a fake
              one. If your laptops got stolen or your email accounts got
              compromised, your email messages and attachments stay encrypted,
              i.e. sensitive information won&apos;t be exposed. They will remain
              encrypted even when the bad actors have access to quantum
              computers because the IronCAP<Trademark /> Crypto is quantum-safe.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              text="Try It Free"
              url={IRONCAP_X_FREE_DOWNLOAD_ROUTE}
              border="border-quantum-green"
              textColor="text-quantum-green"
              hoverBg="hover:bg-quantum-green/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
