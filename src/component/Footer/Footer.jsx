import React from "react";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router";
import { BsTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/all";
import logo from "../../assets/logo+name2.svg";

const Footer = () => {
	const { scrollIntoView } = useGlobalContext();
	const navigate = useNavigate();

	return (
		<footer className="bg-footer  mt-40 pt-8 md:pt-12 pb-8 md:flex  flex-row-reverse">
			<section className=" md:ml-52 flex-[0.8] md:flex">
				<div className="flex-[0.8]">
					<div
						className="cursor-pointer p-2 tracking-widest text-center md:text-left text-lg hover:bg-white"
						onClick={() => scrollIntoView("home")}
					>
						Home
					</div>
					<div
						className="cursor-pointer p-2 text-center tracking-widest text-lg md:text-left hover:bg-white"
						onClick={() => scrollIntoView("about")}
					>
						About
					</div>
					<div
						className="cursor-pointer p-2 text-center tracking-widest text-lg md:text-left hover:bg-white"
						onClick={() => scrollIntoView("home")}
					>
						Mission
					</div>
					<div
						className="cursor-pointer p-2 text-center tracking-widest text-lg md:text-left hover:bg-white"
						onClick={() => scrollIntoView("contact")}
					>
						Contact
					</div>
					<div
						className="cursor-pointer p-2 text-center tracking-widest text-lg md:text-left hover:bg-white"
						onClick={() => scrollIntoView("subscribe")}
					>
						Subscribe
					</div>
					<div
						className="cursor-pointer p-2 text-center tracking-widest text-lg md:text-left hover:bg-white"
						onClick={() => navigate("/dashboard")}
					>
						Get involved
					</div>
				</div>
				<div className="text-lg flex justify-center m-4 lg:m-0 lg:p-0 lg:justify-start gap-4 lg:pt-6 p-4 mb-12 items-center">
					<a href="https://twitter.com/" className="active">
						{" "}
						<BsTwitter />{" "}
					</a>
					<a href="www.facebook.com" className="active">
						{" "}
						<FaFacebookF />{" "}
					</a>
					<a href="https://www.linkedin.com/in/" className="active">
						{" "}
						<FaLinkedinIn />{" "}
					</a>
				</div>
			</section>
			<section>
				<img
					src={logo}
					alt="yaalika logo"
					className="mx-auto w-[150px] md:m-0"
				/>
				<p className="p-4 text-sm text-center md:text-left">
					Answer a call for hope this year to assist a child in need
				</p>
				<p className="p-4 tracking-widest text-center md:text-left">
					&copy;{new Date().getFullYear()} The Yaalika Foundation <br />
					All rights reserved
				</p>
			</section>
		</footer>
	);
};

export default Footer;
