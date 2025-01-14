import TitleSectionVertical from "@/components/title-sectio-vertical";
import { MENU_DATA_KEY } from "@/constants/menu";
import { skillsData } from "@/data/skills";
import { skillsImage } from "@/lib/skill-image";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <div id={MENU_DATA_KEY.SKILLS} className="relative z-50 border-t my-12 lg:my-24 border-gradient2">
      <div className="w-[100px] h-[100px] bg-gradient-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center my-5 lg:my-8">
        <TitleSectionVertical title="Skills" />
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-gradient2 bg-gradient2 shadow-none shadow-gray-50 group-hover:border-gradient transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gradient to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className=" text-sm sm:text-lg text-center">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
    </div>
    </div>
  );
}
