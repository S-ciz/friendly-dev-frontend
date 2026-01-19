import { Link, useHref } from "react-router";
import { FaLaptopCode, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";

const links = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/project",
    title: "Projects",
  },
  {
    link: "/blog",
    title: "Blog",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];
const Header = () => {
  const ref = useHref();

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-gray-800 py-5 flex flex-col items-center sticky top-0 ">
      <nav className="container m-auto px-5 max-w-6xl flex justify-between items-center ">
        <Link to={"/"}>
          <div className="flex items-center text-blue-300 gap-3">
            <h1>
              {" "}
              <FaLaptopCode size={30} />{" "}
            </h1>
            <h1 className="font-bold">The Friendly Developer</h1>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-4">
          {links.map((li) => (
            <Link
              className={
                ref === li.link ? "text-blue-300 font-semibold" : "text-gray-50"
              }
              to={li.link}
              key={li.title}
            >
              {" "}
              {li.title}
            </Link>
          ))}
        </ul>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden grid cursor-pointer text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <nav className="bg-gray-800 flex place-items-center place-content-center pt-5">
          <ul className="flex md:hidden items-center gap-2">
            {links.map((li) => (
              <Link className="text-white" to={li.link} key={li.title}>
                {" "}
                {li.title}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
