import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import ToolCard from "./ToolCard";
import { Fragment } from "react";

const ToolboxItems = ({
  technologies,
  className,
  itemsWrapperClassName,
}: {
  technologies: { name: string; icon: IconType }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge("flex", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(3)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {technologies?.map((tech: any) => (
              <ToolCard key={tech.name} tech={tech} />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
