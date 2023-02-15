import React from "react";
import { useMediaQuery } from "react-responsive";
import "./header.css";
import LogoSection from "../LogoSection/LogoSection";
import Navbar2 from "../Navbar2/Navbar2";
import HiddenNavBar from "../HiddenNavBar/HiddenNavBar";

const Header = (props) => {
	const isMediumScreen = useMediaQuery({
		query: "(max-width: 900px)",
	});
	return (
		<header id="header">
			<Navbar2 />
			{isMediumScreen && <HiddenNavBar />}
			<LogoSection />
		</header>
	);
};

export default Header;
