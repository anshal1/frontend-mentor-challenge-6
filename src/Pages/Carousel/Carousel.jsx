import React from "react";
import "./Carousel.css";
import right_btn from "../../images/icon-next.svg";
import left_btn from "../../images/icon-previous.svg";
import img1 from "../../images/image-product-1.jpg";
import img2 from "../../images/image-product-2.jpg";
import img3 from "../../images/image-product-3.jpg";
import img4 from "../../images/image-product-4.jpg";
import { useState } from "react";
import { useEffect } from "react";
import LightBox from "../LighBox/LightBox";
const Carousel = () => {
  const [productIMG, setproductIMG] = useState(img1);
  const [showLignBox, setShowlightbox] = useState(false);
  const Left = () => {
    const scroller = document.querySelector(".product_img");
    scroller.scrollLeft -= 395
  };
  const Right = () => {
    const scroller = document.querySelector(".product_img");
    scroller.scrollLeft += 395
  };
  const ChangeImage = (e) => {
    setproductIMG(e.target.src);
  };
  useEffect(() => {
    const allImage = document.querySelectorAll("[data-image]");
    allImage.forEach((image) => {
      if (image.src === productIMG) {
        image.setAttribute("class", "active_img");
      } else if (image.src !== productIMG) {
        image.removeAttribute("class", "active_img");
      }
    });
  }, [productIMG]);
  useEffect(() => {
    const allImage = document.querySelectorAll("[data-image]");
    allImage[0].setAttribute("class", "active_img");
  }, []);
  return (
    <>
      <div className="main_carousel_container">
        <div className="btns">
          <img src={left_btn} alt="" onClick={Left} />
          <img src={right_btn} alt="" onClick={Right} />
        </div>
        <div className="product_img">
          <div className="img_holder">
            <img src={img1} className="" alt="" />
            <img src={img2} className="" alt="" />
            <img src={img3} className="" alt="" />
            <img src={img4} className="" alt="" />
          </div>
        </div>
        <div className="desktop_carousel">
          <img
            src={productIMG}
            alt=""
            onClick={() => {
              if (showLignBox) {
                setShowlightbox(false);
              } else {
                setShowlightbox(true);
              }
            }}
          />
        </div>
        <div className="product_gallery">
          <img
            src={img1}
            data-image
            className=""
            alt=""
            onClick={ChangeImage}
          />
          <img
            src={img2}
            data-image
            className=""
            alt=""
            onClick={ChangeImage}
          />
          <img
            src={img3}
            data-image
            className=""
            alt=""
            onClick={ChangeImage}
          />
          <img
            src={img4}
            data-image
            className=""
            alt=""
            onClick={ChangeImage}
          />
        </div>
      </div>
      {showLignBox ? (
        <LightBox
          closeLightbox={() => {
            setShowlightbox(false);
          }}
        />
      ) : null}
    </>
  );
};

export default Carousel;
