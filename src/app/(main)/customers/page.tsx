import { Titles } from "@/components/Titles";
import { Button } from "@/components/ui/button";
import { Bottom } from "@/components/resources/Bottom"

export const Heading = ({ text }: { text: string }) => (
  <section className="bg-gradient-to-l from-[#f2f6f7] via-white to-[#f2f6f7] py-7">
    <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
      <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
        {text}
      </h2>
    </div>
  </section>
);

export default function CustomersPage() {
  return (
    <div>
      {/* ─── Page Title ─── */}
      <Titles text="Customers" />
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          <p className="text-steel-gray text-[15px] leading-[24px]">
            01 Quantum offers its customers an integrated suite of
            secure, zero-trust remote access services and products.
          </p>
        </div>
      </section>
      <Heading text="Financial" />
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                AML Ring Detection
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                High absolute cost, but allows banks to collaborate without a
                central &quot;trusted&quot; party—saving billions in potential regulatory
                fines.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Market Risk (Beta) Modeling
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Lowest overhead for simple regression. Real-time recalculations
                remain affordable at a ~20% &quot;privacy tax&quot;.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Bank Stress Testing
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Lower throughput needs (weekly audits) justify the high compute
                cost to ensure total, mathematical data sovereignty.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Credit Scoring
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Minimal impact on user experience (latency) and infrastructure
                costs; highly scalable for retail banking applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Heading text="Government" />
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Security Clearance Vetting
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Allows for the cross-referencing of ultra-sensitive
                files (criminal, financial, mental health) without raw data ever
                being decrypted in the cloud, ensuring maximum privacy for
                high-clearance candidates.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Automated Border Control
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Visa and entry decisions require sub-100ms response times.
                Trusted Execution Environments (TEEs) allow complex logic rules
                to run securely at the edge without the high latency of Fully
                Homomorphic Encryption (FHE).
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Tax Evasion Scoring
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Agencies can run scoring models across private financial records
                from multiple banks/entities. The high cost is justified by the
                &quot;Zero-Trust&quot; math required for legal compliance and data
                sovereignty.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Cross-Agency Scoring{" "}
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Critical for disaster response or resource allocation (e.g.,
                healthcare supplies). Near-native speed (~40ms) ensures that
                stockpile levels are shared securely and updated in real-time
                during emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Heading text="Defense" />
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Satellite Imagery Analysis
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Near-native speed is critical for real-time detection. The 40%
                cost premium is a standard budget for mission-critical defense.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Intel Synthesis (LLM) 
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Resource-heavy Transformers are prohibitively expensive on Fully
                Homomorphic Encryption (FHE); Trusted Execution Environments
                (TEEs) offer the only viable path to secure high-performance
                LLMs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Network Intrusion (IDS)
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Packet classification requires massive scale; Trusted Execution
                Environment (TEE) overhead stays manageable at ~17% to 40%
                higher CPU utilization.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Biometric Spoof Detection
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Sub-100-ms response is required for frictionless border control.
                Trusted Execution Environments (TEEs) provide this at a low
                multiple of baseline cost.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Field Report Triage
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                Efficient local processing on edge devices where specialized
                Fully Homomorphic Encryption (FHE)-GPU hardware is too heavy or
                power-hungry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Heading text="Artificial Intelligence (AI) Integrators" />
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-quantum-green mb-2">
                Artificial Intelligence (AI) Integrators
              </h3>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                System Integrators (SI)
              </p>
              <p className="text-steel-gray text-[15px] leading-[24px]">
                We offer a flexible, cost-effective licensing program with
                dedicated sales support. The flexibility of bundling our products
                with your product suites to deliver a total solution for your
                customers is one of the many benefits of our SI program.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white flex justify-center">
        <Bottom/>
      </section>
    </div>
  );
}
