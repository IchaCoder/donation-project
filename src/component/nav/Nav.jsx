import React from "react";
import { useGlobalContext } from "../../context";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo+name2.svg";
import { Outlet, useNavigate } from "react-router";

const Nav = () => {
	const { setIsModalOpen } = useGlobalContext();
	const { scrollIntoView } = useGlobalContext();
	const navigate = useNavigate();
	return (
		<>
			<nav className="bg-white flex justify-around">
				<img src={logo} alt="yaalika" className="" />
				<div className="hidden md:flex gap-8 items-center uppercase">
					<a className="cursor-pointer">Home</a>
					<a className="cursor-pointer" onClick={() => scrollIntoView("about")}>
						About
					</a>
					<a className="cursor-pointer">Mission</a>
					<a
						className="cursor-pointer"
						onClick={() => scrollIntoView("contact")}
					>
						Contact
					</a>
				</div>
				<button
					className="donate_btn hidden md:block uppercase px-2 text-white bg-primary rounded-lg"
					onClick={() => navigate("/dashboard")}
				>
					donate
				</button>
				<GiHamburgerMenu
					className="text-3xl md:hidden flex self-center cursor-pointer menu-btn menuBtn"
					onClick={() => setIsModalOpen(true)}
				/>
			</nav>
			<Outlet />
		</>
	);
};

export default Nav;
