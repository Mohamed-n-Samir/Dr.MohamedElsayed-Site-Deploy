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
			<Navbar1 />
			<Header />
			<Routes>
				<Route
					path="/Dr.MohamedElsayed-Site-Deploy/login"
					element={<div>login</div>}
					exact
				/>
				<Route
					path="/Dr.MohamedElsayed-Site-Deploy/profile"
					element={<div>profile</div>}
					exact
				/>
				<Route
					path="/Dr.MohamedElsayed-Site-Deploy/vlogs"
					element={<div>vlogs</div>}
					exact
				/>
				<Route
					path="/Dr.MohamedElsayed-Site-Deploy/blogs"
					element={<div>blogs</div>}
					exact
				/>
				<Route
					path="/Dr.MohamedElsayed-Site-Deploy/liveBroadcast"
					element={<div>live-broadcast</div>}
					exact
				/>
				<Route
					path="/Dr.MohamedElsayed-Site-Deploy/lectures"
					element={<div>lectures</div>}
					exact
				/>
				<Route
					path="/Dr.MohamedElsayed-Site-Deploy/profile"
					element={<div>profile</div>}
					exact
				/>
				<Route
					path="/Dr.MohamedElsayed-Site-Deploy/buyCredit"
					element={<div>buy-credit</div>}
					exact
				/>
				{[
					"/Dr.MohamedElsayed-Site-Deploy/home",
					"/Dr.MohamedElsayed-Site-Deploy/",
				].map((path, index) => (
					<Route path={path} element={<Home />} key={index} />
				))}
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
