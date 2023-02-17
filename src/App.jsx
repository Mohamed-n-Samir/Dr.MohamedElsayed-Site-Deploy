import { useState } from "react";
import "./App.css";
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
				{/* <Route path="/login" element={<div>login</div>} exact /> */}
				<Route path="/profile" element={<div>profile</div>} exact />
				<Route path="/vlogs" element={<div>vlogs</div>} exact />
				<Route path="/blogs" element={<div>blogs</div>} exact />
				<Route path="/liveBroadcast" element={<div>live-broadcast</div>} exact />
				<Route path="/lectures" element={<div>lectures</div>} exact />
				<Route path="/profile" element={<div>profile</div>} exact />
				<Route path="/buyCredit" element={<div>buy-credit</div>} exact />
				{["/home", "/"].map((path, index) => (
					<Route path={path} element={<Home />} key={index} />
				))}
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;
