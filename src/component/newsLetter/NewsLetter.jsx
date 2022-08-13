import React from "react";

import Subscribe from "./Subscribe";
import Contact from "./Contact";

const NewsLetter = () => {
	return (
		<section className="bg-primary max-w-[95%] mx-auto p-4 pt-16 text-white mt-40 rounded-lg relative md:max-w-[50%]">
			<div id="subscribe">
				<h3 className="text-center text-secondary text-3xl">Subscribe</h3>
				<p className="text-center">
					Stay up to date with our latest developments and events
				</p>
				<Subscribe />
				<p className="text-center mt-4 text-xs">
					Your email is safe with us, we don't spam
				</p>
			</div>
			<div>
				<Contact />
			</div>
		</section>
	);
};

export default NewsLetter;
