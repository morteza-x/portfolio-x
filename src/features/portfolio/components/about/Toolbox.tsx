import React from "react";
import Card from "../Card";
import { getTechs } from "../../data/data";
import CardHeader from "./CardHeader";
import ToolboxItems from "./ToolboxItems";

const fetchData = async () => {
  return await getTechs();
};

const Toolbox = async () => {
  const technologies = await fetchData();

  return (
    <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
      <CardHeader
        className={"px-6 pt-6"}
        title="My Toolbox"
        description="These are some the tech i use, to build you amazing user interfaces"
      />

      <ToolboxItems
        technologies={technologies}
        className="#mt-6"
        itemsWrapperClassName="animate-move-left [animation-duration:30s]"
      />
      <ToolboxItems
        technologies={technologies}
        className="mt-6 "
        itemsWrapperClassName={"animate-move-right [animation-duration:15s]"}
      />
    </Card>
  );
};

export default Toolbox;
