import { twMerge } from "tailwind-merge";
import GrainBackground from "./GrainBackground";

const defaultStyle = `relative bg-gray-800 rounded-3xl p-6 z-0 overflow-clip after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:z-10 after:pointer-events-none`;

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={twMerge(defaultStyle, className)}>
      <GrainBackground />
      {children}
    </div>
  );
};

export default Card;
