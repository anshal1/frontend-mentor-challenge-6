import React from "react";
import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import Product from "../ProductDetails/Product";
import "./Home.css";
const Home = () => {
  const [count, setcount] = useState(0);
  const [ShowCartItem, setShowCartItem] = useState(false);
  const plus = () => {
    setcount(count + 1);
  };
  const minus = () => {
    if (count === 0) return;
    setcount(count - 1);
  };
  const addToAcart = (e) => {
    if (count >= 1) {
      setShowCartItem(true);
      e.target.textContent = "Added to cart";
    } else {
      e.target.textContent = "Select the quantity";
    }
  };
  return (
    <div className="home">
      <Navbar count={count} showItem={ShowCartItem} />
      <div className="desktop_home">
        <Carousel />
        <Product
          count={count}
          plus={plus}
          minus={minus}
          addToAcart={addToAcart}
        />
      </div>
    </div>
  );
};

export default Home;
