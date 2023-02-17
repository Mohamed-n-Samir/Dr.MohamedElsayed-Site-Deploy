import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "../Slider/Slider";
import "./section1.css";
import SliderButtons from "../SliderButtons/SliderButtons";
import Card from "../Card1/Card";
import cardData from "../../cardData";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
	const [t, i18n] = useTranslation();
	const navigate = useNavigate();
	return (
		<div className="lectures">
			<div className="container">
				<hr />
				<div className="intro container">
					<h2 className="level">{t("learning level")}</h2>
					<button onClick={() => {
								navigate("/vlogs");

					}} className="view-all">{t("viewBtn")}</button>
				</div>
				<hr />
				<Slider
					cardData={cardData}
					Card={Card}
					grabCursor={true}
					centeredSlides={false}
					spaceBetween={20}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					ButtonComp={SliderButtons}
					navigation={{
						nextEl: ".image-swiper-button-next",
						prevEl: ".image-swiper-button-prev",
						disabledClass: "swiper-button-disabled",
					}}
				/>
			</div>
		</div>
	);
};

export default Section1;
