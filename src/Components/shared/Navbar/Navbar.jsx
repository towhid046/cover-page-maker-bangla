import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";

export const links = [
  { id: 1, label: "Home", link: "/" },
  { id: 1, label: "Single", link: "/single" },
  { id: 1, label: "Group", link: "/group" },
  { id: 1, label: "Tutorials", link: "/tutorials" },
];

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <>
      <nav className=" bg-white py-4 sticky top-0 z-50 shadow-sm px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              className="text-2xl md:hidden flex"
              onClick={() => setIsToggle(!isToggle)}
            >
              {isToggle ? <RxCross2 /> : <IoMdMenu />}
            </button>
            <div>
              <Link
                to={"/"}
                className="lg:text-3xl font-bold text-gray-600 text-2xl"
              >
                CPG
              </Link>
            </div>
          </div>
          <ul className="nav_menu items-center gap-7 hidden md:flex">
            {links?.map((link) => (
              <li key={link.id}>
                <NavLink
                  className="text-gray-600 hover:text-blue-400 duration-300 transition"
                  to={link.link}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            <Button>Login</Button>
          </div>
        </div>
      </nav>
      {isToggle && <ResponsiveMenu setIsToggle={setIsToggle} />}
    </>
  );
};

export default Navbar;
