"use client";
import React, { useEffect, useRef } from "react";

interface LottieAnimationProps {
  animationData: object;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const importLottie = async () => {
      if (typeof window !== "undefined") {
        try {
          const Lottie = (await import("lottie-web")).default;

          if (ref.current) {
            const animation = Lottie.loadAnimation({
              container: ref.current,
              renderer: "svg",
              loop: true,
              autoplay: true,
              animationData: animationData,
            });

            return () => animation.destroy();
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    importLottie();
  }, [animationData]);

  return <div ref={ref} />;
};

export default LottieAnimation;
