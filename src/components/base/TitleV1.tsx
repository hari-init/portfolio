const TitleV1 = ({ title }: TitleV1Props) => {
  return (
    <h1 className="text-[40vw] md:text-[15vw] leading-none text-gray-700 absolute font-bold opacity-5 ">
      {title}
    </h1>
  );
};

type TitleV1Props = {
  title: string;
};

export default TitleV1;
