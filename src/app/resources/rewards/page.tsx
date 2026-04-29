import { RewardCard } from "@/components/resources/rewards/RewardCard";
import { Pagination } from "@/components/resources/rewards/Pagination";

// TODO: Replace with Sanity fetch. Shape kept stable so the API can plug in directly.
const rewards = [
  {
    date: "November 15, 2021",
    description:
      "IronCAP™ InTouch is the winner of the Editor’s Choice Award from Enterprise Security Magazine.",
    image: "/about_assets/placeholder.png",
    imageAlt: "Enterprise Security Editor's Choice 2021",
    href: "#",
  },
  {
    date: "September 15, 2019",
    description:
      "IronCAP™ Awarded CIO Review’s Editor’s Choice as Most Promising Quantum Solution.",
    image: "/about_assets/placeholder.png",
    imageAlt: "CIO Review Editor's Choice 2019",
    href: "#",
  },
  {
    date: "August 15, 2015",
    description: "IronCAP™ OnCall won the TMC Contact Center Technology Award.",
    image: "/about_assets/placeholder.png",
    imageAlt: "TMC Contact Center Technology Award",
    href: "#",
  },
  {
    date: "March 18, 2015",
    description:
      "IronCAP™ InTouch won Internet Telephony 2015 Product of the Year.",
    image: "/about_assets/placeholder.png",
    imageAlt: "Internet Telephony 2015 Product of the Year",
    href: "#",
  },
  {
    date: "February 13, 2014",
    description:
      "IronCAP™ InTouch Meeting won again the TMC Internet Telephony Magazine’s Product of the Year award.",
    image: "/about_assets/placeholder.png",
    imageAlt: "TMC Internet Telephony Product of the Year 2014",
    href: "#",
  },
  {
    date: "February 12, 2014",
    description:
      "IronCAP™ InTouch won again the 2014 Communications Solutions Product of the Year Award.",
    image: "/about_assets/placeholder.png",
    imageAlt: "2014 Communications Solutions Product of the Year",
    href: "#",
  },
  {
    date: "September 18, 2013",
    description:
      "IronCAP™ InTouch - winner of TMC Communication Solutions Product-of-the-Year 2012.",
    image: "/about_assets/placeholder.png",
    imageAlt: "TMC Communication Solutions 2012",
    href: "#",
  },
  {
    date: "June 19, 2013",
    description:
      "IronCAP™ InTouch Meeting wins INTERNET TELEPHONY’s 2013 TMC Labs Innovation Award.",
    image: "/about_assets/placeholder.png",
    imageAlt: "TMC Labs Innovation Award 2013",
    href: "#",
  },
  {
    date: "December 12, 2012",
    description:
      "01 Quantum Receives 2012 INTERNET TELEPHONY Product of the Year Award.",
    image: "/about_assets/placeholder.png",
    imageAlt: "Internet Telephony Product of the Year 2012",
    href: "#",
  },
];

export default function RewardsPage() {
  // TODO: When connecting Sanity, derive currentPage from search params and total
  // pages from the query result count. Pagination component already supports it.
  const currentPage = 1;
  const totalPages = 14;

  return (
    <>
      {/* Reviews + Rewards */}
      <section className="bg-[#f5f6f8] py-16">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
              Reviews & Rewards
            </h2>
            <div className="flex-1 h-px bg-lite-gray/60" />
            <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
              <img
                src="/resources_assets/rewar_i.svg"
                alt=""
                aria-hidden="true"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {rewards.map((item, idx) => (
              <RewardCard
                key={idx}
                date={item.date}
                description={item.description}
                image={item.image}
                imageAlt={item.imageAlt}
                href={item.href}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-14">
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>
      </section>
    </>
  );
}
