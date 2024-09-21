import { useRef } from "react";
import { getProjects } from "../data/data";
//import { projects } from "../data/data";
import Project from "./Project";
import SectionHeader from "./SectionHeader";

const fetchData = async () => {
  //const aModule = await import("../data/data");
  //return aModule.projects;
  return await getProjects();
};

const Projects = async () => {
  const projects = await fetchData();

  return (
    <section id="projects" className="#px-2 pb-16 flex flex-col">
      <div className="container mx-auto px-3 md:px-4">
        <SectionHeader
          text1={"Collection of Front-Ends"}
          text2={"Personal Projects"}
          text3={"This section shows the projects that I have been working on."}
        />

        <div className="grid grid-cols-1 gap-14 mt-10 md:mt-20  items-center justify-center lg:flex-col lg:max-w-[800px] lg:mx-auto">
          {projects?.map((project: any, index: number) => {
            return (
              <Project
                key={project.id}
                topValue={`calc(64px + ${index * 40}px)`}
                {...project}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
