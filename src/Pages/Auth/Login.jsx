import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./auth.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
	const navigate = useNavigate();
	const { baseURL, getDonation } = useGlobalContext();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string()
				.min(8, "Too short")
				.required("Password is required"),
		}),
		onSubmit: async ({ email, password }, { resetForm }) => {
			try {
				const { data } = await axios.post(`${baseURL}/auth/local`, {
					identifier: email,
					password,
				});
				localStorage.setItem("token", data.jwt);
				localStorage.setItem(
					"user",
					JSON.stringify({
						userName: data.user.username,
						userID: data.user.id,
					})
				);
				getDonation();
				navigate("/dashboard");
			} catch (error) {
				console.log(error);
				localStorage.removeItem("token");
				localStorage.removeItem("user");
			}
			resetForm();
		},
	});

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	setLoading(true);
	// 	try {
	// 		const { data } = await axios.post(
	// 			"http://localhost:1337/api/auth/local",
	// 			{
	// 				identifier: email,
	// 				password,
	// 			}
	// 		);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<div className="">
			<form
				className="mx-auto mt-10 max-w-xl rounded-lg bg-primary p-6"
				onSubmit={formik.handleSubmit}
			>
				<h2 className="text-3xl text-center my-6 font-bold text-white">
					Login
				</h2>
				<fieldset className="flex flex-col">
					<input
						type="email"
						name="email"
						autoComplete="false"
						placeholder="Enter Email"
						className="p-2 rounded-md input"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className="text-center bg-red-500 mt-3 text-sm rounded error">
							{formik.errors.email}
						</div>
					) : null}
					<input
						type="password"
						name="password"
						className="p-2 mt-4 rounded-md input"
						placeholder="Enter Password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className="error text-center bg-red-500 mt-3 text-sm rounded mb-4">
							{formik.errors.password}
						</div>
					) : null}
					<button className="submit_btn rounded-lg uppercase my-8 p-2 text-white ">
						Submit
					</button>
				</fieldset>
				<div className="text-white text-sm text-center">
					Don't have an accout yet?{" "}
					<Link to="/signup" className="text-blue-500">
						Signup{" "}
					</Link>{" "}
				</div>
			</form>
		</div>
	);
};

export default Login;
