import { ResourceCard } from "@/components/resources/ResourceCard";
import { ResourceSectionTitle } from "@/components/resources/ResourceSectionTitle";

const sections = [
  {
    title: "White Papers",
    items: [
      {
        title: "Email Phishing: Culprit behind Ransomware",
        description:
          "All ransomware starts with a simple trick: To plant a malware into the target system. Email phishing is the cheapest and most common way of planting malware. Unlike other cybercrimes, email phishing makes use of social engineering techniques to prey on human emotions and behavior: greed, curiosity, fear, negligence, etc. The usual tactic is posing as legitimate businesses or authoritative bodies to pry personal information or login credentials.",
        href: "https://www.01com.com/pdf/2022/Email-Phishing-Culprit-behind-Ransomware.pdf",
      },
      {
        title: "Marketing White Paper",
        description:
          "The more we rely on technology, the more imperative it is to protect ourselves from cyber-attacks. The impact of quantum computing on internet security is going to be massive. Its exponentially higher processing power will render current encryption systems such as RSA, obsolete and your data will be compromised. We must start planning now!",
        href: "https://01com.com/pdf/IronCAP-Marketing-White-Paper.pdf",
      },
      {
        title: "Technical White Paper",
        description:
          "IronCAP™, a patent-protected invention (US Patent Application Nos. 16/268,098) is a unique cyber security solution: on one hand it builds on the current encryption technology to allow broad usage in today's conventional environment; on the other hand, its revolutionary cryptographic capability is safe against the computational power of quantum computers.",
        href: "https://www.01com.com/pdf/ironcap-white-paper.pdf",
      },
    ],
  },
  {
    title: "Educational Papers",
    items: [
      {
        title: "Rethinking Cybersecurity in a Quantum World",
        description:
          "Rapid technological progress in recent years has created a new business reality: the digital economy. Companies today interact with each other, their partners, customers and even regulators via digital channels. Hence it is essential to ensure that sensitive data and information are secure, making encryption technology an even more critical component of today's information security infrastructure.",
        href: "https://www.01com.com/pdf/2021/Rethinking-cybersecurity-in-a-quantum-world.pdf",
      },
    ],
  },
];

export default function ResourcesWhitePapersUseCases() {
  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-[95px]">
        <ResourceSectionTitle title="White Papers" />

        <div className="space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-quantum-green text-[20px] font-medium leading-[34px] mb-6">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
                {section.items.map((item) => (
                  <ResourceCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    ctaLabel="Read More"
                    kind="pdf"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
