
const ProductCard = ({ product }) => {
  const { image, name, category, price } = product;

  return (
    <div
      className="bg-gray-100  rounded-lg shadow-md p-4 hover:shadow-lg transition mr-5 "
      // style={{ width: '100%', maxWidth: '250px', margin: 'auto' }}
    >
      <img
        src={image}
        alt={name}
      className={"w-full h-40 object-cover rounded" }
       />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-green-600 font-bold">₹{price}</p>
      <p className="text-gray-500">{category}</p>
 <button className="mt-2 bg-blue-800 text-white px-4 py-2 rounded hover:bg-green-600">
      Add to Cart
     </button>
   </div>
   );
 };

export default ProductCard;

