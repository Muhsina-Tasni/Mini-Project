import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import OurSpecial from "../components/OurSpecial";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.slice);
  // action when the button is click
  const handleClick = () => {
    if (isAuthenticated && user?.role === "admin") {
      navigate("/admin");
    } else if (isAuthenticated && user?.role === "user") {
      navigate("/user");
    } else {
      // alert when the button click and navigate to login
      Swal.fire({
        title: "🍽️ Hey there!",
        text: "Only logged-in foodies can explore the menu.Log in now to start your delicious journey!",
        theme: "dark",
        confirmButtonText: "ok",
        confirmButtonColor: "red",
      });
      navigate("/login");
    }
  };
  // animation from aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* <NavbarHome/> */}
      <div className="relative w-full h-[100vh] ">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-xs z-10"></div>

        {/* Animation from AOS */}
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="text-center max-w-2xl"
          >
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Delicious Food Delivered to Your Doorstep
            </h1>
            <p className="text-white text-lg md:text-2xl mb-6">
              From Your Favorite Indian Kitchen to Your Table
            </p>
            {/* for the two buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <button>
                <a
                  onClick={handleClick}
                  className="text-white hover:bg-gray-400 bg-gray-800 cursor-pointer font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                  Browse Menu
                </a>
              </button>

              <a>
                <button
                  onClick={() => navigate("/special")}
                  className="text-white hover:bg-gray-400 bg-gray-800 cursor-pointer  font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                  Our Special
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* called the specia; section component */}
      <OurSpecial />
    </>
  );
};

export default Home;
