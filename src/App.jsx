import { useState } from "react";
import "./App.css";
import i18next from "i18next";
import Home from "../pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar1 from "./Components/Navbar1/Navbar1";
import Footer from "./Components/Footer/Footer";


function App() {
	return (
		<div>
			<Navbar1/>
			<Header/>
			<Routes>
				<Route path="/login" element={<div>login</div>} exact />
				<Route path="/profile" element={<div>profile</div>} exact />
				{["/home", "/"].map((path, index) => (
					<Route path={path} element={<Home />} key={index} />
				))}
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;
