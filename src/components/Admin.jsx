import { useState } from "react";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const handleAdd = () => {
   
    setProducts([...products, { id: Date.now(), name: "New Item" }]);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <button onClick={handleAdd} className="mb-4 bg-blue-600 text-white px-4 py-2 rounded">
        Add Product
      </button>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="flex justify-between items-center mb-2">
            {p.name}
            <button onClick={() => handleDelete(p.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;

