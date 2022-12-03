import React from "react";
import "./Navbar.css";
import menu from "../../images/icon-menu.svg";
import cart from "../../images/icon-cart.svg";
import user from "../../images/image-avatar.png";
import cross from "../../images/icon-close.svg";
import { useState } from "react";
import CarItem from "../CartItem/CarItem";
const Navbar = (props) => {
  const [showmenu, setshowmenu] = useState("menu_hide");
  const [showCart, setshowCart] = useState("cart_phone_hide");
  return (
    <div className="main_nav_container">
      <div className="left_container_nav">
        <div className="menu_icon">
          <img
            src={menu}
            alt=""
            onClick={() => {
              setshowmenu("menu");
            }}
          />
        </div>
        <div className="brand_name">
          <p>sneakers</p>
        </div>
      </div>
      <div className="right_container_nav">
        <div className="cart_logo">
          <img
            src={cart}
            alt=""
            onClick={() => {
              if (showCart === "cart_phone_hide") {
                setshowCart("cart_phone");
              } else {
                setshowCart("cart_phone_hide");
              }
            }}
          />
          {props.count >=1 ? <span id="cart_item_quantity">{props.count}</span>: null}
        </div>
        <div className="user_profile_img">
          <img src={user} alt="" />
        </div>
      </div>
      <div className={showmenu}>
        <div className="close_btn">
          <img
            src={cross}
            alt=""
            onClick={() => {
              setshowmenu("menu_hide");
            }}
          />
        </div>
        <div className="menu_options">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </div>
      </div>
      <div className={showCart}>
        <div className="heading">
          <p>Cart</p>
        </div>
        <div className="cart_item">
          {props.showItem ? (
            <CarItem quantity={props.count} />
          ) : (
            <h3>Your cart is empty</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
