"use client";
import React, { useEffect, useRef } from "react";
import Card from "../Card";
import CardHeader from "./CardHeader";
import HobbyCard from "./HobbyCard";
import { getHobbies } from "../../data/data";

const Hobbies = () => {
  const dragContainerRef = useRef(null);
  const [hobbies, setHobbies] = React.useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const res = await getHobbies();
      setHobbies(res);
    })();
  }, []);

  return (
    <Card className="relative h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
      <CardHeader
        title="Beyond Code"
        description="These are some of the things i am passionate about."
        className="px-6 pt-6"
      />

      <div ref={dragContainerRef} className="relative flex-1 #mt-10">
        {!hobbies?.length
          ? null
          : hobbies?.map((hobby: any) => (
              <HobbyCard
                key={hobby.id}
                hobby={hobby}
                containerRef={dragContainerRef}
              />
            ))}
      </div>
    </Card>
  );
};

export default Hobbies;
