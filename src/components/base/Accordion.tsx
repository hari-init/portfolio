import { useState } from "react";

const Accordion = ({
  topLeftTitle,
  topLeftDetail,
  topLeftSubTitle,
  topRightTitle,
  topRightTitleMob,
  descriptions,
  descriptionTitle,
  isAcc,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="mt-5 flex justify-between flex-col" onClick={toggleOpen}>
        <div className="flex w-full justify-between">
          <div className=" flex flex-col">
            <h2 className="font-semibold">
              {topLeftTitle}
              <span className="text-gray-700/80 font-normal">
                {" "}
                {topLeftDetail ? topLeftDetail : " "}
              </span>
            </h2>
            <p className="text-gray-700/80">{topLeftSubTitle}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-gray-700/80 hidden lg:block">
              {" "}
              {topRightTitle ? topRightTitle : ""}
            </span>
            <span className="text-gray-700/80 block lg:hidden">
              {" "}
              {topRightTitleMob ? topRightTitleMob : ""}
            </span>
            <span className="font-medium cursor-pointer">
              {isAcc && (isOpen ? "Show Less" : "Show More")}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          {isAcc && isOpen && (
            <>
              <h2 className="mt-2 font-medium">{descriptionTitle}</h2>
              <ul>
                {descriptions.map((desc) => (
                  <li key={desc}>- {desc}</li>
                ))}
              </ul>
            </>
          )}
          {!isAcc && (
            <>
              <h2 className="mt-2 font-medium">{descriptionTitle}</h2>
              <ul>
                {descriptions.map((desc) => (
                  <li key={desc}>- {desc}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="border-b my-5 border-gray-700/80"></div>
    </>
  );
};

type AccordionProps = {
  topLeftTitle: string;
  topLeftDetail: string;
  topLeftSubTitle: string;
  topRightTitle: string;
  topRightTitleMob: string;
  descriptions: Array<string>;
  descriptionTitle: string;
  isAcc: boolean;
};

export default Accordion;
