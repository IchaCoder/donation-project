import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Loading from "./component/Loading";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const baseURL = "http://localhost:1337/api";
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAddEvent, setIsAddEvent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [totalDonations, setTotalDonations] = useState(0);
	const [activeDonation, setActiveDonation] = useState("");
	const [date, setDate] = useState("");
	const [dateObj, setDateObj] = useState({ year: "", month: "", day: "" });

	const scrollIntoView = (id) => {
		document.getElementById(id).scrollIntoView();
	};

	const getDonation = async () => {
		const token = localStorage.getItem("token");
		const id = JSON.parse(localStorage.getItem("user"))?.userID;

		try {
			const { data } = await axios.get(
				`${baseURL}/schedules?filters[userId][$eq]=${
					id ? id : 0
				}&filters[completed][$eq]=true`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			setTotalDonations(data.data.length);
		} catch (error) {
			console.log(error);
		}
	};

	const getActiveDonation = async () => {
		const token = localStorage.getItem("token");
		const id = JSON.parse(localStorage.getItem("user")).userID;

		try {
			const { data } = await axios.get(
				`${baseURL}/schedules?filters[userId][$eq]=${
					id ? id : 0
				}&filters[completed][$eq]=false`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (data) {
				setActiveDonation([...data.data]);

				setDate(data.data[0].attributes.dateTime);
			} else {
				return [];
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getActiveDonation();
	}, []);

	useEffect(() => {
		const dateArray = date.split("-");
		setDateObj({ year: dateArray[0], month: dateArray[1], day: dateArray[2] });
	}, [date]);

	useEffect(() => {
		getDonation();
	}, []);

	if (loading) return <Loading />;

	return (
		<AppContext.Provider
			value={{
				isModalOpen,
				setIsModalOpen,
				scrollIntoView,
				isAddEvent,
				setIsAddEvent,
				baseURL,
				setLoading,
				totalDonations,
				getDonation,
				activeDonation,
				dateObj,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
