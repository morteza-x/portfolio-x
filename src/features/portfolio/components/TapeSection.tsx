"use client";
import { FaStar } from "react-icons/fa";
import { Fragment, useEffect, useState } from "react";
import { tapes } from "../data/data";

const TapeSection = () => {
  return (
    <section className="py-16 overflow-x-clip lg:py-24">
      {/* gradient div */}
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div
          className="flex "
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="
        flex flex-none items-center gap-4
        w-full
        h-10 p-4 py-3 pr-4
        text-black animate-move-left 
        [animation-duration:30s]
        "
          >
            {!tapes?.length
              ? null
              : [...new Array(2)].fill(0).map((_, index) => (
                  <Fragment key={index}>
                    {tapes?.map((tape: any) => (
                      <div
                        className="
                      flex items-center gap-3
                      "
                        key={tape}
                      >
                        <span className="whitespace-nowrap text-gray-900 uppercase font-extrabold tracking-wide">
                          {tape}
                        </span>
                        <span className="text-gray-900 -rotate-12">
                          <FaStar />
                        </span>
                      </div>
                    ))}
                  </Fragment>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TapeSection;
