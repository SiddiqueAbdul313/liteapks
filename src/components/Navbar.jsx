import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbMenu2 } from "react-icons/tb";
import { TbMenuDeep } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-green-500 p-4 flex justify-between items-center sticky top-0 z-50 gap-2">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-white mr-4 md:hidden">
            {isOpen ? <TbMenuDeep /> : <TbMenu2 />}
          </button>
          <a className="text-white text-lg font-bold" href="/">LITEAPKS.COM</a>
        </div>

        {/* Nav links for medium screens and above */}
        <ul className="hidden md:flex md:gap-6 md:ml-6">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/apps" className="text-white hover:underline">
              Apps
            </Link>
          </li>
          <li>
            <Link to="/games" className="text-white hover:underline">
              Games
            </Link>
          </li>
          <li>
            <Link to="/news" className="text-white hover:underline">
              News
            </Link>
          </li>
        </ul>

        {/* Search bar */}
        <div className="flex items-center relative md:ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="p-1 rounded md:mr-2 w-full outline-none"
          />
          <button className="text-zinc-500 absolute right-2 md:right-3">
            <CiSearch />
          </button>
        </div>
      </nav>

      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed left-0 top-0 w-64 bg-white h-full shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="p-4 mt-2">
            <li className="py-2">
              <Link
                to="/"
                className="text-black hover:underline"
                onClick={toggleMenu} // Close the menu after click
              >
                Menu
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/"
                className="text-black hover:underline"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/apps"
                className="text-black hover:underline"
                onClick={toggleMenu}
              >
                Apps
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/games"
                className="text-black hover:underline"
                onClick={toggleMenu}
              >
                Games
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/news"
                className="text-black hover:underline"
                onClick={toggleMenu}
              >
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
