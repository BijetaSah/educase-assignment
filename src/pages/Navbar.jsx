import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const baseStyle =
    "hover:border-b-2 hover:border-blue-500 pb-1 transition-border ";
  const activeStyle = "border-b-2 border-blue-500";
  return (
    <nav className="bg-blue-50 w-full sm:py-5 sm:px-4 p-2 box-border mb-10 box-mp">
      <ul className="flex justify-between sm:text-[16px] md:uppercase text-[12px] ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${baseStyle} ${activeStyle}` : baseStyle
          }
        >
          Landing Page
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${baseStyle} ${activeStyle}` : baseStyle
          }
        >
          Login Page
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? `${baseStyle} ${activeStyle}` : baseStyle
          }
        >
          Signup Page
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${baseStyle} ${activeStyle}` : baseStyle
          }
        >
          Profile Page
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
