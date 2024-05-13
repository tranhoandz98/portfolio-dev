import React from "react";

type Props = {
  title: string;
};
export default function TitleSection({ title }: Props) {
  return (
    <>
      <span className="bg-section-title w-fit rotate-90 p-2 px-5 text-xl rounded-md">
        {title}
      </span>
      <span className="h-36 w-[2px] bg-section-title"></span>
    </>
  );
}
