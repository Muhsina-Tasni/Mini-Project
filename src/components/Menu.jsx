
import { useState } from "react";
import products from "../Data/data.json";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

const categories = [
  { name: "All", image: "/images/img.jpeg" },
  { name: "Indian", image: "/images/img1.jpeg" },
  { name: "Pizza", image: "/images/img2.jpeg" },
  { name: "Salad", image: "/images/img3.jpeg" }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="p-4 pt-20" id="menu-section">
      <h1 className="text-5xl font-bold   text-center">MENU</h1>

<SearchBar/>

      {/* Categories */}
      <div className="flex flex-wrap justify-evenly  mb-8">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="w-48 bg-gray-100 rounded-xl shadow-md overflow-hidden text-center pb-10"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h2 className="font-semibold">{cat.name}</h2>
              <button
                onClick={() => setSelectedCategory(cat.name)}
                className="mt-2 bg-blue-800 text-white text-sm px-4 py-1 rounded hover:bg-blue-700"
              >
                View All
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
