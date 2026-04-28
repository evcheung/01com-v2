import { ResourcesSubMenu } from "@/components/resources/ResourcesSubMenu";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="font-[family-name:var(--font-urbanist)] mx-auto w-full max-w-[1512px] bg-white"
      style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}
    >
      {/* ─── Page Title ─── */}
      <section className="bg-black flex items-center px-24 min-h-[196px]">
        <h1 className="text-white text-[50px] font-medium leading-[50px]">
          Resources
        </h1>
      </section>

      {/* ─── Sub Menu (shared across all /resources pages) ─── */}
      <ResourcesSubMenu />

      {children}
    </div>
  );
}
