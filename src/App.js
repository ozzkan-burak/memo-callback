import React, { useState } from "react";
import './App.css';
import { data } from "./data";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  const [products] = useState(data.items);  
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="wrapper">
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
};
export default App;
