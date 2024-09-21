import { PiStarFourFill } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <span className=" text-emerald-300 text-lg">
          <PiStarFourFill />
        </span>
        <h3 className="text-3xl">{title}</h3>
      </div>

      <p className="text-sm text-white/60 mt-2 lg:text-base lg:max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
