import React from "react";
import "./navbar1.css";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar1 = () => {
	const isLargeScreen = useMediaQuery({
		query: "(min-width: 900px)",
	});

	const [t, i18n] = useTranslation();

	let activeStyle = 'active-style';

	const { pathname } = useLocation();
	const isActive = ["/Dr.MohamedElsayed-Site-Deploy/", "/Dr.MohamedElsayed-Site-Deploy/home"].includes(pathname);
	return (
		<>
			{isLargeScreen && (
				<nav className="navbar1">
					<div className="container navdiv">
						<img src="./logo1.svg"></img>
						<ul className="links">
							<li className="link">
								<NavLink
									to="/Dr.MohamedElsayed-Site-Deploy/"
									className={() =>
										isActive ? activeStyle : undefined
									}
								>
									{t("home")}
								</NavLink>
							</li>
							<li className="link">
								<NavLink
									to="/Dr.MohamedElsayed-Site-Deploy/vlogs"
									className={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									{t("vlogs")}
								</NavLink>
							</li>
							<li className="link">
								<NavLink
									to="/Dr.MohamedElsayed-Site-Deploy/blogs"
									className={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									{t("blogs")}
								</NavLink>
							</li>
							<li className="link">
								{/* this is a comment */}
								<NavLink
									to="/Dr.MohamedElsayed-Site-Deploy/lectures"
									className={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									{t("lectures")}
								</NavLink>
							</li>
							<li className="link">
								<NavLink
									to="/Dr.MohamedElsayed-Site-Deploy/liveBroadcast"
									className={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									{t("liveBroadcast")}
								</NavLink>
							</li>
							<li className="link">
								<NavLink
									to="/Dr.MohamedElsayed-Site-Deploy/profile"
									className={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									{t("profile")}
								</NavLink>
							</li>
							<li className="link">
								<NavLink
									to="/Dr.MohamedElsayed-Site-Deploy/buyCredit"
									className={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									{t("buyCredit")}
								</NavLink>
							</li>
						</ul>
					</div> 
				</nav>
			)}
		</>
	);
};

export default Navbar1;
