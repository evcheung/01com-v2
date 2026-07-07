import { Button } from "@/components/ui/button";
import LottiePlayer from "@/components/LottiePlayer";
import animation1 from "@/assets/animations/icon-IC-inTouch.json"
import animation2 from  "@/assets/animations/icon-IC-intouchGo.json"
import animation3 from "@/assets/animations/intouchGoFlowchart.json"
import animation4 from "@/assets/animations/icon-IC-intouchGoMail.json"
import animation5 from "@/assets/animations/iconDark-IC-intouchSecureKey.json"
import animation6 from "@/assets/animations/icon-IC-intouch-SE.json"
import Image from "next/image";
import { Titles } from "@/components/Titles";
const Trademark = () => <sup className="text-[0.55em]">™</sup>;

const howWorkSteps = [
  {
    step: "1",
    title: "LOGIN + SELECT COMPUTER",
    body: (
      <>
        Either login to your InTouch account to pick your computer from the
        list or quickly find your computer by its Computer Name (Click{" "}
        <a
          href="https://www.01com.com/imintouch-remote-pc-desktop/how-it-works/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-quantum-green hover:underline"
        >
          here
        </a>{" "}
        to see how to create an InTouch account and activate your computer to
        become InTouch enabled.)
      </>
    ),
    icon: "/product_assets/device_1.svg",
  },
  {
    step: "2",
    title: "LAUNCH INTOUCH GO",
    body: "Make sure you have internet connection on your mobile device (e.g. cellular data or WiFi internet connection) and then launch InTouch Go.",
    icon: "/product_assets/device_2.svg",
  },
  {
    step: "3",
    title: "LOGIN + SELECT COMPUTER",
    body: (
      <>
        Either login to your InTouch account to pick your computer from the
        list or quickly find your computer by its Computer Name (Click{" "}
        <a
          href="https://www.01com.com/imintouch-remote-pc-desktop/how-it-works/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-quantum-green hover:underline"
        >
          here
        </a>{" "}
        to see how to create an InTouch account and activate your computer to
        become InTouch enabled.)
      </>
    ),
    icon: "/product_assets/device_3.svg",
  },
  {
    step: "4",
    title: "READY TO GO",
    body: "After authentication, you will be able to remotely control your desktop computer from your mobile device.",
    icon: "/product_assets/device_4.svg",
  },
];

const introFeatureColumns = [
  {
    eyebrow: "ZERO-TRUST ARCHITECTURE",
    title: "A Secure & Improved Alternative to VPN",
    description:
      "Unlike VPN, InTouch establishes zero-trust between the client and the corporate network. This means the corporate network will not be affected even if the client computer has been compromised.",
  },
  {
    eyebrow: "TWO-FACTOR AUTHENTICATION",
    title: "Securing Accounts with Two-Factor Authentication",
    description:
      "Two-Factor Authentication is an effective way to protect against the unlikely event of password breaches. InTouch supports Google Authenticator One-Time Password (OTP).",
  },
];

const introFeatureCards = [
  {
    title: "Maximum Security with Controlled Access",
    description:
      "For maximum security, InTouch lets you exert tight control of the access client. You can restrict remote access from devices with only certain MAC addresses.",
  },
  {
    title: "Quantum-Safe Encryption",
    description: (
      <>
        Powered by IronCAP<Trademark />{" "}technology, InTouch is built to
        withstand both classical and quantum computing threats &mdash;
        future-proofing your remote access today.
      </>
    ),
  },
  {
    title: "Any Device, Anywhere, Anytime",
    description:
      "InTouch delivers seamless, secure remote connectivity across all platforms and devices without compromising on protection or performance.",
  },
];

export default function InTouchPage() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ─── Page Title ─── */}
      <Titles text="Products" />

      {/* ─── InTouch Intro ─── */}
      <section className="relative overflow-hidden bg-white text-black scroll-mt-24">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] pb-12 md:pb-20">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
              <div className="flex-shrink-0 w-full sm:w-[130px] flex justify-center sm:justify-start">
                <LottiePlayer
                  src={animation1}
                  className="w-[130px] h-[168px]"
                />
              </div>

              <div className="flex flex-col justify-center gap-1 max-w-full lg:max-w-[980px]">
                <h2 className="text-quantum-blue text-[24px] sm:text-[30px] font-medium leading-[34px] sm:leading-[46px]">
                  IronCAP<Trademark /> InTouch
                </h2>

                <p className="text-quantum-green text-[16px] sm:text-[20px] font-medium leading-[28px] sm:leading-[34px]">
                  Work remotely with quantum-safe, absolute security via any
                  device from anywhere, anytime
                </p>
              </div>
            </div>

            <div className="grid gap-8 py-2 sm:pl-[162px] xl:grid-cols-2 xl:gap-16">
              {introFeatureColumns.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <p className="text-quantum-green text-[12px] sm:text-[14px] font-semibold leading-[18px] sm:leading-[20px] tracking-[0.08em] uppercase">
                    {item.eyebrow}
                  </p>
                  <h3 className="text-quantum-blue text-[20px] sm:text-[24px] font-medium leading-[30px] sm:leading-[36px]">
                    {item.title}
                  </h3>
                  <p className="text-steel-gray text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 sm:pl-[148px] md:gap-8 md:grid-cols-2 xl:gap-10 xl:grid-cols-3">
              {introFeatureCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[18px] border border-[#C7C7D0] bg-white p-6 sm:p-8 shadow-[0_12px_28px_rgba(27,27,39,0.04)]"
                >
                  <div>
                    <h3 className="text-quantum-blue text-[18px] sm:text-[20px] font-medium leading-[28px] sm:leading-[32px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-steel-gray text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── How it Works (video + compatibility) ─── */}
      <section className="bg-black py-12 md:py-20 px-6 md:px-[95px]">
        <div className="max-w-[1512px] mx-auto">
          <h2 className="text-quantum-blue text-[24px] sm:text-[30px] font-medium leading-[34px] sm:leading-[46px] mb-10">
            How it Works
          </h2>

          {/* Video placeholder */}
          <div className="flex justify-center mb-12 px-4 sm:px-0">
            <div className="w-full sm:w-[733px] h-[200px] sm:h-[434px] rounded-lg border border-white/10 overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/tzMxRHmP0s4?si=KOCsKt4jvP4ljdN_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Brochure button */}
          <div className="flex justify-center mb-16">
            <Button
              text="brochure"
              url="https://www.01com.com/pdf/brochures/IIT%20Brochure.pdf"
              border="border-quantum-green"
              textColor="text-quantum-green"
              hoverBg="hover:bg-quantum-green/10"
              isBlank="true"
            />
          </div>

          {/* Compatibility */}
          <div className="flex justify-center overflow-x-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-white/10 min-w-full sm:min-w-0">
              {[
                { name: "Browser", img: null, url: "https://locator.01com.com/login.php?" },
                {
                  name: "iPhone/iPad",
                  img: "/product_assets/Rectangle_appstore.png",
                  url: "https://apps.apple.com/ca/app/im-intouch-go/id526473842",
                },
                {
                  name: "Android",
                  img: "/product_assets/Rectangle_gplay.png",
                  url: "https://play.google.com/store/apps/details?id=com.zeroonecom.iitgo",
                },
                {
                  name: "Windows Tablet",
                  img: "/product_assets/Rectangle_microsoft.png",
                  url: "https://apps.microsoft.com/detail/9wzdncrdsmrk?hl=en-US&gl=US",
                },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className={`flex flex-col items-center gap-2 px-4 sm:px-8 lg:px-10 py-4 sm:py-6 ${
                    i > 0 && i % 2 !== 0 || (i > 1 && i % 2 === 0) ? "border-l border-white/10" : ""
                  } ${i >= 2 ? "border-t border-white/10 sm:border-t-0" : ""}`}
                >
                  <div className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center text-quantum-green/60">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1}
                      viewBox="0 0 24 24"
                    >
                      {i === 0 && <path d="M4 4h16v12H4zM8 20h8M12 16v4" />}
                      {i === 1 && (
                        <rect x="7" y="2" width="10" height="20" rx="2" />
                      )}
                      {i === 2 && (
                        <rect x="6" y="3" width="12" height="18" rx="2" />
                      )}
                      {i === 3 && <path d="M4 6h16v12H4zM2 18h20" />}
                    </svg>
                  </div>
                  <span className="text-lite-gray text-[12px]">
                    {item.name}
                  </span>
                  {item.img ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        width={64}
                        height={64}
                        src={item.img}
                        alt={item.name}
                        className="h-6 object-contain"
                      />
                    </a>
                  ) : (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-quantum-green text-[10px]"
                    >
                      Login
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── InTouch Go ─── */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-[95px]">
        <div className="max-w-[1512px] mx-auto flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 w-full sm:w-[130px] flex justify-center sm:justify-start pt-2">
            <LottiePlayer
              src={animation2}
              className="w-[130px] h-[168px]"
            />
          </div>

          <div className="flex flex-col gap-[7px] max-w-full lg:max-w-[1141px]">
            <h2 className="text-quantum-blue text-[24px] sm:text-[30px] font-medium leading-[34px] sm:leading-[46px]">
              IronCAP<Trademark /> InTouch Go
            </h2>

            <p className="text-quantum-green text-[16px] sm:text-[20px] font-medium leading-[28px] sm:leading-[34px]">
              Remote Working with Quantum-Safe, Absolute Security via Any Device
              from Anywhere, Anytime
            </p>

            <p className="text-steel-gray text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              IronCAP<Trademark /> InTouch Go is a free mobile app that allows
              you to remote control your computer as if you were sitting in
              front of it without having to use an Internet browser. Your
              remote computer, with all your full-blown desktop applications,
              is available at your fingertips from your mobile device. No more
              frustration about application costs and incompatibility issues
              since no application is required to reside on your mobile device.
              Also there is no more security risk as no confidential file is
              leaving your office environment.
            </p>

            <p className="text-steel-gray text-[15px] leading-[24px]">
              Before you can use InTouch Go, you must first activate your remote
              computer to become InTouch-enabled. The activation process is as
              easy as 1-2-3. Simply click{" "}
              <a
                href="https://locator.01com.com/ecommerce/account.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-quantum-blue hover:underline"
              >
                here
              </a>
              {" "}to create a free 30-day Trial Account. Then from the computer you wish to activate, go to
              InTouch. Login to the InTouch account you have just created and
              follow the on-screen instructions to activate the computer.
            </p>
          </div>
        </div>
      </section>

      {/* ─── How it Works (InTouch Go – flow chart) ─── */}
      <section className="bg-black py-12 md:py-20 px-6 md:px-[95px]">
        <div className="max-w-[1512px] mx-auto">
          <h2 className="text-quantum-blue text-[24px] sm:text-[30px] font-medium leading-[34px] sm:leading-[46px] mb-4">
            How it Works
          </h2>

          <p className="text-quantum-green text-[16px] sm:text-[20px] font-medium leading-[28px] sm:leading-[34px] mb-4">
            Turn your Mobile Device into a Remote Control for your Computer
          </p>

          <div className="flex flex-col gap-[7px] mb-12">
            <p className="text-lite-gray text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              Before you can use InTouch Go, you must first activate your remote
              computer to become InTouch-enabled. The activation process is as
              easy as 1-2-3. Simply click{" "}
              <a
                href="https://locator.01com.com/ecommerce/account.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-quantum-green hover:underline"
              >
                here
              </a>
              {" "}to create a Free Account. Then,
              from the computer you wish to activate, go to www.intouch.com. Log
              in to the InTouch account you have just created and follow the
              on-screen instructions to activate the computer.
            </p>
          </div>

          {/* 4-step flow */}
          <div className="flex flex-col gap-0 border-t border-white/10 w-full">
            {howWorkSteps.map((item) => (
              <div key={item.step} className="grid grid-cols-[50px_1fr_auto] gap-4 items-start py-6 sm:py-10 px-4 sm:px-8 border-b border-white/10">
                <div className="flex items-center justify-center">
                  <span className="text-lite-gray text-[24px] sm:text-[40px] font-medium leading-[32px] sm:leading-[50px]">
                    {item.step}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-quantum-green text-[12px] sm:text-[15px] font-semibold leading-[18px] sm:leading-[24px] uppercase">
                    {item.title}
                  </h4>
                  <p className="text-lite-gray text-[12px] sm:text-[15px] leading-[18px] sm:leading-[24px]">
                    {item.body}
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={`Step ${item.step}`}
                    width={80}
                    height={100}
                    className="w-16 h-20 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Lottie animation - right side */}
          {/* <div className="hidden lg:flex items-center justify-end mt-8 -mr-24">
            <LottiePlayer
              loop={false}
              src={animation3}
              className="w-[130px] h-[168px]"
            />
          </div> */}

          {/* Compatibility */}
          <div className="flex justify-center mt-16 overflow-x-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-white/10 w-full sm:w-auto">
              {[
                {
                  name: "iPhone/iPad",
                  img: "/product_assets/Rectangle_appstore.png",
                  url: "https://apps.apple.com/ca/app/im-intouch-go/id526473842",
                },
                {
                  name: "Android",
                  img: "/product_assets/Rectangle_gplay.png",
                  url: "https://play.google.com/store/apps/details?id=com.zeroonecom.iitgo&hl=en_CA",
                },
                {
                  name: "Windows Tablet",
                  img: "/product_assets/Rectangle_microsoft.png",
                  url: "https://apps.microsoft.com/detail/9wzdncrdsmrk?hl=en-US&gl=US",
                },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className={`flex flex-col items-center gap-2 px-6 sm:px-12 py-6 ${
                    i > 0 ? "border-l border-white/10" : ""
                  } ${i >= 1 ? "border-t sm:border-t-0 border-white/10" : ""}`}
                >
                  <div className="w-16 h-16 flex items-center justify-center text-quantum-green/60">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1}
                      viewBox="0 0 24 24"
                    >
                      {i === 0 && (
                        <rect x="7" y="2" width="10" height="20" rx="2" />
                      )}
                      {i === 1 && (
                        <rect x="6" y="3" width="12" height="18" rx="2" />
                      )}
                      {i === 2 && <path d="M4 6h16v12H4zM2 18h20" />}
                    </svg>
                  </div>
                  <span className="text-lite-gray text-[12px]">
                    {item.name}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={64}
                      height={64}
                      src={item.img}
                      alt={item.name}
                      className="h-6 object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── InTouch GoMail ─── */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-[95px]">
        <div className="max-w-[1512px] mx-auto flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 w-full sm:w-[130px] flex justify-center sm:justify-start pt-2">
            <LottiePlayer
              src={animation4}
              className="w-[130px] h-[168px]"
            />
          </div>

          <div className="flex flex-col gap-[7px] max-w-full lg:max-w-[1141px]">
            <h2 className="text-quantum-blue text-[24px] sm:text-[30px] font-medium leading-[34px] sm:leading-[46px]">
              IronCAP<Trademark /> InTouch GoMail
            </h2>

            <p className="text-quantum-green text-[16px] sm:text-[20px] font-medium leading-[28px] sm:leading-[34px]">
              A revolutionary mobile mailbox
            </p>

            <p className="text-steel-gray text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              Unlike other mobile mailbox services, InTouch GoMail does not
              store any messages on your device, enhancing security. It simply
              mobilizes your Outlook and lets you keep all your inbound and
              outbound emails securely on your own computer. When sending emails
              from your mobile device, you can insert attachments from your
              computer&apos;s local/network drives or save inbound attachments
              in the same way without having to leave them on any third
              party&apos;s cloud storage. Hence, it maximizes data
              security/privacy, plus no third-party storage fee.
            </p>

            <p className="text-steel-gray text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              With a smart notification feature, you can configure your InTouch
              GoMail to receive real-time alerts on your mobile device when
              emails from certain predefined senders arrive at your Outlook.
              This means you will not be bothered by unimportant messages.
            </p>

            <p className="text-steel-gray text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              Before you can use InTouch GoMail, you must first activate your
              Outlook computer to become InTouch-enabled. The activation process
              is as easy as 1-2-3. Simply click{" "}
              <a
                href="https://locator.01com.com/ecommerce/account.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-quantum-blue hover:underline"
              >
                here
              </a>
              {" "}to create a Free Account. Then, from the computer you wish to activate, click{" "}
              <a
                href="https://locator.01com.com/login.php?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-quantum-blue hover:underline"
              >
                here
              </a>{" "}
              to log in to the InTouch account you have just created and follow
              the on-screen instructions to activate the Outlook computer.
            </p>

            {/* GoMail compatibility */}
            <div className="flex justify-start mt-8 overflow-x-auto">
              <div className="grid grid-cols-2 gap-0 border-t border-steel-gray/20 w-full">
                {[
                  {
                    name: "iPhone/iPad",
                    img: "/product_assets/Rectangle_appstore.png",
                    url: "https://apps.apple.com/ca/app/im-intouch-gomail/id1047341493",
                  },
                  {
                    name: "Android",
                    img: "/product_assets/Rectangle_gplay.png",
                    url: "https://play.google.com/store/apps/details?id=com.zeroonecom.gomail&hl=en",
                  },
                ].map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex flex-col items-center gap-2 px-6 sm:px-12 py-6 ${
                      i > 0 ? "border-l border-steel-gray/20" : ""
                    }`}
                  >
                    <div className="hidden sm:flex w-16 h-16 items-center justify-center text-quantum-green/40">
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1}
                        viewBox="0 0 24 24"
                      >
                        {i === 0 && (
                          <rect x="7" y="2" width="10" height="20" rx="2" />
                        )}
                        {i === 1 && (
                          <rect x="6" y="3" width="12" height="18" rx="2" />
                        )}
                      </svg>
                    </div>
                    <span className="text-steel-gray text-[12px]">
                      {item.name}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="h-6 object-contain"
                        width={64}
                        height={64}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── InTouch SecureKey (dark) ─── */}
      <section className="bg-black py-16 px-6 md:px-[95px]">
        <div className="max-w-[1512px] mx-auto flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 w-full sm:w-[130px] flex justify-center sm:justify-start pt-2">
            <LottiePlayer
              src={animation5}
              className="w-[130px] h-[168px]"
            />
          </div>

          <div className="flex flex-col gap-[7px] max-w-full lg:max-w-[1141px]">
            <h2 className="text-quantum-blue text-[24px] sm:text-[30px] font-medium leading-[34px] sm:leading-[46px]">
              IronCAP<Trademark /> InTouch SecureKey
            </h2>

            <p className="text-quantum-green text-[16px] sm:text-[20px] font-medium leading-[28px] sm:leading-[34px]">
              Ultimate Security for your InTouch Remote PC Access
            </p>

            <p className="text-white text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              InTouch SecureKey provides additional security to your remote
              access. This requires the user to insert an InTouch SecureKey (a
              USB device) for physical authentication in addition to the
              standard password protection. No two InTouch SecureKeys are the
              same. During activation, your InTouch SecureKey is uniquely
              &ldquo;bound&rdquo; to your InTouch-enabled computer. This ensures
              the holder of the InTouch SecureKey is the only one who can
              remotely access the &ldquo;designated&rdquo; InTouch-enabled
              computer.
            </p>

            <p className="text-white text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              InTouch SecureKey can be assigned temporarily to occasional mobile
              employees or permanently to those requiring dedicated remote
              access to their computers.
            </p>

            <p className="text-white text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              Auto-Login can also be enabled to securely store the login
              password, providing quick access by automating the login process.
            </p>

            <p className="text-white text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              You have to be a subscriber of our InTouch remote access service
              in order to use this optional companion product. If you are not a
              subscriber yet, a free trial is available.
            </p>

            <p className="text-quantum-green text-[16px] sm:text-[20px] font-medium leading-[28px] sm:leading-[34px] mt-8">
              For more information or to purchase your InTouch SecureKey, call
              1-800-668-2185 or chat with our product specialists.
            </p>
          </div>
        </div>
      </section>

      {/* ─── InTouch Server Edition (light) ─── */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-[95px]">
        <div className="max-w-[1512px] mx-auto flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 w-full sm:w-[130px] flex justify-center sm:justify-start pt-2">
            <LottiePlayer
              src={animation6}
              className="w-[130px] h-[168px]"
            />
          </div>

          <div className="flex flex-col gap-[7px] max-w-full lg:max-w-[1141px]">
            <h2 className="text-quantum-blue text-[24px] sm:text-[30px] font-medium leading-[34px] sm:leading-[46px]">
              IronCAP<Trademark /> InTouch Server
              Edition
            </h2>

            <p className="text-quantum-green text-[16px] sm:text-[20px] font-medium leading-[28px] sm:leading-[34px]">
              Host your own InTouch remote access service
            </p>

            <p className="text-steel-gray text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              By installing the InTouch Server Edition at your business, you are
              hosting your own InTouch remote access service for your employees.
              This means your employees will be remotely accessing their office
              computers via your own InTouch servers instead of the servers
              hosted by 01 Quantum.
            </p>

            <p className="text-steel-gray text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              While this is equally secure as our hosted InTouch remote access
              service, there is no monthly/annual subscription fees. You
              purchase the number of licenses you need one-time and you have
              100% control in managing your users and bandwidth usage.
            </p>

            <p className="text-steel-gray text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]">
              Although a trial version of InTouch Server Edition is not
              available, its remote access functionality is identical to the
              hosted InTouch service. Sign up for a free InTouch trial account
              today and experience the convenience and benefits brought by our
              award winning products.
            </p>

            <p className="text-quantum-green text-[16px] sm:text-[20px] font-medium leading-[28px] sm:leading-[34px] mt-8">
              For more information or to purchase your InTouch Server Edition,
              call 1-800-668-2185 or chat with our product specialists.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
