import { ServiceIntro } from "@/components/services/ServiceIntro";
import { KeyAdvantages } from "@/components/services/KeyAdvantages";
import { CalloutBox } from "@/components/services/CalloutBox";
import { ProvenInMarket } from "@/components/services/ProvenInMarket";
import { Button } from "@/components/ui/button";

const Trademark = () => <sup className="text-[0.55em]">™</sup>;

// ─── QAW (IronCAP Quantum AI Wrapper) ────────────────────────────────────
const qawAdvantages = [
  {
    title: "Seamless Open Source Integration",
    description:
      "QAW is built for transparency and auditability. It integrates proven open-source artifacts—including ZAMA, Concrete-ML, FHE-Studio (Pythonic circuit development)—so your security stack stays flexible, reviewable, and free from vendor lock-in.",
    icon: "/service_assets/a_1.svg",
  },
  {
    title: "Hybrid FHE Optimizations",
    description:
      "FHE is often labeled “too slow” for real workloads. QAW makes it practical by applying targeted FHE optimizations to critical computations and leveraging acceleration (GPU, TEE) where appropriate—delivering near-real-time outcomes.",
    extra: (
      <div className="text-quantum-green text-[14px] leading-[22px] font-medium">
        <p>FHE Payment Authorization ~10ms latency</p>
        <p>Corporate Copilots ~200ms latency</p>
      </div>
    ),
    icon: "/service_assets/a_2.svg",
  },
  {
    title: "Rigorous Testing + Verification",
    description:
      "Security is only credible when it is validated. QAW includes disciplined testing and verification to ensure cryptographic circuits are optimized for your specific expert AI tasks. Every encrypted model is validated against its cleartext equivalent to confirm accuracy and response quality remain within defined tolerances.",
    icon: "/service_assets/a_4.svg",
  },
  {
    title: "Managed Services + Remote Monitoring",
    description:
      "For organizations that require continuous assurance, 01 Quantum offers a managed operating model. We remotely monitor and manage FHE-enabled AI deployments and supporting post-quantum (PQ) key infrastructure—on-prem or in the cloud—so AI services remain secure, stable, and available 24/7.",
    icon: "/service_assets/a_3.svg",
  },
  {
    title: "Ongoing Support + Training",
    description:
      "FHE and post-quantum migration require specialized expertise. We provide tailored training and continuous support so your team can operate “wrapped” (encrypted) AI with confidence—and align with emerging governance frameworks, including NIST AI RMF and ISO/IEC 42001.",
    icon: "/service_assets/p_4.svg",
  },
];

// ─── Digital Asset Protection ────────────────────────────────────────────
const digitalAssetAdvantages = [
  {
    title: "Open Source Integration + Interoperability",
    description:
      "Our approach is integration-first. QCW/QDW and our Layer 1 Migration Toolkit are designed to fit leading ecosystems including Ethereum, Solana, and Hyperliquid—using open protocols and algorithms to remain transparent, auditable, and developer-ready.",
    icon: "/service_assets/p_1.svg",
  },
  {
    title: "Phased Testing + Verification",
    description:
      "Quantum-era security requires precision and discipline. Our production-ready framework includes:",
    extra: (
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-quantum-green text-[16px] font-semibold leading-tight">
            Rigorous Audits
          </p>
          <p className="text-steel-gray text-[15px] leading-[22px]">
            Cryptographic verification so PQC signatures meet enterprise and
            government standards
          </p>
        </div>
        <div>
          <p className="text-quantum-green text-[16px] font-semibold leading-tight">
            Phased Deployment
          </p>
          <p className="text-steel-gray text-[15px] leading-[22px]">
            A guided 3-phase rollout—from Quantum-Sig smart contract wallets to
            full protocol-level activation
          </p>
        </div>
      </div>
    ),
    icon: "/service_assets/p_2.svg",
  },
  {
    title: "Managed Security + Remote Monitoring",
    description:
      "For high-assurance environments, we provide a Managed Digital Asset Service. We monitor smart contracts and PQ key infrastructure (on-prem or cloud) with daily health checks and real-time alerts—reducing exposure to long-term threats posed by cryptographic weaknesses as quantum capability scales.",
    icon: "/service_assets/p_3.svg",
  },
  {
    title: "On-going Support and Training",
    description:
      "Transitioning to quantum-resilient digital assets is a strategic program, not a patch. We provide expert-led training and ongoing support to balance cryptographic performance requirements with ecosystem constraints—so your assets are prepared for Q-Day and beyond.",
    icon: "/service_assets/p_4.svg",
  },
];

// ─── Open Source Cryptographic Integration Services ──────────────────────
const cryptoIntegrationAdvantages = [
  {
    title: "Hybrid Cryptographic Implementations",
    description:
      "We implement hybrid deployments that combine classical algorithms with PQC—maintaining current compliance while adding quantum resistance through a safe, incremental migration path.",
    icon: "/service_assets/b_2.svg",
  },
  {
    title: "Open Source Integration + Custom Circuitry",
    description:
      "We leverage leading open-source libraries and tools to build transparent, auditable security layers—and integrate them into your existing IDE and CI/CD pipelines to keep every release cryptographically sound.",
    icon: "/service_assets/b_1.svg",
  },
  {
    title: "Testing, Verification + Performance Tuning",
    description:
      "PQC can change latency and packet size. We test, verify, and tune implementations to preserve user experience while meeting enterprise benchmarks—aligned with frameworks including NIST CSF 2.0 and ISO 27002 / 62443.",
    icon: "/service_assets/b_3.svg",
  },
  {
    title: "Strategic Support + Training",
    description:
      "Cryptographic agility is an ongoing capability. We train and support your teams across PQC primitives—from signature schemes to KEMs—so you can operate confidently today and stay ready for Q-Day.",
    icon: "/service_assets/p_4.svg",
  },
];

export default function Services() {
  return (
    <main>
      {/* ─── Page Title ────────────────────────────────────────── */}
      <section className="bg-black flex items-center px-6 md:px-24 min-h-[196px]">
        <h1 className="text-white text-[32px] md:text-[50px] font-medium leading-[50px]">
          Services
        </h1>
      </section>

      {/* ─── 1. IronCAP Quantum AI Wrapper (QAW) ───────────────── */}
      <ServiceIntro
        id="qaw"
        animation={require("@/assets/animations/iconDark-IC-QuantumAIW.json")}
        heading={
          <>
            IronCAP
            <Trademark /> Quantum AI Wrapper (QAW)
          </>
        }
        body={
          <>
            <p>
              IronCAP
              <Trademark /> QAW is 01 Quantum&rsquo;s security architecture for
              deploying high-performance AI with hard security and privacy by
              design. It enables computation on encrypted data using a fully
              software-based Fully Homomorphic Encryption (FHE) approach—or a
              hybrid model that combines FHE with Trusted Execution Environments
              (TEEs) (hardware enclaves) to keep data protected throughout
              processing.
            </p>
            <p>
              For both software and hybrid deployments, QAW strengthens the most
              sensitive layer—key management—with post-quantum key generation
              and exchange, ensuring long-term resilience.
            </p>
          </>
        }
      />

      <KeyAdvantages items={[...qawAdvantages]} />

      {/* ─── 2. Digital Asset Protection ───────────────────────── */}
      <ServiceIntro
        id="digital-asset"
        animation={require("@/assets/animations/iconDark-IC-DAPS.json")}
        topDivider
        heading={
          <>
            Digital Asset Protection Services - Securing the Future of
            Blockchains
          </>
        }
        body={
          <>
            <p>
              01 Quantum&rsquo;s digital asset security framework is built on
              two core technologies designed to bridge today&rsquo;s Web3
              infrastructure to the post-quantum era—without breaking existing
              ecosystems.
            </p>
            <div className="mt-3">
              <p className="text-quantum-green text-[16px] font-semibold leading-tight uppercase tracking-wide">
                QCW (Quantum Crypto Wrapper)
              </p>
              <p className="text-quantum-blue text-[16px] font-medium leading-tight mt-1">
                On-chain proofs on post-quantum signatures
              </p>
              <p className="mt-2">
                By combining Zero-Knowledge Proofs (ZKPs) with our NIST-endorsed
                IronCAP
                <Trademark /> cryptographic engine, QCW enables compact,
                high-performance verification of quantum-resistant transactions.
                This allows organizations to secure assets minted on legacy
                chains while maintaining on-chain efficiency and
                interoperability.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-quantum-green text-[16px] font-semibold leading-tight uppercase tracking-wide">
                QDW (Quantum DeFi Wrapper)
              </p>
              <p className="text-quantum-blue text-[16px] font-medium leading-tight mt-1">
                Smart contracts secured with quantum-safe signatures
              </p>
              <p className="mt-2">
                QDW functions as a quantum-safe circuit breaker for smart
                contract operations. Any transaction that cannot produce a valid
                PQC signature is halted—protecting Layer 1 assets even if
                traditional ECC security is compromised.
              </p>
            </div>
          </>
        }
      />

      <ProvenInMarket
        body={
          <>
            <p className="text-lg">
              In February 2026, 01 Quantum marked a major milestone with the
              successful launch of the $qONE token in collaboration with qLABS.
            </p>
            <p>
              Deployed using QCW and QDW on Hyperliquid&rsquo;s HyperEVM, the
              $qONE Token Generation Event (TGE) represents a foundational step
              in establishing the world&rsquo;s first Quantum-safe asset
              management utility, enabling users to &ldquo;quantum-lock&rdquo;
              digital assets on existing blockchains like Ethereum and Solana
              without the need for disruptive hard forks.
            </p>
            <p>
              qVault is a quantum-safe crypto vault that allows digital assets
              to perform a quantum lock so that the &ldquo;locked assets&rdquo;,
              while at-rest, will be safe against quantum attacks.
            </p>
          </>
        }
      />

      <KeyAdvantages items={digitalAssetAdvantages} />

      {/* ─── 3. Open Source Cryptographic Integration Services ── */}
      <ServiceIntro
        id="open-source-crypto"
        animation={require("@/assets/animations/iconDark-OSCIS.json")}
        topDivider
        heading={<>Open Source Cryptographic Integration Services</>}
        subheading="Apply certified, industry-standard algorithms and libraries"
        body={
          <p>
            01 Quantum delivers engineering services that move organizations
            from legacy cryptography to a modern quantum-safe posture. We
            integrate robust cryptographic standards into existing
            workflows—grounded in deep experience across classical cryptography
            (ECC/RSA) and Post-Quantum Cryptography (PQC), and proven through
            real product hardening.
          </p>
        }
      />

      <CalloutBox
        animation={require("@/assets/animations/OSCIS-spinner.json")}
        heading="Real-World Integration Experience"
        body={
          <p>
            We don&rsquo;t just recommend PQC—we deploy it in production. Our
            team has integrated NIST-endorsed PQ algorithms into mission-
            critical legacy environments to strengthen security without
            sacrificing usability.
          </p>
        }
        bullets={
          <>
            <p>
              <span className="text-quantum-blue font-semibold">
                IronCap
                <Trademark /> XMail (Secure Email)
              </span>{" "}
              <span className="text-lite-gray">
                End-to-end, quantum-resistant messaging to mitigate
                &ldquo;Harvest Now, Decrypt Later&rdquo; (HNDL) risk.
              </span>
            </p>
            <p>
              <span className="text-quantum-blue font-semibold">
                IronCAP
                <Trademark /> InTouch (Virtual Desktop):
              </span>{" "}
              <span className="text-lite-gray">
                Quantum-safe authentication and session protection for secure
                remote work.
              </span>
            </p>
          </>
        }
      />
      <div className="flex flex-col justify-center items-center bg-white pb-24">
        <KeyAdvantages items={cryptoIntegrationAdvantages} />
        <div>
          <Button
            text="LEARN MORE ABOUT 01 QUANTUM PRODUCTS · · ·"
            url="/buy"
            border="border-quantum-green"
            textColor="text-quantum-green"
            hoverBg="hover:bg-quantum-green/10"
          />
        </div>
      </div>
    </main>
  );
}
