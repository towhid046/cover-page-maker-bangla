import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Button from '../Button/Button';

const links = [
  { id: 1, label: "Home", link: "/", icon: FaUser },
  { id: 1, label: "Single", link: "/single", icon: FaUser },
  { id: 1, label: "Group", link: "/group", icon: FaUser },
  { id: 1, label: "Tutorials", link: "/tutorials", icon: FaUser },
];
const Navbar = () => {
  return (
    <>
      <nav className=" bg-white py-4 sticky top-0 z-50 shadow-sm px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link
              to={"/"}
              className="lg:text-3xl font-bold text-gray-600 text-2xl"
            >
              CPG
            </Link>
          </div>
          <ul className="nav_menu flex items-center gap-7 ">
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
    </>
  );
};

export default Navbar;
