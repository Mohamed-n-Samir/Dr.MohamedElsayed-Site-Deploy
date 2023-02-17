import React from "react";
import Card from "../Card2/Card";
import Slider from "../Slider/Slider";
import cardData from "../../card2Data";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./section2.css";

const Section2 = () => {
	const [t, i18n] = useTranslation();

	return (
		// {i18next.language === "en" && ""}
		<section className="leatest-vlogs" style={{textAlign:"",}}>
			<div className="section-title">
				<h2>{t("latest vlogs")}</h2>
				<span className="sectiontitle-design">
					<span className="icons"></span>
				</span>
				<p>{t("after vlog head")}</p>
			</div>
			<div className="container">
				<Slider
					cardData={cardData}
					Card={Card}
					grabCursor={true}
					spaceBetween={25}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					navigation={false}
					ButtonComp={null}
				/>
			</div>
		</section>
	);
};

export default Section2;
