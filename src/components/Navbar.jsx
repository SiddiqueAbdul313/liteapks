import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbMenu2 } from "react-icons/tb";
import { TbMenuDeep } from "react-icons/tb";

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
          <div className="text-white text-lg font-bold">LITEAPKS.COM</div>
        </div>

        {/* Nav links for medium screens and above */}
        <ul className="hidden md:flex md:gap-6 md:ml-6">
          <li>
            <a href="#" className="text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              Apps
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              Games
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              News
            </a>
          </li>
        </ul>

        {/* Search bar */}
        <div className="flex items-center relative md:ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="p-1 rounded md:mr-2 w-full outline-none"
          />
          <button className="text-zinc-500 absolute right-2">
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
              <a href="#" className="text-black hover:underline">
                Menu
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-black hover:underline">
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-black hover:underline">
                Apps
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-black hover:underline">
                Games
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-black hover:underline">
                News
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
