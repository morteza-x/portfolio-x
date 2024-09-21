import React from "react";
import { twMerge } from "tailwind-merge";

const OrbitStar = ({
  children,
  color,
  rotation,
  shouldSpin,
  spinDuration,
}: {
  children: React.ReactNode;
  color?: string;
  rotation: number;
  shouldSpin: boolean;
  spinDuration: string;
}) => {
  return (
    <div
      className="inline-flex "
      style={{
        transform: `rotate(${rotation * -1}deg)`,
      }}
    >
      <div
        className={twMerge(shouldSpin && "animate-spin", "inline-flex ")}
        style={{
          animationDuration: spinDuration,
        }}
      >
        <span className={twMerge(color)}>{children}</span>
      </div>
    </div>
  );
};

export default OrbitStar;
