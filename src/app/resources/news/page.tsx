import { NewsCard } from "@/components/resources/news/NewsCard";
import { Button } from "@/components/ui/button";
// Placeholder data — will be replaced with Sanity fetch later.
const featuredNews = [
  {
    date: "March 19, 0206",
    title:
      "01 Quantum reports first quarter 2026 Results and provides an update on business developments.",
    href: "#",
  },
  {
    date: "March 16, 2026",
    title: "01 Quantum to report fiscal Q1 2026",
    href: "#",
  },
  {
    date: "March 19, 0206",
    title:
      "01 Quantum and qLABS announce live trading of $qONE, laying the foundation for post-quantum Web3 security.",
    href: "#",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Featured News */}
      <section className="bg-[#f5f6f8] py-16">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
              Featured News
            </h2>
            <div className="flex-1 h-px bg-lite-gray/60" />
            <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
              <img src="/resources_assets/news_i.svg" alt="" aria-hidden="true" className="w-12 h-12 object-contain" />
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {featuredNews.map((item, idx) => (
              <NewsCard
                key={idx}
                date={item.date}
                title={item.title}
                href={item.href}
              />
            ))}
          </div>

          {/* See all button */}
          <div className="flex justify-center mt-12">
            <Button
              url="/products/ironcap-engine"
              textColor="text-quantum-blue"
              border="border-quantum-blue/60"
              text="See all · · ·"
            />
          </div>
        </div>
      </section>
    </>
  );
}
