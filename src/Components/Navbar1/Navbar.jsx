import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const [t, i18n] = useTranslation();
	return (
		<div className="container navdiv">
            <img src="./msLogo.svg"></img>
			<ul className="links">
				<li className="link">
					<a href="/#index.html">{t("home")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("vlogs")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("blogs")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("lectures")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("liveBroadcast")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("profile")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("BuyCredit")}</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
