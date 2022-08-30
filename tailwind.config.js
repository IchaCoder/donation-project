module.exports = {
	content: ["./src/**/*.{html,jsx}"],
	plugins: [require("daisyui")],
	theme: {
		extend: {
			colors: {
				primary: "#52278a",
				secondary: "#e25333",
				footer: "#D9D9D9",
			},
			height: {
				slice: "32rem",
			},
			screens: {
				xs: "320px",
			},
		},
	},
	plugins: [],
};
