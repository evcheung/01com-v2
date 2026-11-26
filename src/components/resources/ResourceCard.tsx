import Image from "next/image";
import { Fragment } from "react";

type ResourceCardKind = "pdf" | "video" | "link";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  kind?: ResourceCardKind;
  eyebrow?: string;
  date?: string;
}

function ResourceCardIcon({ kind = "link" }: { kind?: ResourceCardKind }) {
  if (kind === "pdf") {
    return (
      <Image
        src="/investor_relations_assets/pdf.svg"
        alt=""
        aria-hidden="true"
        width={18}
        height={18}
        className="shrink-0"
      />
    );
  }

  if (kind === "video") {
    return (
      <span
        aria-hidden
        className="inline-block w-[16px] h-[16px] rounded-full border-2 border-quantum-green relative shrink-0"
      >
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderLeft: "5px solid #79c99c",
            borderTop: "3px solid transparent",
            borderBottom: "3px solid transparent",
          }}
        />
      </span>
    );
  }

  return (
    <Image
      src="/investor_relations_assets/redirect.svg"
      alt=""
      aria-hidden="true"
      width={16}
      height={16}
      className="shrink-0"
    />
  );
}

function renderTrademarkText(text: string) {
  return text.split(/(™|\bTM\b)/g).map((part, index) => {
    if (part === "™" || part === "TM") {
      return (
        <sup key={`${part}-${index}`} className="align-super text-[0.55em]">
          {part}
        </sup>
      );
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

export function ResourceCard({
  title,
  description,
  href,
  ctaLabel,
  kind = "link",
  eyebrow,
  date,
}: ResourceCardProps) {
  return (
    <article className="h-full rounded-[20px] border border-lite-gray/60 bg-white px-6 py-7 sm:px-8 flex flex-col">
      {eyebrow ? (
        <p className="text-quantum-green text-[12px] font-semibold uppercase tracking-[0.12em] mb-3">
          {eyebrow}
        </p>
      ) : null}

      <h3 className="text-[#2b2f38] text-[20px] font-medium leading-[28px] mb-4">
        {renderTrademarkText(title)}
      </h3>

      <p className="text-steel-gray text-[15px] leading-[24px] flex-1">
        {renderTrademarkText(description)}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline"
        >
          <ResourceCardIcon kind={kind} />
          {ctaLabel}
        </a>
        {date ? (
          <time dateTime={date} className="text-steel-gray text-[14px]">
            {new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            })}
          </time>
        ) : null}
      </div>
    </article>
  );
}

export default ResourceCard;
