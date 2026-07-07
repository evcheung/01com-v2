import { Button } from "../ui/button";

interface BottomProps {
  text?: string;
  url?: string;
  isBlank?: boolean | "true" | "false";
}

export const Bottom = ({
  text = " LEARN MORE ABOUT 01 QUANTUM PRODUCTS",
  url = "/use-cases",
  isBlank = "false",
}: BottomProps) => {
  return (
    <div className="py-12 sm:py-16 flex justify-center items-center px-6 sm:px-10 lg:px-16 xl:px-24 min-h-[160px] sm:min-h-[196px]">
      <Button
        text={text}
        url={url}
        border="border-quantum-green/60"
        textColor="text-quantum-green"
        hoverBg="hover:bg-quantum-green/10"
        isBlank={isBlank}
      />
    </div>
  );
};
