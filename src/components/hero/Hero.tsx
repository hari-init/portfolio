import { HeroFooter } from "../../components";

const Hero = () => {
  return (
    <>
      <section className="px-5 md:px-10 w-full h-full flex items-center ">
        <main>
          <span className="flex gap-2 items-baseline animate-moveIn300 opacity-0 ">
            <h1 className="text-heading-2xl font-semibold text-balance">
              Hariharan Ravi
              <span className="text-[#FF885B] animate-blink">.</span>
            </h1>
          </span>
          <p className="text-gray-700/80 ml-1 text-xl animate-moveIn500 opacity-0">
            Full Stack Developer
          </p>
          <div className="flex ml-1">
            <a
              href="https://github.com/hari-init"
              target="_"
              className="text-black text-lg hover:text-[#FF885B] pointer-events-auto font-medium animate-moveIn500 mr-2 cursor-pointer opacity-0"
            >
              Git<span className="text-[#FF885B]">.</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hariharanwd"
              target="_"
              className="text-black hover:text-[#FF885B] pointer-events-auto text-lg font-medium animate-moveIn500 mr-2 cursor-pointer opacity-0"
            >
              LinkedIn<span className="text-[#FF885B]">.</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1yt9Iqq-LDPDWqYTyPA1W5Hsv2v4HC-qf/view?usp=sharing"
              target="_"
              className="text-black text-lg hover:text-[#FF885B] pointer-events-auto font-medium animate-moveIn500 border-b cursor-pointer border-[#FF885B] opacity-0"
            >
              Resume
            </a>
          </div>
        </main>
      </section>
      <HeroFooter />
    </>
  );
};

export default Hero;
