import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom"; 

const Home = () => {

   const navigate = useNavigate();



  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full h-[90vh] ">
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

      {/* Transparent Overlay */}
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
            From Your Favorite Kitchens to Your Table
          </p>

         
          <div className="flex justify-center gap-4 flex-wrap">
            <button>
              <a
                  onClick={() => navigate("/login")}
                className="text-white bg-gray-800 hover:bg-blue-800  font-medium rounded-full text-sm px-5 py-2.5 text-center"
              >
               Order Now
              </a>
            </button>

            <button>
              <a
                href="#menu-section"
                className="text-white bg-gray-800 hover:bg-blue-800  font-medium rounded-full text-sm px-5 py-2.5 text-center"
              >
                Browse Menu
              </a>
            </button>
          </div>
        </div>
      </div>
      
      <Menu />
    </div>
  );
};

export default Home;
