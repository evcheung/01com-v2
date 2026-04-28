import { NewsCard } from "@/components/resources/news/NewsCard";
import { Button } from "@/components/ui/button";
import { subMenu, Submenu } from "@/components/resources/Submenu";
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
    <main>
      {/* Page title */}
      <section className="bg-black flex items-center px-24 min-h-[196px]">
        <h1 className="text-white text-[50px] font-medium leading-[50px]">
          Resources
        </h1>
      </section>

      {/* Sub menu */}
      <Submenu active="News" />

      {/* Featured News */}
      <section className="bg-[#f5f6f8] py-16">
        <div className="max-w-[1512px] mx-auto px-[95px]">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
              Featured News
            </h2>
            <div className="flex-1 h-px bg-lite-gray/60" />
            <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-lite-gray/60 text-steel-gray shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="15" y2="17" />
              </svg>
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

      {/* Learn more CTA */}
      <section className="bg-white py-20">
        <div className="flex justify-center">
          <Button
            url="/products/ironcap-engine"
            textColor="text-quantum-blue"
            border="border-quantum-blue/60"
            text="Learn more about 01 Quantum products · · ·"
          />
        </div>
      </section>
    </main>
  );
}
