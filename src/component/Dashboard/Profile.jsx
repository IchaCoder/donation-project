import React, { useState } from "react";
import { BsPersonCircle, IoMdArrowDropdown } from "react-icons/all";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context";

const Profile = () => {
	const [isHidden, setIsHidden] = useState(true);
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("user"));

	const showLogout = () => {
		setIsHidden(!isHidden);
	};

	const Logout = () => {
		console.log("logging out....");
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		navigate("/");
	};

	return (
		<section
			className="text-white relative flex bg-primary p-4 text-2xl justify-between mt-8 w-[90%] md:max-w-[50%] mx-auto rounded cursor-pointer hover:shadow-lg"
			onClick={showLogout}
		>
			<BsPersonCircle />
			<h3>{user ? user.userName : null}</h3>
			<IoMdArrowDropdown />
			<div
				className={`absolute ${
					isHidden ? "hidden" : "block"
				} top-16 left-0 bg-cyan-700 hover:bg-cyan-300 hover:text-black p-2 w-full text-center text-lg`}
				onClick={Logout}
			>
				Logout
			</div>
		</section>
	);
};

export default Profile;
