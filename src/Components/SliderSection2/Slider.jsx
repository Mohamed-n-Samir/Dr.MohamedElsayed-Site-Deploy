import React, { useRef, useState } from "react";
import Card from "../Card2/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./slider-styles.css";

// import required modules
import {Autoplay } from "swiper";

function Slider() {
	const [swiperRef, setSwiperRef] = useState(null);
	return (
		<>
			<div
				className="slider-main"
				dir="ltr"
				style={{ position: "relative" }}
			>
				<Swiper
					onSwiper={setSwiperRef}
					grabCursor={true}
					slidesPerView={1}
					spaceBetween={25}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					navigation={true}
					// navigation={true}
					modules={[Autoplay]}
					className="mySwiper"
					breakpoints={{
						// when window width is >= 0px
						0: {
							slidesPerView: 1,
						},
						// when window width is >= 768px
						400: {
							slidesPerView: 2,
						},
						// when window width is >= 991px
						991: {
							slidesPerView: 3,
						},
						// when window width is >= 1300px

					}}
				>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}

export default Slider;
