"use client";

import { useMemo } from "react";
import Lottie from "lottie-react";

interface UseLottieProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

export function useLottie({
  animationData,
  loop = true,
  autoplay = true,
  style = { width: 200, height: 200 },
}: UseLottieProps) {
  // Lottie 컴포넌트를 반환
  const LottieComponent = useMemo(
    () => (
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={style}
      />
    ),
    [animationData, loop, autoplay, style]
  );

  return LottieComponent;
}
