import Image from "next/image";
import { Titles } from "@/components/Titles";
import { Bottom } from "@/components/resources/Bottom";

export interface WhyPartner {
  title: string;
  description: string;
  icon: string;
}

const data: WhyPartner[] = [
  {
    title: "Innovative Technology",
    description:
      "Combining many years of proven expertise in the field, IronCAP™'s crypto-scientists have created an encryption technology that's not only quantum-safe but also more efficient and safer than existing  cryptography. It is built on the longest time-tested (almost 50 years)  Goppa code-based theory recognized by the world of post-quantum  cryptography. IronCAP™ has been endorsed by industry experts and proven 'un-hackable' in multiple global hackathons.",
    icon: "/partners_assets/icons/a-1.svg",
  },
  {
    title: "Future of Cybersecurity",
    description:
      "IronCAP™'s patent-protected  post-quantum cryptography is designed to be used in all kinds of  vertical solutions such as digital identity, email/file encryption,  remote access/VPN, cloud storage, 5G/IoT, blockchains, financial  transactions, etc. IronCAP™ lets you stay ahead of cyber threats today and in the quantum computing era.",
    icon: "/partners_assets/icons/a.svg",
  },
  {
    title: "Seamless Integration",
    description:
      "To empower vendors to transform their applications or systems seamlessly to quantum-safe, IronCAP™ has developed an API that's compliant with the PKCS#11 and OpenPGP  (RfC4880) industry standard. It is available for all major operating  systems: Microsoft Windows, Apple macOS, Linux, Android and Apple iOS.",
    icon: "/partners_assets/icons/a-2.svg",
  },
  {
    title: "Industry Leader",
    description:
      "Utilizing the IronCAP™ Toolkits, we have developed the industry's first quantum-safe email encryption software, IronCAP X™ that everyone can use today on their classical computers. Besides  setting a precedent for developing a practical solution using IronCAP™'s post-quantum cryptography, we can also help vendors to become the First Movers of their respective solutions for the quantum computing era.",
    icon: "/partners_assets/icons/a-3.svg",
  },
];

export interface Partners {
  logo: string;
  links: Array<{
    name: string;
    url: string;
  }>;
}

const partners: Partners[] = [
  {
    logo: "/partners_assets/logos/super.png",
    links: [
      {
        name: "PR Announcement",
        url: "https://01com.com/pdf/2026/SuperQ-Jan-2026.pdf",
      },
    ],
  },
  {
    logo: "/partners_assets/logos/turnium.png",
    links: [
      {
        name: "PR Announcement",
        url: "https://www.01com.com/pdf/2025/TTGI-IronCAP-X-release-September-2025.pdf",
      },
    ],
  },
  {
    logo: "/partners_assets/logos/real_matter.png",
    links: [
      {
        name: "PR Announcement",
        url: "https://www.01com.com/pdf/2025/Partnership-Real-Matter.pdf",
      },
    ],
  },
  {
    logo: "/partners_assets/logos/keyfactor.png",
    links: [
      {
        name: "PR Announcement",
        url: "https://01com.com/pdf/2023/Keyfactor_01_Partnership_Press_Release.pdf",
      },
    ],
  },
  {
    logo: "/partners_assets/logos/thales.png",
    links: [
      {
        name: "PR Announcement",
        url: "https://www.01com.com/pdf/2022/Thales_01_Partnership_Press_Release.pdf",
      },
      {
        name: "Blog",
        url: "https://cpl.thalesgroup.com/blog/data-protection/building-quantum-safe-blockchain-security",
      },
      {
        name: "Solutions",
        url: "https://cpl.thalesgroup.com/partners/01-communique-laboratory-inc",
      },
    ],
  },
  {
    logo: "/partners_assets/logos/hitachi.png",
    links: [
      {
        name: "PR Announcement",
        url: "https://www.hitachi-solutions-create.co.jp/solution/domobile_asp/index.html",
      },
    ],
  },
  {
    logo: "/partners_assets/logos/cgi.png",
    links: [
      { name: "PR Announcement", url: "https://www.01com.com/pdf/2020/Partnership-July-2020.pdf"},
      { name: "Webinar", url: "https://www.youtube.com/watch?v=p3es6SPb6oA&feature=youtu.be" },
    ],
  },
  {
    logo: "/partners_assets/logos/pwc.png",
    links: [
      { name: "PR Announcement", url: "https://www.01com.com/pdf/2020/Joint-Press-Release-PWC.pdf"},
      { name: "Webinar", url: "https://www.youtube.com/watch?v=eVkxYhfZWrs" },
      { name: "Whitepaper", url: "https://www.pwccn.com/en/issues/cybersecurity-and-data-privacy/rethinking-cybersecurity-in-a-quantum-world-jul2021.pdf"},
      { name: "Quantum-Safe Solution", url: "https://www.youtube.com/watch?v=1Ql7fmGTB4c"}
    ],
  },
  {
    logo: "/partners_assets/logos/ISA.png",
    links: [
      { name: "PR Announcement", url: "https://www.01com.com/pdf/2021/ISA-CyberSecurity-01%20Communique-partnership.pdf"},
    ],
  },
  {
    logo: "/partners_assets/logos/mirata.png",
    links: [
      { name: "PR Announcement", url: "https://www.01com.com/pdf/2021/ISA-CyberSecurity-01%20Communique-partnership.pdf"},
      { name: "Quantum-Safe Webinar", url: "https://vimeo.com/529739263" },
      { name: "Interview with Professor Sergey Bezzateev", url: "https://vimeo.com/529265672" }
    ],
  },
  {
    logo: "/partners_assets/logos/ixfintech.png",
    links: [
      { name: "PR Announcement", url: "https://www.01com.com/pdf/2020/Quantum-safe-Bitcoin-ATM-machine.pdf"},
      { name: "Use Case", url: "https://www.01com.com/pdf/2021/UseCase-DAEM.pdf"},
    ],
  },
  {
    logo: "/partners_assets/logos/nexusguard.jpeg",
    links: [
      { name: "PR Announcement", url: "https://www.01com.com/pdf/2020/NexusGuard-press-release.pdf"},
    ],
  },
  {
    logo: "/partners_assets/logos/digiflynt.png",
    links: [
      { name: "PR Announcement", url: "https://digiflynt.com/digiflynt-takes-ironcap-technology-to-gcc-countries-and-the-west-african-region/"},
      { name: "Q-Day Solution", url: "https://digiflynt.com/partnerships/"},
    ],
  },
  {
    logo: "/partners_assets/logos/phorizon.jpeg",
    links: [
      { name: "PR Announcement", url: "https://www.01com.com/pdf/2020/Partnership-agreeemnt-with-Privacy-Horizons.pdf"},
    ],
  },
  {
    logo: "/partners_assets/logos/threat.png",
    links: [
      { name: "PR Announcement", url: "https://rthreat.net/2021/04/06/01-communique-signs-partnership-agreement-with-rthreat-inc/"},
    ],
  },
  {
    logo: "/partners_assets/logos/polydigi.jpeg",
    links: [
      { name: "PR Announcement", url: "https://polydigitech.uk/news/20210629_press/"},
    ],
  }

];

export default function PartnersPage() {
  return (
    <div>
      <Titles text="Partners" />

      {/* why partner sec */}
      <section className="w-full bg-white">
        <div className="flex flex-col px-6 md:px-24 py-18 max-w-[1512px] mx-auto">
          <h2 className="text-quantum-blue font-normal text-[24px] sm:text-[30px] leading-[36px] md:leading-[40px]">
            Why Partner with IronCAP<sup>™</sup>
          </h2>
          <div className="mt-12 space-y-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 sm:gap-8"
              >
                <div className="flex-shrink-0 w-fit">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="text-quantum-green text-[20px] sm:text-[24px] font-medium">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* partner logos */}
      <section className="w-full bg-[#f5f6f8]">
        <div className="flex flex-col px-6 md:px-24 py-18 max-w-[1512px] mx-auto">
          <h2 className="text-quantum-blue font-normal text-[24px] sm:text-[30px] leading-[36px] md:leading-[40px]">
            IronCAP<sup>™</sup> Partners
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full h-40 flex items-center justify-center bg-white rounded-lg p-4">
                  <Image
                    src={partner.logo}
                    alt="Partner logo"
                    width={200}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="mt-6 flex flex-col gap-2 w-full">
                  {partner.links.map(
                    (
                      link: { name: string; url: string },
                      linkIndex: number,
                    ) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black underline text-center hover:text-quantum-blue transition-colors"
                      >
                        {link.name}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Bottom />
    </div>
  );
}
