import { Button } from "../ui/button";

export const Bottom = () => {
  return (
    <div className="bg-white py-16 flex justify-center items-center px-24 min-h-[196px]">
      <Button
        text=" LEARN MORE ABOUT 01 QUANTUM PRODUCTS"
        url="/products"
        border="border-quantum-green/60"
        textColor="text-quantum-green"
        hoverBg="hover:bg-quantum-green/10"
      />
    </div>
  );
};
