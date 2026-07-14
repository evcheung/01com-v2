import {
  DocumentsCard,
  type DocumentsCardData,
} from "@/components/resources/documents/DocumentsCard";

/* ── Data ─────────────────────────────────────────────────────────── */
export const documentsCards: DocumentsCardData[] = [
  {
    title: "User's Guide",
    items: [
      {
        title: "IronCAP™ X",
        href: "https://www.01com.com/01com/ironcap-x/webhelp/index.htm#t=IronCAP_X%2FWelcome_to_IronCap_X.htm",
      },
      {
        title: "IronCAP™ Tutorial",
        href: "https://www.youtube.com/watch?v=iKSD8MYShsY",
      },
      {
        title: "IronCAP™ InTouch",
        href: "https://locator.01com.com/desktop/iitwebhelp/en/outputs/index.htm#t=IIT%2FFirst_Topic.htm",
      },
      {
        title: "IronCAP™ OnCall",
        href: "https://www.01com.com/01com/imoncall/webhelp/desktop/welcome.htm",
      },
    ],
  },
  {
    title: "Downloads",
    items: [
      {
        title: "IronCAP™ XMail",
        href: "https://www.01com.com/ironcap-x/personal",
      },
      {
        title: "IronCAP™ InTouch",
        href: "https://locator.01com.com/ecommerce/account.php",
      },
      {
        title: "IronCAP™ InTouch (client)",
        href: "https://01com.com/downloads/IITViewer.msi",
      },
      {
        title: "IronCAP™ OnCall",
        href: "https://imoncall.01com.com/go/freeversion.php",
      },
      {
        title: "IronCAP™ Co-Branding Guideline",
        href: "https://www.01com.com/pdf/ironcap-co-branding-guideline.pdf",
      },
    ],
  },
];

export const supportDocumentCards: DocumentsCardData[] = [
  documentsCards[0],
  documentsCards[1],
  {
    title: "FAQs",
    items: [
      {
        title: "IronCAP™ Toolkits",
        href: "https://www.ironcap.ca/ironcap-toolkits/faq/",
      },
      { title: "IronCAP™ XMail", href: "/faq/ironcap-x" },
      { title: "IronCAP™ InTouch", href: "/faq/ironcap-intouch" },
      { title: "IronCAP™ OnCall", href: "/faq/ironcap-oncall" },
    ],
  },
];

export const DocumentsCards = ({
  cards = documentsCards,
}: {
  cards?: DocumentsCardData[];
} = {}) => {
  const gridClass =
    cards.length <= 2
      ? "mx-auto grid max-w-[980px] grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7 gap-y-6 lg:gap-y-8 items-stretch auto-rows-fr"
      : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 gap-y-6 lg:gap-y-8 items-stretch auto-rows-fr";

  return (
    <div className={gridClass}>
      {cards.map((c) => (
        <DocumentsCard key={c.title} data={c} />
      ))}
    </div>
  );
};
