import React from "react";
import { useTranslation } from "react-i18next";
import "./card.css";

const Card = ({ img, header}) => {
	const [t, i18n] = useTranslation();
	return (
		<div className="card2">
			<img className="card-img" src={img} alt="Vlog" />
			<div className="card2-content">

				<p className="card2-header">{header}</p>
			</div>
			<hr className="card2-hr" />
			<div className="details-btn">
				<button className="card2-btn">{t("details")}</button>
			</div>
		</div>
	);
};

export default Card;
