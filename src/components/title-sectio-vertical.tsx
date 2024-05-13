import React from "react";

type Props = {
  title: string;
};
export default function TitleSectionVertical({ title }: Props) {
  return (
    <div className="flex items-center">
      <span className="w-24 h-[2px] bg-section-title"></span>
      <span className="bg-section-title w-fit p-2 px-5 text-xl rounded-md">
        {title}
      </span>
      <span className="w-24 h-[2px] bg-section-title"></span>
    </div>
  );
}
