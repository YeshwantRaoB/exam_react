import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Apple", price: 30 },
    { id: 2, name: "Banana", price: 10 },
    { id: 3, name: "Mango", price: 50 }
  ];

  // Just add item to cart (no checking for duplicates to keep it simple)
  function addToCart(product) {
    setCart([...cart, product]);
  }

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <div>
          {cart.map((item, i) => (
            <p key={i}>
              {item.name} - ₹{item.price}
            </p>
          ))}
          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
