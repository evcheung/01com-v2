import {
  DocumentsCard,
  type DocumentsCardData,
} from "@/components/resources/documents/DocumentsCard";

/* ── Data ─────────────────────────────────────────────────────────── */
const cards: DocumentsCardData[] = [
  {
    title: "User Guides",
    items: [
      { title: "IronCAP XMail™ (FREE Personal Usage)", href: "#" },
      { title: "IronCAP XMail™ (Business Usage)", href: "#" },
      { title: "IronCAP XMail™ Tutorial", href: "#" },
      { title: "IronCAP™ InTouch", href: "#" },
      { title: "IronCAP™ OnCall", href: "#" },
    ],
  },
  {
    title: "Downloads",
    items: [
      { title: "IronCAP™ XMail (FREE Personal Usage)", href: "#" },
      { title: "IronCAP™ XMail (Business Usage)", href: "#" },
      { title: "IronCAP™ Co-Branding Guideline", href: "#" },
    ],
  },
  {
    title: "FAQs",
    items: [
      { title: "IronCAP™", href: "#" },
      { title: "IronCAP™ Key (coming soon)", href: "#" },
      { title: "IronCAP™ Toolkits", href: "#" },
      { title: "IronCAP™ InTouch", href: "#" },
      { title: "IronCAP™ OnCall", href: "#" },
      { title: "General Post-Quantum Security", href: "#" },
    ],
  },
];

export const DocumentsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8 items-stretch auto-rows-fr">
      {cards.map((c) => (
        <DocumentsCard key={c.title} data={c} />
      ))}
    </div>
  );
};
