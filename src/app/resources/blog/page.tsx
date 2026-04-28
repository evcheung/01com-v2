import { Submenu } from "@/components/resources/Submenu";
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
    <main>
      {/* Page title */}
      <section className="bg-black flex items-center px-24 min-h-[196px]">
        <h1 className="text-white text-[50px] font-medium leading-[50px]">
          Resources
        </h1>
      </section>
      {/* Sub menu */}
      <Submenu active="Blog" />
      <section className="bg-[#f5f6f8] py-16">
        <div className="max-w-[1512px] mx-auto px-[95px]">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
              Blog
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
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
                <path d="M17 4h3v3a3 3 0 0 1-3 3" />
                <path d="M7 4H4v3a3 3 0 0 0 3 3" />
              </svg>
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
    </main>
  );
}
