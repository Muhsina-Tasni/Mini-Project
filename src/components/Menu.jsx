import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import products from "../Data/data.json";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

// creted catogeries
const categories = [
  { name: "All", image: "/images/img.jpeg" },
  { name: "Our Special", image: "/images/img1.jpeg" },
  { name: "Pizza", image: "/images/img2.jpeg" },
  { name: "Salad", image: "/images/img3.jpeg" },
  { name: "new", image: "/images/img3.jpeg" },
];
// animation from aos
const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  //  get food  products
  const foodproducts = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // to store search term
  const [searchTerm, setSearchTerm] = useState("");
  // filter products under the search
  const filteredItems = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClearSearch = () => {
    // This clears the input field
    setSearchTerm("");
  };

  const handleViewAll = (category) => {
    if (category === "All") {
      // to get all  products and new foodproducts
      const allCombined = [...products, ...foodproducts];
      setFilteredProducts(allCombined);
      // categorize food products under the name  'new'
    } else if (category === "new") {
      setFilteredProducts(foodproducts);
    } else {
      const filtered = products.filter((item) => item.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="bg-gray-100" id="menusection">
      <div className="p-4 pt-20 bg-gray-100" id="menu-section">
        <h1 className="text-5xl font-bold text-center">MENU</h1>

        {/* Category Cards */}
        <div
          className="   hidden md:grid sm:grid-cols-5 lg:grid-cols-5 place-items-center gap-6 mt-8 mb-5"
          // aos animation
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          {/* mapping the categories */}
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className=" w-48 text-center cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition pb-10"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-32 object-cover  "
              />

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
        {/* /////////////////on smaller screens dispaly like button */}

        <div className="flex md:hidden overflow-x-auto gap-3 px-2 py-2   justify-center items-center mt-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleViewAll(cat.name)}
              className="whitespace-nowrap bg-blue-600 text-white px-4 py-1 rounded-full text-sm"
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <p className="col-span-full text-center text-red-500">
              Click a category to view products
            </p>
          ) : (
            filteredProducts?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          )}
        </div>
      </div>

      <div className="p-6">
        {/* called the searchbar component to this page  */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onClearSearch={handleClearSearch}
        />
        {searchTerm && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* if there is no searched products */}
            {filteredItems.length === 0 ? (
              <p className="col-span-full text-center text-black-500 font-extrabold text-4xl pb-10">
                No products found.
              </p>
            ) : (
              filteredItems.map((product, index) => (
                // called the product card component
                <ProductCard key={index} product={product} />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
