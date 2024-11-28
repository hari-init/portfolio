import { Section } from "../../components";
// import { Icon } from "@iconify-icon/react";

const Footer = () => {
  //   const icons = ["ri:github-line", "ri:linkedin-line", "mdi:email-outline"];
  // const icons = ["Github", "LinkedIn", "Email"];
  return (
    <Section height="h-52" name="Footer" titleText="." itemPos="items-end">
      <div className="flex justify-between items-end w-full py-4">
        {/* <div>
          <ul className="flex justify-between">
            {icons.map((icon) => (
              <li
                className="mr-6 hover:text-[#FF885B] cursor-pointer flex justify-center items-baseline"
                key={icon}
              >
                <p className="text-sm">{icon}</p>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="flex flex-col justify-end items-end text-sm">
          <p>
            Copyright © 2024{" "}
            <span className="text-[#FF885B]">Hariharan Ravi</span>
          </p>
          {/* <p>All rights reserved</p> */}
        </div>
      </div>
    </Section>
  );
};

export default Footer;
