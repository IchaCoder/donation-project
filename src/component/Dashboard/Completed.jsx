import React from "react";
import { useGlobalContext } from "../../context";

const Completed = () => {
	const { isCompleted, setIsCompleted, setCompletedToFalse } =
		useGlobalContext();
	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setIsCompleted(false);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<div
			className={`p-2 w-[90%] mt-10 md:max-w-[50%] mx-auto rounded text-white flex-col cursor-pointer hover:shadow-lg bg-green-500 ${
				isCompleted ? "flex" : "hidden"
			}`}
		>
			<p className="text-center font-bold">Event completed</p>
			<button
				className="donate_btn md:block px-8 bg-white text-black rounded-sm uppercase"
				onClick={(e) => setCompletedToFalse(e)}
			>
				undo
			</button>
		</div>
	);
};

export default Completed;
