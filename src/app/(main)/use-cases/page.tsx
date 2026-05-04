import { Button } from "@/components/ui/button";

/* ── Data ─────────────────────────────────────────────────────────── */
const ironcapProducts: { name: React.ReactNode; body: string }[] = [
  {
    name: (
      <>
        IronCAP<sup className="text-[9.675px]">™</sup> XMail
      </>
    ),
    body: "Protecting emailed information that has a sensitivity period extending beyond five years; therefore requiring quantum safety.",
  },
  {
    name: (
      <>
        IronCAP<sup className="text-[9.675px]">™</sup> InTouch
      </>
    ),
    body: "InTouch lets you work remotely by controlling your office computer as if you were physically there.",
  },
  {
    name: (
      <>
        IronCAP<sup className="text-[9.675px]">™</sup> OnCall
      </>
    ),
    body: "Customer support infrastructure with quantum-safe security.",
  },
];

const financeUseCases = [
  {
    label: "AML Ring Detection",
    body: "AI analyzes transaction networks to uncover hidden relationships and coordinated behaviors that indicate money laundering rings. Machine learning models continuously adapt to evolving tactics, improving detection accuracy while reducing false positives.",
  },
  {
    label: "Market Risk (Beta)",
    body: "AI models large volumes of market data to detect emerging risk signals, forecast volatility, and simulate stress scenarios. This enables faster, data-driven risk assessment and more dynamic portfolio management.",
  },
  {
    label: "Credit Scoring",
    body: "AI evaluates diverse financial and behavioral data to generate more predictive and inclusive credit risk assessments. Advanced models can improve accuracy while identifying subtle risk patterns traditional scoring methods may miss.",
  },
];

const governmentUseCases = [
  {
    label: "Security Clearance Vetting",
    body: "AI assists in reviewing large volumes of background data, flagging anomalies, inconsistencies, or risk indicators for human review. This accelerates vetting processes while improving thoroughness and consistency.",
  },
  {
    label: "Tax Fraud Detection",
    body: "AI identifies patterns in financial filings and transactional data that suggest potential fraud or underreporting. Predictive models help prioritize high-risk cases for audit and investigation.",
  },
  {
    label: "Logistics & Resource Allocation",
    body: "AI optimizes resource allocation and coordination across departments by analyzing supply, demand, and operational constraints. Predictive analytics improve planning efficiency and reduce bottlenecks during large-scale operations.",
  },
];

const defenseUseCases = [
  {
    label: "Satellite Imagery Analysis",
    body: "AI processes vast amounts of imagery to detect objects, movements, or changes of interest in near real time. Computer vision models enhance situational awareness and reduce analyst workload.",
  },
  {
    label: "Network Intrusion",
    body: "AI monitors network traffic to identify anomalous behavior that may indicate cyber threats or unauthorized access. Adaptive models can detect both known attack patterns and novel intrusion techniques.",
  },
  {
    label: "Field Report Triage",
    body: "AI analyzes incoming reports using natural language processing to prioritize critical information and identify emerging patterns. This enables faster decision-making and more efficient intelligence workflows.",
  },
];

const digitalAssetsUseCases = [
  {
    label: "Quantum-Safe Assets",
    body: "Locking: Users can “quantum-lock” existing tokens on existing blockchains like Ethereum or Solana to prevent assets from being lost in the event that the classic-encryption-based wallet (private key) is compromised.",
  },
  {
    label: "Network Intrusion",
    body: "A blockchain-based application with a fail-safe that required both a classic and quantum signature to execute, halting transactions if a valid post-quantum signature is missing, even if classical signature has been compromised.",
  },
];

/* ── Reusable bits ────────────────────────────────────────────────── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-l from-[#f2f6f7] via-white to-[#f2f6f7] py-7">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
        <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
          {children}
        </h2>
      </div>
    </div>
  );
}

function UseCaseRow({
  label,
  body,
  isLast = false,
}: {
  label: React.ReactNode;
  body: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-2 md:gap-8 py-6 ${
        isLast ? "" : "border-b border-[#dfe6ea]"
      }`}
    >
      <div className="md:w-[210px] md:shrink-0">
        <p className="text-steel-gray text-[15px] leading-[24px] font-medium">{label}</p>
      </div>
      <div className="flex-1">
        <p className="text-steel-gray text-[15px] leading-[24px]">{body}</p>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function UseCases() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ─── Page Title ─── */}
      <section className="bg-black flex items-center px-6 md:px-24 min-h-[196px]">
        <h1 className="text-white text-[32px] md:text-[50px] font-medium leading-[50px]">
          Use Cases
        </h1>
      </section>

      {/* ─── Performance / Intro ─── */}
      <section className="bg-black">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] pt-4 pb-16 flex flex-col gap-6">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px]">
            Performance
          </h2>
          <p className="text-white text-[15px] leading-[24px] max-w-[1255px]">
            01 Quantum portfolio of quantum-safe products and services is
            available for a variety of business verticals, including Financial
            Institutions, Government Sectors, Defense and AI Integrators. Below
            are sample use cases in selected sectors.
          </p>
          <p className="text-[#b6bbcd] text-[12px] font-medium uppercase leading-[24px]">
            To learn more about how 01 Quantum can work with your company,
            contact us here.
          </p>
        </div>
      </section>

      {/* ─── IronCAP™ Products ─── */}
      <SectionTitle>
        IronCAP<sup className="text-[11.61px]">™</sup>&nbsp;&nbsp;Products
      </SectionTitle>
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          {ironcapProducts.map((row, i) => (
            <UseCaseRow
              key={i}
              label={row.name}
              body={row.body}
              isLast={i === ironcapProducts.length - 1}
            />
          ))}
        </div>
      </section>

      {/* ─── IronCAP™ Services ─── */}
      <SectionTitle>
        IronCAP<sup className="text-[11.61px]">™</sup>&nbsp;&nbsp;Services
      </SectionTitle>
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10 flex flex-col gap-12">
          <h3 className="text-quantum-blue text-[20px] font-medium leading-[34px]">
            Quantum AI Wrapper
          </h3>

          {/* Finance */}
          <div>
            <h4 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-4">
              Finance
            </h4>
            {financeUseCases.map((row, i) => (
              <UseCaseRow
                key={i}
                label={row.label}
                body={row.body}
                isLast={i === financeUseCases.length - 1}
              />
            ))}
          </div>

          {/* Government — gradient background per design */}
          <div className="-mx-6 md:-mx-[95px] px-6 md:px-[95px] py-8 bg-gradient-to-l from-[#f2f6f7] via-white to-[#f2f6f7]">
            <h4 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-4">
              Government
            </h4>
            {governmentUseCases.map((row, i) => (
              <UseCaseRow
                key={i}
                label={row.label}
                body={row.body}
                isLast={i === governmentUseCases.length - 1}
              />
            ))}
          </div>

          {/* Defense */}
          <div>
            <h4 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-4">
              Defense
            </h4>
            {defenseUseCases.map((row, i) => (
              <UseCaseRow
                key={i}
                label={row.label}
                body={row.body}
                isLast={i === defenseUseCases.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Digital Assets Security Services ─── */}
      <SectionTitle>Digital Assets Security Services</SectionTitle>
      <section className="bg-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] py-10">
          {digitalAssetsUseCases.map((row, i) => (
            <UseCaseRow
              key={i}
              label={row.label}
              body={row.body}
              isLast={i === digitalAssetsUseCases.length - 1}
            />
          ))}
        </div>
      </section>

      {/* ─── Learn More CTA ─── */}
      <section className="bg-white py-16 flex justify-center">
        <Button
          text=" LEARN MORE ABOUT 01 QUANTUM PRODUCTS"
          url="/products/ironcap-engine"
          border="border-quantum-green/60"
          textColor="text-quantum-green"
          hoverBg="hover:bg-quantum-green/10"
        />
      </section>
    </main>
  );
}
