import { MENU_DATA_KEY } from "@/constants/menu";
import Image from "next/image";
import React from "react";
import section from "/public/section.svg";
import TitleSectionVertical from "@/components/title-sectio-vertical";
import experience from "@/assets/lottie/code.json";
import AnimationLottie from "@/components/animation/lottie";
import { experiences } from "@/data/experience";
import GlowCard from "@/components/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <div id={MENU_DATA_KEY.EXPERIENCE} className="relative z-50 border-t pt-12">
      <Image
        src={section}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center my-5 lg:my-8">
        <TitleSectionVertical title="Experiences" />
      </div>
      <div className="my-5 lg:my-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <AnimationLottie animationPath={experience} />
          </div>
          <div>
          <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-gradient  transition-all duration-300 hover:scale-125">
                          <Briefcase size={36}/>
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
