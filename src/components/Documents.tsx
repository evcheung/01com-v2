import {
  DocumentsCard,
  type DocumentsCardData,
} from "@/components/resources/documents/DocumentsCard";

/* ── Data ─────────────────────────────────────────────────────────── */
const cards: DocumentsCardData[] = [
  {
    title: "User Guide",
    items: [
      {
        title: "IronCAP™ X",
        href: "https://www.01com.com/01com/ironcap-x/webhelp/index.htm#t=IronCAP_X%2FWelcome_to_IronCap_X.htm",
      },
      {
        title: "IronCAP™ InTouch",
        href: "https://www.01com.com/01com/imintouch/webhelp/desktop/Welcome.htm",
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
      { title: "IronCAP™ XMail (FREE Personal Usage)", href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__locator.01com.com_login.php&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=JF5OjZm5xc0erggdxCuUy4qYb7v3yar5u5aSNUxKn10&e=" },
      { title: "IronCAP™ XMail (Business Usage)", href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__locator.01com.com_login.php&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=JF5OjZm5xc0erggdxCuUy4qYb7v3yar5u5aSNUxKn10&e=" },
      { title: "IronCAP™ Co-Branding Guideline", href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__locator.01com.com_login.php&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=JF5OjZm5xc0erggdxCuUy4qYb7v3yar5u5aSNUxKn10&e=" },
    ],
  },
  {
    title: "FAQs",
    items: [
      { title: "IronCAP™", href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__01com.com_imintouch-2Dremote-2Dpc-2Ddesktop_faqs_&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=omcXqMC6ZoBsNVua1usK87gtZk_u4ZvCgG5-_D3rknw&e=" },
      { title: "IronCAP™ Key (coming soon)" },
      { title: "IronCAP™ Toolkits", href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__www.ironcap.ca_ironcap-2Dtoolkits_faq_&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=6U81CLaI4mUNE9H-aGqqXUP2ikbRgSt-5yeBAjVSpwQ&e=" },
      { title: "IronCAP™ InTouch", href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__01com.com_imintouch-2Dremote-2Dpc-2Ddesktop_faqs_&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=omcXqMC6ZoBsNVua1usK87gtZk_u4ZvCgG5-_D3rknw&e=" },
      { title: "IronCAP™ OnCall", href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__www.01com.com_imoncall-2Dremote-2Dhelp-2Ddesk_faqs_-3Foption-3Dcom-5Fcontent-26view-3Darticle-26id-3D536-26Itemid-3D143-26bRedirected-3D1&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=RlMZf7cIBduJAtjRslTAJNbUO0XzcwE1585ieLihnCk&e=" },
      { title: "General Post-Quantum Security", href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__01com.com_imintouch-2Dremote-2Dpc-2Ddesktop_faqs_&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=rEJur_OGYQNs-phXiKUcBPKldLTp6HsLpSHEZOZDNmw&m=m1Op600E1VbudoCuRCNoEgQ7c6miCl6yRFsh-ajVRaw10in3CmrbVO4MlT4G9l2d&s=omcXqMC6ZoBsNVua1usK87gtZk_u4ZvCgG5-_D3rknw&e=" },
    ],
  },
];

export const DocumentsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 gap-y-6 lg:gap-y-8 items-stretch auto-rows-fr">
      {cards.map((c) => (
        <DocumentsCard key={c.title} data={c} />
      ))}
    </div>
  );
};
