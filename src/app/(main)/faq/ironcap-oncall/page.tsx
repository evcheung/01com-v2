"use client";

import Link from "next/link";
import { useState } from "react";
import { Title } from "@/components/faq/Title";
import { Button} from "@/components/ui/button";
const Trademark = () => <sup className="text-[0.55em]">™</sup>;

type Faq = { id: string; question: React.ReactNode; answer: React.ReactNode };

// ─── IronCAP™ OnCall FAQs ──────────────────────────────────────────────
const oncallFaqs: Faq[] = [
  {
    id: "what-is-oncall",
    question: (
      <>
        What is IronCAP<Trademark /> OnCall Remote Support Software?
      </>
    ),
    answer: (
      <>
        IronCAP<Trademark /> OnCall is a secure online help desk support
        application that auto configures a connection to your customer&apos;s
        PC or Mac, without any pre-installed software. Eliminate precious
        time spent on a support phone call or a premise visit, and dedicate
        more time to resolve your customer&apos;s technical issue quickly and
        efficiently with this computer remote support service.
      </>
    ),
  },
  {
    id: "how-does-it-work",
    question: (
      <>
        How does IronCAP<Trademark /> OnCall Help Desk Software work?
      </>
    ),
    answer: (
      <>
        <p>
          The IronCAP<Trademark /> OnCall help desk management solution gives
          you the ability to deliver online computer remote support services
          to your customers. Just as you would log on to your favorite
          website, you can securely connect to IronCAP<Trademark /> OnCall
          from anywhere and provide live computer support to new and existing
          customers. Built on a secure managed infrastructure, IronCAP
          <Trademark /> OnCall allows you to seamlessly control your
          customer&apos;s PC or Mac from anywhere, and hence provide
          cost-effective problem resolutions.
        </p>
        <ul className="mt-3 list-disc pl-6">
          <li>Login from your PC anywhere</li>
          <li>
            Request temporary on demand remote control of your customer&apos;s
            PC or Mac.
          </li>
          <li>
            Customer authorizes your access and downloads temporary remote
            access files.
          </li>
          <li>
            IronCAP<Trademark /> OnCall auto configures your remote access
            across the Internet and displays your customer&apos;s computer
            within seconds
          </li>
          <li>Remotely diagnose and resolve their issue.</li>
          <li>
            At the end of the session, temporary access files are removed
            from your customer&apos;s PC
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security-features",
    question: (
      <>
        What are the security features of IronCAP<Trademark /> OnCall?
      </>
    ),
    answer: (
      <ul className="list-disc pl-6">
        <li>Password protected system access</li>
        <li>
          256-bit SSL encryption used during system access and communications
          between the technician and customer computers
        </li>
        <li>
          Authorization required before technician&apos;s access is auto
          configured
        </li>
        <li>Customer ability to terminate session at any time</li>
        <li>
          Remote access connection automatically dismantled at the
          termination of a session to ensure technician cannot re-access
        </li>
        <li>No ports opened on the customer&apos;s network, firewall friendly</li>
      </ul>
    ),
  },
  {
    id: "system-requirements",
    question: (
      <>
        What are the system requirements for IronCAP<Trademark /> OnCall?
      </>
    ),
    answer: (
      <>
        <p>
          The IronCAP<Trademark /> OnCall service technology, hosted in a
          secure data center, does all the work for you and therefore
          requires no investment in hardware or programming, leaving you to
          focus on delivering your expertise in computer remote support
          services. Here are the requirements:
        </p>
        <p className="mt-3 font-medium text-steel-gray">Windows:</p>
        <p className="mt-1">Lorem Ipsum &ndash; need this copy</p>
        <p className="mt-3 font-medium text-steel-gray">Mac:</p>
        <p className="mt-1">Lorem Ipsum &hellip; need this copy</p>
      </>
    ),
  },
  {
    id: "subscribe",
    question: (
      <>
        How can I subscribe to IronCAP<Trademark /> OnCall during or after my
        trial period?
      </>
    ),
    answer: (
      <>
        <p>
          Simply follow these steps to subscribe online and create a billing
          account:
        </p>
        <ol className="mt-2 list-decimal pl-6">
          <li>
            Login to your IronCAP<Trademark /> OnCall account
          </li>
          <li>
            Click on the &ldquo;Subscribe Now!&rdquo; link and you will be
            redirected to the Billing page.
          </li>
          <li>
            If you want to keep the same amount of licenses you used during
            the trial, simply enter your credit card information, press
            &ldquo;I Accept&rdquo; to proceed with the purchase. Otherwise,
            click on the Licenses tab to change the number of licenses to
            purchase and then click on Continue.
          </li>
          <li>
            Follow the instructions shown on the screen to complete the
            transaction.
          </li>
        </ol>
        <p className="mt-3">
          Users can also purchase IronCAP<Trademark /> OnCall by contacting a
          sales representative by phone at 905-795-2888 or toll free at
          {" "}1-800-668-2185 or by e-mail at{" "}
          <a
            href="mailto:sales@01com.com"
            className="text-quantum-blue hover:underline"
          >
            sales@01com.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "cost",
    question: (
      <>
        How much does IronCAP<Trademark /> OnCall cost?
      </>
    ),
    answer: (
      <>
        <div className="overflow-x-auto">
          <table className="w-full max-w-180 border-collapse text-left text-[15px]">
            <thead>
              <tr className="border-b border-lite-gray/40">
                <th className="py-2 pr-4 font-medium text-steel-gray">
                  Number of Licenses
                </th>
                <th className="py-2 pr-4 font-medium text-steel-gray">
                  Monthly Cost
                </th>
                <th className="py-2 font-medium text-steel-gray">
                  Annual Cost
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-lite-gray/20">
                <td className="py-2 pr-4">1 &ndash; 2</td>
                <td className="py-2 pr-4">$29.95 USD</td>
                <td className="py-2">$299.95 USD</td>
              </tr>
              <tr className="border-b border-lite-gray/20">
                <td className="py-2 pr-4">3 &ndash; 5</td>
                <td className="py-2 pr-4">$29.95 USD</td>
                <td className="py-2">$270.00 USD</td>
              </tr>
              <tr className="border-b border-lite-gray/20">
                <td className="py-2 pr-4">6 &ndash; 10</td>
                <td className="py-2 pr-4">$29.95 USD</td>
                <td className="py-2">$250.00 USD</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">11+</td>
                <td className="py-2 pr-4">Call 1-800-668-2185</td>
                <td className="py-2">Call 1-800-668-2185</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          * Determined by the number of remote support software licenses that
          will be in use at the same time. For example, you have 5 help desk
          technicians. You know that no more than 3 will be using the IronCAP
          <Trademark /> OnCall Remote Support Software at the same time.
          Instead of buying 5 licenses, you can just buy 3 licenses.
        </p>
        <p className="mt-3 font-medium text-steel-gray">License includes:</p>
        <ul className="mt-1 list-disc pl-6">
          <li>Unlimited remote support sessions to your customers.</li>
          <li>No setup or installation fees.</li>
          <li>
            Technical support and upgrades included at no additional charge.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "benefit",
    question: (
      <>
        How can I benefit from using IronCAP<Trademark /> OnCall?
      </>
    ),
    answer: (
      <ul className="list-disc pl-6">
        <li>Resellers</li>
        <li>Software Vendors</li>
        <li>Internal Help Desks</li>
        <li>Support Organizations</li>
        <li>Managed Service Providers</li>
      </ul>
    ),
  },
  {
    id: "how-quickly",
    question: (
      <>
        How quickly can my company be up and running with IronCAP
        <Trademark /> OnCall?
      </>
    ),
    answer: (
      <>
        As IronCAP<Trademark /> OnCall is a managed service platform, you can
        be up and running within a few minutes of your first login. Just as
        you would log on to your favorite Web Site, you can securely connect
        to IronCAP<Trademark /> OnCall from anywhere and provide instant
        computer remote support services to new and existing customers. If
        you haven&apos;t already tried IronCAP<Trademark /> OnCall, start a
        free trial.
      </>
    ),
  },
  {
    id: "brand",
    question: (
      <>
        Can I brand the IronCAP<Trademark /> OnCall Help Desk Software with
        my own company logo?
      </>
    ),
    answer: (
      <>
        Yes, you can display your company logo on every page of IronCAP
        <Trademark /> OnCall to both your customers and technicians during a
        PC remote support session. Just upload your company logo to our
        servers and we will display it on all web pages. You can even add
        photos of your technicians if you want to personalize the support
        experience for your customers.
      </>
    ),
  },
  {
    id: "customer-data",
    question: <>Can anyone else see my customer data?</>,
    answer: (
      <>
        No. 01 Quantum is committed to keeping your customer records private
        and secure as part of our privacy policy. Of course, you are
        responsible for maintaining the confidentiality and security of your
        user registration and password.
      </>
    ),
  },
  {
    id: "export-data",
    question: <>How can I export/backup my customer data?</>,
    answer: (
      <>
        <p>
          To export or backup data, log into your IronCAP<Trademark /> OnCall
          system, and click the History tab. At the top right of your
          screen, there is an &ldquo;Export&rdquo; link. This link will
          export all data displayed on the page to a comma-delimited file
          format, also commonly known as CSV format, which can be viewed
          using an Excel spreadsheet or other application for data sorting.
        </p>
        <p className="mt-3">
          <span className="font-medium text-steel-gray">Important:</span>{" "}
          Please note that any information entered into your IronCAP
          <Trademark /> OnCall system will be stored for only ninety (90)
          days from the date of entry. We recommend you back up any data you
          require by exporting it to your local computer.
        </p>
      </>
    ),
  },
  {
    id: "release-license",
    question: (
      <>
        How can I release a help desk software license that is currently in
        use?
      </>
    ),
    answer: (
      <>
        <p>
          Login to your IronCAP<Trademark /> OnCall as Administrator and go
          to the Users tab. Then click on the user with the &ldquo;Logged
          in&rdquo; status and click on the &ldquo;Suspend&rdquo; button. The
          license will then be released, and the user suspended. You can
          reactivate the suspended user by clicking on the
          &ldquo;Activate&rdquo; button, without losing the license that you
          just released.
        </p>
        <p className="mt-3">
          <span className="font-medium text-steel-gray">Note:</span> The
          Administrator must logout and login back again in order to use the
          license just released.
        </p>
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

export default function FaqIronCapOnCallPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const handleToggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="bg-white font-urbanist">
      <Title />

      {/* ─── Body (full-width single column) ─── */}
      <div className="mx-auto w-full max-w-322.5 px-6 py-16 lg:px-9">
        <h2 className="text-quantum-blue text-[30px] font-medium leading-11.5">
          IronCAP<Trademark /> OnCall FAQs
        </h2>
        <div className="mt-2 h-px w-full bg-lite-gray/40" />

        <div className="mt-8">
          <FaqList
            items={oncallFaqs}
            openId={openId}
            onToggle={handleToggle}
          />
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
