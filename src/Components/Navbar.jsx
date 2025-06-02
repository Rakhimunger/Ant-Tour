import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Images/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-100 text-slate-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-2">
        {/* Logo */}
        <div className="w-1/2 md:w-1/4">
          <img src={Logo} alt="logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex-row md:flex gap-4 items-center text-sm md:text-base absolute md:static right-0 top-16 bg-slate-100 md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            isMenuOpen ? "flex px-4 py-3" : "hidden md:flex"
          }`}
        >
          <NavLink
            to="/home"
            className="hover:text-orange-600  hover:rounded-2xl px-4 py-1 text-gray-800 font-medium"
          >
            Home
          </NavLink>

          <NavLink
            to="/char-dham"
            className="hover:text-orange-600  hover:rounded-2xl px-4 py-1 text-gray-800 font-medium"
          >
            Char Dham
          </NavLink>
          <NavLink
            to="/do-dham"
            className="hover:text-orange-600  hover:rounded-2xl px-4 py-1 text-gray-800 font-medium"
          >
            Do Dham
          </NavLink>
          <NavLink
            to="/badri-nath"
            className="hover:text-orange-600  hover:rounded-2xl px-4 py-1 text-gray-800 font-medium"
          >
            Badri Nath
          </NavLink>
          <NavLink
            to="/kedar-nath"
            className=" hover:text-orange-600 hover:rounded-2xl px-4 py-1 text-gray-800 font-medium"
          >
            Kedhar Nath
          </NavLink>

          <NavLink
            to="/kedhar-nath"
            className="hover:text-orange-600  hover:rounded-2xl px-4 py-1 text-gray-800 font-medium"
          >
            Book Now
          </NavLink>

          {/* Join Button for Mobile View */}
          <div className="md:hidden">
            <Link
              to="/Join"
              className="hover:text-orange-600  text-white font-semibold px-6 py-2 mt-2 rounded-2xl shadow"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
