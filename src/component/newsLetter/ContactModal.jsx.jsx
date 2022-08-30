import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/all";
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

const ContactModal = () => {
	const { isMessageSent, setIsMessageSent } = useGlobalContext();
	const handleCloseModal = (e) => {
		const targetClass = e.target.classList;
		if (targetClass.contains("fixed")) {
			setIsMessageSent(false);
		}
	};

	return (
		<>
			{isMessageSent && (
				<motion.section
					initial="hidden"
					animate="visible"
					variants={variants}
					className={`fixed w-full h-full z-20 top-0 schedule_modal`}
					onClick={handleCloseModal}
				>
					<div
						className="w-[95%] md:max-w-[40%] mx-auto mt-[250px] bg-white p-8 rounded-lg"
						initial="hidden"
						animate="visible"
						variants={navVariants}
					>
						<div className="flex">
							<IoMdClose
								className="text-2xl cursor-pointer hover:text-red-500"
								onClick={() => setIsMessageSent(false)}
							/>
						</div>
						<h3 className="py-4 text-xl md:text-2xl md:p-10 font-bold text-center">
							Your message has been sent
						</h3>
					</div>
				</motion.section>
			)}
		</>
	);
};

export default ContactModal;
