import { MENU_DATA_KEY } from "@/constants/menu";
import React from "react";
import Link from "next/link";
import BlogCard from "./blog-card";
import { FaArrowRight } from "react-icons/fa";
import TitleSectionVertical from "@/components/title-sectio-vertical";
import { Button } from "@/components/ui/button";

export default function Blogs({ blogs }) {
  return (
    <div
      id={MENU_DATA_KEY.BLOGS}
      className="relative z-50 border-t my-12 lg:my-24 border-gradient2"
    >
      <div className="w-[100px] h-[100px] bg-gradient-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gradient to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:my-8">
        <TitleSectionVertical title="Blogs" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.slice(0, 6).map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link href="https://dev.to/tranhoandz98" target="_blank">
          <Button
            size={"lg"}
            className="text-color uppercase bg-gradient-to-r from-gradient to-help rounded-full transition-all duration-200 ease-out gap-2 hover:gap-3 md:h-12"
          >
            <FaArrowRight size={16} />
            <span>View More</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
