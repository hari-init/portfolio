const FeatureCard = ({
  styles,
  name,
  status,
  stack,
  git,
  desc,
}: FeatureCardProps) => {
  return (
    <div
      className={`bg-white rounded-md shadow-lg z-10 hover:scale-105 ease-in-out duration-100 ${styles}`}
    >
      <a href={git} target="blank" className="">
        <div className="flex justify-between">
          <h1 className="text-md font-semibold">{name}</h1>
          <p className="rounded-xl bg-slate-400/50 font-normal text-sm text-center w-12 flex justify-center items-start leading-6">
            {status}
          </p>
        </div>
        <p className="text-md text-gray-700 font-normal my-2">{desc}</p>
        <h1 className="text-sm text-gray-700 font-normal my-2">({stack})</h1>
      </a>
    </div>
  );
};

type FeatureCardProps = {
  styles: string;
  name: string;
  status: string;
  stack: string;
  git?: string;
  desc: string;
};

export default FeatureCard;
