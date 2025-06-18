
import Logout from "./Logout";
import {useSelector } from "react-redux";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { Utensils, Star, ShoppingCart, HandHeart } from "lucide-react";


const UserDashboard = () => {
//  to get the logined person
const person = useSelector(state=>state.slice.user)
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
    {/* welcomre part and logout section */}
      <div className="flex justify-between  m-10">
        <div className="flex">
          <HandHeart className="h-15 w-15 text-blue-400" />
          <p className="text-4xl ml-5"> welcome ,{person.userName} </p>
        </div>

        <div>
          <Logout />
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
            Satisfy Your Cravings <br />
            with Every Order 🍽️
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Welcome to your dashboard. Explore our hand-picked menu filled with
            authentic Indian flavors and curated combos!
          </p>
          <a href="#menusection">
          {/* <Link to="/menu"> */}
            <button className="   cursor-pointer   bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition">
              Explore Menu
            </button>
          {/* </Link> */}
          </a>
        </div>
        <div className="flex-1">
          <img
            src="../images/slide7.jpeg"
            alt="Indian Food"
            className="rounded-3xl shadow-md "
          />
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-100">
          <Star className="h-8 w-8 text-yellow-400 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Top Rated Dishes
          </h3>
          <p className="text-gray-600">
            Check out our most loved dishes by thousands of customers!
          </p>
          <Link to="/special">
            <button className="mt-3 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white   px-4   text-smpx-4 py-2 rounded-full hover:bg-blue-600">
              Our Special
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-100">
          <ShoppingCart className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Your Cart</h3>
          <p className="text-gray-600">
            Ready to order? See what's in your cart and proceed to checkout.
          </p>
          <Link to="/cart">
            <button className=" cursor-pointer mt-3 text-sm  bg-gradient-to-r from-blue-500 to-blue-600 text-white                   px-4 py-2 rounded-full hover:bg-blue-600">
              Go to Cart
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-100">
          <Utensils className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Order History
          </h3>
          <p className="text-gray-600">
            See your previous orders and reorder your favorites.
          </p>
          <Link to="/cart">
            <button className="mt-3  cursor-pointer  text-sm px-4 py-2 rounded-full  bg-gradient-to-r from-blue-500 to-blue-600 text-white      hover:bg-blue-600">
              View Orders
            </button>
          </Link>
        </div>
      </section>



      <Menu />
    </div>
  );
};

export default UserDashboard;
