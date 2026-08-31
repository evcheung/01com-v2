export function InTouchBlankSection({
  sectionTitle,
}: {
  sectionTitle: string;
}) {
  return (
    <section className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-[1512px] px-6 py-16 md:px-[95px]">
        <h2 className="sr-only">{sectionTitle}</h2>
      </div>
    </section>
  );
}

export default InTouchBlankSection;
