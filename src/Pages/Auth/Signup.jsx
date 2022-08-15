import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
	const { baseURL, setLoading, getDonation } = useGlobalContext();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(4, "Name is too short")
				.max(25, "Must be 25 characters or less")
				.required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string()
				.min(8, "Too short")
				.required("Password is required"),
		}),
		onSubmit: async ({ name, password, email }, { resetForm }) => {
			setLoading(true);
			try {
				const { data } = await axios.post(`${baseURL}/auth/local/register`, {
					username: name,
					email: email,
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
				setLoading(false);
			} catch (error) {
				console.log(error);
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				// localStorage.removeItem("token");
				setLoading(false);
			}
			resetForm();
		},
	});

	return (
		<div className="text-xl">
			<form
				className="mx-auto mt-10 max-w-xl rounded-lg bg-primary p-6"
				onSubmit={formik.handleSubmit}
			>
				<h2 className="text-3xl text-center my-6 text-white font-bold">
					Signup
				</h2>
				<fieldset className="flex flex-col">
					<input
						type="text"
						name="name"
						autoComplete="false"
						placeholder="Enter Username"
						className="p-2 rounded-md input"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{formik.touched.name && formik.errors.name ? (
						<div className="error text-center bg-red-500 mt-3 text-sm rounded error">
							{formik.errors.name}
						</div>
					) : null}
					<input
						type="email"
						name="email"
						autoComplete="false"
						placeholder="Enter Email"
						className="p-2 rounded-md mt-4 input"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className="error text-center bg-red-500 mt-3 text-sm rounded error">
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
					Already have an account?{" "}
					<Link to="/login" className="text-blue-500">
						login{" "}
					</Link>{" "}
				</div>
			</form>
		</div>
	);
};

export default Signup;
