import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Use the direct URL of the image in the src attribute */}
        <img
          src="https://i.ibb.co/PDGbWGh/icons8-video-conference-64.png"
          alt="Video Camera Icon"
          className="text-white font-bold text-xl"
        />

        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
          >
            Home
          </a>
          <Link to='/about'>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
            >
              About
            </a>
          </Link>
          <Link to="/login">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500"
            >
              Login
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
