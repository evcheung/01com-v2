import { Button } from "@/components/ui/button";

export default function QuantumThreat() {
  return (
    <main>
      {/* Page title */}
      <section className="bg-black flex items-center px-24 min-h-[196px]">
        <h1 className="text-white text-[50px] font-medium leading-[50px]">
          Quantum-safe Cryptography
        </h1>
      </section>
      <section className="bg-black flex flex-col items-center px-24 pt-18">
        <div className="max-w-[1512px] mx-auto">
          <div className="flex mb-10 items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-quantum-blue text-[30px] font-medium leading-[30px] mb-4">
                Quantum Attack
              </h2>
              <p>
                Quantum computing introduces a credible, long-term threat to
                today’s public-key encryption—especially RSA and elliptic-curve
                cryptography (ECC), which underpin many secure communication
                systems. A key driver is **Shor’s Algorithm (1994)**, which
                showed that sufficiently powerful quantum computers could factor
                large numbers and solve discrete logarithms dramatically faster
                than classical methods.
              </p>
              <p>
                If large-scale, fault-tolerant cryptographically relevant
                quantum computers (CRQCs) become practical, they could
                compromise RSA and ECC, weakening the security foundations of
                modern digital trust.
              </p>
            </div>
            <img
              src="/quantum_assets/img.png"
              alt=""
              className="opacity-90 h-90 [mask-image:radial-gradient(ellipse_60%_70%_at_60%_50%,black_40%,transparent_80%)]"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-quantum-blue text-[30px] font-medium leading-[30px] mb-4">
              Post-Quantum Cryptography (PQC)
            </h2>
            <p>
              The industry response is post‑quantum cryptography (PQC): new,
              quantum‑resistant algorithms designed to remain secure even in the
              presence of CRQCs. This transition is already underway across
              government and enterprise security programs.
            </p>
            <p>
              In the United States, NIST has led global PQC standardization
              efforts since 2016, establishing a rigorous, widely adopted path
              to quantum‑safe cryptography. Our IronCAP™ Engine supports
              NIST‑endorsed PQC algorithms—plus additional quantum‑resistant
              options—to help organizations modernize encryption with
              confidence.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center py-16">
              <Button
                text="LEARN MORE ABOUT 01 QUANTUM PRODUCTS · · ·"
                url="/buy"
                border="border-quantum-green"
                textColor="text-quantum-green"
                hoverBg="hover:bg-quantum-green/10"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
