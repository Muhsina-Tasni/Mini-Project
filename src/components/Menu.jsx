
import { useState } from "react";
import products from "../Data/data.json";
import ProductCard from "./ProductCard";
import SearchBar from './SearchBar'

const categories = [ 
  { name: "All", image: "/images/img.jpeg" },
  { name: "Our Special", image: "/images/img1.jpeg" },
  { name: "Pizza", image: "/images/img2.jpeg" },
  { name: "Salad", image: "/images/img3.jpeg" }
];

const Menu = () => {

  const [filteredProducts, setFilteredProducts] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");


const filteredItems = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewAll = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) => item.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
<>
    <div className="p-4 pt-20" id="menu-section">
<h1 className="text-5xl font-bold text-center">MENU</h1>


      {/* Category Cards */}
      <div className="flex flex-cols-2 md:flex-cols-4 justify-center gap-10  mt-15 mb-5">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className=" w-48 text-center cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition pb-10"
          
          >
            <img src={cat.image} alt={cat.name} className="w-full h-32 object-cover" />

<div className="p-3">
            <h2 className="font-semibold">{cat.name}</h2>
            <button
              onClick={() => handleViewAll(cat.name)}
              className="mt-2 bg-blue-800 text-white text-sm px-4 py-1 rounded hover:bg-blue-700 cursor-pointer"
          >
              View All
             </button>
          </div>
          </div>
        ))}
      </div>


      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-red-500">Click a category to view products</p>
        ) : (
          filteredProducts?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        )}
      </div>
    </div>

<div className="p-6">
      
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {searchTerm && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredItems.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          ) : (
           filteredItems .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          )}
        </div>
      )}
    </div>
</>

  );
};

export default Menu;
