import React from "react";
import { IconType } from "react-icons";
import ToolIcon from "./ToolIcon";

const ToolCard = ({
  tech,
}: {
  tech: {
    id: string;
    name: string;
    icon: IconType;
  };
}) => {
  return (
    <div
      key={tech.id}
      className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
    >
      <ToolIcon icon={tech.icon} />
      <p>{tech.name}</p>
    </div>
  );
};

export default ToolCard;
