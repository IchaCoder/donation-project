import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
	return (
		<section className="mt-40 md:max-w-[60%] mx-auto">
			<div id="about" className="flex p-4">
				<div className="w-9/12 bg-black h-1 flex self-center"></div>
				<h2 className="uppercase text-4xl p-4">about</h2>
				<div className="w-9/12 bg-black h-1 flex self-center"></div>
			</div>
			<ScrollAnimation animateIn="fadeIn animate__bounceInLeft">
				<p className="p-4 tracking-widest leading-relaxed">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quo
					similique sed ipsum quasi omnis ab quod, odit voluptatum eaque
					nostrum, ea voluptatibus eligendi fugit nihil illo expedita magnam
					error?
				</p>
				<p className="p-4 tracking-widest leading-relaxed">
					ea voluptatibus eligendi fugit nihil illo expedita magnam error?
					Consectetur ducimus aliquid repudiandae tenetur quas praesentium ullam
					quisquam. Nemo autem veritatis illum soluta porro pariatur eos eaque
					omnis nulla eveniet? Error facilis incidunt asperiores fuga quidem
					architecto quod aliquam.
				</p>
			</ScrollAnimation>
		</section>
	);
};

export default About;
