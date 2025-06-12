


import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Admin = () => {

const user = useSelector(state=>state.slice.user)
console.log(user,"user")


  const [products, setProducts] = useState([]);
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  // 🔁 Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  // 💾 Save to localStorage on products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // ➕ Create
  const handleAdd = () => {
    if (newName.trim() === "") return;
    const newProduct = {
      id: Date.now(),
      name: newName.trim(),
    };
    setProducts([...products, newProduct]);
    setNewName("");
  };

  // ❌ Delete
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // ✏️ Start editing
  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditName(name);
  };

  // ✅ Save update
  const handleUpdate = () => {
    setProducts(
      products.map((p) =>
        p.id === editingId ? { ...p, name: editName } : p
      )
    );
    setEditingId(null);
    setEditName("");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Admin Panel</h1>

{user?.userName &&
<h2  >admin:{user.userName}</h2>
}



      {/* Input to Add Product */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter product name"
          className="border border-gray-300 rounded p-2 flex-1"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>


<ul>
       {products?.map ((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center border-b py-2"
          >
            {editingId === p.id ? (
              <>
                <input
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  className="border px-2 py-1 rounded mr-2 flex-grow"
                />
                <button
                  onClick={() => handleUpdate(p.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="text-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{p.name}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(p.id, p.name)}
                    className="text-blue-600"
                  >
                    Edit
                 </button>
                 <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul> 



    </div>
  );
};

export default Admin;
