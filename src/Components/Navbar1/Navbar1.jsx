import React from "react";
import "./navbar1.css";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Navbar";
Navbar



const Navbar1 = () => {
	const isLargeScreen = useMediaQuery({
		query: "(min-width: 900px)",
	});

	return <nav className="navbar1">{isLargeScreen && <Navbar/>}</nav>;
};

export default Navbar1;
