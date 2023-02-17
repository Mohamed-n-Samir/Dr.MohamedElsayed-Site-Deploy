import React, { useRef, useState } from "react";

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
import { Navigation, Autoplay } from "swiper";

function Slider({
	cardData,
	Card,
	grabCursor,
	centeredSlides,
	spaceBetween,
	loop,
	autoplay,
	ButtonComp,
	navigation,
}) {
	const [swiperRef, setSwiperRef] = useState(null);
	return (
		<>
			<div
				className="slider-main"
				dir="ltr"
				style={{ position: "relative" }}
			>
				{ButtonComp && <ButtonComp />}
				<Swiper
					onSwiper={setSwiperRef}
					grabCursor={grabCursor}
					centeredSlides={centeredSlides}
					spaceBetween={spaceBetween}
					loop={loop}
					autoplay={autoplay}
					navigation={navigation}
					modules={[Navigation, Autoplay]}
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
					}}
				>
					{/* {navigation && (cardButtonColor = "var(--purple-color)",cardButtonText = "details",cardButtonIconsAndText = false)} */}
					{Card && cardData.length > 8
						? cardData.slice(0, 8).map((e, i) => {
								// console.log(e.img)
								return (
									<SwiperSlide key={i}>
										<Card
											price={e.price}
											img={e.img}
											header={e.header}
											date={e.date}
											educationalLevel={
												e.educationalLevel
											}
										/>
									</SwiperSlide>
								);
						})
						: cardData.slice(0, cardData.length).map((e, i) => {
								return (
									<SwiperSlide key={i}>
										<Card
											price={e.price}
											img={e.img}
											header={e.header}
											date={e.date}
											educationalLevel={
												e.educationalLevel
											}
										/>
									</SwiperSlide>
								);
						})}
				</Swiper>
			</div>
		</>
	);
}

// onSwiper={setSwiperRef}
// grabCursor={true}
// slidesPerView={1}
// centeredSlides={false}
// spaceBetween={25}
// loop={true}
// autoplay={{
// 	delay: 5000,
// 	disableOnInteraction: false,
// }}
// navigation={{
// 	nextEl: ".image-swiper-button-next",
// 	prevEl: ".image-swiper-button-prev",
// 	disabledClass: "swiper-button-disabled",
// }}

// {
// 	nextEl: ".image-swiper-button-next",
// 	prevEl: ".image-swiper-button-prev",
// 	disabledClass: "swiper-button-disabled",
// }

// {
// 	delay: 5000,
// 	disableOnInteraction: false,
// }

export default Slider;
