import React from "react";
import "./navbar2.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

const Navbar2 = () => {
	const isLargeScreen = useMediaQuery({
		query: "(max-width: 550px)",
	});
	const [t, i18n] = useTranslation();
	return (
		<nav className="main-nav">
			<div className="navbar2 container">
				<ul className="links">
					<li className="link2">
						<a href="#">
							<i className="fa-brands fa-youtube"></i>
						</a>
					</li>
					<li className="link2">
						<a href="#">
							<i className="fa-brands fa-twitter"></i>
						</a>
					</li>
					<li className="link2">
						<a href="#">
							<i className="fa-brands fa-facebook-f"></i>
						</a>
					</li>
					<li className="link2">
						<a href="#">
							<i className="fa-solid fa-user-group"></i>
						</a>
					</li>
					<li className="link2">
						<a href="#">
							<i className="fa-brands fa-instagram"></i>
						</a>
					</li>
				</ul>
				<ul className="links">
					<li className="link3">
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
					<li className="link3">
						<a href="#">
							<i className="fa-solid fa-user"></i>

							<span>{t("register")}</span>
						</a>
					</li>
					<li className="link3">
						<a href="#">
							<i className="fa-solid fa-right-to-bracket"></i>

							<span>{t("login")}</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar2;
