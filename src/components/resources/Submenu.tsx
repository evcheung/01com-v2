export const subMenu = [
  { label: "News", href: "/resources/news", active: false },
  { label: "Press Releases", href: "#", active: false },
  { label: "Blog", href: "/resources/blog", active: false },
  { label: "Rewards", href: "/resources/rewards", active: false },
  { label: "Newsletters", href: "#", active: false },
  { label: "Documents", href: "#", active: false },
];

export const Submenu = ({ active }: { active: string }) => {
  return (
    <section className="bg-black">
      <div className="max-w-[1512px] mx-auto px-[95px] py-6 flex flex-col items-center gap-4">
        <div className="w-full max-w-[806px] h-px bg-white/30" />
        <nav aria-label="Resources sub navigation">
          <ul className="flex items-center justify-center flex-wrap gap-x-1 gap-y-2 text-[14px]">
            {subMenu.map((item, idx) => (
              <li key={item.label} className="flex items-center">
                <a
                  href={item.href}
                  className={`px-3 transition-colors ${
                    item.label === active
                      ? "text-quantum-blue"
                      : "text-white hover:text-quantum-blue"
                  }`}
                >
                  {item.label}
                </a>
                {idx < subMenu.length - 1 && (
                  <span className="text-white/40">|</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};
