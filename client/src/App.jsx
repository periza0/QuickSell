import { useState } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [lastProduct, setLastProduct] = useState("None");

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <h1 className="text-3xl font-bold text-blue-600">
          QuickSell
        </h1>
      </nav>

      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">
          Add Product
        </h2>

        <input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={() => {
            setLastProduct(productName);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>

        <h3 className="mt-4 text-lg">
          Last Product Added: {lastProduct}
        </h3>
      </div>
    </div>
  );
}

export default App;