const SubSection = ({ title, children }: SubSectionProps): JSX.Element => {
  return (
    <div className="w-full md:w-[60%] m-auto">
      <h1 className="mt-5 text-3xl font-semibold md:mt-10">{title}</h1>
      {children}
    </div>
  );
};

type SubSectionProps = {
  title: string;
  children?: React.ReactNode;
};
export default SubSection;
