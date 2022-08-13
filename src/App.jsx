import { useState } from "react";
import Home from "./Pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Protectedroute from "./ProtectedRoute";
import Nav from "./component/nav/Nav";
import Dashboard from "./Pages/dashboard/Dashboard";
import NotFound from "./Pages/NotFound";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/dashboard"
					element={
						<Protectedroute>
							<Dashboard />
						</Protectedroute>
					}
				/>
				<Route path="/" element={<Nav />}>
					<Route index element={<Home />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
