import TitleSection from "@/components/title-section";
import { MENU_DATA_KEY } from "@/constants/menu";
import { aboutData } from "@/data/about";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div id={MENU_DATA_KEY.ABOUT} className="relative my-12 lg:my-16">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <TitleSection title="About me" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center ">
          <p className="text-info uppercase mb-5 text-xl">Who i am?</p>
          <p className="text-sm lg:text-lg">{aboutData.content}</p>
        </div>
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <Image
            src={aboutData.avatar}
            alt="profile"
            width={300}
            height={300}
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
