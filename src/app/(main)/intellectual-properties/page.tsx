import { IntellectualProperties } from "@/components/about/IntellectualProperties";

export default function IntellectualPropertiesPage() {
  return (
    <main>
      <section className="bg-black flex items-center px-6 md:px-24 min-h-[196px]">
        <h1 className="text-white text-[32px] md:text-[50px] font-medium leading-[50px]">
          Intellectual Properties
        </h1>
      </section>
      <IntellectualProperties />
    </main>
  );
}
