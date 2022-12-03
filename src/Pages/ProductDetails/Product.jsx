import React from "react";
import "./Product.css";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
const Product = (props) => {
  return (
    <>
      <div className="main_product_container">
        <div className="company">
          <p>sneaker company</p>
        </div>
        <div className="product_name">
          <h1>Fall Limited Edition Sneakers</h1>
        </div>
        <div className="description">
          <p>
            {" "}
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="price">
          <div className="price_tag">
            <p>$125.00</p>
          </div>
          <div className="offer_tag">
            <p>50%</p>
          </div>
          <div className="original_price">
            <p> $250.00</p>
          </div>
        </div>
        <div className="product_count">
          <div className="minus">
            <img
              src={minus}
              alt=""
              onClick={props.minus}
            />
          </div>
          <div className="number">{props.count}</div>
          <div className="plus">
            <img
              src={plus}
              alt=""
              onClick={props.plus}
            />
          </div>
        </div>
        <div className="btn">
            <button onClick={props.addToAcart}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
