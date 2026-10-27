import { Fragment } from "react";

export function Trademark() {
  return <sup className="align-super text-[0.55em] leading-none">TM</sup>;
}

export function TrademarkText({ text }: { text: string }) {
  return text.split(/(™|\bTM\b)/g).map((part, index) =>
    part === "™" || part === "TM" ? (
      <Trademark key={`${part}-${index}`} />
    ) : (
      <Fragment key={`${part}-${index}`}>{part}</Fragment>
    )
  );
}
