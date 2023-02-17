import React from "react";
import "./header-section.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderSection = () => {
	const [t, i18n] = useTranslation();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<>
			{pathname === "/Dr.MohamedElsayed-Site-Deploy/" || pathname === "/Dr.MohamedElsayed-Site-Deploy/home" ? (
				<div className="search-parent">
					<h1 className="name-logo">DR.Mohamed ElSayed</h1>

					<div className="search-box container">
						<input
							placeholder={t("searchPlaceHolder")}
							type="text"
							name="query"
							id="lectures-search"
						/>
						<button type="submit" className="search-button">
							{t("searchBtn")}
						</button>
					</div>
				</div>
			) : (
				<div className="search-parent">
					<h1 className="name-logo">{t(`${pathname.split("/").pop()}`)}</h1>
					<div className="after-header">
						<span
							onClick={() => {
								navigate("/");
							}}
						>
							{t("home")}
						</span>
						<span style={{ margin: "0 1rem" }}> / </span>
						<span className="path-name">
							{t(`${pathname.split("/").pop()}`)}
						</span>
					</div>
				</div>
			)}
		</>
	);
};

export default HeaderSection;
