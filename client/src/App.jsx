import { useState } from "react";

function App() {
  const [price, setPrice] = useState(500);

  return (
    <div>
      <nav>
        <h1>QuickSell</h1>
      </nav>

      <section>
        <h2>Product Name: Iphone</h2>

        <p>price:5000</p>

        <h3>Current Price: ₹{price}</h3>
        <button onClick={() => setPrice(price + 1000)}>
  Increase Price
</button>
      </section>
      <button onClick={() => {
      if (price > 0) {
       setPrice(price - 1000);
      }
      if (price <1000) {
        setPrice(0);
       }
      }}>
    decrease Price
     </button>
    </div>
  );
}

export default App;