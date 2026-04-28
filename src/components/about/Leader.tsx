interface LeaderProps {
  name: string;
  title: string;
  bun: string;
  pic: string;
}

export const Leader = ({ name, title, bun, pic }: LeaderProps) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <img
        src={pic}
        alt={name}
        className="w-[155px] h-[155px] rounded-[12px] object-cover mb-1"
      />
      <h3 className="text-quantum-blue text-[16px] font-medium leading-tight">
        {name}
      </h3>
      <p className="text-steel-gray text-[13px] leading-snug">{title}</p>
      <a
        href="#"
        className="text-steel-gray text-[13px] hover:text-quantum-blue transition-colors"
      >
        {bun}
      </a>
      <a href="#" aria-label={`${name} LinkedIn`} className="mt-0.5">
        <img
          src="/about_assets/in.svg"
          alt="LinkedIn"
          width={22}
          height={22}
          className="hover:opacity-80 transition-opacity"
        />
      </a>
    </div>
  );
};
