import React from "react";
import OrbitStar from "./hero/OrbitStar";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  color = "text-emerald-300/90",
  orbitDuration = "30s",
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration = "10s",
}: {
  children: React.ReactNode;
  size: number;
  rotation: number;
  color?: string;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
}) => {
  return (
    <>
      {/* div for centering */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 #rounded-full pointer-events-none ">
        {/* div for orbit-box rotation */}
        <div
          className=""
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {/* this is the orbit */}
          <div
            className={twMerge(
              shouldOrbit && "animate-spin",
              "flex items-start justify-start #outline #outline-blue-50"
            )}
            style={{
              animationDuration: orbitDuration,
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            {/* star container */}
            <OrbitStar
              color={color}
              rotation={rotation}
              shouldSpin={shouldSpin}
              spinDuration={spinDuration}
            >
              {children}
            </OrbitStar>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroOrbit;
