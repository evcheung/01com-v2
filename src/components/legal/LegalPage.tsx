import type { ReactNode } from "react";
import { Titles } from "@/components/Titles";

interface LegalPageProps {
  title: string;
  intro: ReactNode;
  children: ReactNode;
}

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="border-t border-black/10 py-8 first:border-t-0 first:pt-0">
      <h2 className="mb-4 text-[22px] font-medium leading-[30px] text-quantum-blue">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-[24px] text-steel-gray">
        {children}
      </div>
    </section>
  );
}

export function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <main className="bg-white">
      <Titles text={title} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1512px] px-6 pb-10 pt-12 sm:px-8 md:pb-12 md:pt-20 lg:px-10 xl:px-[95px]">
          <article className="mx-auto max-w-[920px]">
            <div className="mb-10 space-y-4 text-[18px] leading-[28px] text-steel-gray">
              {intro}
            </div>
            <div className="space-y-0">{children}</div>
          </article>
        </div>
      </section>
    </main>
  );
}
