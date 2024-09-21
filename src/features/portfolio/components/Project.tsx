import Image from "next/image";
import { TProject } from "../types/portfolioTypes";
import GrainBackground from "./GrainBackground";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

const Project = ({
  compony,
  title,
  year,
  image,
  projectLink,
  githubLink,
  results,
  className,
  topValue,
}: TProject) => {
  console.log(image);
  return (
    <div
      className={twMerge(
        `
         bg-gray-800 rounded-3xl p-6 pb-0 z-0 overflow-hidden
        after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl
         after:outline-white/20 after:z-10 after:pointer-events-none
        md:pt-12 md:px-10 lg:grid  lg:gap-16 lg:pt-16 lg:px-20
        lg:pr-0 lg:grid-cols-[1fr_1.5fr]
        sticky
        `,
        className
      )}
      style={{
        top: topValue,
      }}
    >
      <GrainBackground />

      <article className="lg:pb-16">
        <div className="flex">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
            <span className="">{compony}</span>
            <span>&bull;</span>
            <span>{year}</span>
          </div>
        </div>
        <h3 className="text-2xl mt-2 md:mt-5 md:text-4xl">{title}</h3>
        <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
        <ul className="flex flex-col gap-4 mt-4 md:mt-5">
          {results?.map((res: any) => {
            //const Icon = res.icon;
            return (
              <li
                className="flex items-center gap-2 rounded-md text-sm text-white/50 md:text-base"
                key={res.id}
              >
                <span className="text-sm md:text-base">
                  <FaRegCheckCircle />
                </span>
                <span>{res.name}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 flex gap-4 flex-col md:mt-5 md:items-start lg:flex-row">
          <a className="cursor-pointer" href={projectLink} target="_blank">
            <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold flex items-center gap-2 justify-center px-4 py-1 cursor-pointer hover:bg-gray-200 transition">
              <span>Visit Live</span>
              <HiMiniArrowTopRightOnSquare size={20} />
            </button>
          </a>

          <a className="cursor-pointer" href={githubLink} target="_blank">
            <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold flex items-center gap-2 justify-center px-4 py-1 cursor-pointer hover:bg-gray-200 transition">
              <span>Github</span>
              <BsGithub size={20} />
            </button>
          </a>
        </div>
      </article>

      <article className="relative w-full">
        <div className="relative aspect-square mt-8 rounded-t-lg w-full overflow-hidden max-h-[190px] md:max-h-[300px] -mb-4 md:min-w-[260px] md:mb-0 lg:mt-0 lg:max-h-none lg:min-w-none lg:absolute lg:h-full #lg:w-[400px] lg:rounded-tr-none">
          <Image
            className="w-full object-cover lg:w-auto lg:max-w-none"
            src={image}
            alt={title}
            fill
            sizes="100%"
          />
        </div>
      </article>
    </div>
  );
};

export default Project;
