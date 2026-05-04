"use client";

import Link from "next/link";
import { useState } from "react";
import { Title } from "@/components/faq/Title";
import { Button } from "@/components/ui/button";
const Trademark = () => <sup className="text-[0.55em]">™</sup>;

type Faq = { id: string; question: React.ReactNode; answer: React.ReactNode };

// ─── Section 1: IronCAP™ InTouch FAQs ────────────────────────────────────
const generalFaqs: Faq[] = [
  {
    id: "what-is-ironcap-intouch",
    question: (
      <>
        What is IronCAP
        <Trademark /> InTouch Remote Desktop?
      </>
    ),
    answer: (
      <>
        IronCAP
        <Trademark /> InTouch is a remote access solution that allows you to
        provide remote access to multiple computers with the ability to
        administer and manage them from a single web page. After signing up for
        the service here, you can login to your Administrator page from here, to
        activate computers, configure settings, and quickly access any of your
        computers. Try it out for free by signing up for a free 30-day trial.
      </>
    ),
  },
  {
    id: "how-does-it-work",
    question: (
      <>
        How does IronCAP
        <Trademark /> InTouch work?
      </>
    ),
    answer: (
      <>
        IronCAP
        <Trademark /> InTouch should be installed on the PC you wish to access
        remotely from anywhere. During installation, you will be required to
        select a ComputerName, login name and password. 01 Quantum&apos;s
        patented technology uses this ComputerName to find your PC on the
        Internet. Upon activation, you can access your computer from anywhere.
        Login here using your Computer Name, Login Name and Password. 01
        Quantum&apos;s technology establishes a connection between the device
        you are currently using, and your distant computer. Each connection is
        encrypted using Secure Socket Layer (SSL) 256 bit key encryption for
        complete data security &mdash; the same technology that is used for most
        online banking applications.
      </>
    ),
  },
  {
    id: "features",
    question: (
      <>
        What are the features of IronCAP
        <Trademark /> InTouch Remote Desktop Software?
      </>
    ),
    answer: (
      <>
        <p className="font-medium text-steel-gray">For the Administrator:</p>
        <ul className="mt-1 list-disc pl-6">
          <li>Group all your computers under a single account</li>
          <li>List all your computers on a single page</li>
          <li>One-click access to any of your computers</li>
          <li>Create and assign users to groups</li>
          <li>Purchase, cancel, and suspend licenses</li>
          <li>Access to a Dedicated Account Manager</li>
        </ul>
        <p className="mt-3 font-medium text-steel-gray">For the End-user:</p>
        <ul className="mt-1 list-disc pl-6">
          <li>
            Access your PC from any computer or wireless device with an Internet
            connection
          </li>
          <li>Run desktop programs from a PC or Pocket PC</li>
          <li>Access and view files</li>
          <li>Print remote documents to your local printer</li>
          <li>Transfer files between PCs</li>
          <li>Listen to audio from your distant PC</li>
          <li>Manage contact and calendar information</li>
          <li>Manage Outlook email</li>
          <li>
            Invite guests to your computer to conduct online meetings and
            presentations
          </li>
          <li>
            Notifications on your cell phone of new emails received on your
            computer
          </li>
          <li>Monitor your child&apos;s computer and Internet activities</li>
        </ul>
      </>
    ),
  },
  {
    id: "system-requirements",
    question: (
      <>
        What are the system requirements for IronCAP
        <Trademark /> InTouch?
      </>
    ),
    answer: (
      <>
        <p>
          The system requirements for the computer that IronCAP
          <Trademark /> InTouch will be installed on are:
        </p>
        <ul className="mt-2 list-disc pl-6">
          <li>Windows 7, 8, 10, 11+</li>
          <li>40MB free disk space</li>
          <li>
            Latest versions of Internet Explorer, Mozilla Firefox and Google
            Chrome
          </li>
          <li>
            Support for POP3 or Exchange Mail servers (IMAP not supported)
          </li>
          <li>
            &quot;Always On&quot; Internet connection (e.g. cable modem, DSL,
            ISDN, T1, or LAN)
          </li>
          <li>Outlook 2010 or newer</li>
        </ul>
        <p className="mt-3 font-medium text-steel-gray">For Remote Wake-Up:</p>
        <ul className="mt-1 list-disc pl-6">
          <li>
            A minimum of 2 computers with IronCAP
            <Trademark /> InTouch installed on the same wired network are
            required. One computer is the computer you wish to wake-up access
            and the other will act as the &quot;Wake-Up Proxy&quot; to send the
            wake-up signal to the host computer.
          </li>
          <li>
            The host computer&apos;s bios and network card must support Wake-Up
            on Lan (WOL), and it must be enabled in both.
          </li>
          <li>The Wake-Up Proxy must already be powered on</li>
          <li>Learn more about Remote Wake-Up below</li>
        </ul>
      </>
    ),
  },
  {
    id: "devices",
    question: <>What are the devices I can use to remotely access my PC?</>,
    answer: (
      <>
        <p>
          You can use any PC or wireless device that is connected to Internet.
          If you are using any iOS device (iPhone, iPad, iPod) or any Android
          device (tablet or smartphone), you need to download and install the
          Free IronCAP
          <Trademark /> InTouch Go app from the Apple store or the Google Play
          store (Android market) respectively, to access your remote computer.
          For any other devices, there is no software required on the remote
          device. It only requires a connection to the Internet and an Internet
          browser.
        </p>
        <p className="mt-3 font-medium text-steel-gray">
          Specific browsers tested include:
        </p>
        <ul className="mt-1 list-disc pl-6">
          <li>Internet Explorer 7.0+</li>
          <li>Mozilla Firefox 5.0 or later</li>
          <li>Microsoft Pocket PC Internet Explorer</li>
          <li>Go.Web by GoAmerica</li>
          <li>Blazer</li>
          <li>Openwave Mobile Browser</li>
          <li>Palm Web Pro 3 Browser</li>
          <li>Palm Browser</li>
          <li>Palm Browser 2 and above</li>
          <li>BlackBerry Browser</li>
          <li>Opera Browser</li>
        </ul>
      </>
    ),
  },
  {
    id: "additional-software",
    question: <>Do I need additional software installed on my remote device?</>,
    answer: (
      <>
        If you are using any iOS device (iPhone, iPad, iPod) or any Android
        device (tablet or smartphone), you need to download and install the Free
        IronCAP
        <Trademark /> InTouch Go app from the Apple store or the Google Play
        store (Android market) respectively, to access your remote computer. For
        any other devices, there is no software required on the remote device.
        It only requires a connection to the Internet and an Internet browser.
      </>
    ),
  },
  {
    id: "turned-on",
    question: <>Does my PC need to be turned on at all times?</>,
    answer: (
      <>
        No. IronCAP
        <Trademark /> InTouch &quot;Remote Wake-Up&quot; feature allows you to
        access your PC even if it is shut down by remotely powering it on. See
        additional information on Remote Wake-Up feature below.
      </>
    ),
  },
  {
    id: "static-ip",
    question: (
      <>
        Do I require a static IP address on my IronCAP
        <Trademark /> InTouch PC?
      </>
    ),
    answer: (
      <>
        No, IronCAP
        <Trademark /> InTouch can find your PC on the Internet, even if your PC
        uses Dynamic IP addresses.
      </>
    ),
  },
  {
    id: "languages",
    question: (
      <>
        What languages does IronCAP
        <Trademark /> InTouch support?
      </>
    ),
    answer: (
      <>
        <p>
          IronCAP
          <Trademark /> InTouch supports the following languages:
        </p>
        <ul className="mt-2 list-disc pl-6">
          <li>English</li>
          <li>French</li>
          <li>Chinese (Traditional)</li>
          <li>Chinese (Simplified)</li>
          <li>German</li>
          <li>Spanish</li>
          <li>Portuguese (Brazil)</li>
        </ul>
      </>
    ),
  },
  {
    id: "monitors",
    question: (
      <>
        How many monitors does IronCAP
        <Trademark /> InTouch support?
      </>
    ),
    answer: (
      <>
        IronCAP
        <Trademark /> InTouch supports an unlimited number of monitors on the
        Host computer.
      </>
    ),
  },
  {
    id: "update",
    question: (
      <>
        How do I update my IronCAP
        <Trademark /> InTouch Remote Desktop Software?
      </>
    ),
    answer: (
      <>
        To upgrade to the latest version of IronCAP
        <Trademark /> InTouch, select &ldquo;Run Update Now&rdquo; by
        right-clicking the green satellite icon in your Windows system tray or
        from the Start menu in the IronCAP
        <Trademark /> InTouch folder. Additionally, IronCAP
        <Trademark /> InTouch will automatically check for updates every time
        IronCAP
        <Trademark /> InTouch is started on your computer. If you are not
        currently an IronCAP
        <Trademark /> InTouch subscriber, click here to try it free for 30 days.
      </>
    ),
  },
];

// ─── Section 2: Remote Wake-Up Feature ───────────────────────────────────
const wakeUpFaqs: Faq[] = [
  {
    id: "wake-up-how",
    question: (
      <>
        How does the IronCAP
        <Trademark /> InTouch Remote Wake-Up feature work?
      </>
    ),
    answer: (
      <>
        This feature will remotely switch on your computer that is &ldquo;shut
        down&rdquo; so that it can be remotely accessed via IronCAP
        <Trademark /> InTouch. Please note that this feature will not work for
        computers that are &ldquo;in sleep mode&rdquo;. It only works for
        &ldquo;shutdown mode&rdquo;. This is a very useful feature to save
        energy as well as for security enhancement.
      </>
    ),
  },
  {
    id: "wake-up-requirements",
    question: <>What are the requirements for Remote Wake-Up?</>,
    answer: (
      <>
        For this feature to work, a minimum of 2 licenses on your IronCAP
        <Trademark /> InTouch account are required with at least one of them
        always on. When you want to wake-up your host computer that is in
        &ldquo;shutdown mode&rdquo;, the IronCAP
        <Trademark /> InTouch server will use one of the host computers in your
        IronCAP
        <Trademark /> InTouch account that is &ldquo;on&rdquo; to
        &ldquo;magically&rdquo; wake-up the host computer you want to switch on.
        The computer you want to &ldquo;switch on&rdquo; must either support the
        &ldquo;Wake-up-on-LAN&rdquo; (WOL) or the Intel vPro feature. Most of
        the newer computers have built-in support of WOL but only more high-end
        business computers have the Intel vPro feature. If you are not sure,
        please check with your computer vendors. If your computer supports both
        WOL and Intel vPro, the IronCAP
        <Trademark /> InTouch Remote Wake-Up feature will work with either one
        or both enabled.
      </>
    ),
  },
  {
    id: "wol-enable",
    question: <>If my computer supports WOL, how do I enable it?</>,
    answer: (
      <>
        <p>
          Enabling WOL on a computer is not straight forward but it is a
          one-time setup. You need to enable this feature in both the BIOS
          setting as well as the Windows network card. Methods for enabling WOL
          on the computer BIOS vary depending on the manufacturer. General
          instructions are as follows:
        </p>
        <p className="mt-3 font-medium text-steel-gray">
          To enable WOL in your motherboard&apos;s BIOS:
        </p>
        <p className="mt-1">
          Restart your computer. When your computer first boots up, you will
          need to press a key to enter into the BIOS settings. Look for a
          message on screen telling you to press a key to enter Setup or BIOS,
          or refer to your computer/motherboard documentation for instructions.
          Common keys used are the DEL and F2, or ESC keys. Once you are in the
          BIOS settings, the WOL settings will usually be under Power
          Management. Look for a setting similar to IronCAP
          <Trademark /> InTouch Wake-Up on Lan, WOL, or Remote Boot. Refer to
          your computer/motherboard documentation for specific instructions.
        </p>
        <p className="mt-3">
          <span className="font-medium text-steel-gray">Note:</span> if the
          Wake-up setting of your BIOS shows S# (where # can be 0-5); select S5.
          If S5 is not available on the list, the IronCAP
          <Trademark /> InTouch Wake-up feature will not work.
        </p>
        <p className="mt-3">
          To enable WOL for your network card settings in Windows, the following
          steps are generic, terms used may be slightly different depending on
          your Windows version. The following example is for Windows 11:
        </p>
        <p className="mt-1">
          Windows &ldquo;Start&rdquo; → &ldquo;Settings&rdquo; → &ldquo;Network
          &amp; Devices&rdquo; → &ldquo;Advanced network settings&rdquo; →
          Expand the &ldquo;Network adapters&rdquo; box → Click
          &ldquo;Edit&rdquo; on the &ldquo;More adapter options&rdquo; →
          &ldquo;Configure&rdquo;.
        </p>
        <ol className="mt-2 list-decimal pl-6">
          <li>
            On the &ldquo;Power Management&rdquo; tab, enable both the
            &ldquo;All the computer to turn off this device to save power&rdquo;
            and the &ldquo;Allow this device to wake the computer&rdquo;
            options.
          </li>
          <li>
            On the &ldquo;Advanced&rdquo; tab, enable both the &ldquo;Shutdown
            Wake-On-Lan&rdquo; and &ldquo;Wake on Magic Packet&rdquo; options.
          </li>
        </ol>
        <p className="mt-3">
          For specific instructions, please consult your computer manufacturer
          or contact our Tech Support Department.
        </p>
      </>
    ),
  },
  {
    id: "vpro-enable",
    question: <>If my computer supports Intel vPro, how do I enable it?</>,
    answer: (
      <>
        Restart your computer. When your computer first boots up, you will need
        to press a key to enter into the BIOS settings. Look for a message on
        screen telling you to press a key to enter Setup or BIOS, or refer to
        your computer/motherboard documentation for instructions. Common keys
        used are the DEL and F2, or ESC keys. Clicking Ctrl-P will enter the
        Intel vPro Manageability Engine BIOS Extension (MEBx). Once in the MEBx,
        use the default password &ldquo;admin&rdquo; (case-sensitive) to log in,
        then change it to a new password that meets Intel&apos;s strong password
        criteria: at least 8 characters, including an uppercase letter, a
        lowercase letter, a number, and a special character (excluding quotes,
        apostrophes, commas, angle brackets, colons, ampersands, and spaces).
        Please make sure you setup the same password as the IronCAP
        <Trademark /> InTouch password of the targeted host computer. After
        changing the password, you will be in the MEBx menu. Navigate to the
        Intel AMT Configuration section. Select the Power Control item and
        navigate to enable the option of &ldquo;Desktop: ON in S0, ME Wake in
        S3, S4-5&rdquo;. Find the option for Activate Network Access and confirm
        by pressing Y. Finally navigate to &ldquo;Exit&rdquo; the MEBx menu to
        complete the setup.
      </>
    ),
  },
  {
    id: "wake-up-password",
    question: <>What is my Remote Wake-Up password?</>,
    answer: (
      <>
        By default, IronCAP
        <Trademark /> InTouch uses the same password for your I&apos;m InTouch
        account login password and the Remote Wake-Up password. Unless you have
        deliberately configured them to be different, the IronCAP
        <Trademark /> InTouch account login password is the same as the remote
        login password of your IronCAP
        <Trademark /> InTouch host computer.
      </>
    ),
  },
  {
    id: "windows-shutdown",
    question: (
      <>
        How do I ensure Windows shuts down properly for remote Wake-Up to work
        properly?
      </>
    ),
    answer: (
      <>
        <p>
          By default, Windows 8 and after all come with a &ldquo;fast
          startup&rdquo; mechanism that must be disabled in order for the
          IronCAP
          <Trademark /> InTouch computer to shut-down properly.
        </p>
        <p className="mt-3 font-medium text-steel-gray">
          To disable the &ldquo;Fast startup&rdquo; mechanism:
        </p>
        <ol className="mt-1 list-decimal pl-6">
          <li>Open the Control Panel of Windows.</li>
          <li>Click on the &ldquo;Power Options&rdquo;.</li>
          <li>
            Click on the &ldquo;Choose what the power button does&rdquo; option.
          </li>
          <li>
            Click on &ldquo;Change settings that are currently
            unavailable&rdquo;.
          </li>
          <li>Uncheck the &ldquo;Turn on fast startup&rdquo;.</li>
          <li>Click on the &ldquo;Save changes&rdquo; button.</li>
        </ol>
      </>
    ),
  },
];

function GreenDots() {
  return (
    <span aria-hidden className="inline-flex items-center gap-0.75">
      <span className="block size-1.25 rounded-full bg-quantum-green" />
      <span className="block size-1.25 rounded-full bg-quantum-green" />
      <span className="block size-1.25 rounded-full bg-quantum-green" />
    </span>
  );
}

function FaqList({
  items,
  openId,
  onToggle,
}: {
  items: Faq[];
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((f) => {
        const open = openId === f.id;
        return (
          <li key={f.id}>
            <button
              type="button"
              onClick={() => onToggle(f.id)}
              aria-expanded={open}
              aria-controls={`${f.id}-panel`}
              className="flex w-full items-center justify-between gap-6 rounded-[9px] bg-linear-to-r from-[#f2f6f7] via-white to-[#f2f6f7] px-7 py-3 text-left transition-shadow hover:shadow-sm"
            >
              <span className="text-quantum-green text-[21px] font-normal leading-7.5">
                {f.question}
              </span>
              <span
                aria-hidden
                className={`flex shrink-0 items-center gap-0.75 transition-transform ${
                  open ? "rotate-90" : ""
                }`}
              >
                <span className="block size-1.25 rounded-full bg-quantum-green" />
                <span className="block size-1.25 rounded-full bg-quantum-green" />
                <span className="block size-1.25 rounded-full bg-quantum-green" />
              </span>
            </button>

            {open && (
              <div
                id={`${f.id}-panel`}
                className="mt-2 rounded-[9px] bg-white px-7 py-5 text-[15px] leading-6 text-steel-gray shadow-sm"
              >
                {f.answer}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function FaqIronCapInTouchPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const handleToggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="bg-white font-urbanist">
      <Title />

      {/* ─── Body (full-width single column) ─── */}
      <div className="mx-auto w-full max-w-322.5 px-6 py-16 lg:px-9">
        {/* Section 1 heading */}
        <h2 className="text-quantum-blue text-[30px] font-medium leading-11.5">
          IronCAP
          <Trademark /> InTouch FAQs
        </h2>
        <div className="mt-2 h-px w-full bg-lite-gray/40" />

        <div className="mt-8">
          <FaqList
            items={generalFaqs}
            openId={openId}
            onToggle={handleToggle}
          />
        </div>

        {/* Section 2 heading */}
        <h2 className="mt-16 text-quantum-blue text-[30px] font-medium leading-11.5">
          Remote Wake-Up Feature
        </h2>
        <div className="mt-2 h-px w-full bg-lite-gray/40" />

        <div className="mt-8">
          <FaqList items={wakeUpFaqs} openId={openId} onToggle={handleToggle} />
        </div>

        {/* Learn-more pill button */}
        <section className="bg-white py-16 flex justify-center">
          <Button
            text=" LEARN MORE ABOUT 01 QUANTUM PRODUCTS"
            url="/products/ironcap-engine"
            border="border-quantum-green/60"
            textColor="text-quantum-green"
            hoverBg="hover:bg-quantum-green/10"
          />
        </section>
      </div>
    </div>
  );
}
