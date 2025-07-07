import { useState } from "react";

const Card = ({
  projectName,
  projectDesc,
  projectImg,
  projectBuiltWith,
  imageStyle,
  projectUrl,
}: CardProp): JSX.Element => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };
  return (
    <>
      <div className="p-4">
        <div className="mt-5 flex justify-between">
          <h2 className="font-semibold mb-2">{projectName}</h2>
          <span className="text-gray-700/80 cursor-pointer">
            <a href={projectUrl} target="-">
              Visit
            </a>
          </span>
        </div>
        <div>
          <div className="h-full w-full">
            <img src={projectImg} alt={projectName} style={imageStyle} />
          </div>
          <div className="flex flex-col items-end mt-2">
            <span className="cursor-pointer" onClick={toggleDetails}>
              {showDetails ? "Show Less" : "Show More"}
            </span>
          </div>
          {showDetails && (
            <div>
              <p className="text-gray-700/80">{projectDesc}</p>

              <p className="text-gray-700 mt-2">
                Built With:
                {projectBuiltWith.map((tech, index) => (
                  <span key={tech} className="text-gray-700/80">
                    {" "}
                    {tech}
                    {projectBuiltWith.length - 1 > index && ","}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="border-b  border-gray-700/80"></div>
    </>
  );
};

type CardProp = {
  projectName: string;
  projectDesc: string;
  projectImg: string;
  projectBuiltWith: Array<string>;
  imageStyle?: React.CSSProperties;
  projectUrl: string;
};

export default Card;
