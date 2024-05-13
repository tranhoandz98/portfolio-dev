import CardCode from "@/components/card-code";
import { Button } from "@/components/ui/button";
import { MENU_DATA_KEY } from "@/constants/menu";
import { heroData } from "@/data/hero";
import { personalData } from "@/data/personal-data";
import {
  ArrowDownToLine,
  CircleUser,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiLeetcode } from "react-icons/si";

export default function HeroSection() {
  return (
    <section className="relative py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="hero"
        width={1572}
        height={795}
        className="absolute -top-24 -z-10"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center ">
          <h1 className="text-3xl font-bold leading-10 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello,
            <br />
            This is <span className="text-help">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-info">{personalData.designation}</span>.
          </h1>
          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-help hover:scale-125 duration-300"
            >
              <Github size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-help hover:scale-125 duration-300"
            >
              <Linkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="transition-all text-help hover:scale-125 duration-300"
            >
              <Facebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="transition-all text-help hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="transition-all text-help hover:scale-125 duration-300"
            >
              <Twitter size={30} />
            </Link>
          </div>
          <div className="flex  items-center flex-wrap gap-3">
            <Link
              href={`#${MENU_DATA_KEY.CONTACT}`}
              className="uppercase p-[1px] hover:bg-transparent bg-gradient-to-r from-gradient to-help rounded-full hover:from-help hover:to-gradient"
            >
              <Button
                variant={"outline"}
                size={"lg"}
                className="bg-background border-none rounded-full hover:bg-background tracking-wider transition-all duration-200 ease-out gap-2 hover:gap-3 md:h-12"
              >
                <CircleUser size={16} />
                Contact me
              </Button>
            </Link>
            <Link href={personalData.resume} target="_blank">
              <Button
                size={"lg"}
                className="text-white uppercase bg-gradient-to-r from-gradient to-help rounded-full transition-all duration-200 ease-out gap-2 hover:gap-3 md:h-12"
              >
                <ArrowDownToLine size={16} />
                Get resume
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <CardCode
            dataCode={heroData}
            nameConst={"coder"}
            dataOther={
              <>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-code-green">
                    hireable:
                  </span>
                  <span className="text-code-pink">function</span>
                  <span className="text-code-gray">{"() {"}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-code-pink">
                    return
                  </span>
                  <span className="text-code-gray">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-code-cyan">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-code-amber">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-code-cyan">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-code-amber">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-code-cyan">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-code-amber">&gt;=</span>
                  <span className="text-code-orange">5</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-code-gray">{`);`}</span>
                </div>
                <div>
                <span className="ml-4 lg:ml-8 text-code-gray">{`}`}</span>
              </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
