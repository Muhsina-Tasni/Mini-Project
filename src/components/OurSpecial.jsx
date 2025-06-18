import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const OurSpecial = () => {


// animation from aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <>
 
    <div className="container bg-gray-100">
        <h1 className="text-center text-5xl font-bold">OUR SPECIAL</h1>
        {/* used style in same page  for the swiper*/}
      <style>
        {`
        :root {
          --primary: #3498db;
          --white: #ffffff;
          --bg: #f5f5f5;
        }

        .container {
          max-width: 1240px;
          padding: 4rem 1rem;
          margin: 0 auto;
        }

        .swiper-container {
          padding: 2rem 0;
          position: relative;
        }

        .swiper-slide {
          width: 100%;
          max-width: 280px; /* Reduced size */
          height: 320px;
          position: relative;
        }

        .swiper-slide img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: cover;
        }

        @media (max-width: 500px) {
          .swiper-slide {
            max-width: 220px;
            height: 260px;
          }

          .swiper-slide img {
            border-radius: 15px;
          }
        }

        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          display: none;
        }

        .slider-controler {
          position: relative;
          bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .slider-arrow {
          // background: var(--white);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 8px 24px rgba(18, 28, 53, 0.1);
          cursor: pointer;
        }

        .slider-arrow ion-icon {
          font-size: 20px;
          color:#000;
        }

        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top: 0;
        }

        .swiper-button-prev {
          left: 30%;
          transform: translateX(-50%);
        }

        .swiper-button-next {
          left: 70%;
          transform: translateX(-50%);
        }

        @media (max-width: 990px) {
          .swiper-button-prev {
            left: 25%;
          }
          .swiper-button-next {
            left: 75%;
          }
        }

        @media (max-width: 450px) {
          .swiper-button-prev {
            left: 20%;
          }
          .swiper-button-next {
            left: 80%;
          }
        }

      

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ccc;
          border-radius: 50%;
          transition: background 0.3s;
        }

        .swiper-pagination-bullet-active {
          background: var(--primary);
        }
      `}
      </style>
<div
 data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
{/* swiperslides */}
        <SwiperSlide>
  <img src="../images/slide7.jpeg" />
</SwiperSlide>
<SwiperSlide>
  <img src="../images/slide1.jpeg" />
</SwiperSlide>
<SwiperSlide>
  <img src="../images/slide2.jpeg" />
</SwiperSlide>
<SwiperSlide>
  <img src="../images/slide3.jpeg" />
</SwiperSlide>
<SwiperSlide>
  <img src="../images/slide4.jpeg" />
</SwiperSlide>
<SwiperSlide>
  <img src="../images/slide5.jpeg" />
</SwiperSlide>
<SwiperSlide>
  <img src="../images/slide6.jpeg" />
</SwiperSlide>

 {/* forswiper control */}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div> 
    </div>
    </>

  );
};

export default OurSpecial;
