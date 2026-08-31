import Image from "next/image";
import { Bottom } from "@/components/resources/Bottom"
const Trademark = () => <sup className="text-[0.55em]">™</sup>;

export default function QuantumThreat() {
  return (
    <main className="font-[family-name:var(--font-urbanist)]">
      {/* Page title */}
      <section className="bg-black flex items-center px-6 md:px-24 min-h-[196px]">
        <h1 className="text-white text-[28px] md:text-[50px] font-medium leading-[50px]">
          Quantum-safe Cryptography
        </h1>
      </section>

      <section className="bg-black px-6 md:px-24 pt-12 pb-16">
        <div className="max-w-[1512px] mx-auto">

          {/* Quantum Attack */}
          <div className="flex flex-col md:flex-row gap-10 items-center mb-14">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-quantum-blue text-[30px] font-medium leading-[30px] mb-2">
                Quantum Attack
              </h2>
              <p className="text-white/75 text-[15px] leading-[26px]">
                Quantum computing introduces a credible, long-term threat to
                today&apos;s public-key encryption—especially RSA and elliptic-curve
                cryptography (ECC), which underpin many secure communication
                systems. A key driver is{" "}
                <strong className="text-white font-semibold">Shor&apos;s Algorithm (1994)</strong>,
                which showed that sufficiently powerful quantum computers could
                factor large numbers and solve discrete logarithms dramatically
                faster than classical methods.
              </p>
              <p className="text-white/75 text-[15px] leading-[26px]">
                If large-scale, fault-tolerant cryptographically relevant
                quantum computers (CRQCs) become practical, they could
                compromise RSA and ECC, weakening the security foundations of
                modern digital trust.
              </p>
            </div>
            <Image
              src="/quantum_assets/img.png"
              alt=""
              className="opacity-90 h-90 [mask-image:radial-gradient(ellipse_60%_70%_at_60%_50%,black_40%,transparent_80%)]"
              width={360}
              height={360}
            />
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-14" />

          {/* Post-Quantum Cryptography */}
          <div className="flex flex-col gap-4 mb-16">
            <h2 className="text-quantum-blue text-[30px] font-medium leading-[30px] mb-2">
              Post-Quantum Cryptography (PQC)
            </h2>
            <p className="text-white/75 text-[15px] leading-[26px]">
              The industry response is post‑quantum cryptography (PQC): new,
              quantum‑resistant algorithms designed to remain secure even in the
              presence of CRQCs. This transition is already underway across
              government and enterprise security programs.
            </p>
            <p className="text-white/75 text-[15px] leading-[26px]">
              In the United States, NIST has led global PQC standardization
              efforts since 2016, establishing a rigorous, widely adopted path
              to quantum‑safe cryptography. Our IronCAP<Trademark /> Engine supports
              NIST‑endorsed PQC algorithms—plus additional quantum‑resistant
              options—to help organizations modernize encryption with
              confidence.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Bottom
              url="/products/ironcap-engine"
              isBlank="false"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
