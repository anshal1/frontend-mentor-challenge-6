import React from 'react'
import "./LightBox.css"
import cross from "../../images/icon-close.svg";
import Carousel from '../Carousel/Carousel';
const LightBox = (props) => {
  return (
    <>
    <div className="main_lightbox_conatiner">
        <div className="light_box_content">
            <div className="ligh_box_carousel">
                <div className="cross_btn">
                    <img src={cross} alt="" onClick={props.closeLightbox}/>
                </div>
                <div className="carousel">
                    <Carousel/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LightBox