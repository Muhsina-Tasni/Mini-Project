import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF,faTwitter,faInstagram,faGoogle,faPinterest,} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

// animation from aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    // footer section
    <footer className="bg-gray-100 text-gray-800 border-t border-black-200 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6"
      data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000" >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">New Products</a></li>
              <li><a href="#">Top Sellers</a></li>
              <li><a href="#">Our Blog</a></li>
              <li><a href="#">About Our Shop</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* Instagram */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              <img src="/images/slide5.jpeg" alt="insta" className="rounded h-20 w-20" />
              <img src="/images/img2.jpeg" alt="insta" className="rounded h-20 w-20  " />
              <img src="/images/img3.jpeg" alt="insta" className="rounded h-20 w-20" />
              <img src="/images/slide1.jpeg" alt="insta" className="rounded h-20 w-20" />
              <img src="/images/slide2.jpeg" alt="insta" className="rounded h-20  w-20" />
              <img src="/images/slide3.jpeg" alt="insta" className="rounded h-20 w-20" />
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">kerala,India</p>
            <p className="text-sm mt-2">📞 0123456789</p>
            <p className="text-sm mt-2">📧 thegreatindiankitchen@gmail.com</p>
            <p className="text-sm mt-2">
              For product registration and general inquiries please <span className="text-green-600">contact us</span>
            </p>
          </div>




 <div className=" border-gray-200 mt-10 pt-6 flex-col md:flex-row justify-between items-center text-sm">
          {/* Social Media icns */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="font-medium">Follow us</span>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} className="hover:text-blue-600" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className="hover:text-blue-400" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500" /></a>
            <a href="#"><FontAwesomeIcon icon={faGoogle} className="hover:text-red-500" /></a>
            <a href="#"><FontAwesomeIcon icon={faPinterest} className="hover:text-red-600" /></a>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-2">
            <span>Payment Method</span>
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="paypal" className="w-6" />
            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="mastercard" className="w-6" />
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" className="w-6" />
            <img src="https://img.icons8.com/color/48/000000/discover.png" alt="discover" className="w-6" />
          </div>
        </div>

        </div>

       
        {/* Copyright */}
        <div className="text-center text-xs mt-4 border-t pt-4 text-gray-500">
          <p>© 2025 The Great Indian Kitchen. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-green-500">Privacy Policy</a> | <a href="#" className="text-green-500">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
