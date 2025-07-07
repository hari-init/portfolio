import { Element } from "react-scroll";
import { TitleV1 } from "../../components";

const Section = ({
  name,
  titleText,
  children,
  height,
  itemPos = "items-start",
}: SectionProp): JSX.Element => {
  return (
    <Element
      name={name}
      className={`px-5 ${height} scroll-smooth w-full flex ${itemPos} md:px-10 relative overflow-hidden`}
    >
      <TitleV1 title={titleText} />

      {children}
    </Element>
  );
};

type SectionProp = {
  name: string;
  titleText: string;
  height: string;
  children?: React.ReactNode;
  itemPos?: string;
};

export default Section;
