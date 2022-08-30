import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./home.css";
import Modal from "../../component/modal/Modal";
import HeaderSlider from "../../component/slider/HeaderSlider";
import Schedule from "../../component/schedule/Schedule";
import About from "../../component/about/About";
import NewsLetter from "../../component/newsLetter/NewsLetter";
import Footer from "../../component/Footer/Footer";
import SubscribeModal from "../../component/newsLetter/SubscribeModal";
import ContactModal from "../../component/newsLetter/ContactModal.jsx";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="">
			<Modal />
			<section className=" hero_home " id="home">
				<h1 className="text-5xl md:text-6xl text-white pl-8 md:pl-56 md:w-3/5">
					Small help together makes better life
				</h1>
				<button
					className="donate_btn donate_btn_two ml-8 md:ml-56 md:block uppercase px-16 text-white bg-primary rounded-lg"
					onClick={() => navigate("/dashboard")}
				>
					donate
				</button>{" "}
			</section>
			<HeaderSlider />
			<Schedule />
			<About />
			<NewsLetter />
			<Footer />
			<SubscribeModal />
			<ContactModal />
		</div>
	);
};

export default Home;
