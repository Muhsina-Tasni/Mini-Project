import Logout from "../components/Logout.jsx";
import food from "../Data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { HandHeart } from "lucide-react";
import { useState } from "react";
import AdminForm from "./AdminForm.jsx";
import { deleteProduct } from "../redux/productSlice.js";
//adminpage
const Admin = () => {
  // foodproducts product store
  const foodproducts = useSelector((state) => state.products);
  //food items stored in menuitems variable from data.json and product store
  const menuitems = [...foodproducts, ...food];
  // to get the person
  const person = useSelector((state) => state.slice.user);
  const dispatch = useDispatch();
  // state
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>

      <div className="min-h-screen bg-gray-100">
        {/* welcome section */}
        <div className="flex justify-between p-10 align-middle">
          <div className="flex">
            <HandHeart className="h-15 w-15 text-blue-400" />
            <p className="text-4xl ml-5"> welcome ,{person.userName} </p>
          </div>
          {/* //logout button and show button*/}
          <div className="flex gap-4">
            <div>
              <Logout />
            </div>

            <div>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer"
              >
                {showMenu ? "Hide Menu" : "Show Menu"}
              </button>
            </div>
          </div>
        </div>

        {/* Product List Section */}
        {showMenu && (
          <div className="mx-10  rounded-lg  p-6" id="menu">
            <h2 className="text-4xl mb-4 text-center font-semibold mb-6">
              Current Menu
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 ">
              {menuitems.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 p-4 rounded-xl  relative shadow-2xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-20 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-sm text-gray-600">${product.price}</p>
                  <p className="text-sm text-gray-600">Qty: {product.count}</p>
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={() => dispatch(deleteProduct(product.id))}
                      className="bg-blue-600    hover:bg-red-500 px-3 py-1 rounded text-sm text-white cursor-pointer hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
{/* admin form  component */}
        <AdminForm />
      </div>
    </>
  );
};

export default Admin;
