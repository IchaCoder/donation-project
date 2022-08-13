import React from "react";
import logo from "../../assets/logo+name2.svg";
import { useNavigate } from "react-router";
import Profile from "../../component/Dashboard/Profile";
import ProfileCard from "../../component/Dashboard/ProfileCard";
import ScheduleModal from "../../component/Dashboard/ScheduleModal";
import "./dashboard.css";
import { useGlobalContext } from "../../context";
import axios from "axios";

const Dashboard = () => {
	const navigate = useNavigate();
	const { setIsAddEvent, activeDonation } = useGlobalContext();

	return (
		<>
			<header>
				<nav className="flex ">
					<div className="flex align-end w-1/2 md:justify-center">
						<img src={logo} alt="yaalika" className="w-52 " />
					</div>
					<div className="flex justify-end mr-4 w-full md:mr-20">
						<button
							className="donate_btn md:block uppercase px-6 text-white bg-primary rounded-lg"
							onClick={() => navigate("/")}
						>
							home
						</button>
					</div>
				</nav>
			</header>
			<h1 className="text-4xl text-center mt-8 tracking-normal">Dashboard</h1>
			<Profile />
			<div className="flex justify-center mt-10">
				<button
					className="donate_btn md:block px-8 text-white bg-primary rounded-sm"
					onClick={() => setIsAddEvent(true)}
				>
					Make a Schedule
				</button>
			</div>
			<ProfileCard />
			<ScheduleModal />
		</>
	);
};

export default Dashboard;
