"use client";
import React, { Fragment, useEffect, useState } from "react";
//import { getSoftSkills } from "../data/data";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";
import { getSoftSkills } from "../data/data";

const Testimonials = () => {
  const [softSkills, setSoftSkills] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getSoftSkills();
      setSoftSkills(res);
    })();
  }, []);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          text1={"Soft Skills"}
          text2={"It is not only about technical skills, right?"}
          text3={
            "It is also about soft skills. these are some of the soft skills I can bring to your company"
          }
        />

        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip py-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex flex-none items-center gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {/* two sets of cards */}
            {!softSkills?.length
              ? null
              : [...new Array(2)].fill(0).map((_, index) => (
                  <Fragment key={index}>
                    {softSkills?.map((softSkill: any) => (
                      <TestimonialCard key={softSkill.id} {...softSkill} />
                    ))}
                  </Fragment>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
