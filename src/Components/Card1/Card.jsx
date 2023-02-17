import React from "react";
import { useTranslation } from "react-i18next";
import "./card.css";

const Card = ({ img, price, header, date, educationalLevel }) => {
	let r = document.querySelector(":root");
	{
		price &&
			price !== 0 &&
			r.style.setProperty("--price-le", `"${price} LE"`);
	}
	const [t, i18n] = useTranslation();
	return (
		<div className="card">
			<img className="card-img" src={img} alt="Vlog" />
			<div className="card-content">
				<h1 className="card-header">{header}</h1>

				<p className="card-text">
					<i
						className="fa-solid fa-clock"
						style={{ fontSize: "1rem", marginRight: ".5rem" }}
					></i>
					{date}
				</p>
				<p className="card-text">
					<i
						className="fa-solid fa-people-group"
						style={{ fontSize: "1rem", marginRight: ".5rem" }}
					></i>
					{educationalLevel}
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
