import { Button } from "@/components/ui/button";
import { Leader } from "@/components/about/Leader";
import { Bottom } from "@/components/resources/Bottom"

const leaders = [
  {
    name: "Andrew Cheung",
    title: "President & CEO",
    bun: "bio",
    pic: "/about_assets/d.png",
    linkedIn: "https://www.linkedin.com/in/acheungquantum/",
  },
  {
    name: "Brian Stringer",
    title: "CFO",
    bun: "bio",
    pic: "/about_assets/g.png",
    linkedIn: "https://www.linkedin.com/in/brian-stringer-220b5323/",
  },
  {
    name: "William Train",
    title: "Chairman",
    bun: "bio",
    pic: "/about_assets/j.png",
    linkedIn: "https://www.linkedin.com/in/william-train-79840045/",
  },
  {
    name: "Tyson Macaulay",
    title: "Board Member + COO",
    bun: "bio",
    pic: "/about_assets/m.png",
    linkedIn: "https://www.linkedin.com/in/tysonmacaulay/",
  },
  {
    name: "Alex Shpruov",
    title: "CTO",
    bun: "bio",
    pic: "/about_assets/p.png",
    linkedIn: "https://www.linkedin.com/in/shpurov/",
  },
  {
    name: "Gary Kissack",
    title: "Board Member",
    bun: "bio",
    pic: "/about_assets/s.png",
    linkedIn: "https://www.linkedin.com/in/garykissack/",
  },
  {
    name: "Edoardo Persichetti",
    title: "PQC Advisor",
    bun: "bio",
    pic: "/about_assets/v.png",
    linkedIn: "https://www.linkedin.com/in/edoardo-persichetti-56a92a8b/",
  },
];
const Trademark = () => <sup className="text-[0.55em]">™</sup>;

export default function About() {
  return (
    <main>
      {/* Page title */}
      <section className="bg-black flex items-center px-6 md:px-24 min-h-[196px]">
        <h1 className="text-white text-[32px] md:text-[50px] font-medium leading-[50px]">
          About
        </h1>
      </section>
      <section className="bg-white flex flex-col items-center px-6 md:px-24 py-18">
        <div className="max-w-[1512px] mx-auto px-0 md:px-[95px] space-y-6">
          <p className="text-steel-gray text-[15px] leading-[24px]">
            <span className="text-quantum-blue font-normal">
              01 Quantum Inc.
            </span>
            , formerly 01 Communique Laboratory Inc., has developed advanced
            post‑quantum cryptographic (PQC) technology to protect digital
            systems against the growing threat of quantum computers. It’s
            patented IronCAP<Trademark /> and patent-pending technologies are designed to
            provide long‑term resilience against quantum‑enabled attacks. By
            integrating these technologies into applications such as AI
            platforms, remote access systems, email and digital‑asset platforms,
            the Company is delivering practical, quantum‑safe solutions that can
            be deployed today.
          </p>
          <p className="text-steel-gray text-[15px] leading-[24px]">
            Quantum computers have the potential to process information at
            exponentially faster rates than existing classical computers. This
            capability threatens current encryption methods, particularly public
            key encryption, as it could potentially render them insecure and
            vulnerable to hacking.
          </p>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            Q‑Day is the anticipated moment when quantum computers become
            powerful enough to break the public‑key cryptography systems that
            currently secure the world’s digital communications and data. In
            particular, it refers to the point at which quantum algorithms, most
            notably Shor’s algorithm, can efficiently crack widely used
            encryption schemes such as RSA, and elliptic‑curve cryptography
            (ECC).
          </p>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            In response to this emerging threat, the Company has made a
            significant investment in researching and developing disruptive
            cybersecurity technology. As a result, it has created and is
            commercializing products that incorporate its patented IronCAP<Trademark />
            technology.
          </p>
        </div>
      </section>

      {/* ─── Resources ─────────────────────────────────────────── */}
      <section className="bg-black py-20">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[30px] mb-14">
            Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Downloads */}
            <div className="bg-[#0d0d0d] border border-white/10 rounded-[20px] px-10 py-9">
              <h3 className="text-quantum-blue text-[22px] font-medium leading-tight mb-4">
                Downloads
              </h3>
              <div className="h-px bg-white/15 mb-6" />
              <ul className="flex flex-col gap-6">
                <li>
                  <a
                    href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.01com.com_01com_ironcap-2Dx_webhelp_index.htm-23t-3DIronCAP-5FX-252FWelcome-5Fto-5FIronCap-5FX.htm&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=ctOayCFZ7NMIbWoBte6i7Pv-QWrd2zJhnTfTraz35Cc&e="
                    className="text-quantum-green text-[15px] font-medium hover:text-quantum-blue transition-colors"
                  >
                    IronCAP<Trademark /> XMail
                  </a>
                  <p className="text-white/70 text-[13px] leading-snug mt-0.5">
                    FREE personal usage
                  </p>
                </li>
                <li>
                  <a
                    href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.01com.com_01com_ironcap-2Dx_webhelp_index.htm-23t-3DIronCAP-5FX-252FWelcome-5Fto-5FIronCap-5FX.htm&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=ctOayCFZ7NMIbWoBte6i7Pv-QWrd2zJhnTfTraz35Cc&e="
                    className="text-quantum-green text-[15px] font-medium hover:text-quantum-blue transition-colors"
                  >
                    IronCAP<Trademark /> XMail
                  </a>
                  <p className="text-white/70 text-[13px] leading-snug mt-0.5">
                    Business usage
                  </p>
                </li>
              </ul>
            </div>

            {/* User Guide */}
            <div className="bg-[#0d0d0d] border border-white/10 rounded-[20px] px-10 py-9">
              <h3 className="text-quantum-blue text-[22px] font-medium leading-tight mb-4">
                User Guide
              </h3>
              <div className="h-px bg-white/15 mb-6" />
              <ul className="flex flex-col gap-6">
                <li>
                  <a
                    href="https://www.01com.com/01com/ironcap-x/webhelp/index.htm#t=IronCAP_X%2FWelcome_to_IronCap_X.htm"
                    className="text-quantum-green text-[15px] font-medium hover:text-quantum-blue transition-colors"
                  >
                    IronCAP<Trademark /> X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.01com.com/01com/imintouch/webhelp/desktop/Welcome.htm"
                    className="text-quantum-green text-[15px] font-medium hover:text-quantum-blue transition-colors"
                  >
                    IronCAP<Trademark /> InTouch
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.01com.com/01com/imoncall/webhelp/desktop/welcome.htm"
                    className="text-quantum-green text-[15px] font-medium hover:text-quantum-blue transition-colors"
                  >
                    IronCAP<Trademark /> OnCall
                  </a>
                </li>
              </ul>
            </div>

            {/* FAQ's */}
            <div className="bg-[#0d0d0d] border border-white/10 rounded-[20px] px-10 py-9">
              <h3 className="text-quantum-blue text-[22px] font-medium leading-tight mb-4">
                FAQ&apos;s
              </h3>
              <div className="h-px bg-white/15 mb-6" />
              <ul className="flex flex-col gap-6">
                <li>
                  <a
                    href="https://urldefense.proofpoint.com/v2/url?u=https-3A__01com.com_imintouch-2Dremote-2Dpc-2Ddesktop_faqs_&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=omcXqMC6ZoBsNVua1usK87gtZk_u4ZvCgG5-_D3rknw&e="
                    className="text-quantum-green text-[15px] font-medium hover:text-quantum-blue transition-colors"
                  >
                    Product FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.ironcap.ca_ironcap-2Dtoolkits_faq_&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=6U81CLaI4mUNE9H-aGqqXUP2ikbRgSt-5yeBAjVSpwQ&e="
                    className="text-quantum-green text-[15px] font-medium hover:opacity-80 transition-opacity"
                  >
                    Post-Quantum Threat FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              text="See all Resources"
              url="https://urldefense.proofpoint.com/v2/url?u=https-3A__01com.com_imintouch-2Dremote-2Dpc-2Ddesktop_faqs_&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=omcXqMC6ZoBsNVua1usK87gtZk_u4ZvCgG5-_D3rknw&e="
              border="border-white/30"
              textColor="text-quantum-green"
              hoverBg="hover:bg-white/10"
              isBlank="true"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20 px-6 md:px-[95px]">
        <div className="max-w-[1512px] mx-auto px-0 md:px-[95px]">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[30px] mb-14">
            Leadership
          </h2>

          {/* Bento grid */}
          <div className="">
            {/* Top row — 3 leaders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10 border-b border-black/10 justify-items-center">
              {leaders.slice(0, 3).map((leader) => (
                <div key={leader.name} className="px-6 md:px-10 py-10">
                  <Leader {...leader} />
                </div>
              ))}
            </div>

            {/* Bottom row — 4 leaders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/10 justify-items-center">
              {leaders.slice(3).map((leader) => (
                <div key={leader.name} className="px-6 md:px-10 py-10">
                  <Leader {...leader} />
                </div>
              ))}
            </div>
          </div>
          <Bottom/>
        </div>
      </section>
    </main>
  );
}
