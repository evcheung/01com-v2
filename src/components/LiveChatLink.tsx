"use client";

import type { MouseEvent, ReactNode } from "react";

type LiveChatLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  windowName?: string;
};

const POPUP_WIDTH = 520;
const POPUP_HEIGHT = 720;

export default function LiveChatLink({
  href,
  children,
  className,
  windowName = "live-chat",
}: LiveChatLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const left = Math.max((window.screen.width - POPUP_WIDTH) / 2, 0);
    const top = Math.max((window.screen.height - POPUP_HEIGHT) / 2, 0);
    const features = [
      "popup=yes",
      `width=${POPUP_WIDTH}`,
      `height=${POPUP_HEIGHT}`,
      `left=${Math.round(left)}`,
      `top=${Math.round(top)}`,
      "resizable=yes",
      "scrollbars=yes",
    ].join(",");

    const popup = window.open("", windowName, features);

    if (!popup) {
      return;
    }

    event.preventDefault();
    popup.opener = null;
    popup.location.href = href;
    popup.focus();
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
