import AnimationLottie from '@/components/animation/lottie'
import { MENU_DATA_KEY } from '@/constants/menu'
import Image from 'next/image'
import React from 'react'

import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '/public/lottie/study.json';
import GlowCard from '@/components/glow-card';
import { educations } from '@/data/educations';
import TitleSectionVertical from '@/components/title-sectio-vertical';

export default function Education() {
  return (
    <div id={MENU_DATA_KEY.EDUCATION}>
      <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-gradient2">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gradient to-transparent  w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:my-8">
        <TitleSectionVertical title="Educations" />
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative ">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-info">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-gradient  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
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
    </div>
  )
}
