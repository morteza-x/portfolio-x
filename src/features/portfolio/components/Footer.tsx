import { HiMiniArrowUpRight } from "react-icons/hi2";
import { footerLinks } from "../data/data";

// overflow-x-clip =: allows the clipped item to expend beyond its container
const Footer = () => {
  return (
    <footer className="relative overflow-x-clip z-0">
      {/* gradient */}
      <div
        className={`absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-20
      `}
        style={{
          maskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
        }}
      ></div>

      <div className="container z-40 w-full #bg-red-100 mx-auto px-2 md:px-4">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-white/50 flex flex-col items-center gap-4 md:flex-row">
            <span>&copy; 2024. All rights reserved.</span>
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="hover:underline"
            >
              Built with Next.js with ❤️
            </a>
          </div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks?.map((link: any) => (
              <a
                key={link.id}
                href={link.link}
                target="_blank"
                className="text-white hover:text-emerald-300 inline-flex items-center gap-1.5 transition-all hover:underline"
              >
                <link.icon className={"size-6"} />
                <span className="font-semibold">{link.name}</span>
                <HiMiniArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
