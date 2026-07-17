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
