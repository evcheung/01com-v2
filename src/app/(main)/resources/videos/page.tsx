import { ResourceCard } from "@/components/resources/ResourceCard";
import { ResourceSectionTitle } from "@/components/resources/ResourceSectionTitle";

const videos = [
  {
    title: "Vulnerabilities of Blockchain Security in the World of Quantum Computing",
    description:
      "PKI is the security backbone of blockchain technology to ensure trustworthiness. In the world of cryptocurrencies, private keys are used by the payer to sign and initiate a transaction. It is also used by a validator to sign and validate a transaction. The rapid development of quantum computing is posing security threats to PKI breaking the backbone of blockchain security because transactions cannot be trusted anymore. In this session we will demonstrate some practical implementations of PQC that have been performed to convert an existing blockchain network to become quantum-safe.",
    href: "https://www.youtube.com/watch?v=eV5zc8hwUFU",
  },
  {
    title: "IronCAP X™ - The World's first end-to-end email encryption and signature system",
    description:
      "IronCAP X™ is the world's first end-to-end email/file encryption and digital signing system that utilizes patent-protected IronCAP™ Toolkits as the underlying cryptographic system to ensure safety against cyber attacks from not only the conventional world of computers today but also against future attacks from quantum computers. IronCAP X™ simply integrates with your everyday email client such as Outlook, Gmail, Yahoo, etc. to ensure zero learning curve.",
    href: "https://www.youtube.com/watch?v=Kc6TGzEXs74",
  },
  {
    title: "How IronCAP X™ Works?",
    description:
      "IronCAP X™ simply integrates with your everyday email clients such as Outlook and Gmail. We only charge for business usage. For personal usage, simply sign up a FREE account and install IronCAP X™ on your computer where you run your email clients and begin sending encrypted emails to your recipients as well as enjoying other features. Use IronCAP X™ to ensure the safety of your data, not only against cyber attacks from computers today but also from quantum computers in the future.",
    href: "https://www.youtube.com/watch?v=iKSD8MYShsY",
  },
  {
    title: "Why IronCAP™?",
    description:
      "IronCAP™ is based-on NIST-approved post-quantum cryptography (PQC) technology. It is designed to operate on conventional computer systems as we know them today, and is also secure enough to safeguard against future attacks from the world of quantum computers. Examples of vertical applications are email/file encryption, digital signatures, blockchain security, remote access/VPN, password management, credit card security, cloud storage, artificial intelligence, IoT, and website security.",
    href: "https://www.youtube.com/watch?v=iXacm6X6iqo",
  },
  {
    title: "How IronCAP™ Works",
    description:
      "IronCAP™ is a post-quantum cryptography (PQC) technology that is safe against cyberattacks from classical computers as well as future attacks from quantum computers which have excessive computational power. By combining both NIST-approved PQC algorithms as well as our own patent-protected quantum-safe technology, IronCAP™ Toolkits is designed to be used in all kinds of vertical solutions such as digital identity, email security, remote access, cloud storage, IoT, blockchain, financial transactions, etc.",
    href: "https://www.youtube.com/watch?v=Hs4epT6M0Tk",
  },
  {
    title: "SiberX - Mitigating Ransomware Today and in the Quantum Era",
    description:
      "Cyberattacks are now the foremost risk to the global financial system according to the U.S. Federal Reserve Chairman, Jerome Powell. Phishing emails are the single main source of ransomware attacks. When Phishing meets Quantum Computing power, the magnitude of the problem becomes unimaginable. Is the world equipped to shelter from this perfect storm?",
    href: "https://www.youtube.com/watch?v=R0-ynOhJQRY",
  },
  {
    title: "SiberX Keynote - Quantum-safe Technology for Ransomware and Cryptocurrency Protection",
    description:
      "Cyberattacks are now the foremost risk to the global financial system according to the U.S. Federal Reserve Chairman, Jerome Powell. Phishing emails are the single main source of ransomware attacks. When Phishing meets Quantum Computing power, the magnitude of the problem becomes unimaginable. Is the world equipped to shelter from this perfect storm?",
    href: "https://www.youtube.com/watch?v=0Pa2PS3XgR8",
  },
  {
    title: "IronCAP™ at SiberX 3.0 addresses - Are today's encryption standards ready for Quantum attacks?",
    description:
      "IronCAP™ alongside their team of expert panelists addressed Quantum-Safe encryption. With mounting cyber-attacks on critical infrastructure such as oil & gas industries, banking and healthcare platforms, are service providers prepared to react to the national warning against quantum attacks by adopting the next generation encryption protocols?",
    href: "https://www.youtube.com/watch?v=uy0el3lCosU",
  },
  {
    title: "Quantum-Safe Webinar with William Gee and Samuel Sinn at PwC China",
    description:
      "Panelist, William Gee and Samuel Sin Partners at PwC China, address a pertinent cybersecurity question - What is the overall awareness of quantum threat given the recent fast pace development in quantum technology? (In your respective markets).",
    href: "https://www.youtube.com/watch?v=eVkxYhfZWrs",
  },
  {
    title: "Quantum-Safe Webinar with Florin Filip from CGI Montreal",
    description:
      "Panelist, Florin Filip Director at CGI Innovation Centre, addresses a pertinent cybersecurity question - What are the current efforts on tackling quantum threat (respective markets) market-wide including government and science efforts? Additionally, what are the key issues?",
    href: "https://www.youtube.com/watch?v=p3es6SPb6oA",
  },
  {
    title: "Quantum-safe solution jointly presented by PwC China and IronCAP™",
    description:
      "PwC China and IronCAP™ are working together to address the looming quantum threat by combining PwC China's experience and knowledge on digital risk and security and IronCAP™'s quantum-safe and mathematically proven Goppa code-based and Hash-based cryptography. IronCAP™ provides the capabilities to protect against today and tomorrow's malicious attacks.",
    href: "https://www.youtube.com/watch?v=PNuX-usIgbA",
  },
  {
    title: "IronCAP X™ Tutorial",
    description:
      "Tutorial of our newest launch, IronCAP X™. The world's most proven, quantum-safe, end-to-end encryption. It seamlessly integrates with existing systems and protects your data with its unique technology and digital signatures.",
    href: "https://www.youtube.com/watch?v=iKSD8MYShsY",
  },
];

export default function ResourcesVideos() {
  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-[95px]">
        <ResourceSectionTitle title="Videos" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
          {videos.map((video) => (
            <ResourceCard
              key={video.title}
              title={video.title}
              description={video.description}
              href={video.href}
              ctaLabel="Watch Video"
              kind="video"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
