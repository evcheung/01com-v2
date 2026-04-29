import { PostCard } from "@/components/resources/blog/PostCard";
import { Pagination } from "@/components/resources/rewards/Pagination";
const blogPosts = [
  {
    date: "March 19, 2026",
    description:
      "Introducing IronCAP™ Engine: The Ultimate Post-Quantum Cryptography Solution for the Web3 Era.",
    image: "/about_assets/placeholder.png",
    imageAlt:
      "Introducing IronCAP™ Engine: The Ultimate Post-Quantum Cryptography Solution for the Web3 Era.",
    href: "#",
  },
];

export default function BlogPage() {
  const currentPage = 1;
  const totalPages = 14;
  return (
    <>
      {/* Page title */}
      <section className="bg-[#f5f6f8] py-16">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
                Blog
            </h2>
            <div className="flex-1 h-px bg-lite-gray/60" />
            <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
              <img src="/resources_assets/blog_i.svg" alt="" aria-hidden="true" className="w-12 h-12 object-contain" />
            </div>
          </div>
        </div>
        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {blogPosts.map((item, idx) => (
            <PostCard
              key={idx}
              date={item.date}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-14">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </section>
    </>
  );
}
