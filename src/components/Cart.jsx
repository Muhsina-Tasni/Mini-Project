import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { User } from "lucide-react";

const Cart = () => {
  //to get stored cart items
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //to get total price of the product
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  //if cart is empty
  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
        <img
          src="/images/cart.png"
          alt="Empty Cart"
          className="w-64 h-64 object-contain mb-6"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-gray-600 mb-2">
          Looks like you haven’t added anything to your cart yet.
        </p>
        <p className="text-center text-gray-500 mt-4">
          Please add some delicious items before checking out.
        </p>

        <div className="flex justify-between items-center">
          {/* button to the user page */}
          <Link to="/user">
            <button className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full cursor-pointer">
              <span className="text-sm font-semibold text-blue-600">
                Purchase
              </span>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center">
        {/* button to go back */}
        <Link to="/user">
          <button className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full cursor-pointer">
            <User className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">
              Back to Profile
            </span>
          </button>
        </Link>
      </div>

      <h1 className="text-4xl font-extrabold mb-10  text-center">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* display the products of cart with map*/}
        {cart.map(({ id, image, name, category, price, quantity }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={image || "/images/default.png"}
              alt={name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{name}</h2>
            <p className="text-gray-500">{category}</p>
            <p className="text-green-600 font-bold">₹{price}</p>
            <p className="text-sm mb-2">Quantity: {quantity}</p>
            {/* to remove from cart */}
            <button
              onClick={() => dispatch(removeFromCart(id))}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:scale-105 transition cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {/* for check out */}
      <div className="mt-10 text-center">
        <p className="text-xl font-bold mb-2">Total: ₹{total}</p>
        <Link to="/checkout">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
