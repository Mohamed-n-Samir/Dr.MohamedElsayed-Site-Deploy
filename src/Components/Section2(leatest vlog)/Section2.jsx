import React from "react";
import Slider from "../SliderSection2/Slider";
import "./section2.css";

const Section2 = () => {
	return (
		<section className="leatest-vlogs">
			<div className="section-title center-block text-center">
				<h2>Latest Vlogs</h2>
				<span className="sectiontitle-design">
					<span className="icons"></span>
				</span>
				<p>there's some lectures may help you</p>
			</div>
			<div className="container">
				<Slider />
			</div>
		</section>
	);
};

export default Section2;
