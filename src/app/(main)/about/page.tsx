import { Leader } from "@/components/about/Leader";

const leaders = [
  {
    name: "Andrew Cheung",
    title: "CEO",
    pic: "/about_assets/d.png",
    linkedIn: "https://www.linkedin.com/in/acheungquantum/",
    bio: [
      "Andrew is the founder, President and CEO of 01 Quantum. He built the company from scratch in 1992 and took the company public in 2000. Andrew was a nominee of the Ernst and Young Entrepreneur-Of-The-Year award in 2001. He holds a B.Sc. (Hon) degree in Computer Science from the University of Western Ontario. Besides over 25 years experience in communications, mobile, and cyber security solutions development, he also has 12 years experience in patent prosecution. Andrew is a co-inventor of 7 patents plus several patent-pending applications.",
    ],
  },
  {
    name: "Brian Stringer",
    title: "CFO",
    pic: "/about_assets/g.png",
    linkedIn: "https://www.linkedin.com/in/brian-stringer-220b5323/",
    bio: [
      "A Chartered Professional Accountant (CPA) with 25+ years experience in managing publicly listed companies, Brian has been the CFO of 01 for over 18 years. Prior to joining 01, Brian worked as the CFO of various other publicly listed companies. In addition to his extensive CFO experience, Brian also has 12 years experience in patent prosecution and patent litigation in the US and Canada.",
    ],
  },
  {
    name: "William A. Train",
    title: "Chairman",
    pic: "/about_assets/j.png",
    linkedIn: "https://www.linkedin.com/in/william-train-79840045/",
    bio: [
      "William joined the board of 01 Quantum in 1995. He has over 35 years of extensive experience in the semi-conductor sector in Canada and the United States. He is the former President of Xicom Products and the CEO of Carolian Systems and has held senior positions at Dynasty Components Inc. Mr. Train holds a B.A. degree of Economics from the University of Toronto with directorships and board experience in various industries including Ozz Utility Management, Navlyns, Blumont Capital, etc.",
    ],
  },
  {
    name: "Tyson Macaulay",
    title: "Board Member & COO",
    pic: "/about_assets/m.png",
    linkedIn: "https://www.linkedin.com/in/tysonmacaulay/",
    bio: [
      "Mr. Macaulay, CISA, LEL CIE, brings with him over twenty five years of engineering and management experience in network, cloud and IoT security solutions. Residing in Ottawa he is currently the Chief Security Officer and Vice President of Field Engineering at Rockport Networks Inc. Prior to that, he held the positions of Chief Product Officer at InfoSec Global (ISG), CTO for BAE Systems Applied Intelligence in North America, CTO - Telecommunications at Intel and Chief Security Strategist at Fortinet. These roles all involved product strategy, corporate development (mergers, acquisitions and partnerships), business development and thought leadership.",
    ],
  },
  {
    name: "Alex Shpruov",
    title: "CTO",
    pic: "/about_assets/p.png",
    linkedIn: "https://www.linkedin.com/in/shpurov/",
    bio: [
      "Alex Shpurov is a certified cloud solutions architect and applied cryptography engineer focused on building secure, privacy-preserving systems using Fully Homomorphic Encryption (FHE), Zero-Knowledge Proofs (ZKP), and modern cloud architectures. His work centers on enabling computation, verification, and decision-making over sensitive data without exposing the underlying information.",
      "He specializes in designing production-grade cryptographic systems that integrate FHE and ZKP into real-world workflows, including secure DeFi, private AI, and regulated enterprise environments - often without requiring changes to existing blockchain protocols or infrastructure. His work bridges advanced cryptography with practical cloud deployment across AWS and hybrid environments.",
      "Alex has authored or contributed to approximately 20 patents in cybersecurity and applied cryptography, spanning post-quantum security, zero-knowledge architectures, and secure distributed systems. He brings extensive experience delivering scalable cloud solutions across finance, security, and data-intensive domains, with a focus on turning advanced research into systems that are operable, auditable, and deployable at scale.",
    ],
  },
  {
    name: "Gary Kissack",
    title: "Board Member",
    pic: "/about_assets/s.png",
    linkedIn: "https://www.linkedin.com/in/garykissack/",
    bio: [
      "Gary has extensive experience working as a lawyer and advisor in various industries. He practices in a number of areas of business law, including M&A, private equity, venture capital, capital markets, and corporate finance. He is a Partner in the Business Law and Indigenous Law Practice Groups at Fogler, Rubinoff LLP in Toronto. Gary regularly advises Canadian and international companies, underwriters, investors and professional advisors on a range of transactions including IPOs, private placements, etc. He has been a Board Member of 01 Quantum since 2006.",
    ],
  },
  {
    name: "Edoardo Persichetti",
    title: "PQC Advisor",
    pic: "/about_assets/v.png",
    linkedIn: "https://www.linkedin.com/in/edoardo-persichetti-56a92a8b/",
    bio: [
      "Dr. Edoardo Persichetti is currently an Associate Professor in the Department of Mathematical and Statistics at Florida Atlantic University. Before moving to Florida, he was a Postdoc (Adiunkt Naukowy) in the Cryptography and Data Security Group at Warsaw University in Poland. He completed his PhD in Mathematics in late 2012 at University of Auckland, New Zealand.",
      "Dr. Persichetti's research interests revolve around public-key cryptography and number theory, with a particular focus on code-based cryptography. He has an established track record of publications in cryptography. He is a co-author of four distinct submissions to the first NIST Post-Quantum Standardization process. Three of the four algorithms - Classic McEliece, BIKE and HQC reached the conclusive round, with HQC being selected in March 2025 as one of the two new standards for encryption. He has also co-authored three submissions to NIST's \"onramp\" call for novel signature schemes.",
      "Dr. Persichetti is one of the most acclaimed researchers in code-based cryptography frequently invited to act as a program committee member for major cryptography conferences such as CRYPTO, EUROCRYPT and ASIACRYPT, as well as a peer-reviewer for publications like the Journal of Mathematical Cryptology and Designs, Codes and Cryptography. He was the chair of the 2018 edition of the Code-Based Cryptography Workshop (CBC 2018) and the co-chair of the 2019 and 2020 editions. He is currently serving as the General Chair for EUROCRYPT 2026 and as the Program Chair for PKC 2026. His expertise is called upon regularly to speak at events such as the Joint Mathematics Meetings (JMM), coding and cryptography by AMS, SIAM and DIMACS, workshops on Post-Quantum Cryptography, and many others.",
    ],
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
      <section className="bg-white flex flex-col items-center px-6 py-10 md:px-24 md:pt-18 md:pb-8">
        <div className="max-w-[1512px] mx-auto px-0 md:px-[95px] space-y-6">
          <p className="text-steel-gray text-[15px] leading-[24px]">
            <span className="text-quantum-blue font-normal">
              01 Quantum Inc.
            </span>
            has developed advanced post‑quantum cryptographic (PQC) technology
            to protect digital systems against the growing threat of quantum
            computers. Its
            patented IronCAP<Trademark />{" "}and patent-pending technologies are designed to
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
            commercializing products that incorporate its patented IronCAP<Trademark />{" "}
            technology.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white px-6 pt-4 pb-20 md:px-[95px] md:pt-4">
        <div className="max-w-[1512px] mx-auto px-0 md:px-[95px]">
          <h2 className="text-quantum-blue text-[30px] font-medium leading-[30px] mb-14">
            Leadership
          </h2>

          <div className="space-y-8">
            {leaders.map((leader) => (
              <Leader key={leader.name} {...leader} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
