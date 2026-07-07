import { ResourcesSubMenu } from "@/components/resources/ResourcesSubMenu";
import { Bottom } from "@/components/resources/Bottom";
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="font-[family-name:var(--font-urbanist)] mx-auto w-full bg-white"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ─── Page Title ─── */}
      <section className="bg-black flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 py-10 sm:py-12 min-h-[140px] lg:min-h-[196px]">
        <h1 className="text-white text-[35px] sm:text-[42px] lg:text-[50px] font-medium leading-tight lg:leading-[50px]">
          Resources
        </h1>
      </section>

      {/* ─── Sub Menu (shared across all /resources pages) ─── */}
      <ResourcesSubMenu />

      {children}
      <Bottom />
    </div>
  );
}
