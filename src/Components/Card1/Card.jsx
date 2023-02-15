import React from "react";
import { useTranslation } from "react-i18next";
import "./card.css";

let price = 100;

const Card = () => {
	let r = document.querySelector(":root");
	setPrice(r);
	const [t, i18n] = useTranslation();
	return (
		<div className="card">
			<img
				className="card-img"
				src="https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				alt="Rome"
			/>
			<div className="card-content">
				<h1 className="card-header">Lesson Five Chapter Three</h1>
				<p className="card-text">
					<i
						className="fa-solid fa-clock"
						style={{ fontSize: "1rem" }}
					></i>{" "}
					April 20,2022
				</p>
				<p className="card-text">
					<i
						className="fa-solid fa-people-group"
						style={{ fontSize: "1rem" }}
					></i>{" "}
					3rd secondary
				</p>
			</div>
			<hr className="card-hr" />
			<div className="buy-btn">
				<button className="card-btn">{t("buy")}</button>
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
