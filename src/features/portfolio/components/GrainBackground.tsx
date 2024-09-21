import React from "react";
import { twMerge } from "tailwind-merge";

const GrainBackground = ({ className }: { className?: string }) => {
  return (
    <div
      id="grain"
      className={twMerge(
        "absolute inset-0 -z-10 opacity-[.06] h-full w-full pointer-events-none",
        className
      )}
      style={{
        backgroundImage: `url(${"/grain-bg-2.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default GrainBackground;
