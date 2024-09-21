"use client";
import { motion } from "framer-motion";

const HobbyCard = ({
  hobby,
  containerRef,
}: {
  hobby: {
    id: string;
    name: string;
    emoji: string;
    left: number;
    top: number;
  };
  containerRef: any;
}) => {
  return (
    <motion.div
      key={hobby.id}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 py-1.5 px-6 rounded-full absolute "
      style={{
        left: hobby.left,
        top: hobby.top,
        zIndex: hobby.name === "Gaming" ? 1 : 0,
      }}
      drag={true}
      dragConstraints={containerRef}
    >
      <p className="text-gray-950 font-medium inline-flex gap-">{hobby.name}</p>
      <span className="text-3xl ">{hobby.emoji}</span>
    </motion.div>
  );
};

export default HobbyCard;
