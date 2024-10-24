import { FaChevronDown } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Navbar = () => {
  const [logedIn, seLogedIn] = useState(false);

  return (
    <nav
      data-aos="fade-down"
      className="flex justify-between items-center p-8 fixed top-0 w-screen z-20 bg-white"
    >
      <div className="title font-bold text-3xl">Surewin.</div>
      <ul className="flex gap-8">
        <li className="hover:scale-105 transition duration-100">
          <NavLink to="/" className={({ isActive }) => isActive && "font-bold"}>
            Home
          </NavLink>
        </li>
        <li className="hover:scale-105 transition duration-100">
          <NavLink to="/raffels" className={({ isActive }) => isActive && "font-bold"}>
            Raffels
          </NavLink>
        </li>

        <li className="hover:scale-105 transition duration-100">
          <NavLink
            to="/big-wins"
            className={({ isActive }) => isActive && "font-bold"}
          >
            Big Wins
          </NavLink>
        </li>
        <li className="hover:scale-105 transition duration-100">
          <NavLink to="/process" className={({ isActive }) => isActive && "font-bold"}>Process</NavLink>
        </li>
        <li className="hover:scale-105 transition duration-100">
          <NavLink to="/faqs" className={({ isActive }) => isActive && "font-bold"}>FAQs</NavLink>
        </li>
      </ul>
      <div className="flex gap-4">
        <div className="flex items-center gap-1 hover:scale-105 transition">
          <BsGlobe2 />
          <span className="underline">English</span>
        </div>
        {!logedIn ? (
          <NavLink
            to="/dashboard"
            className="bg-gray-800 text-white px-4 py-1 rounded-2xl hover:scale-105 transition"
          >
            Dashboard
          </NavLink>
        ) : (
          <NavLink
            to="/signup"
            className="bg-gray-800 text-white px-4 py-1 rounded-2xl hover:scale-105 transition"
          >
            Register
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
