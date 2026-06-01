import { useState } from "react";

function App() {
  const [products, setProducts] = useState(0);

  return (
    <div>
      <h1>QuickSell</h1>

      <p>Products Sold: {products}</p>

      <button onClick={() => setProducts(products + 1)}>
        Sell Product
      </button>
    </div>
  );
}

export default App;