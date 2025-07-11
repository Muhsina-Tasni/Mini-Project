// imported
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import "/src/index.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  // for hamberger menu
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.slice);
  const navigate = useNavigate();

  // created button for the login and navigate under the condition
  const handleClick = () => {
    if (isAuthenticated && user?.role === "admin") {
      navigate("/admin");
    } else if (isAuthenticated && user?.role === "user") {
      navigate("/user");
    } else {
      navigate("/login");
    }
}

  return (
    // navbar
    <>
      <nav className="bg-gray-300 fixed w-full top-0 left-0   shadow-lg px-6 py-4  relative z-10">
        <div className="nav-container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-3xl font-extrabold text-white-800 tracking-wide">
            <span>The Great Indian Kitchen</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-black hover:font-extrabold  font-semibold">
            <Link
              to={"/"}
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
            <button
             onClick={handleClick} className="hover:text-blue-600 transition duration-300  cursor-pointer">
              Login
            
            </button>
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
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <Link
            to={"/"}
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>

<button
  onClick={() => {
    setIsOpen(false);
    handleClick();
  }}
  className="hover:text-blue-600 transition duration-300   text-left"
>
  Login
</button>


        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
