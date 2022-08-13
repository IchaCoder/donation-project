import React from "react";
import { useGlobalContext } from "../../context";

const Schedule = () => {
	const { scrollIntoView } = useGlobalContext();

	return (
		<div className="md:flex justify-center mt-44">
			<div className="card rounded-lg text-center mx-auto md:mx-5 w-[90%] md:w-2/5 h-64 text-white text-xl bg-secondary p-2 flex flex-col place-content-center">
				<div>Subscribe to get notification on new developments</div>
				<button
					onClick={() => scrollIntoView("subscribe")}
					className="donate_btn max-w-[50%] mx-auto donate_btn_two  md:block uppercase px-2  bg-primary rounded-lg"
				>
					Subscribe
				</button>
			</div>
			<div className="card rounded-lg mx-auto  w-[90%] md:mx-5 md:w-2/5 h-max md:h-64 text-white text-3xl bg-primary p-4 flex flex-col place-content-center text-center">
				<div>Our next outreach event is on:</div>
				<p>Date: 3rd November, 2022</p>
				<p>Venue: Foundation Premises</p>
			</div>
		</div>
	);
};

export default Schedule;
