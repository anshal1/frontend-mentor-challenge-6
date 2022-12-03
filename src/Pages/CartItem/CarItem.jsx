import React from "react";
import "./CartItem.css";
import item from "../../images/image-product-1-thumbnail.jpg";
import trash from "../../images/icon-delete.svg"
const CarItem = (props) => {
  return (
    <>
      <div className="main_cartitem_conatiner">
        <div className="item_img">
          <img src={item} alt="" />
        </div>
        <div className="item_info">
            <div className="trash_btn">
                <button><img src={trash} alt="" /></button>
            </div>
          <div className="item_name">
            <p>Fall Limited Edition Sneakers</p>
          </div>
          <div className="price__quantity">
            <p>
              $125.00 x {props.quantity} <span>${125 * props.quantity}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarItem;
