import { Titles } from "@/components/Titles";
import { Button } from "@/components/ui/button";

export const Heading = ({ text }: { text: string }) => (
  <section className="bg-gradient-to-r from-gray-200 via-white to-gray-200 py-8 px-12">
    <h2 className="text-[32px] leading-[40px] text-black text-quantum-blue font-medium">
      {text}
    </h2>
  </section>
);

export default function CustomersPage() {
  return (
    <div>
      {/* ─── Page Title ─── */}
      <Titles text="Customers" />
      <section className="bg-white flex items-center p-15 text-[20px] leading-[30px]">
        <p className="text-steel-gray">
          01 Quantum offers its customers an integrated suite of
          secure, zero-trust remote access services and products.
        </p>
      </section>
      <Heading text="Financial" />
      <section className="bg-white p-15">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              AML Ring Detection
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              High absolute cost, but allows banks to collaborate without a
              central "trusted" party—saving billions in potential regulatory
              fines.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Market Risk (Beta) Modeling
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Lowest overhead for simple regression. Real-time recalculations
              remain affordable at a ~20% "privacy tax".
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Bank Stress Testing
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Lower throughput needs (weekly audits) justify the high compute
              cost to ensure total, mathematical data sovereignty.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Credit Scoring
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Minimal impact on user experience (latency) and infrastructure
              costs; highly scalable for retail banking applications.
            </p>
          </div>
        </div>
      </section>
      <Heading text="Government" />
      <section className="bg-white p-15">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Security Clearance Vetting
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Allows for the cross-referencing of ultra-sensitive
              files(criminal, financial, mental health) without raw data ever
              being decrypted in the cloud, ensuring maximum privacy for
              high-clearance candidates.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Automated Border Control
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Visa and entry decisions require sub-100ms response times. TEEs
              allow complex logic rules to run securely at the edge without the
              high latency of FHE.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Tax Evasion Scoring
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Agencies can run scoring models across private financial records
              from multiple banks/entities. The high cost is justified by the
              "Zero-Trust" math required for legal compliance and data
              sovereignty.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Cross-Agency Scoring{" "}
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Critical for disaster response or resource allocation (e.g.,
              healthcare supplies). Near-native speed (~40ms) ensures that
              stockpile levels are shared securely and updated in real-time
              during emergencies.
            </p>
          </div>
        </div>
      </section>

      <Heading text="Defense" />
      <section className="bg-white p-15">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Satellite Imagery Analysis
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Near-native speed is critical for real-time detection. The 40%
              cost premium is a standard budget for mission-critical defense.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Intel Synthesis (LLM) 
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Resource-heavy Transformers are prohibitively expensive on FHE;
              TEEs offer the only viable path to secure high-performance LLMs.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Network Intrusion (IDS)
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Packet classification requires massive scale; TEE overhead stays
              manageable at ~17% to 40% higher CPU utilization.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Biometric Spoof Detection
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Sub-100-ms response is required for frictionless border control.
              TEEs provide this at a low multiple of baseline cost.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              Field Report Triage
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              Efficient local processing on edge devices where specialized
              FHE-GPU hardware is too heavy or power- hungry.
            </p>
          </div>
        </div>
      </section>

      <Heading text="IA Integrators" />
      <section className="bg-white flex p-15">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-quantum-green mb-2">
              AI Integrators
            </h3>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              System Integrators (SI)
            </p>
            <p className="text-steel-gray text-[20px] leading-[30px]">
              We offer a flexible, cost-effective licensing program with
              dedicated sales support. The flexibility of bundling our products
              with your product suites to deliver a total solution for your
              customers is one of the many benefits of our SI program.
            </p>
          </div>
        </div>
      </section>
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
  );
}
