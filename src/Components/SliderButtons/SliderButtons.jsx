import React from "react";
import "./slider-buttons.css"


const SliderButtons = () => {
	return (
		<>
			<div className="swiper-button image-swiper-button-next">
				<i className="fa-sharp fa-regular fa-circle-right"></i>
			</div>
			<div className="swiper-button image-swiper-button-prev">
				<i className="fa-sharp fa-regular fa-circle-left"></i>
			</div>
		</>
	);
};

export default SliderButtons;
