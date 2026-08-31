import { NewsletterCard } from "@/components/resources/newsletters/NewsletterCard";
import { fetchSanity } from "@/sanity/lib/client";
import { NEWSLETTERS_QUERY, RELEASES_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

const ITEM_COUNT = 6;

export default async function PressReleasesNewslettersPage() {
  const [releases, newsletters] = await Promise.all([
    fetchSanity(RELEASES_QUERY, { start: 0, end: ITEM_COUNT }),
    fetchSanity(NEWSLETTERS_QUERY, { start: 0, end: ITEM_COUNT }),
  ]);

  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[95px] space-y-20">
        <section id="press-releases" className="scroll-mt-10">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
              Press Releases
            </h2>
            <div className="flex-1 h-px bg-lite-gray/60" />
            <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
              <Image
                src="/resources_assets/press_i.svg"
                alt=""
                aria-hidden="true"
                className="object-contain"
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">
            {releases.map(
              (item: {
                _id: string;
                date: string;
                description: string;
                link: string;
              }) => (
                <article
                  key={item._id}
                  className="bg-white rounded-bl-[12px] rounded-tr-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-8 py-8 flex flex-col"
                >
                  <p className="text-steel-gray text-[13px] leading-[20px] mb-3">
                    {item.date}
                  </p>
                  <h3 className="text-[#2b2f38] text-[15px] leading-[22px] font-normal mb-6 flex-1">
                    {item.description}
                  </h3>
                  <Link
                    target="_blank"
                    href={item.link}
                    className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline self-start"
                  >
                    Read More
                  </Link>
                </article>
              ),
            )}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/resources/press-releases"
              className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline"
            >
              View All Press Releases
            </Link>
          </div>
        </section>

        <section id="newsletters" className="scroll-mt-10">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-quantum-blue text-[26px] font-medium leading-[30px] whitespace-nowrap">
              Newsletters
            </h2>
            <div className="flex-1 h-px bg-lite-gray/60" />
            <div className="flex items-center justify-center w-[50px] h-[50px] text-steel-gray shrink-0">
              <Image
                src="/resources_assets/nletter_i.svg"
                alt=""
                aria-hidden="true"
                className="object-contain"
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8 justify-items-center">
            {newsletters.map(
              (item: {
                _id: string;
                year: string;
                month: string;
                link: string;
              }) => (
                <NewsletterCard
                  key={item._id}
                  year={item.year}
                  month={item.month}
                  link={item.link}
                />
              ),
            )}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/resources/newsletters"
              className="text-quantum-blue text-[12px] font-semibold uppercase tracking-[0.12em] hover:underline"
            >
              View All Newsletters
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
