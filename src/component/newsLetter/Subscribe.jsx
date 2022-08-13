import React from "react";
import { FiMail } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";

const Subscribe = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
		}),
		onSubmit: ({ email }, { resetForm }) => {
			console.log(email);

			resetForm();
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			{formik.touched.email && formik.errors.email ? (
				<div className="text-center max-w-[90%] mx-auto bg-red-500 mt-3 text-sm rounded error">
					{formik.errors.email}
				</div>
			) : null}
			<div className="flex max-w-[90%] mx-auto justify-center -mt-4">
				<input
					type="email"
					name="email"
					placeholder="Your email address"
					className={`rounded flex-1 self-end h-10 placeholder:pl-4 text-black input_sub ${
						formik.touched.email &&
						formik.errors.email &&
						"border-2 border-solid border-secondary"
					} `}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>

				<button className="donate_btn donate_btn_two ml-2 md:block p-2 text-white bg-secondary rounded-lg sub">
					subscribe
				</button>
			</div>
			<div className="w-14 h-14 rounded-[50%] grid place-items-center letter_head absolute -top-14">
				<FiMail className="text-3xl" />
			</div>
		</form>
	);
};

export default Subscribe;
