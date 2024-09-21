import Image from "next/image";
import React from "react";
import { HiArrowDown } from "react-icons/hi";
import HeroOrbit from "./HeroOrbit";
import GrainBackground from "./GrainBackground";
import { orbits } from "../data/data";

const Hero = () => {
  return (
    <section id="hero" className="py-28 relative z-0 #h-screen overflow-x-clip">
      {/* background */}

      <section
        className="absolute inset-0
      pointer-events-none -z-20 overflow-clip
      "
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <GrainBackground />

        {/* rings */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* stars */}

        {orbits?.map((orbit) => {
          return (
            <HeroOrbit
              key={orbit.size}
              size={orbit.size}
              rotation={orbit.rotation}
              shouldSpin={orbit.shouldSpin}
              shouldOrbit={orbit.shouldOrbit}
            >
              <orbit.component.icon className={orbit.component.className} />
            </HeroOrbit>
          );
        })}
      </section>

      <div
        className="
        flex flex-col items-center justify-center gap-4
      container text-center px-1 md:px-2 mx-auto z-30 bg-transparent"
      >
        <div className="flex flex-col items-center">
          <Image
            className="size-[200px]"
            //fill
            width={200}
            height={200}
            src={"/hero-bg-removebg.png"}
            alt="hero"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-2 -mt-11 rounded-md">
            <div className="bg-green-500 size-2.5 rounded-full relative ">
              <div className="bg-green-500 size-2.5 rounded-full absolute top-0 inset-0 animate-ping-large"></div>
            </div>
            <div className="">Morteza Rostami</div>
          </div>
        </div>

        <div className="max-w-lg flex flex-col gap-2 items-center">
          <h1 className="text-3xl md:text-4xl text-center mt-4 tracking-wide max-w-96">
            Front-End Developer - ReactJs/NextJs
          </h1>
          <p className="max-w-[400px] mt-4 text-center text-white/60 md:text-lg ">
            I am a Front-End Developer based in Iran. I specialize in ReactJs
            and NextJs. I have 2 years of experience. Working as a Freelance Web
            Developer.
          </p>
        </div>

        {/* actions */}
        <div className="flex flex-col items-center gap-4 mt-4 md:flex-row">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-gray-200/20 transition">
              <span>Explore My Work</span>
              <HiArrowDown />
            </button>
          </a>
          <a href="#contact">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-gray-200 transition">
              <span>✋</span>
              <span className="font-semibold">{"Let's connect"}</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
