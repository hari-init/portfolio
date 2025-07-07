import { Icon } from "@iconify-icon/react";
import { Link } from "react-scroll";

const HeroFooter = (): JSX.Element => {
  // const icons = [
  //   { link: "https://github.com/hari-init", icon: "ri:github-line" },
  //   {
  //     link: "https://www.linkedin.com/in/hariharanwd",
  //     icon: "ri:linkedin-line",
  //   },
  //   {
  //     link: "https://www.linkedin.com/in/hariharanwd",
  //     icon: "ri:at-line",
  //   },
  // ];

  return (
    <div className="py-4 px-5 md:py-6 md:px-10 w-full flex justify-between absolute bottom-0 ">
      <ul className="flex text-lg w-1/2">
        {/* {icons.map((icons) => (
          <li
            className="mr-6 hover:text-[#FF885B] cursor-pointer"
            key={icons.icon}
          >
            <a href={icons.link} target="_">
              <Icon icon={icons.icon} width="1.5rem" height="1.5rem" />
            </a>
          </li>
        ))} */}
      </ul>
      <ul className="flex text-lg w-1/2">
        <li className="animate-bounce text-[#FF885B] cursor-pointer">
          <Link
            to="About"
            smooth={true}
            duration={100}
            className="cursor-pointer mr-6 hover:text-[#FF885B]"
          >
            <Icon icon="line-md:arrow-down" width="1.5rem" height="1.5rem" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default HeroFooter;
