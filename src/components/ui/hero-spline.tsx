import Spline from '@splinetool/react-spline/next';

export const HeroSpline = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <Spline
        scene="https://prod.spline.design/2fFMhw34bG44HsUz/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
