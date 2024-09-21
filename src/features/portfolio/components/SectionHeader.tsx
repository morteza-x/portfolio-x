import React from "react";

const SectionHeader = ({
  text1,
  text2,
  text3,
}: {
  text1: string;
  text2: string;
  text3: string;
}) => {
  return (
    <div className="px-4 md:p-0">
      <div className="flex justify-center ">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {text1}
        </p>
      </div>
      <h2 className="text-3xl text-center mt-6 md:text-5xl">{text2}</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
        {text3}
      </p>
    </div>
  );
};

export default SectionHeader;
