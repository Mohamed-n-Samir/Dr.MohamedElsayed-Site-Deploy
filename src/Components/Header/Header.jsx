import React from "react";
import { useMediaQuery } from "react-responsive";
import "./header.css";
import HeaderSection from "../HeaderSection/HeaderSection";
import Navbar2 from "../Navbar2/Navbar2";
import HiddenNavBar from "../HiddenNavBar/HiddenNavBar";
import { useLocation } from "react-router-dom";

const Header = (props) => {
	const isMediumScreen = useMediaQuery({
		query: "(max-width: 900px)",
	});
	const { pathname } = useLocation();
	return (
		<header id="header">
			<Navbar2 />
			{isMediumScreen && <HiddenNavBar />}
			<HeaderSection/> 
		</header>
	);
};

export default Header;
