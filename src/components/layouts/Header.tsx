import { Link } from "react-scroll";

const Header = (): JSX.Element => {
  const headerText = ["About", "Projects"];
  return (
    <header className="px-5 py-4 md:py-6 md:px-10 w-full flex justify-between absolute top-0 ">
      <ul className="flex w-1/5 text-lg">
        {headerText.map((text) => (
          <Link
            key={text}
            to={text}
            smooth={true}
            duration={100}
            className="cursor-pointer mr-6 hover:text-[#FF885B] animate-moveIn500 opacity-0"
          >
            {text}
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Header;
