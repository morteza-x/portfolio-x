import Card from "../Card";
import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";
import CardHeader from "./CardHeader";

const Reads = () => {
  return (
    <Card className="p-0 h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader
        title="My Reads"
        description="Explore the books shaping my perspectives."
        className="px-6 py-4"
      />
      <div className="mt-8 md:mt-0 w-40 mx-auto">
        <Image src={"/js-book.jpg"} alt="book" width={200} height={200} />
      </div>
    </Card>
  );
};

export default Reads;
