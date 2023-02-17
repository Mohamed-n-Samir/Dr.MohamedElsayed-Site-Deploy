import React from "react";
import { useState, useEffect, useRef } from "react";
import "./hidden-nav-bar.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";

const HiddenNavBar = () => {

	let activeStyle = "active-style";

	const { pathname } = useLocation();
	const isActive = ["/", "/home"].includes(pathname);
	const menuRef = useRef();
	const [isVisible, setVisible] = useState(false);
	useEffect(() => {
		let handler = (e) => {
			if(!menuRef.current.contains(e.target)){
				setVisible(false)
			}
		}
		document.addEventListener("click",handler);
	})

	const toggleClass = () => {
		setVisible(!isVisible);
	};

	const [t, i18n] = useTranslation();
	const isLargeScreen = useMediaQuery({
		query: "(min-width: 550px)",
	});

	return (
		<nav dir="ltr" ref = {menuRef}>
			<div className="container" style={{ position: "relative" }}>
				<div className="icon">
					<div
						id="toggle"
						className={isVisible ? "active" : null}
						onClick={toggleClass}
					></div>
				</div>
			</div>

			<div id="sidebar" className={isVisible ? "active" : null}>
				<img
					className="logo"
					src="./logo1.svg"
					alt="Logo"
					style={{
						width: "40%",
					}}
				/>
				<ul>
					<li className="link4">
						<NavLink
							to="/"
							className={() =>
								isActive ? activeStyle : undefined
							}
						>
							{t("home")}
						</NavLink>
					</li>
					<li className="link4">
						<NavLink
							to="/vlogs"
							className={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							{t("vlogs")}
						</NavLink>
					</li>
					<li className="link4">
						<NavLink
							to="/blogs"
							className={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							{t("blogs")}
						</NavLink>
					</li>
					<li className="link4">
						<NavLink
							to="/lectures"
							className={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							{t("lectures")}
						</NavLink>
					</li>
					<li className="link4">
						<NavLink
							to="/liveBroadcast"
							className={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							{t("liveBroadcast")}
						</NavLink>
					</li>
					<li className="link4">
						<NavLink
							to="/profile"
							className={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							{t("profile")}
						</NavLink>
					</li>
					<li className="link4">
						<NavLink
							to="/buyCredit"
							className={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							{t("buyCredit")}
						</NavLink>
					</li>
					<li className="link4">
						{isLargeScreen ? (
							""
						) : i18next.language === "en" ? (
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
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default HiddenNavBar;
