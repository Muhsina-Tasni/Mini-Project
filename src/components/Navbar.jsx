
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import '/src/index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-stone-400 fixed w-full top-0 left-0   shadow-lg px-6 py-4  relative z-10"     >

{/* <nav
  className="bg-stone-400 fixed top-0 left-0 w-full shadow-lg px-6 py-4 z-10 border-b"
  style={{
    transform: "translateZ(0)",
    willChange: "transform",
    backdropFilter: "none",
    WebkitFontSmoothing: "antialiased",
  }} */}




        <div className="container mx-auto flex items-center justify-between">
          {/* <FontAwesomeIcon icon={faUtensils} style={{ color: "#141414" }} /> */}
          <div className="text-3xl font-extrabold text-gray-800 tracking-wide">
            The Great Indian Kitchen
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-gray-800 font-semibold">
            <Link to={"/"} className="hover:text-red-600 transition duration-300">Home</Link>
            <Link to={"/menu"} className="hover:text-red-600 transition duration-300">Menu</Link>
            <Link to={"/login"} className="hover:text-red-600 transition duration-300">Log In</Link>
            <Link to={"/cart"} className="hover:text-red-600 transition duration-300">Cart</Link>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none transition-all"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col gap-3 text-gray-800 font-semibold px-6 pb-4 pt-2 transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <Link to={"/"} onClick={() => setIsOpen(false)} className="hover:text-red-600">Home</Link>
          <Link to={"/menu"} onClick={() => setIsOpen(false)} className="hover:text-red-600">Menu</Link>
          <Link to={"/login"} onClick={() => setIsOpen(false)} className="hover:text-red-600">Log In</Link>
          <Link to={"/cart"} onClick={() => setIsOpen(false)} className="hover:text-red-600">Cart</Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
