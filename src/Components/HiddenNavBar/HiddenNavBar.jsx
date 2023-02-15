import React from "react";
import { useState } from "react";
import "./hidden-nav-bar.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useMediaQuery } from "react-responsive";

const HiddenNavBar = () => {
	document.addEventListener("click", (e) => {
		if (
			e.target.id !== "sidebar" &&
			e.target.id !== "toggle" &&
			e.target.className !== "logo"
		) {
			removeClass();
		}
	});

	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};
	const removeClass = () => {
		setActive(false);
	};

	const [t, i18n] = useTranslation();
	const isLargeScreen = useMediaQuery({
		query: "(min-width: 550px)",
	});

	return (
		<div dir="ltr">
			<div className="container" style={{ position: "relative" }}>
				<div className="icon">
					<div
						id="toggle"
						className={isActive ? "active" : null}
						onClick={toggleClass}
					></div>
				</div>
			</div>

			<div id="sidebar" className={isActive ? "active" : null}>
				<img
					className="logo"
					src="./msLogo.png"
					alt="Logo"
					style={{
						width: "40%",
					}}
				/>
				<ul>
					<li className="link4">
						<a href="/#index.html">{t("home")}</a>
					</li>
					<li className="link4">
						<a href="/#index.html">{t("vlogs")}</a>
					</li>
					<li className="link4">
						<a href="/#index.html">{t("blogs")}</a>
					</li>
					<li className="link4">
						<a href="/#index.html">{t("lectures")}</a>
					</li>
					<li className="link4">
						<a href="/#index.html">{t("liveBroadcast")}</a>
					</li>
					<li className="link4">
						<a href="/#index.html">{t("profile")}</a>
					</li>
					<li className="link4">
						<a href="/#index.html">{t("BuyCredit")}</a>
					</li>
					<li className="link4">
					{isLargeScreen ?"" :i18next.language === "en" ? (
							<button
								className="language-btn"
								onClick={() => {
									i18n.changeLanguage("ar");
									document.dir = "rtl";
								}}
							>
								<img src="./Flag_of_Egypt.svg" alt="arabic" />
								<span>Arabic</span>
							</button>
						) : (
							<button
								className="language-btn"
								onClick={() => {
									i18n.changeLanguage("en");
									document.dir = "ltr";
								}}
							>
								<img
									src="./Flag_of_the_United_States.svg"
									alt="english"
								/>
								<span>English</span>
							</button>
						) }
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HiddenNavBar;
