/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				worksans: ["worksans", "sans-serif"],
			},
			colors: {
				"light-pink": "hsl(275, 100%, 97%)",
				"grayish-purple": "hsl(292, 16%, 49%)",
				"dark-purple": "hsl(292, 42%, 14%)",
				"active-pink": "hsl(280, 85%, 55%)"
			},
		},
	},
	plugins: [],
};
