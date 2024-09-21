import ContactModal from "./ContactModal";
import GrainBackground from "./GrainBackground";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative py-16 px-4 pt-12 lg:py-24 lg:pt-20 z-10"
    >
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0 overflow-hidden">
          {/* background */}
          <GrainBackground className={"opacity-5"} />
          <div className="flex flex-col items-center md:flex-row gap-8 md:gap-16 md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl">
                {`Let's Create something awesome together`}
              </h2>
              <p className="text-sm mt-2 md:text-base">
                {`I'm always looking for new opportunities. If you'd like to get
                in touch, feel free to reach out.`}
              </p>
            </div>
            <ContactModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
