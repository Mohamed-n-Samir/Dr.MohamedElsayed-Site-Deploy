import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "../SliderSection1/Slider";
import "./section1.css";

const Section1 = () => {
	const [t, i18n] = useTranslation();

	return (
		<div className="lectures">
			<div className="container">
				<hr /> 
				<div className="intro container">
					<h2 className="level">{t("learning level")}</h2>
					<button className="view-all">{t("viewBtn")}</button>
				</div>
				<hr />
				<Slider />
			</div>
		</div>
	);
};

export default Section1;
