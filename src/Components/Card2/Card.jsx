import React from "react";
import { useTranslation } from "react-i18next";
import "./card.css";

let price = 100;

const Card = () => {
	let r = document.querySelector(":root");
	setPrice(r);
	const [t, i18n] = useTranslation();
	return (
		<div className="card2">
			<img
				className="card2-img"
				src="./photo_2022-12-11_20-59-36.jpg"
				alt="Rome"
			/>
			<div className="card2-content">
				<p className="card2-header">Reproduction and Immunity in Living organisms</p>
			</div>
			<hr className="card2-hr" />
			<div className="details-btn">
				<button className="card2-btn">{t("details")}</button>
			</div>
		</div>
	);
};

export default Card;

function imgUrl() {
	const id = rand(200, 400);
	return `https://picsum.photos/id/${id}/300/200`;
}

function rand(min, max) {
	return +Math.floor(Math.random() * (max - min + 1)) + min;
}

function setPrice(r) {
	if (price !== 0) r.style.setProperty("--price-le", `"${price} LE"`);
}
