import React, { useEffect } from "react";
import { FaDonate } from "react-icons/all";
import { useGlobalContext } from "../../context";

const ProfileCard = () => {
	const { totalDonations, activeDonation, dateObj } = useGlobalContext();

	// const getDate = (year, month, day) => {};
	// console.log(schedule);

	return (
		<div className="md:flex gap-10 md:max-w-[50%] mx-auto mb-20">
			<div className="mt-10 p-4 w-[90%]  mx-auto bg-footer text-center relative">
				<p className="card ">Your next Donation is on: </p>
				{activeDonation.length > 0 ? (
					<>
						<p className="font-bold text-2xl text-primary mt-4">
							{new Date(
								dateObj.year,
								dateObj.month,
								dateObj.day
							).toDateString()}
						</p>
						<div className="card text-xs pt-4">
							Completed
							<input type="checkbox" />
						</div>
					</>
				) : (
					<p className="font-bold text-2xl text-primary">
						No donation Scheduled
					</p>
				)}

				<div className="absolute bottom-0 left-0 bg-primary w-full h-2"></div>
			</div>
			<div className="mt-10 p-4 w-[90%] mx-auto bg-footer text-center relative">
				<div className="flex text-5xl content-center justify-center">
					<p className="flex-[.7]  text-primary grid place-items-center font-medium mr-8">
						{totalDonations}
						<span className="text-lg text-black">Donations made</span>
					</p>
					<div className="bg-[#C5A4EF] text-primary p-4 rounded-sm">
						<FaDonate />
					</div>
				</div>
				<div className="absolute bottom-0 left-0 bg-primary w-full h-2"></div>
			</div>
		</div>
	);
};

export default ProfileCard;
