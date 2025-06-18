import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import Swal from "sweetalert2";

const Checkout = () => {
  // to get cart items
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (true) {
      // to give message after purchase
      Swal.fire({
        title: "Thank you for your order! 🎉",
        text: "Your delicious meal is being prepared and will be delivered to your doorstep shortly.You will receive a confirmation message with tracking details soon",
        theme: "light",
        confirmButtonText: "ok",
        confirmButtonColor: "green",
      });
      //  after purchase everything clear the cart and navigate to profile
      dispatch(clearCart());
      navigate("/user");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded h-screen mb-5">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {/* map the cart products */}
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <span>
            {item.name} x {item.quantity}
          </span>
          <span>₹{item.price * item.quantity}</span>
        </div>
      ))}
      <div className="text-right mt-4 font-bold">Total: ₹{total}</div>
      {/* button to place order */}
      <button
        onClick={handlePlaceOrder}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
