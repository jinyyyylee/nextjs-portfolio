"use client";

import loadingAnimation from "@/assets/js/lottie/loading.json";
import { useLottie } from "@/utils/hooks/useLottie";
import styles from "@/app/page.module.scss";

export default function Loading() {
  const loadingLottie = useLottie({
    animationData: loadingAnimation,
    style: { width: 300, height: 300, margin: "0 auto" },
  });

  return (
    <div className={styles.loading}>
      <div className="loading-spinner">{loadingLottie}</div>
    </div>
  );
}
