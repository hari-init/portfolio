import { Section, Masonry, FeatureCard } from "../../components";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";

const Projects = () => {
  const [showMore, setShowMore] = useState(true);

  const featured = [
    {
      styles: "w-full md:w-1/2 md:mx-2 p-2 my-2 border",
      name: "HabitTracker",
      status: "WIP",
      stack: "MERN",
      desc: "App that helps to track you habit and complete it",
      git: "https://github.com/hari-init/habit-tracker",
    },
    {
      styles: "w-full md:w-1/2 md:mx-2 p-2 my-2 border",
      name: "hrvi.tech",
      status: "WIP",
      stack: "React",
      desc: "Personal portfolio",
      git: "",
    },
  ];
  const handleClick = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <Section
      name="Projects"
      titleText="Projects"
      height={showMore ? "h-auto" : "h-full"}
    >
      <main
        className={`pt-10 relative h-full w-full ${
          !showMore && "overflow-hidden"
        }`}
      >
        {!showMore && (
          <div className="absolute bg-gradient-to-t from-white to-transparent pointer-events-none bottom-0 w-full h-4/5"></div>
        )}
        {/* <div className="flex-col w-[95%] md:w-3/5 m-auto flex md:flex-row justify-between mt-10 mb-5 md:mt-20 md:mb-10">
          {featured.map((feature) => (
            <FeatureCard
              key={feature.name}
              styles={feature.styles}
              name={feature.name}
              status={feature.status}
              stack={feature.status}
              desc={feature.desc}
              git={feature.git}
            />
          ))}
        </div> */}
        {/* <div
          className="text-center text-black font-bold cursor-pointer"
          onClick={handleClick}
        >
          {!showMore ? (
            <Icon
              className="animate-bounce text-[#FF885B]"
              icon="ep:arrow-down-bold"
              width="1.5rem"
              height="1.5rem"
            />
          ) : (
            <Icon
              className="animate-bounce text-[#FF885B]"
              icon="ep:arrow-up-bold"
              width="1.5rem"
              height="1.5rem"
            />
          )}
        </div> */}
        <Masonry />
      </main>
    </Section>
  );
};

export default Projects;
