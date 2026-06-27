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
      className={`inline-block border ${border || "border-white/60"} inline-flex items-center justify-center rounded-bl-lg rounded-tr-lg ${textColor || "text-white"} text-[12px] font-medium uppercase tracking-widest px-6 py-3 ${hoverBg || "hover:bg-white/10"} transition-colors`}>
      {text}
      <GreenDots color={bgDots}/>
    </a>
  );
};
