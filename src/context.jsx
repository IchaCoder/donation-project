import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Loading from "./component/Loading";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const baseURL = "https://yaalika.herokuapp.com/api";
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAddEvent, setIsAddEvent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [totalDonations, setTotalDonations] = useState(0);
	const [activeDonation, setActiveDonation] = useState("");
	const [date, setDate] = useState("");
	const [dateObj, setDateObj] = useState({ year: "", month: "", day: "" });
	const [isCompleted, setIsCompleted] = useState(false);
	const [activeDonationId, setActiveDonationId] = useState("");
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [isMessageSent, setIsMessageSent] = useState(false);

	const scrollIntoView = (id) => {
		document.getElementById(id).scrollIntoView();
	};

	const getDonation = async () => {
		const token = localStorage.getItem("token");
		const id = JSON.parse(localStorage.getItem("user"))?.userID;
		setLoading(true);
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
			getActiveDonation();
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const getActiveDonation = async () => {
		const token = localStorage.getItem("token");
		const id = JSON.parse(localStorage.getItem("user")).userID || 0;
		setLoading(true);

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
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const setCompletedToTrue = async (e) => {
		const token = localStorage.getItem("token");
		const id = activeDonation[0].id;
		setLoading(false);
		try {
			await axios.put(
				`${baseURL}/schedules/${id}`,
				{
					data: { completed: true },
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			getActiveDonation();
			getDonation();
			setIsCompleted(true);
			setActiveDonationId(id);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	const setCompletedToFalse = async (e) => {
		const token = localStorage.getItem("token");

		setLoading(false);
		try {
			await axios.put(
				`${baseURL}/schedules/${activeDonationId}`,
				{
					data: { completed: false },
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			getActiveDonation();
			getDonation();
			setIsCompleted(false);
			setActiveDonationId("");
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getActiveDonation();
		getDonation();
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
				getActiveDonation,
				setCompletedToTrue,
				isCompleted,
				setIsCompleted,
				setCompletedToFalse,
				isSubscribed,
				setIsSubscribed,
				isMessageSent,
				setIsMessageSent,
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
