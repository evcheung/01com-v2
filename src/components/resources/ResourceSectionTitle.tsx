import Image from "next/image";

interface ResourceSectionTitleProps {
  title: string;
  iconSrc?: string;
}

export function ResourceSectionTitle({
  title,
  iconSrc,
}: ResourceSectionTitleProps) {
  return (
    <div className="flex items-center gap-4 sm:gap-6 mb-12">
      <h2 className="text-quantum-blue text-[24px] sm:text-[26px] font-medium leading-[30px] whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-lite-gray/60" />
      {iconSrc ? (
        <div className="flex items-center justify-center w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] text-steel-gray shrink-0">
          <Image
            src={iconSrc}
            alt=""
            aria-hidden="true"
            className="object-contain"
            width={64}
            height={64}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ResourceSectionTitle;
