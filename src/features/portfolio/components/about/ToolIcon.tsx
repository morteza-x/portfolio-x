import React from "react";
import { IconType } from "react-icons";

const ToolIcon = ({ icon }: { icon: IconType }) => {
  const Icon = icon;
  return (
    <>
      <span className="text-3xl ">
        {/* applying svg gradient to Icon svg */}
        <Icon className="fill-[url(#tech-icon-gradient)]" />
      </span>
      <svg className="size-0 absolute">
        <linearGradient id={"tech-icon-gradient"}>
          <stop offset={"0%"} stopColor="rgb(110 231 183)" />
          <stop offset={"100%"} stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};

export default ToolIcon;
