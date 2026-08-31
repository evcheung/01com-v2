import LottiePlayer from "@/components/LottiePlayer";
import animation from "@/assets/animations/icon-IC-inTouch.json";

const Trademark = () => <sup className="text-[0.55em]">™</sup>;

export default function InTouchProductTitle() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
      <div className="flex w-full flex-shrink-0 justify-center sm:w-[130px] sm:justify-start">
        <LottiePlayer src={animation} className="h-[168px] w-[130px]" />
      </div>

      <div className="flex max-w-full flex-col justify-center gap-1 lg:max-w-[980px]">
        <h2 className="text-[24px] font-medium leading-[34px] text-quantum-blue sm:text-[30px] sm:leading-[46px]">
          IronCAP<Trademark /> InTouch
        </h2>

        <p className="text-[16px] font-medium leading-[28px] text-quantum-green sm:text-[20px] sm:leading-[34px]">
          Work remotely with quantum-safe, absolute security via any device from
          anywhere, anytime
        </p>
      </div>
    </div>
  );
}
