import SectionHeader from "../SectionHeader";

import dynamic from "next/dynamic";
import Reads from "./Reads";
import Toolbox from "./Toolbox";
import Hobbies from "./Hobbies";

const MapComponent = dynamic(() => import("../MyMap"), {
  ssr: false,
});

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 px-4">
      <div className="container mx-auto">
        <SectionHeader
          text1="About me"
          text2="A little bit about me"
          text3="Learn more about who i am, what i do , and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Reads />
            <Toolbox />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Hobbies />
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
