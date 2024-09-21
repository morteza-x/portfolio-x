import Card from "./Card";

const TestimonialCard = ({ name, emoji }: any) => {
  return (
    <Card className="max-w-md hover:-rotate-3 transition duration-300">
      <div className="relative flex items-center gap-4 rounded-3xl w-auto overflow-clip z-0">
        <span className="whitespace-nowrap md:text-xl font-semibold tracking-wide">
          {name}
        </span>
        <span className="text-4xl">{emoji}</span>
      </div>
    </Card>
  );
};

export default TestimonialCard;
