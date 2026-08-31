"use client";

import Image from "next/image";
import { useId, useState } from "react";

interface LeaderProps {
  name: string;
  title: string;
  pic: string;
  linkedIn: string;
  bio: string[];
}

export const Leader = ({ name, title, pic, linkedIn, bio }: LeaderProps) => {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const bioId = useId();

  return (
    <div className="flex flex-col gap-6 bg-[#f8f9fb] p-6 sm:p-8 md:flex-row md:gap-10 md:p-10">
      <Image
        src={pic}
        alt={name}
        className="h-[155px] w-[155px] shrink-0 rounded-[8px] object-cover md:h-[220px] md:w-[220px]"
        width={220}
        height={220}
      />
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-quantum-blue text-[24px] font-medium leading-tight">
          {name}
        </h3>
        <p className="text-steel-gray text-[15px] leading-snug">{title}</p>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          <button
            type="button"
            aria-expanded={isBioOpen}
            aria-controls={bioId}
            onClick={() => setIsBioOpen((open) => !open)}
            className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline"
          >
            {isBioOpen ? "Hide Bio" : "Bio"}
          </button>
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} LinkedIn`}
          >
            <Image
              src="/about_assets/in.svg"
              alt="LinkedIn"
              width={22}
              height={22}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
        <div
          id={bioId}
          hidden={!isBioOpen}
          className="mt-3 space-y-4 text-steel-gray text-[14px] leading-[22px]"
        >
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
