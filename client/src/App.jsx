import { useState } from "react";

function App() {
  const [price, setPrice] = useState(5000);
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <nav>
        <h1>QuickSell</h1>
      </nav>

      <section>
        <h2>Product Name: iPhone</h2>

        <h3>Current Price: ₹{price}</h3>

        <button
          onClick={() => {
            setPrice(price + 1000);
            setClicks(clicks + 1);
          }}
        >
          +1000
        </button>

        <button
          onClick={() => {
            setPrice(Math.max(0, price - 1000));
            setClicks(clicks + 1);
          }}
        >
          -1000
        </button>

        <h3>Total Clicks: {clicks}</h3>
      </section>
    </div>
  );
}

export default App;