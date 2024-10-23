import { FaChevronDown } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [logedIn, seLogedIn] = useState(false);

  return (
    <nav
      data-aos="fade-down"
      className="flex justify-between items-center p-8 fixed top-0 w-screen z-20 bg-white"
    >
      <div className="title font-bold text-3xl">Surewin.</div>
      <ul className="flex gap-8">
        <li className="hover:scale-105 transition duration-100">
          <Link to="/" className="font-bold">
            Home
          </Link>
        </li>
        <li className="relative">
          <div
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="bg-gray-200 px-2 rounded-lg flex items-center gap-1 cursor-pointer hover:underline"
          >
            Raffels <FaChevronDown size={8} />
          </div>
          {dropdownVisible && (
            <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
              <li>
                <Link
                  to="/raffel1" // Change to your specific route for Raffel1
                  className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  Raffel1
                </Link>
              </li>
              <li>
                <Link
                  to="/raffel2" // Change to your specific route for Raffel2
                  className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  Raffel2
                </Link>
              </li>
              <li>
                <Link
                  to="/raffel3" // Change to your specific route for Raffel3
                  className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  Raffel3
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="hover:scale-105 transition duration-100">
          <Link
            to="/big-wins"
            className="hover:scale-110 transition duration-300"
          >
            Big Wins
          </Link>
        </li>
        <li className="hover:scale-105 transition duration-100">
          <Link to="/process">Process</Link>
        </li>
        <li className="hover:scale-105 transition duration-100">
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <div className="flex items-center gap-1 hover:scale-105 transition">
          <BsGlobe2 />
          <span className="underline">English</span>
        </div>
        {!logedIn ? (
          <Link
            to="/dashboard"
            className="bg-gray-800 text-white px-4 py-1 rounded-2xl hover:scale-105 transition"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            to="/signup"
            className="bg-gray-800 text-white px-4 py-1 rounded-2xl hover:scale-105 transition"
          >
            Register
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
