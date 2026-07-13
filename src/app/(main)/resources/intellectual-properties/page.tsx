import Image from "next/image";

const PATENTS = [
  {
    title: "US Patent #11,669,833",
    link: "https://www.01com.com/pdf/US11669833.pdf",
  },
  {
    title: "US Patent #11,271,715",
    link: "https://www.01com.com/pdf/US11271715.pdf",
  },
  {
    title: "US Patent #6,928,479",
    link: "https://www.01com.com/pdf/US6928479.pdf",
  },
  {
    title: "US Patent #6,938,076",
    link: "https://www.01com.com/pdf/US6938076.pdf",
  },
  {
    title: "US Patent #8,234,701",
    link: "https://www.01com.com/pdf/US8234701.pdf",
  },
  {
    title: "Canadian Patent #2,309,398",
    link: "https://www.01com.com/pdf/CA2309398.pdf",
  },
  {
    title: "Japanese Patent #4,875,094",
    link: "https://www.01com.com/pdf/JP4875094.pdf",
  },
  {
    title: "Canadian Patent #2,524,039",
    link: "https://www.01com.com/pdf/cp2524039.pdf",
  },
];

export default function ResourcesIntellectualProperties() {
  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-[95px]">
        <div className="flex items-center gap-4 sm:gap-6 mb-12">
          <h2 className="text-quantum-blue text-[24px] sm:text-[26px] font-medium leading-[30px] whitespace-nowrap">
            Intellectual Properties
          </h2>
          <div className="flex-1 h-px bg-lite-gray/60" />
        </div>

        <div className="max-w-[1230px] space-y-8">
          <p className="text-steel-gray text-[15px] leading-[24px]">
            Innovative technologies used in our Post-Quantum Cybersecurity and
            Remote Access products are protected by a portfolio of
            international patents. Established in 1992, 01 Quantum is always
            at the forefront of technology. Its latest innovation is on
            cybersecurity with the development focus on Post-Quantum
            Cryptography (PQC). 01&apos;s PQC algorithms are designed to
            operate on classical computer systems as we know them today while
            at the same time secure enough to safeguard against potential
            cyberattacks from quantum computers.
          </p>

          <div className="rounded-[20px] border border-lite-gray/60 bg-white px-6 py-7 sm:px-8">
            <h3 className="text-quantum-green text-[20px] font-medium leading-[28px] mb-6">
              Patents
            </h3>
            <div className="border-t border-lite-gray/60">
              {PATENTS.map((patent) => (
                <div
                  key={patent.title}
                  className="flex flex-col gap-4 border-b border-lite-gray/60 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="text-[#2b2f38] text-[15px] leading-[24px]">
                    {patent.title}
                  </p>
                  <a
                    href={patent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline"
                  >
                    <Image
                      src="/investor_relations_assets/pdf.svg"
                      alt=""
                      aria-hidden="true"
                      width={18}
                      height={18}
                    />
                    View PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
