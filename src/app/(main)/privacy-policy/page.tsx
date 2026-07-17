import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | 01 Quantum",
  description:
    "Privacy Policy information for 01 Quantum and 01 Communique services.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          As a global provider of remote access services and integrated
          communications software, 01 Communique respects your privacy and is
          committed to protecting the personal information you share with us.
          Outlined below is information about how we collect and use your
          personal information.
        </p>
      }
    >
      <LegalSection title="Personal Information 01 Communique May Ask For">
        <p>
          Personal information means any information that may be used to identify
          an individual, including but not limited to a first and last name,
          email address, telephone number, home, postal or other physical
          address, a valid credit card number to process payment for products or
          services, and other information when needed to provide a product or
          service you have requested from us.
        </p>
        <p>
          01 Communique may ask you to provide personal information by filling
          out and submitting an online form when you elect to use a free trial
          of our products and services, subscribe to a service, purchase product
          and have it shipped to you, or request a product or service upgrade.
        </p>
        <p>
          Some requested personal information is required or mandatory while
          other information is optional. It is your option whether to provide
          requested information, but if you do not provide mandatory information
          for a particular activity, we may not be able to fulfill your request.
        </p>
      </LegalSection>

      <LegalSection title="What We Do With Personal Information We Ask For">
        <p>
          01 Communique uses your personal information to deliver free trials,
          complete online service subscriptions, product purchases or upgrade
          requests, keep you up to date on product announcements, software
          updates, special offers or other information we feel may be of
          interest, and solicit your feedback about planned product changes or
          introductions.
        </p>
        <p>
          At all times, you have the option to request that 01 Communique
          unsubscribe you from the delivery of any future communications.
        </p>
        <p>
          Any information you provide to 01 is kept in strict confidence in
          secured databases that are not accessible outside of our offices.
          Physical, technical, and managerial procedures are used to safeguard
          the security and confidentiality of the data.
        </p>
        <p>
          The information you provide us is used for the purposes outlined above
          and is not solicited to parties outside of 01.
        </p>
        <p>
          On occasion, 01 will retain outside contractors to provide services
          for us. Contractors may be used to ship products, provide technical
          support, or handle order processing. We require that these contractors
          keep any personal information of customers we provide them secure and
          confidential. They are prohibited from using that information for any
          other purpose.
        </p>
        <p>
          In certain instances, 01 may be required to disclose your personal
          information to government officials or otherwise as required by law.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          The 01 Communique website may use cookies, small text files delivered
          to your browser to track your visits to our website. The information
          contained in a cookie can only be read by a 01 Communique web server
          and cannot be used to run programs or deliver viruses to your
          computer. A cookie functions as an identifier, but does not attach
          itself to or contain any personal data you may provide to 01.
        </p>
        <p>
          01 Communique&apos;s website uses cookies to track user traffic
          patterns so we can improve our navigational structure and better help
          users reach the information they require.
        </p>
        <p>
          Accepting a cookie from our site is optional. You can set your browser
          to accept cookies only upon notification or turn cookie use off
          entirely. Turning cookie use off entirely may affect access to non-01
          websites.
        </p>
      </LegalSection>

      <LegalSection title="Privacy Issues and Concerns">
        <p>
          If you have any questions or concerns regarding 01 Communique&apos;s
          online privacy policy, please contact us electronically or by mail.
        </p>
        <address className="not-italic text-steel-gray">
          01 Communique
          <br />
          Online Privacy
          <br />
          789 Don Mills Road
          <br />
          Suite 700
          <br />
          Toronto, ON
          <br />
          M3C 1T5
          <br />
          Canada
        </address>
      </LegalSection>
    </LegalPage>
  );
}
