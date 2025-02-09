import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white px-8 font-bold shadow-md"
      >
        <p className="blue-gradient_text">Haise</p>
      </NavLink>

      <nav className="flex gap-7 text-lg font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
