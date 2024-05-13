"use client";

import Lottie from "lottie-react";

type Props = {
  animationPath: any;
  width?: string;
};

const AnimationLottie = ({ animationPath, width = "95%" }:Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
