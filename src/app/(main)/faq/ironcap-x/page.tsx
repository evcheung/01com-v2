"use client";

import Link from "next/link";
import { Bottom } from "@/components/resources/Bottom";
import { useEffect, useState } from "react";
import { FaqBreadcrumb, Title } from "@/components/faq/Title";
import { IRONCAP_X_FREE_DOWNLOAD_ROUTE } from "@/components/products/ironcapDownloadLinks";

const Trademark = () => <sup className="text-[0.55em]">™</sup>;

type Faq = { id: string; question: React.ReactNode; answer: React.ReactNode };

type FaqCategory = {
  id: string;
  label: React.ReactNode;
  items: Faq[];
};

const faqCategories: FaqCategory[] = [
  {
    id: "generalQuestions",
    label: "General Questions",
    items: [
      {
        id: "whatIs",
        question: (
          <>
            What Is IronCAP<Trademark /> XMail?
          </>
        ),
        answer: (
          <>
            IronCAP<Trademark /> XMail{" "}is the world&apos;s first Quantum-safe end-to-end
            email encryption system utilizing IronCAP Crypto (ICC) as its
            cryptographic foundation with post-quantum cryptographic algorithms
            that are approved by NIST (National Institute of Standards and
            Technology in the US).
          </>
        ),
      },
      {
        id: "freeAccount",
        question: "How do I sign up for a FREE account?",
        answer: (
          <>
            IronCAP<Trademark /> XMail{" "}is free for personal usage. To sign up for a
            FREE account, visit{" "}
            <Link
              href={IRONCAP_X_FREE_DOWNLOAD_ROUTE}
              className="text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
            >
              the IronCAP XMail download page
            </Link>{" "}
            to get the free personal version of IronCAP<Trademark /> XMail.
          </>
        ),
      },
      {
        id: "systemRequirement",
        question: (
          <>
            What is the system requirement to use IronCAP<Trademark /> XMail?
          </>
        ),
        answer: (
          <>
            IronCAP<Trademark /> XMail{" "}requires Windows 7 or above with Outlook
            2010+ as the email client. Note: Web-based clients such as Gmail,
            Yahoo, and Hotmail will be supported in a future version.
          </>
        ),
      },
      {
        id: "outlook",
        question: (
          <>
            Can IronCAP<Trademark /> XMail{" "}work with Outlook?
          </>
        ),
        answer: (
          <>
            Yes, IronCAP<Trademark /> XMail{" "}works with Outlook 2010 or above.
          </>
        ),
      },
      {
        id: "webEmail",
        question: (
          <>
            Can IronCAP<Trademark /> XMail{" "}work with other web-based email (e.g.
            Gmail)?
          </>
        ),
        answer: (
          <>
            Not in the current version. Future version of IronCAP<Trademark /> XMail{" "}
            will work with web-based email clients such as Gmail,
            Yahoo, and Hotmail via installation of a browser plug-in. Compatible
            browsers are Chrome and Firefox.
          </>
        ),
      },
      {
        id: "mobileEmail",
        question: (
          <>
            Does IronCAP<Trademark /> XMail{" "}support mobile email clients?
          </>
        ),
        answer: (
          <>
            Current version of IronCAP<Trademark /> XMail{" "}supports Windows-based
            Outlook. Support of webmail clients is coming soon.
          </>
        ),
      },
      {
        id: "multipleEmail",
        question: "Can I manage more than 1 email address on one computer?",
        answer: (
          <>
            Current version of IronCAP<Trademark /> XMail{" "}only supports 1 email
            address per license. Future version will allow up to 3 email
            addresses on the same computer.
          </>
        ),
      },
    ],
  },
  {
    id: "freeVsBusiness",
    label: "Free vs Business Account",
    items: [
      {
        id: "charge",
        question: "Will I be charged at all for the FREE Personal Usage account?",
        answer: (
          <>
            IronCAP<Trademark /> XMail{" "}is free for personal usage. No credit card is
            needed to sign up for a FREE Personal Usage account.
          </>
        ),
      },
      {
        id: "limitation",
        question: "Is there any feature limitation on the FREE account?",
        answer:
          "No. There is no feature limitation on the FREE account. The only limit is one user per FREE account for personal usage.",
      },
      {
        id: "trial",
        question: "Can I use the FREE account as a trial for a Business account?",
        answer:
          "Yes. The Terms of Service allows businesses to use a FREE account as trial for 30 days (even if it is for commercial usage). You are legally required to convert to a Business account if you continue to use it beyond the 30 days.",
      },
      {
        id: "oneUser",
        question:
          "Can I use the FREE account for my business with only one user after the 30-day trial?",
        answer:
          "Yes. You can continue to use the FREE account to read encrypted messages even though you are a business entity. However, you need to convert it to a Business account if you wish to send encrypted emails to your clients (i.e. for commercial usage). If you do not convert the account, all features still work but you may have legally breached the Terms of Use. We reserve the right to terminate the service at any time without giving prior notice.",
      },
      {
        id: "compatible",
        question: (
          <>
            Is the IronCAP<Trademark />{" "}Key compatible with the FREE account?
          </>
        ),
        answer: (
          <>
            Yes. IronCAP<Trademark />{" "}Key is fully compatible with the FREE
            account. You will need to make a one-time non-refundable purchase of
            the IronCAP<Trademark />{" "}Key.
          </>
        ),
      },
      {
        id: "clients",
        question:
          "If I have a Business account, can my clients use a FREE account to read my encrypted emails?",
        answer:
          "Yes. Your clients can use a FREE account to read your encrypted messages. If they are a business entity, they will need to convert to a Business account only when they want to send encrypted emails to their clients (i.e. for commercial usage).",
      },
      {
        id: "expire",
        question: "What happens when a business account expires?",
        answer: (
          <>
            You can still use the expired IronCAP<Trademark /> XMail{" "}Business
            license to read your encrypted messages. However, the ability to
            encrypt emails/files and to digitally sign your emails/files will be
            disabled until you have resubscribed.
          </>
        ),
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    items: [
      {
        id: "security",
        question: (
          <>
            How secure is the IronCAP<Trademark /> XMail{" "}private key?
          </>
        ),
        answer: (
          <>
            The IronCAP<Trademark /> XMail{" "}private key is quantum-safe. This means
            it is not only safe against attacks from classical computers but
            also against attacks from future quantum computers. Its underlying
            cryptographic technology is IronCAP Crypto (ICC) which contains
            post-quantum cryptographic algorithms that are approved by NIST
            (National Institute of Standards and Technology in the US).
          </>
        ),
      },
      {
        id: "privateKey",
        question: "Where does my private key reside?",
        answer: (
          <>
            Your IronCAP<Trademark /> XMail{" "}private key is stored locally in the
            computer where you have installed IronCAP<Trademark /> XMail.
          </>
        ),
      },
      {
        id: "keyCopy",
        question: (
          <>
            Does your IronCAP<Trademark /> XMail{" "}server store a copy of my private
            key?
          </>
        ),
        answer: (
          <>
            No copy of your private key is stored in our IronCAP<Trademark /> XMail{" "}
            server.
          </>
        ),
      },
      {
        id: "encrypted",
        question: "Is my private key encrypted?",
        answer: (
          <>
            Yes, your IronCAP<Trademark /> XMail{" "}private key is always encrypted
            using your user password.
          </>
        ),
      },
      {
        id: "passwordStorage",
        question: "Where is the user password stored?",
        answer: (
          <>
            Your IronCAP<Trademark /> XMail{" "}user password is not stored anywhere,
            neither on our IronCAP<Trademark /> XMail{" "}server nor your own
            computer/device. It is being used to encrypt your private key. The
            only way to decrypt your private key is to provide the correct
            password. In other words, it is impossible to retrieve your user
            password if you have forgotten it. We can only facilitate a reset of
            the password.
          </>
        ),
      },
      {
        id: "forget",
        question: "What if I forget the user password?",
        answer: (
          <>
            IronCAP<Trademark /> XMail{" "}allows the Administrator of a Business account
            to reset the password of every user under the account. The password
            reset feature is not available to the individual user. To access the
            password reset feature, the account Administrator needs to provide
            the Administrator password to authenticate. There is a disaster
            recovery option defined by the Administrator of the account (5 secret
            questions and answers) to reset the Administrator password in case it
            is forgotten. The Administrator must know the disaster recovery
            secret questions and answers.
          </>
        ),
      },
      {
        id: "quantumSafeDefinition",
        question: "What does quantum-safe cryptography mean?",
        answer:
          "Quantum Computer is a new breed of computer using a completely different computational concept than the simple silicon-based 0/1 as in the world of classical computers. Quantum Computer is based on quantum mechanics that allows simultaneous existence of 0/1 and therefore operating like millions of classical computers working in parallel. Its excessive computing power is making possible a lot of new computational tasks that are otherwise not possible by classical computers. However, its excessive power also allows hackers to crack virtually all modern encryption technologies. Quantum-safe is the fundamental bedrock in post-quantum cyber security. A quantum-safe cryptography is a cryptographic system that is safe against attacks from Quantum Computers.",
      },
      {
        id: "computerStolen",
        question: "What if my computer is stolen?",
        answer:
          "All the encrypted emails stay encrypted and a password is required to decrypt the private key in order to read the encrypted emails.",
      },
      {
        id: "guessed",
        question: "Can the password be guessed eventually?",
        answer: (
          <>
            Yes, especially if you use the same password for different
            applications. The best bet for ultra security will be to purchase the
            optional IronCAP<Trademark />{" "}Key device. IronCAP<Trademark />{" "}Key is
            a USB device that offloads the private key and cryptographic
            functions inside the device. If the IronCAP<Trademark />{" "}Key has
            been removed when the computer is stolen, there is zero chance that
            the encrypted emails can be compromised because the private key is
            not even on the computer.
          </>
        ),
      },
      {
        id: "keyStolen",
        question: (
          <>
            What if the IronCAP<Trademark />{" "}Key itself is stolen?
          </>
        ),
        answer: (
          <>
            Similar to a credit card, the private key inside the IronCAP<Trademark />{" "}
            Key is protected by a PIN. If the PIN is entered incorrectly 5 times
            the encrypted private key inside the IronCAP<Trademark />{" "}
            Key will be self-destroyed. The legitimate user needs
            to purchase a new IronCAP<Trademark />{" "}Key and use the Administrator
            feature to restore the IronCAP<Trademark />{" "}Key.
          </>
        ),
      },
    ],
  },
  {
    id: "administratorFunctions",
    label: "Administrator Functions",
    items: [
      {
        id: "whoIsAdmin",
        question: "Who is the Administrator?",
        answer: (
          <>
            The Administrator of an IronCAP<Trademark /> XMail{" "}account is usually
            the person that signs up for the account.
          </>
        ),
      },
      {
        id: "adminAbilities",
        question: "What can the Administrator do that a regular user cannot?",
        answer:
          "The Administrator can launch the User Manager, My Account, and change some admin settings. User Management lets the Administrator add users, remove users, reset user password, etc. My Account lets the Administrator buy more user licenses. In addition, the Administrator can configure admin settings such as the Disaster Recovery settings, etc.",
      },
      {
        id: "adminSettings",
        question: "How to enter the special Admin Settings features?",
        answer: (
          <>
            The Administrator can simply launch the IronCAP<Trademark /> XMail{" "}
            configuration application and click the &quot;Settings&quot; button. IronCAP<Trademark /> XMail{" "}
            automatically detects if the user is the
            Administrator. The special Admin Settings features tabs (e.g.
            Password Policy) will only be presented if the user is the
            Administrator of the IronCAP<Trademark /> XMail{" "}account.
          </>
        ),
      },
      {
        id: "userManagement",
        question: 'How to enter the "User Management" feature?',
        answer: (
          <>
            The Administrator can simply launch the IronCAP<Trademark /> XMail{" "}
            configuration application and click the &quot;User Management&quot; button.
            The &quot;User Management&quot; button will only be available if the user is
            detected as being the Administrator of the IronCAP<Trademark /> XMail{" "}
            account.
          </>
        ),
      },
      {
        id: "addUsers",
        question: "How can the Administrator add users?",
        answer: (
          <>
            The Administrator can launch the IronCAP<Trademark /> XMail{" "}
            configuration application and click the &quot;User Management&quot; button.
            Then click &quot;Add User&quot;. Note: The IronCAP<Trademark /> XMail{" "}account must
            have enough unused licenses to permit this operation.
          </>
        ),
      },
      {
        id: "deleteUsers",
        question: "How can the Administrator delete users?",
        answer: (
          <>
            The Administrator can launch the IronCAP<Trademark /> XMail{" "}
            configuration application and click the &quot;User Management&quot; button.
            Select a user to be deleted and click &quot;Delete&quot;. Note: A free user
            license will be added back after a user has been deleted.
          </>
        ),
      },
      {
        id: "deletedUserRead",
        question: "Can a deleted user continue to read old encrypted emails?",
        answer: "Yes, but its computer cannot send encrypted emails anymore.",
      },
      {
        id: "uninstalledRead1",
        question: (
          <>
            Can old encrypted emails be read if IronCAP<Trademark /> XMail{" "}has been
            uninstalled from the computer?
          </>
        ),
        answer: (
          <>
            No, since the IronCAP<Trademark /> XMail{" "}private key does not exist
            anymore.
          </>
        ),
      },
      {
        id: "resetPassword",
        question: "How to reset the password for user?",
        answer: (
          <>
            The user is not allowed to reset the password. Only the Administrator
            is allowed to do that by launching the IronCAP<Trademark /> XMail{" "}
            configuration application, clicking the &quot;User Management&quot; button and
            selecting a user whose password needs to be reset. Click &quot;Edit&quot; and
            &quot;Reset Password&quot;.
          </>
        ),
      },
      {
        id: "myAccount",
        question: 'How to enter the "My Account" feature?',
        answer: (
          <>
            The Administrator can launch the IronCAP<Trademark /> XMail{" "}
            configuration application and click the &quot;My Account&quot; button. The
            &quot;User Management&quot; button will only be available if the user is
            detected as being the Administrator of the IronCAP<Trademark /> XMail{" "}
            account. The My Account feature is a web-based operation via the
            default browser interface. For enhanced security, the Administrator
            will be prompted to enter the password to authenticate before the My
            Account page will be opened. Since a FREE personal account only
            limits to one user, the user of a FREE personal account is also the
            administrator of the account.
          </>
        ),
      },
    ],
  },
  {
    id: "usingIronCAPX",
    label: (
      <>
        Using IronCAP<Trademark /> XMail
      </>
    ),
    items: [
      {
        id: "bothUser",
        question: (
          <>
            Is it necessary for both the sender and the recipient(s) to be an
            IronCAP<Trademark /> XMail{" "}User?
          </>
        ),
        answer: (
          <>
            Yes, both the sender and the recipient(s) must be an IronCAP<Trademark /> XMail{" "}
            user.
          </>
        ),
      },
      {
        id: "sendColleagues",
        question: (
          <>
            What if I try to send encrypted emails to my colleagues who are not
            IronCAP<Trademark /> XMail{" "}users?
          </>
        ),
        answer: (
          <>
            IronCAP<Trademark /> XMail{" "}will automatically detect if the recipient is
            an IronCAP<Trademark /> XMail{" "}user. If not, it will encrypt the message
            and insert an invitation message asking the recipient to click on the
            link to sign up for a FREE personal account. Once the recipient has
            signed up for a FREE personal account, the user can open the
            encrypted message and read.
          </>
        ),
      },
      {
        id: "sendSomeUsers",
        question: (
          <>
            Can I send the same encrypted message to some IronCAP<Trademark /> XMail{" "}
            users and some who are not?
          </>
        ),
        answer: (
          <>
            Yes, IronCAP<Trademark /> XMail{" "}will automatically differentiate them.
            Non-IronCAP<Trademark /> XMail{" "}users will receive the encrypted message
            plus an invitation message asking them to sign up for a FREE
            personal account.
          </>
        ),
      },
      {
        id: "stayEncrypted",
        question: "After decrypting a message, will it stay encrypted inside my Inbox?",
        answer:
          "Yes, the message continues to stay encrypted inside your Inbox once you have closed it.",
      },
      {
        id: "forward",
        question: "What if I forward my encrypted email?",
        answer: "You have an option to forward as encrypted or unencrypted.",
      },
      {
        id: "selectEncrypt",
        question: "Do I need to select to encrypt for every email I send out?",
        answer: (
          <>
            Yes, the default is unencrypted. However, you can change the default
            in the settings of IronCAP<Trademark /> XMail.
          </>
        ),
      },
      {
        id: "attachment",
        question: "Will the attachment be encrypted too?",
        answer:
          "The whole email is encrypted so the decryption process will also decrypt the underlying attachment (if any). However, if the attachment itself is an encrypted file, a separate decryption is necessary to open the encrypted file (i.e. double secured).",
      },
      {
        id: "uninstalledRead2",
        question: (
          <>
            Can old encrypted emails be read if IronCAP<Trademark /> XMail{" "}has been
            uninstalled from the computer?
          </>
        ),
        answer: (
          <>
            No, since the IronCAP<Trademark /> XMail{" "}private key does not exist
            anymore.
          </>
        ),
      },
      {
        id: "backup",
        question: "Why should I keep a backup of my private key?",
        answer: (
          <>
            For maximum security and privacy, IronCAP<Trademark /> XMail{" "}does not
            keep a copy of your private key in its server. Therefore, it is
            necessary for you to keep a backup of your private key in case of
            abnormal circumstances such as restoring IronCAP<Trademark /> XMail{" "}on a
            new computer after a computer has crashed, etc. It is strongly
            recommended to keep the backup inside a storage media residing on a
            different computer (e.g. an external storage, etc.). You will be
            prompted to specify the backup location during the installation of
            IronCAP<Trademark /> XMail.
          </>
        ),
      },
    ],
  },
  {
    id: "billing",
    label: "Billing",
    items: [
      {
        id: "upgrade",
        question: "How can I upgrade my FREE personal account to a Business account?",
        answer:
          'To upgrade a FREE personal account to a Business account, all you have to do is use the "My Account" feature and choose the option "Upgrade to a Business account". Enter your company information as well as the payment method and click "Pay Now".',
      },
      {
        id: "creditCards",
        question: (
          <>
            What credit cards does IronCAP<Trademark /> XMail{" "}accept?
          </>
        ),
        answer: (
          <>
            IronCAP<Trademark /> XMail{" "}accepts the following credit cards: Amex,
            VISA, and Mastercard. Your credit card bills will show the charge
            from 01 Quantum (www.01com.com).
          </>
        ),
      },
      {
        id: "invoice",
        question: "Is there an invoice billing option for corporate accounts?",
        answer:
          "Invoice billing is only available when a corporation does not allow credit card subscription. Please call our customer service at 1-800-668-2185 for details on setting up a credit account.",
      },
      {
        id: "addingUsersCharge",
        question: "How would I be charged when adding user licenses?",
        answer:
          "Your credit card will be billed on a prorated basis of the new user licenses up to the next billing cycle on the day when you add user licenses. E.g. if you have an annual account with 5 user licenses and decide to add an extra user license in the middle of a billing cycle you will be charged on your credit card 50% of the new user license. Then at the next billing cycle your credit card will be charged the full annual fee of the total 6 user licenses.",
      },
      {
        id: "removeLicenses",
        question: "How can I remove user licenses?",
        answer:
          'You can remove user licenses any time by calling our customer service at 1-800-668-2185. Please note that after cancellation, the "defunct" user licenses will be valid until the end of that paid billing cycle.',
      },
      {
        id: "annualBilling",
        question: "What is the advantage of choosing annual billing?",
        answer: "Annual billing enjoys a 17% discount.",
      },
      {
        id: "monthlyToAnnual",
        question:
          "Can I change my service plan from monthly billing to annual billing?",
        answer:
          "No. You cannot change the annual billing to monthly billing yourself. Please call our customer service at 1-800-668-2185 to discuss about any exceptional situations.",
      },
      {
        id: "annualToMonthly",
        question:
          "Can I change my service plan from annual billing to monthly billing?",
        answer:
          "Yes, you can change it any time. However, you need to call customer service at 1-800-668-2185 to facilitate that.",
      },
      {
        id: "cancel",
        question: (
          <>
            Can I cancel my IronCAP<Trademark /> XMail{" "}account?
          </>
        ),
        answer: (
          <>
            Yes, you can cancel your IronCAP<Trademark /> XMail{" "}account any time.
            Please call our customer service at 1-800-668-2185 to facilitate
            that. Please note that after cancellation the user licenses will be
            valid until the end of that paid billing cycle.
          </>
        ),
      },
    ],
  },
  {
    id: "specialSituations",
    label: "Special Situations",
    items: [
      {
        id: "changedEmail",
        question: "I have changed my email address.",
        answer: (
          <>
            You will need to uninstall IronCAP<Trademark /> XMail{" "}and re-install
            with the new email address. Please note that encrypted emails under
            the old email address can no longer be decrypted.
          </>
        ),
      },
      {
        id: "convertBusiness",
        question: (
          <>
            I am the IT of a corporation and have tried IronCAP<Trademark /> XMail{" "}
            using the FREE account, how can I convert it to the Business
            account?
          </>
        ),
        answer:
          'If you decide to upgrade to the Business Account, all you have to do is to use the "My Account" feature and choose the option "Upgrade to a Business account". Enter your full company information, as well as the payment method and click "Pay Now".',
      },
      {
        id: "ITsubscribe",
        question: (
          <>
            I have tried IronCAP<Trademark /> XMail{" "}using the FREE account. How do I
            have my IT subscribe to it under a Business account of my company?
          </>
        ),
        answer: (
          <>
            Assuming you are not the IT of your company and the email address of
            your IT is different from yours, your IT has already created a
            Business account using their email address and they will be the
            Administrator. During user creation, your IT will need to enter the
            email address of the FREE account. When you or the FREE user runs
            the installation on their computer, IronCAP<Trademark /> XMail{" "}is
            smart enough to recognize that the installation is on top of an
            existing FREE IronCAP<Trademark /> XMail{" "}account. It will then tie the
            billing onto this Business account. The new private key will be
            installed on the computer while keeping the old private key so that
            the old encrypted emails can still be opened. The new public key
            (signed by the Admin) will be posted onto the IronCAP<Trademark /> XMail{" "}
            server, replacing the old one associated with the FREE account.
          </>
        ),
      },
      {
        id: "onHold",
        question: "A staff is taking a temporary leave. Can I put the user on-hold?",
        answer:
          "No. There is no such option. If you have deleted the user, the private key of that user will be revoked and it cannot be recovered.",
      },
    ],
  },
];

const DEFAULT_FAQ_CATEGORY_ID = faqCategories[0].id;

function getFaqCategoryIdFromHash() {
  const hash = window.location.hash.replace(/^#/, "");

  return faqCategories.some((category) => category.id === hash)
    ? hash
    : DEFAULT_FAQ_CATEGORY_ID;
}

function getFaqCategoryHref(categoryId: string) {
  if (categoryId === DEFAULT_FAQ_CATEGORY_ID) {
    return "/faq/ironcap-x";
  }

  return `/faq/ironcap-x#${categoryId}`;
}

function pushFaqCategoryHref(href: string) {
  if (`${window.location.pathname}${window.location.hash}` !== href) {
    window.history.pushState(null, "", href);
  }
}

function GreenDots() {
  return (
    <span aria-hidden className="inline-flex items-center gap-0.75">
      <span className="block size-1.25 rounded-full bg-quantum-green" />
      <span className="block size-1.25 rounded-full bg-quantum-green" />
      <span className="block size-1.25 rounded-full bg-quantum-green" />
    </span>
  );
}

export default function FaqIronCapXPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(DEFAULT_FAQ_CATEGORY_ID);
  const [openId, setOpenId] = useState<string | null>(null);
  const activeCategory =
    faqCategories.find((category) => category.id === activeCategoryId) ??
    faqCategories[0];

  useEffect(() => {
    const syncCategoryWithHash = () => {
      setActiveCategoryId(getFaqCategoryIdFromHash());
      setOpenId(null);
    };
    const frame = requestAnimationFrame(syncCategoryWithHash);

    window.addEventListener("hashchange", syncCategoryWithHash);
    window.addEventListener("popstate", syncCategoryWithHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncCategoryWithHash);
      window.removeEventListener("popstate", syncCategoryWithHash);
    };
  }, []);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setOpenId(null);
    pushFaqCategoryHref(getFaqCategoryHref(categoryId));
  };

  const handleActiveFaqHeadingClick = (
    _href: string,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    handleSelectCategory(DEFAULT_FAQ_CATEGORY_ID);
  };

  return (
    <div className="bg-white font-urbanist">
      <Title onActiveItemClick={handleActiveFaqHeadingClick} />

      <div className="grid grid-cols-1 lg:grid-cols-[405px_1fr]">
        <aside className="bg-black px-6 py-10 text-white sm:px-10 lg:px-12 lg:py-16">
          <h2 className="text-[20px] font-medium leading-8.5 text-white">
            Categories
          </h2>

          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:flex lg:flex-col">
            {faqCategories.map((category) => {
              const active = activeCategory.id === category.id;

              return (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => handleSelectCategory(category.id)}
                    aria-pressed={active}
                    className={`flex w-full cursor-pointer items-center gap-3 py-1 text-left transition-colors ${
                      active
                        ? "text-quantum-green underline underline-offset-4"
                        : "text-quantum-green hover:underline hover:underline-offset-4"
                    }`}
                  >
                    <GreenDots />
                    <span className="text-[15px] font-medium uppercase leading-8.5 break-words">
                      {category.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 lg:mt-16">
            <p className="text-quantum-green text-[20px] font-medium leading-8.5">
              Still have questions?
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-3 rounded-full border border-quantum-green px-5 py-2 text-[12px] font-medium uppercase text-quantum-green transition-colors hover:bg-quantum-green hover:text-black"
            >
              <span>Contact Us</span>
              <GreenDots />
            </Link>
          </div>
        </aside>

        <section className="relative self-start px-6 pt-16 pb-0 lg:px-13">
          <FaqBreadcrumb />
          <h2
            id={activeCategory.id}
            className="text-quantum-blue text-[30px] font-medium leading-11.5"
          >
            {activeCategory.label}
          </h2>

          <div className="mt-2 h-px w-full max-w-156.75 bg-lite-gray/40" />

          <ul className="mt-8 flex flex-col gap-3">
            {activeCategory.items.map((faq) => {
              const open = openId === faq.id;

              return (
                <li key={faq.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : faq.id)}
                    aria-expanded={open}
                    aria-controls={`${faq.id}-panel`}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 rounded-[9px] bg-linear-to-r from-[#f2f6f7] via-white to-[#f2f6f7] px-5 py-3 text-left transition-shadow hover:shadow-sm sm:px-7"
                  >
                    <span className="text-quantum-green text-[19px] font-normal leading-7.5 sm:text-[21px]">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className={`flex shrink-0 items-center gap-0.75 transition-transform ${
                        open ? "rotate-90" : ""
                      }`}
                    >
                      <span className="block size-1.25 rounded-full bg-quantum-green" />
                      <span className="block size-1.25 rounded-full bg-quantum-green" />
                      <span className="block size-1.25 rounded-full bg-quantum-green" />
                    </span>
                  </button>

                  <div
                    id={`${faq.id}-panel`}
                    aria-hidden={!open}
                    inert={!open}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                    <div
                      className="mt-2 rounded-[9px] bg-white px-5 py-4 text-[15px] leading-6 text-steel-gray shadow-sm sm:px-7"
                    >
                      {faq.answer}
                    </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <section className="flex justify-center bg-white py-16">
            <Bottom compact />
          </section>
        </section>
      </div>
    </div>
  );
}
