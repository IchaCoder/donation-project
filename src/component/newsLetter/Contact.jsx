import React from "react";
import { useGlobalContext } from "../../context";

const Contact = () => {
	const { setIsMessageSent } = useGlobalContext();
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsMessageSent(true);
	};
	return (
		<div className="mt-20">
			<form
				className="mx-auto mt-10 max-w-xl rounded-lg bg-primary p-6"
				onSubmit={handleSubmit}
			>
				<h2
					className="text-3xl text-center my-6 text-white font-semibold"
					id="contact"
				>
					Write to us
				</h2>
				<fieldset className="flex flex-col ">
					<input
						type="text"
						name="name"
						autoComplete="false"
						placeholder="Enter Username (not required)"
						className="p-2 rounded-md input text-black input_sub_two"
					/>

					<input
						type="email"
						name="email"
						autoComplete="false"
						placeholder="Enter Email"
						className="p-2 rounded-md mt-4 input text-black input_sub_two"
						required
					/>

					<textarea
						cols="30"
						rows="10"
						name="message"
						className="p-2 mt-4 rounded-md input text-black input_sub_two"
						placeholder="Enter message"
						required
					/>

					<button className="submit_btn rounded-lg uppercase my-8 p-2 text-white ">
						Submit
					</button>
				</fieldset>
			</form>
		</div>
	);
};

export default Contact;
