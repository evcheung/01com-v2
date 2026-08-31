import { ResourceCard } from "@/components/resources/ResourceCard";
import { ResourceSectionTitle } from "@/components/resources/ResourceSectionTitle";

const brochures = [
  {
    title: "IronCAP™",
    description:
      "IronCAP™ is a patent-protected, quantum-safe encryption technology that can protect users from the ever-evolving, illegitimate and malicious means of gaining access to data not only today but also in the fast-approaching quantum era.",
    href: "/pdf/brochures/IronCAP%20Brochure%20Digital.pdf",
  },
  {
    title: "IronCAP™ XMail",
    description:
      "IronCAP™ XMail is the world's first quantum-safe, end-to-end email security system utilizing the IronCAP™ Crypto (ICC) as its cryptographic foundation. Our end-to-end encryption eliminates the intermediary server aka MITM (Man In The Middle) to ensure 100% security not only today but also in the fast approaching quantum computing era.",
    href: "/pdf/brochures/IronCAP%20X%20Brochure_Web.pdf",
  },
  {
    title: "IronCAP™ InTouch",
    description:
      "IronCAP™ InTouch helps users work remotely with quantum-safe, absolute security via any device from anywhere, anytime.",
    href: "https://www.01com.com/pdf/brochures/IIT%20Brochure.pdf",
  },
  {
    title: "Quantum AI Wrapper (QAW)",
    description:
      "QAW is 01 Quantum's security architecture for encrypted AI workflows, helping organizations protect sensitive prompts, data, and model interactions with quantum-safe controls.",
    href: "http://01com.com/pdf/brochures/AI%20Brochure.pdf",
  },
];

export default function ResourcesBrochures() {
  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-[95px]">
        <ResourceSectionTitle title="Brochures" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {brochures.map((brochure) => (
            <ResourceCard
              key={brochure.title}
              title={brochure.title}
              description={brochure.description}
              href={brochure.href}
              ctaLabel="View PDF"
              kind="pdf"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
