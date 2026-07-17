import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Use | 01 Quantum",
  description:
    "Terms of Use information for 01 Quantum remote access services.",
};

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      intro={
        <>
          <p>
            The I&apos;m InTouch, I&apos;m OnCall, and I&apos;m InTouch Meeting
            remote access services are subject to the current Terms of Service.
          </p>
          <div className="pt-2">
            <Button
              text="Terms of Service PDF"
              url="https://www.01com.com/pdf/Terms_of_Service.pdf"
              border="border-steel-gray"
              textColor="text-quantum-green"
              hoverBg="hover:bg-quantum-green/10"
              isBlank="true"
            />
          </div>
        </>
      }
    >
      <LegalSection title="Service Subscriptions">
        <p>
          To continue using the I&apos;m InTouch, I&apos;m OnCall, or I&apos;m
          InTouch Meeting remote access service after the free trial period, you
          must subscribe to the service.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            Login to your online account at{" "}
            <a
              href="https://www.imintouch.com"
              className="text-quantum-blue transition-colors hover:text-quantum-green"
            >
              www.imintouch.com
            </a>
            ,{" "}
            <a
              href="https://www.imoncall.com"
              className="text-quantum-blue transition-colors hover:text-quantum-green"
            >
              www.imoncall.com
            </a>
            , or{" "}
            <a
              href="https://www.imintouchmeeting.com"
              className="text-quantum-blue transition-colors hover:text-quantum-green"
            >
              www.imintouchmeeting.com
            </a>
            .
          </li>
          <li>Click the Subscribe Now link to reach the billing page.</li>
          <li>
            To keep the same amount of licenses used during the trial, enter
            your credit card information and press I Accept to proceed with the
            purchase. Otherwise, use the Licenses tab to change the number of
            licenses to purchase, then continue.
          </li>
          <li>Follow the on-screen instructions to complete the transaction.</li>
        </ol>
      </LegalSection>

      <LegalSection title="Technical Support">
        <p>
          01 Communique provides free technical support for trial accounts via
          email at{" "}
          <a
            href="mailto:help@01com.com"
            className="text-quantum-blue transition-colors hover:text-quantum-green"
          >
            help@01com.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
