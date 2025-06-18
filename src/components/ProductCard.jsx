
import { useDispatch} from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  // desturing the product
  const { image, name, category, price, id } = product;
 

  // function to add to the cart
  const handleCart = (product) => {
     dispatch(addToCart(product));
    
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition mr-5  hover:scale-105  ">
      {/* for display image otherwise display the default image */}
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded"
        />
      ) : (
        <img
          src="../public/images/default.png"
          alt="default"
          className="w-full h-40 object-cover rounded"
        />
      )}

      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-green-600 font-bold">₹{price}</p>
      <p className="text-gray-500">{category}</p>
{/* to add to the cart */}
      <button
        onClick={() => handleCart(product)}
        className="mt-2 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
