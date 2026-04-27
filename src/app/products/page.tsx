import { Button } from "@/components/ui/button";
export default function Products() {
  return (
    <main
      className="font-[family-name:var(--font-urbanist)]"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* header */}
      <section className="bg-black h-40 min-h-30 flex justify-start items-center px-24">
        <h1 className="text-white text-[40px] font-medium">Products</h1>
      </section>
      {/* Seccion de icon cap */}
      <section className="bg-white py-20 px-18 flex gap-12">
        <div className="flex flex-col gap-6 max-w-3xl">
          {/* logo */}
          <img src="/product_assets/ironCAP_logo.svg" className="w-80" alt="" />
          {/* parrafos de texto */}
          <div>
            <p className="text-lg text-gray-600 mb-1 text-left max-w-2xl">
              <span className="text-sky">IronCAP™ </span> Engine is post-quantum
              cryptography (PQC) built to protect against today&apos;s
              threats—and tomorrow&apos;s quantum-enabled attacks.
            </p>
            <p className="text-lg text-gray-600 mb-1 text-left max-w-2xl">
              <span className="text-sky">IronCAP™ </span> Toolkits combine
              NIST-approved PQC algorithms with our patent-protected
              quantum-safe technologies, enabling secure integration across
              virtually any environment. Designed for broad adoption across
              verticals, they support use cases including AI, digital assets,
              email security, remote access, digital identity, cloud storage,
              IoT, blockchain, and financial transactions—and any system or data
              that demands quantum-resistant protection.
            </p>

            <p className="text-lg text-gray-600 mb-1 text-left max-w-2xl">
              <span className="text-sky">IronCAP™ </span> Cryptography (ICC) is
              the core cryptographic suite within the{" "}
              <span className="text-sky">IronCAP™ </span> Toolkits. It includes
              NIST algorithms plus our patented, high-performance implementation
              of Classic McEliece, engineered for large-scale deployments (U.S.
              Patent No. 11,271,715).
              <span className="text-sky">IronCAP™ </span> actively monitors PQC
              standardization progress at the National Institute of Standards
              and Technology (NIST) via the Computer Security Resource Center
              (CSRC) and is continuously updated to remain aligned with the
              latest developments.
            </p>
          </div>
          <div>
            <Button
              text="white paper · · ·"
              url="/products/ironcap"
              border="border-gray-200"
              textColor="text-green-400"
              hoverBg="hover:bg-green-500/10"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-green-400 text-[40px] font-medium">
              IronCAP included PQC technologies from NIST
            </h1>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <h4 className="text-blue-300">Digital signature mechanisms</h4>
                <p>ML-DSA (FIPS 204)</p>
                <p>SLH-DSA (FIPS 205)</p>
                <p>Falcon2</p>
              </div>
              <div className="flex flex-col">
                <h4 className="text-blue-300">
                  Key encapsulation mechanisms (KEM)
                </h4>
                <p>ML-KEM (FIPS 203)</p>
                <p>Classic McEliece3</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Read more on quantum... */}
      <section
        className="flex justify-center items-center px-24 py-20"
        style={{ backgroundColor: "#F2F6F7", minHeight: "14rem" }}>
        <div className="flex items-center gap-8">
          <img src="/product_assets/sword.svg" className="w-20" alt="" />
          <div>
            <p className="text-[#abacac] text-[21px] font-normal leading-[30px] mb-6 max-w-[928px]">
              Like most adversaries, quantum attacks will occur when we are
              least prepared. Armed with IronCAP™ solutions and services,
              customers today are safeguarding data and guarding against any
              unexpected quantum attacks in the future.
            </p>
            <span className="text-[#abacac] text-[14px] font-normal">
              READ MORE ON QUANTUM THREAT . . .
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
