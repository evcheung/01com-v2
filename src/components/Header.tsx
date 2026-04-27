import Image from "next/image";

const navLinks = [
  { label: "Products +", href: "/products" },
  { label: "Services +", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Demo", href: "#" },
  { label: "Login", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 overflow-hidden">
      <img
        src="/header_assets/bkgnd.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="relative z-10 max-w-[1512px] mx-auto px-[95px] h-[91px] flex items-center justify-between">
          <Image
            alt="01 Quantum"
            src="/header_assets/logo.svg"
            width={60}
            height={60}
            className="object-contain"
          />

          {/* Navigation */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center list-none">
              {navLinks.flatMap(({ label, href }, index) => {
                const items = [
                  <li key={`divider-${label}`}>
                    <div className="w-px h-[45px] bg-[#B6BBCD]" />
                  </li>,
                  <li key={`link-${label}`}>
                    <a
                      href={href}
                      className="text-white text-[12px] font-normal hover:text-[#71bfff] transition-colors px-6"
                    >
                      {label}
                    </a>
                  </li>,
                ];
                if (index === navLinks.length - 1) {
                  items.push(
                    <li key="divider-end">
                      <div className="w-px h-[45px] bg-[#B6BBCD]" />
                    </li>
                  );
                }
                return items;
              })}
            </ul>
          </nav>
        </div>
      </header>
  );
}