/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				figtree: ["figtree"],
			},
			colors: {
				yellow: "hsl(47, 88%, 63%)",
				"gray-500": "hsl(0, 0%, 42%)",
				"gray-950": "hsl(0, 0%, 7%)",
			},
			boxShadow: {
				custom: "8px 8px 0px 0 rgb(0, 0, 0, 1)"
			}
		},
	},
	plugins: [],
};
