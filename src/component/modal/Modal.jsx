import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/all";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

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

const Modal = () => {
	const { isModalOpen, setIsModalOpen, scrollIntoView } = useGlobalContext();
	const handleCloseModal = (e) => {
		const targetClass = e.target.classList;
		if (targetClass.contains("fixed")) {
			setIsModalOpen(false);
		}
	};

	const scroll = (path) => {
		scrollIntoView(path);
		setIsModalOpen(false);
	};

	return (
		<>
			{isModalOpen && (
				<motion.section
					initial="hidden"
					animate="visible"
					variants={variants}
					className={`fixed w-full h-full z-20 top-0`}
					onClick={handleCloseModal}
				>
					<div
						className="w-72 md:w-2/5 bg-secondary h-full absolute right-0 text-white"
						initial="hidden"
						animate="visible"
						variants={navVariants}
					>
						<div className="flex mt-2">
							<IoMdClose
								className="text-2xl cursor-pointer ml-5"
								onClick={() => setIsModalOpen(false)}
							/>
						</div>
						<div className="mt-4 flex flex-col">
							<a
								onClick={() => scroll("home")}
								className="p-2 nav_hover w-full cursor-pointer hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase  border-opacity-60"
							>
								Home
							</a>
							<a
								onClick={() => scroll("about")}
								className="p-2 nav_hover w-full cursor-pointer hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase border-opacity-60"
							>
								About
							</a>
							<a
								onClick={() => scroll("mission")}
								className="p-2 nav_hover w-full cursor-pointer hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase border-opacity-60"
							>
								Mission
							</a>
							<a
								onClick={() => scroll("contact")}
								className="p-2 nav_hover w-full cursor-pointer hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase border-opacity-60"
							>
								Contact
							</a>
						</div>
					</div>
				</motion.section>
			)}
		</>
	);
};

export default Modal;
