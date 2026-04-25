"use client";

import Lottie from "lottie-react";

interface LottiePlayerProps {
  src: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  speed?: number;
}

export default function LottiePlayer({
  src,
  loop = true,
  autoplay = true,
  className = "",
  speed = 1,
}: LottiePlayerProps) {
  return (
    <div className={className}>
      <Lottie
        animationData={src}
        loop={loop}
        autoplay={autoplay}
        style={{ animationDuration: `${1 / speed}s` }}
      />
    </div>
  );
}
