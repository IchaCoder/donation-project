import React from "react";
import { useGlobalContext } from "../../context";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";

const Schedule = () => {
	const { scrollIntoView, baseURL } = useGlobalContext();
	const [date, setDate] = React.useState("");
	const [venue, setVenue] = React.useState("");

	const getNextEvent = async () => {
		try {
			const { data } = await axios.get(`${baseURL}/event`);
			if (data) {
				const event = data.data.attributes.nextEvent.split("-");
				const date = new Date(event[0], event[1] - 1, event[2]).toDateString();
				setDate(date);
				setVenue(data.data.attributes.venue);
			} else {
				setDate("");
				setVenue("");
			}
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		getNextEvent();
		return () => {
			getNextEvent();
		};
	}, []);

	return (
		<div className="md:flex justify-center mt-44">
			<ScrollAnimation
				animateIn="animate__bounceInLeft"
				className="card rounded-lg text-center mx-auto md:mx-5 w-[90%] md:w-2/5 h-64 text-white text-xl bg-secondary p-2 flex flex-col place-content-center"
			>
				<div>Subscribe to get notification on new developments</div>
				<button
					onClick={() => scrollIntoView("subscribe")}
					className="donate_btn max-w-[50%] mx-auto donate_btn_two  md:block px-8  bg-primary rounded-lg"
				>
					Subscribe
				</button>
			</ScrollAnimation>
			<ScrollAnimation
				animateIn="animate__bounceInRight"
				className="card rounded-lg mx-auto  w-[90%] md:mx-5 md:w-2/5 h-max md:h-64 text-white text-xl bg-primary p-4 flex flex-col place-content-center text-center"
			>
				<div>Our next outreach event is on:</div>
				{date ? (
					<>
						<div className="pt-4 text-base">Date:</div>
						<p className="text-3xl">{date}</p>
						<div className="pt-4">Venue:</div>
						<p className="text-3xl">{venue}</p>
					</>
				) : (
					<div className="text-3xl">Yet to Determined </div>
				)}
			</ScrollAnimation>
		</div>
	);
};

export default Schedule;
