import { Button } from "@/components/ui/button";
import LottiePlayer from "@/components/LottiePlayer";
import Image from "next/image";
import animation1 from "@/assets/animations/shieldAnimation.json"
const strengths = [
  {
    icon: "/product_assets/standard_compliant.svg",
    name: "Standard Compliant",
    description:
      "Protection with state-of-the-art cryptographic technologies standardized through the rigorous selection process by NIST. Readily integrate through standard interfaces such as PKCS#11 and OpenPGP (RFC4880).",
  },
  {
    icon: "/product_assets/versatile.svg",
    name: "Versatile",
    description:
      "Broadly applicable to a cross-platform of vertical applications such as, but not limited to, Email encryption, File encryption, Digital signature, Blockchain security, Remote access / VPN, Cloud storage, Credit card security, General Internet communication security, etc. Available with OpenSSL support.",
  },
  {
    icon: "/product_assets/credible.svg",
    name: "Credible",
    description:
      "Elevate from today's proven best-in-class code-base cryptography theory and NIST-selected mechanisms.",
  },
  {
    icon: "/product_assets/efficient.svg",
    name: "Efficient",
    description:
      "Quick and efficient encryption/decryption/key-generation processes. Our implementation takes advantage of the Advanced Vector Extensions 2 (AVX2) capability of most modern CPU to ensure the highest possible throughput.",
  },
  {
    icon: "/product_assets/quantum_safe.svg",
    name: "Quantum Safe",
    description: "Guard against future attacks from quantum computers.",
  },
  {
    icon: "/product_assets/practical.svg",
    name: "Practical",
    description:
      "Applicable in today's conventional devices while safe against future quantum computers.",
  },
];

export default function Products() {
  return (
    <main>
      {/* Page title */}
      <section className="bg-black flex items-center px-24 min-h-[196px]">
        <h1 className="text-white text-[50px] font-medium leading-[50px]">
          Products
        </h1>
      </section>

      {/* IronCAP section */}

      <section className="bg-white flex justify-center">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-12 md:py-20">
          {/* Left column */}
          <div className="flex flex-col gap-16 flex-1">
            <Image
              width={400}
              height={100}
              src="/product_assets/IronCAP_logo.svg"
              className="w-100"
              alt="IronCAP"
            />

            <div className="flex flex-col gap-[7px] text-[15px] leading-[24px]">
              <p className="text-steel-gray">
                <span className="text-quantum-blue font-normal">
                  IronCAP™ Engine{" "}
                </span>
                is post-quantum cryptography (PQC) built to protect against
                today&apos;s threats—and tomorrow&apos;s quantum-enabled
                attacks.
              </p>
              <p className="text-steel-gray">
                <span className="text-quantum-blue font-normal">
                  IronCAP™ Toolkits{" "}
                </span>
                combine NIST-approved PQC algorithms with our patent-protected
                quantum-safe technologies, enabling secure integration across
                virtually any environment. Designed for broad adoption across
                verticals, they support use cases including AI, digital assets,
                email security, remote access, digital identity, cloud storage,
                IoT, blockchain, and financial transactions—and any system or
                data that demands quantum-resistant protection.
              </p>
              <p className="text-steel-gray">
                <span className="text-quantum-blue font-normal">
                  IronCAP™ Cryptography (ICC)
                </span>{" "}
                is the core cryptographic suite within the IronCAP™ Toolkits. It
                includes NIST algorithms plus our patented, high-performance
                implementation of Classic McEliece, engineered for large-scale
                deployments (U.S. Patent No. 11,271,715). IronCAP™ actively
                monitors PQC standardization progress at the National Institute
                of Standards and Technology (NIST) via the Computer Security
                Resource Center (CSRC) and is continuously updated to remain
                aligned with the latest developments.
              </p>
            </div>

            <div>
              <Button
                text="white paper · · ·"
                url="/products/ironcap"
                border="border-steel-gray"
                textColor="text-quantum-green"
                hoverBg="hover:bg-quantum-green/10"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-center flex-1">
            <LottiePlayer
              src={animation1}
              className="aspect-square w-60"
            />
            <h2 className="text-quantum-green text-[30px] font-medium leading-[46px] mt-4 max-w-[476px]">
              IronCAP™ included PQC technologies from NIST
            </h2>
            <div className="flex gap-12 mt-3">
              <div className="flex flex-col gap-[7px]">
                <h4 className="text-quantum-blue text-[15px] font-bold leading-[24px]">
                  Digital signature mechanisms
                </h4>
                <p className="text-steel-gray text-[15px] font-medium leading-[24px]">
                  ML-DSA (FIPS 204)
                </p>
                <p className="text-steel-gray text-[15px] font-medium leading-[24px]">
                  SLH-DSA (FIPS 205)
                </p>
                <p className="text-steel-gray text-[15px] font-medium leading-[24px]">
                  Falcon2
                </p>
              </div>
              <div className="flex flex-col gap-[7px]">
                <h4 className="text-quantum-blue text-[15px] font-bold leading-[24px]">
                  Key encapsulation mechanisms (KEM)
                </h4>
                <p className="text-steel-gray text-[15px] font-medium leading-[24px]">
                  ML-KEM (FIPS 203)
                </p>
                <p className="text-steel-gray text-[15px] font-medium leading-[24px]">
                  Classic McEliece3
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum threat callout */}
      <section
        className="flex justify-center items-center py-12 md:py-20 px-6 md:px-12 min-h-[408px]"
        style={{
          background:
            "linear-gradient(to right, #f2f6f7 11%, white 54%, #f2f6f7 89%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 md:px-20 max-w-[1000px] items-center">
          <Image
            width={64}
            height={64}
            src="/product_assets/sword.svg"
            className="w-16 md:w-20 flex-shrink-0 mx-auto md:mx-0"
            alt=""
          />
          <div className="flex flex-col gap-4">
            <p className="text-lite-gray text-lg md:text-[21px] font-normal leading-[28px] md:leading-[30px] max-w-[928px]">
              Like most adversaries, quantum attacks will occur when we are
              least prepared. Armed with IronCAP™ solutions and services,
              customers today are safeguarding data and guarding against any
              unexpected quantum attacks in the future.
            </p>
            <span className="text-lite-gray text-[14px] font-normal uppercase tracking-wide">
              Read more on quantum threat . . .
            </span>
          </div>
        </div>
      </section>

      {/* Unique Strengths */}
      <section
        className="py-20 px-24 max-w-[1512px] mx-auto"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-quantum-blue text-[30px] font-medium leading-[46px] mb-10">
          Unique Strengths
        </h2>

        <div className=" px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {strengths.map((item, i) => (
            <div
              key={item.name}
              className={[
                "flex gap-4 py-10",
                i % 2 === 0 ? "pr-16" : "pl-16 border-l border-white/10",
                i >= 2 ? "border-t border-white/10" : "",
              ].join(" ")}
            >
              <Image
                width={32}
                height={32}
                src={item.icon}
                alt=""
                className="w-8 h-8 flex-shrink-0 mt-1"
              />
              <div className="flex flex-col gap-[7px]">
                <p className="text-quantum-green text-[18px] font-semibold leading-[20px] uppercase">
                  {item.name}
                </p>
                <p className="text-white text-[15px] font-normal leading-[24px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex justify-center gap-8 mt-16">
          <Button
            text="brochure · · ·"
            url="/brochure"
            border="border-quantum-green"
            textColor="text-quantum-green"
            hoverBg="hover:bg-quantum-green/10"
          />
          <Button
            text="step into the future, buy IronCAP™ now · · ·"
            url="/buy"
            border="border-quantum-green"
            textColor="text-quantum-green"
            hoverBg="hover:bg-quantum-green/10"
          />
        </div>
      </section>
    </main>
  );
}
