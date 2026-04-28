import { Button } from "@/components/ui/button";
import LottiePlayer from "@/components/LottiePlayer";
const howWorkSteps= [
            {
              step: "1",
              title: "LOGIN + SELECT COMPUTER",
              body: "Either login to your InTouch account to pick your computer from the list or quickly find your computer by its Computer Name (Click here to see how to create n InTouch account and activate your computer to become InTouch enabled.",
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
              body: "Either login to your InTouch account to pick your computer from the list or quickly find your computer by its Computer Name (Click here to see how to create n InTouch account and activate your computer to become InTouch enabled.",
              icon: "/product_assets/device_3.svg",
            },
            {
              step: "4",
              title: "READY TO GO",
              body: "After authentication, you will be able to remotely control your desktop computer from your mobile device.",
              icon: "/product_assets/device_4.svg",
            },
          ];
export default function InTouchPage() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ─── Page Title ─── */}
      <section className="bg-black flex items-center px-24 min-h-[196px]">
        <h1 className="text-white text-[50px] font-medium leading-[50px]">
          Products
        </h1>
      </section>

      {/* ─── InTouch Intro ─── */}
      <section className="relative overflow-hidden bg-white text-black scroll-mt-24">
        <div className="max-w-[1512px] mx-auto flex gap-8 px-[95px] pb-20">
          <div className="flex-shrink-0 w-[130px] pt-2">
            <LottiePlayer
              src={require("@/assets/animations/icon-IC-inTouch.json")}
              className="w-[130px] h-[168px]"
            />
          </div>

        <div className="flex flex-col gap-1 max-w-[1140px] pt-10">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
            IronCAP<sup className="text-[11.6px]">™</sup> InTouch
          </h2>

          <p className="text-quantum-green text-[20px] font-medium leading-[34px]">
            Work remotely with quantum-safe, absolute security via any device
            from anywhere, anytime
          </p>

          <h3 className="text-quantum-blue text-[20px] font-medium leading-[34px]">
            A Secure + Improved Alternative to VPN
          </h3>
          <p className="text-steel-gray text-[15px] leading-[24px]">
            Unlike VPN, InTouch establishes zero-trust between the client and
            the corporate network. This means the corporate network will not be
            affected even if the client computer has been compromised.
          </p>

          <h3 className="text-quantum-blue text-[20px] font-medium leading-[34px]">
            Securing Accounts with Two-Factor Authentication
          </h3>
          <p className="text-steel-gray text-[15px] leading-[24px]">
            Two-Factor Authentication is an effective way to protect against
            the unlikely event of password breaches. InTouch supports Google
            Authenticator One-Time Password (OTP).
          </p>

          <h3 className="text-quantum-blue text-[20px] font-medium leading-[34px]">
            Maximum Security with Controlled Access
          </h3>
          <p className="text-steel-gray text-[15px] leading-[24px]">
            For maximum security, InTouch lets you exert tight control of the
            access client. You can restrict remote access from devices with
            only certain MAC addresses.
          </p>
        </div>
        </div>
      </section>

      {/* ─── How it Works (video + compatibility) ─── */}
      <section className="bg-black py-20 px-24">
        <div className="max-w-[1512px] mx-auto">
        <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px] mb-10">
          How it Works
        </h2>

        {/* Video placeholder */}
        <div className="flex justify-center mb-12">
          <div className="w-[733px] h-[434px] rounded-lg border border-white/10 bg-[#0a1a2a] flex items-center justify-center">
            <span className="text-lite-gray text-sm">Video</span>
          </div>
        </div>

        {/* Brochure button */}
        <div className="flex justify-center mb-16">
          <Button
            text="brochure · · ·"
            url="#"
            border="border-quantum-green"
            textColor="text-quantum-green"
            hoverBg="hover:bg-quantum-green/10"
          />
        </div>

        {/* Compatibility */}
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-0 border-t border-white/10">
            {[
              { name: "Browser", img: null },
              { name: "iPhone/iPad", img: "/product_assets/Rectangle_appstore.png" },
              { name: "Android", img: "/product_assets/Rectangle_gplay.png" },
              { name: "Windows Tablet", img: "/product_assets/Rectangle_microsoft.png" },
            ].map((item, i) => (
              <div
                key={item.name}
                className={`flex flex-col items-center gap-2 px-10 py-6 ${
                  i > 0 ? "border-l border-white/10" : ""
                }`}
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
                      <path d="M4 4h16v12H4zM8 20h8M12 16v4" />
                    )}
                    {i === 1 && (
                      <rect x="7" y="2" width="10" height="20" rx="2" />
                    )}
                    {i === 2 && (
                      <rect x="6" y="3" width="12" height="18" rx="2" />
                    )}
                    {i === 3 && (
                      <path d="M4 6h16v12H4zM2 18h20" />
                    )}
                  </svg>
                </div>
                <span className="text-lite-gray text-[12px]">{item.name}</span>
                {item.img ? (
                  <img src={item.img} alt={item.name} className="h-6 object-contain" />
                ) : (
                  <span className="text-quantum-green text-[10px]">Login</span>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ─── InTouch Go ─── */}      
      <section className="bg-white py-16 px-24">
        <div className="max-w-[1512px] mx-auto flex gap-8">
        <div className="flex-shrink-0 w-[130px] pt-2">
          <LottiePlayer
            src={require("@/assets/animations/icon-IC-intouchGo.json")}
            className="w-[130px] h-[168px]"
          />
        </div>

        <div className="flex flex-col gap-[7px] max-w-[1141px]">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
            IronCAP<sup className="text-[11.6px]">™</sup> InTouch Go
          </h2>

          <p className="text-quantum-green text-[20px] font-medium leading-[34px]">
            Remote Working with Quantum-Safe, Absolute Security via Any Device
            from Anywhere, Anytime
          </p>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            IronCAP™ InTouch Go is a free mobile app that allows you to remote
            control your computer as if you were sitting in front of it without
            having to use an Internet browser. Now your remote computer with all
            your full-blown desktop applications are available at your
            fingertips. You can check your emails, edit your documents, work on
            your spreadsheet and any software program on your mobile device. No
            more frustration about application costs and incompatibility issues
            since no application is required to be resided at your mobile
            device. Also there is no more security risk as no confidential file
            is leaving your office environment.
          </p>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            Before you can use InTouch Go, you must first activate your remote
            computer to become InTouch-enabled. The activation process is as
            easy as 1-2-3. Simply click here to create a free 30-day Trial
            Account. Then from the computer you wish to activate, go to
            InTouch. Login to the InTouch account you have just created and
            follow the on-screen instructions to activate the computer.
          </p>
        </div>
        </div>
      </section>

      {/* ─── How it Works (InTouch Go – flow chart) ─── */}
      <section className="bg-black py-20 px-24">
        <div className="max-w-[1512px] mx-auto">
        <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px] mb-4">
          How it Works
        </h2>

        <p className="text-quantum-green text-[20px] font-medium leading-[34px] mb-4">
          Turn your Mobile Device into a Remote Control for your Computer
        </p>

        <div className="flex flex-col gap-[7px] mb-12">
          <p className="text-lite-gray text-[15px] leading-[24px]">
            InTouch Go is a free mobile app that allows you to remotely control
            your computer as if you were sitting in front of it, without using a
            web browser. Now, your remote computer, with all your full-blown
            desktop applications, is at your fingertips. You can check your
            emails, edit your documents, work on your spreadsheet and any
            software program on your mobile device. No more frustration about
            application costs and incompatibility issues since no application is
            required to reside on your mobile device. Also, there is no longer a
            security risk, as no confidential files leave your office
            environment.
          </p>
          <p className="text-lite-gray text-[15px] leading-[24px]">
            Before you can use InTouch Go, you must first activate your remote
            computer to become InTouch-enabled. The activation process is as
            easy as 1-2-3. Simply click here to create a Free Account.
            Then, from the computer you wish to activate, go to
            www.intouch.com. Log in to the InTouch account you have just created
            and follow the on-screen instructions to activate the computer.
          </p>
        </div>

        {/* 4-step flow */}
        <div className="grid grid-cols-[60px_1fr_140px] gap-y-0 border-t border-white/10 max-w-[1000px]">
          {howWorkSteps.map((item) => (
            <div key={item.step} className="contents">
              <div className="flex items-center justify-center py-10 border-b border-white/10 text-lite-gray text-[40px] font-medium leading-[50px]">
                {item.step}
              </div>
              <div className="flex flex-col gap-2 py-10 px-8 border-b border-white/10">
                <h4 className="text-quantum-green text-[15px] font-semibold leading-[24px] uppercase">
                  {item.title}
                </h4>
                <p className="text-lite-gray text-[15px] leading-[24px]">
                  {item.body}
                </p>
              </div>
              <div className="flex items-center justify-center py-10 border-b border-white/10">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Compatibility */}
        <div className="flex justify-center mt-16">
          <div className="grid grid-cols-3 gap-0 border-t border-white/10">
            {[
              { name: "iPhone/iPad", img: "/product_assets/Rectangle_appstore.png" },
              { name: "Android", img: "/product_assets/Rectangle_gplay.png" },
              { name: "Windows Tablet", img: "/product_assets/Rectangle_microsoft.png" },
            ].map((item, i) => (
              <div
                key={item.name}
                className={`flex flex-col items-center gap-2 px-12 py-6 ${
                  i > 0 ? "border-l border-white/10" : ""
                }`}
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
                    {i === 2 && (
                      <path d="M4 6h16v12H4zM2 18h20" />
                    )}
                  </svg>
                </div>
                <span className="text-lite-gray text-[12px]">{item.name}</span>
                <img src={item.img} alt={item.name} className="h-6 object-contain" />
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ─── InTouch GoMail ─── */}
      <section className="bg-white py-16 px-24">
        <div className="max-w-[1512px] mx-auto flex gap-8">
        <div className="flex-shrink-0 w-[130px] pt-2">
          <LottiePlayer
            src={require("@/assets/animations/icon-IC-intouchGoMail.json")}
            className="w-[130px] h-[168px]"
          />
        </div>

        <div className="flex flex-col gap-[7px] max-w-[1141px]">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
            IronCAP<sup className="text-[11.6px]">™</sup> InTouch GoMail
          </h2>

          <p className="text-quantum-green text-[20px] font-medium leading-[34px]">
            A revolutionary mobile mailbox
          </p>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            Unlike other mobile mailbox services, InTouch GoMail does not store
            any messages on your device, enhancing security. It simply mobilizes
            your Outlook and lets you keep all your inbound and outbound emails
            securely on your own computer. When sending emails from your mobile
            device, you can insert attachments from your computer&apos;s
            local/network drives or save inbound attachments in the same way
            without having to leave them on any third party&apos;s cloud
            storage. Hence, it maximizes data security/privacy, plus no
            third-party storage fee.
          </p>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            With a smart notification feature, you can configure your InTouch
            GoMail to receive real-time alerts on your mobile device when emails
            from certain predefined senders arrive at your Outlook. This means
            you will not be bothered by unimportant messages.
          </p>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            Before you can use InTouch GoMail, you must first activate your
            Outlook computer to become InTouch-enabled. The activation process
            is as easy as 1-2-3. Simply click here to create a Free Account.
            Then, from the computer you wish to activate, go to
            www.intouch.com. Log in to the InTouch account you have just created
            and follow the on-screen instructions to activate the Outlook
            computer.
          </p>

          {/* GoMail compatibility */}
          <div className="flex justify-start mt-8">
            <div className="grid grid-cols-2 gap-0 border-t border-steel-gray/20">
              {[
                { name: "iPhone/iPad", img: "/product_assets/Rectangle_appstore.png" },
                { name: "Android", img: "/product_assets/Rectangle_gplay.png" },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className={`flex flex-col items-center gap-2 px-12 py-6 ${
                    i > 0 ? "border-l border-steel-gray/20" : ""
                  }`}
                >
                  <div className="w-16 h-16 flex items-center justify-center text-quantum-green/40">
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
                  <img src={item.img} alt={item.name} className="h-6 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ─── InTouch SecureKey (dark) ─── */}
      <section className="bg-black py-16 px-24">
        <div className="max-w-[1512px] mx-auto flex gap-8">
        <div className="flex-shrink-0 w-[130px] pt-2">
          <LottiePlayer
            src={require("@/assets/animations/iconDark-IC-intouchSecureKey.json")}
            className="w-[130px] h-[168px]"
          />
        </div>

        <div className="flex flex-col gap-[7px] max-w-[1141px]">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
            IronCAP<sup className="text-[11.6px]">™</sup> InTouch SecureKey
          </h2>

          <p className="text-quantum-green text-[20px] font-medium leading-[34px]">
            Ultimate Security for your InTouch Remote PC Access
          </p>

          <p className="text-white text-[15px] leading-[24px]">
            InTouch SecureKey provides additional security to your remote
            access. This requires the user to insert an InTouch SecureKey (a USB
            device) for physical authentication in addition to the standard
            password protection. No two InTouch SecureKeys are the same. During
            activation, your InTouch SecureKey is uniquely &ldquo;bound&rdquo;
            to your InTouch-enabled computer. This ensures the holder of the
            InTouch SecureKey is the only one who can remotely access the
            &ldquo;designated&rdquo; InTouch-enabled computer.
          </p>

          <p className="text-white text-[15px] leading-[24px]">
            InTouch SecureKey can be assigned temporarily to occasional mobile
            employees or permanently to those requiring dedicated remote access
            to their computers.
          </p>

          <p className="text-white text-[15px] leading-[24px]">
            Auto-Login can also be enabled to securely store the login password,
            providing quick access by automating the login process.
          </p>

          <p className="text-white text-[15px] leading-[24px]">
            You have to be a subscriber of our InTouch remote access service in
            order to use this optional companion product. If you are not a
            subscriber yet, a free trial is available.
          </p>

          <p className="text-quantum-green text-[20px] font-medium leading-[34px] mt-8">
            For more information or to purchase your InTouch SecureKey, call
            1-800-668-2185 or chat with our product specialists.
          </p>
        </div>
        </div>
      </section>

      {/* ─── InTouch Server Edition (light) ─── */}
      <section className="bg-white py-16 px-24">
        <div className="max-w-[1512px] mx-auto flex gap-8">
        <div className="flex-shrink-0 w-[130px] pt-2">
          <LottiePlayer
            src={require("@/assets/animations/icon-IC-intouch-SE.json")}
            className="w-[130px] h-[168px]"
          />
        </div>

        <div className="flex flex-col gap-[7px] max-w-[1141px]">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
            IronCAP<sup className="text-[11.6px]">™</sup> InTouch Server
            Edition
          </h2>

          <p className="text-quantum-green text-[20px] font-medium leading-[34px]">
            Host your own InTouch remote access service
          </p>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            By installing the InTouch Server Edition at your business, you are
            hosting your own InTouch remote access service for your employees.
            This means your employees will be remotely accessing their office
            computers via your own InTouch servers instead of the servers hosted
            by 01 Quantum.
          </p>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            While this is equally secure as our hosted InTouch remote access
            service, there is no monthly/annual subscription fees. You purchase
            the number of licenses you need one-time and you have 100% control
            in managing your users and bandwidth usage.
          </p>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            Although a trial version of InTouch Server Edition is not available,
            its remote access functionality is identical to the hosted InTouch
            service. Sign up for a free InTouch trial account today and
            experience the convenience and benefits brought by our award winning
            products.
          </p>

          <p className="text-quantum-green text-[20px] font-medium leading-[34px] mt-8">
            For more information or to purchase your InTouch Server Edition,
            call 1-800-668-2185 or chat with our product specialists.
          </p>
        </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-white py-12 px-24">
        <div className="max-w-[1512px] mx-auto flex justify-center">
        <Button
          text="step into the future, buy IronCAP™ now · · ·"
          url="/buy"
          border="border-quantum-green"
          textColor="text-quantum-green"
          hoverBg="hover:bg-quantum-green/10"
        />
        </div>
      </section>
    </main>
  );
}
