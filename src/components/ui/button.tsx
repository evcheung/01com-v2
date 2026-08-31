import {GreenDots} from "@/components/ui/GreenDots";

interface ButtonProps {
  text: string;
  url: string;
  border?: string;
  textColor?: string;
  hoverBg?: string;
  bgDots?: string;
  isBlank?: boolean | "true" | "false";
}


export const Button = ({ text, url, border, textColor, hoverBg, bgDots, isBlank }: ButtonProps) => {
  const target = isBlank == "true" ? "_blank" : undefined;
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;
  return (
    <a
      href={url}
      target={target}
      rel={rel}
      className={`inline-flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-2 border ${border || "border-white/60"} rounded-bl-lg rounded-tr-lg ${textColor || "text-white"} text-[12px] font-medium uppercase tracking-widest text-center leading-[1.4] px-5 sm:px-6 py-3 whitespace-normal sm:flex-nowrap sm:whitespace-nowrap ${hoverBg || "hover:bg-white/10"} transition-colors`}>
      {text}
      <GreenDots color={bgDots}/>
    </a>
  );
};
