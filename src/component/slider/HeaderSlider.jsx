import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/adventnewsletter_4_fluechtlinge_02.jpg";
import image2 from "../../assets/hope.webp";
import image3 from "../../assets/ph_10942_75431.jpg";
import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

export default function App() {
	return (
		<>
			<Swiper
				className="mySwiper text-black"
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
			>
				<SwiperSlide className="slide_one relative">
					<img
						src={image1}
						alt="aero plane one"
						className="h-[70vh] object-cover "
					/>
				</SwiperSlide>
				<SwiperSlide className="slide_two">
					<img
						src={image2}
						alt="aero plane two"
						className="h-[70vh] object-cover "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={image3}
						alt="aero plane two"
						className="h-[70vh] object-cover "
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
