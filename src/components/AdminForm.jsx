
import { ChefHat, Upload, DollarSign, Package, Utensils } from "lucide-react";
import food from "../Data/data.json";
import { useSelector } from "react-redux";
import { addProduct } from "../redux/productSlice";
const AdminForm = () => {
  const foodproducts = useSelector((state) => state.products);

  // function when the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // adding to product
    const newProduct = {
      // id as time
      id: Date.now(),
      name: e.target.productName.value,
      price: parseFloat(e.target.productPrice.value),
      count: parseInt(e.target.productQuantity.value),
      image: e.target.productImage.value,
    };

    //  dispatching the newProduct
    dispatch(addProduct(newProduct));

    //to Clear form
    e.target.reset();
  };
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row mx-8  py-8 justify-center gap-10  sm:flex-col-1 ">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100  ">
          {/* Form Header */}
          <div className="bg-blue-400 px-8 py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Utensils className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">Add New Dish</h2>
                <p className="text-black">
                  Create delicious menu items for your customers
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Product Name */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                    <ChefHat className="h-4 w-4 text-orange-500" />
                    <span>Dish Name</span>
                  </label>
                  <input
                    name="productName"
                    type="text"
                    placeholder="e.g., Spicy Chicken Burger"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>

                {/* Product Price */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <span>Price ($)</span>
                  </label>
                  <input
                    name="productPrice"
                    type="number"
                    step="0.01"
                    required
                    placeholder="12.99"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                  />
                </div>

                {/* Product Quantity */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                    <Package className="h-4 w-4 text-blue-500" />
                    <span>Available Quantity</span>
                  </label>
                  <input
                    name="productQuantity"
                    type="number"
                    required
                    placeholder="50"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Product Image URL */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                    <Upload className="h-4 w-4 text-purple-500" />
                    <span>Dish Image URL</span>
                  </label>
                  <input
                    name="productImage"
                    type="file"
                    placeholder="Add Image"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-blue-400 hover:bg-blue-600 text-black font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 text-lg"
                >
                  <ChefHat className="h-5 w-5" />
                  <span>Add Delicious Dish</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/*right section*/}
        <div className="md:grid-cols-3 gap-6 mt-8 flex flex-col ">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Today's Revenue</p>
                <p className="text-2xl font-bold text-gray-800">$2,847</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Menu Items</p>
                <p className="text-2xl font-bold text-gray-800">
                  {food.length + foodproducts.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <Utensils className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Orders Today</p>
                <p className="text-2xl font-bold text-gray-800">94</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminForm;
