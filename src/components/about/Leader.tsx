import Image from "next/image";

interface LeaderProps {
  name: string;
  title: string;
  pic?: string;
  linkedIn: string;
  bio: string[];
}

export const Leader = ({ name, title, pic, linkedIn, bio }: LeaderProps) => {
  return (
    <div className="flex flex-col gap-6 bg-[#f8f9fb] p-6 sm:p-8 md:flex-row md:gap-10 md:p-10">
      {pic ? (
        <Image
          src={pic}
          alt={name}
          className="h-[155px] w-[155px] shrink-0 rounded-[8px] object-cover md:h-[220px] md:w-[220px]"
          width={220}
          height={220}
        />
      ) : (
        <div
          aria-label={`${name} initials`}
          className="flex h-[155px] w-[155px] shrink-0 items-center justify-center rounded-[8px] bg-quantum-blue text-4xl font-medium text-white md:h-[220px] md:w-[220px] md:text-5xl"
        >
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>
      )}
      <div className="flex w-full flex-col items-start md:flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex w-full items-end justify-between gap-6 pr-2">
            <h3 className="text-quantum-blue text-[24px] font-medium leading-tight">
              {name}
            </h3>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} LinkedIn`}
            >
              <Image
                src="/about_assets/in.svg"
                alt="LinkedIn"
                width={18}
                height={18}
                className="-translate-y-[7px] hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <p className="text-steel-gray text-[15px] leading-snug">{title}</p>
        </div>
        <div className="mt-6 space-y-4 text-steel-gray text-[14px] leading-[22px]">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
