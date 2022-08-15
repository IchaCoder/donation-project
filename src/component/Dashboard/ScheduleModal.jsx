import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/all";
import { useGlobalContext } from "../../context";
import axios from "axios";

const variants = {
	visible: {
		opacity: 1,
		x: 0,
	},
	hidden: { opacity: 0, x: 200 },
};

const navVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 0,
		transition: {
			duration: 1,
			type: "spring",
		},
	},
};

const ScheduleModal = () => {
	const { isAddEvent, setIsAddEvent, baseURL, getActiveDonation } =
		useGlobalContext();
	const [date, setDate] = useState("");
	const [name, setName] = useState("");

	const handleCloseModal = (e) => {
		const targetClass = e.target.classList;
		if (targetClass.contains("fixed")) {
			setIsAddEvent(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem("token");
		const id = JSON.parse(localStorage.getItem("user"))?.userID;

		try {
			await axios.post(
				`${baseURL}/schedules`,
				{
					data: {
						name,
						dateTime: date,
						userId: id,
					},
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			setIsAddEvent(false);
			getActiveDonation();
			e.target.reset();
		} catch (error) {
			console.log(error);
			console.log(token, id);
		}
	};

	return (
		<>
			{isAddEvent && (
				<motion.section
					initial="hidden"
					animate="visible"
					variants={variants}
					className={`fixed w-full h-full z-20 top-0 schedule_modal`}
					onClick={handleCloseModal}
				>
					<div
						className="w-[95%] md:max-w-[40%] mx-auto mt-36 bg-white p-8"
						initial="hidden"
						animate="visible"
						variants={navVariants}
					>
						<div className="flex">
							<IoMdClose
								className="text-2xl cursor-pointer "
								onClick={() => setIsAddEvent(false)}
							/>
						</div>
						<h3 className="py-4 text-3xl font-bold">Add a Schedule</h3>
						<form className="flex flex-col" onSubmit={handleSubmit}>
							<label htmlFor="name" className="text-sm ">
								Name
							</label>
							<input
								type="text"
								name="name"
								required
								placeholder="Enter personal or organisation name"
								className="mt-2 p-2 modal_input placeholder:p-4 shadow-md"
								onChange={(e) => setName(e.target.value)}
							/>
							<label htmlFor="date" className="text-sm mt-4">
								Date
							</label>
							<input
								type="date"
								name="date"
								required
								placeholder="Enter personal or organisation name"
								className="mt-2 p-2 modal_input placeholder:p-4 shadow-md"
								onChange={(e) => setDate(e.target.value)}
							/>
							<div className="mt-10 flex gap-8">
								<button
									className="donate_btn md:block uppercase px-6 text-white bg-primary rounded-lg flex-[0.5]"
									type="submit"
								>
									add
								</button>
								<button
									className="donate_btn2 hover:shadow-2xl md:block uppercase px-6 bg-footer flex-[0.5] rounded-lg"
									type="reset"
								>
									reset
								</button>
							</div>
						</form>
					</div>
				</motion.section>
			)}
		</>
	);
};

export default ScheduleModal;
