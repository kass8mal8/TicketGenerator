import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["inconsolata", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				neutral: {
					0: "hsl(0, 0%, 100%)",
					300: "hsl(252, 6%, 83%)",
					500: "hsl(245, 15%, 58%)",
					700: "hsl(245, 19%, 35%)",
					900: "hsl(248, 70%, 10%)",
				},
				customColor: {
					0: "#19143C",
				},
				orange: {
					500: "hsl(7, 88%, 67%)",
					700: "hsl(7, 71%, 60%)",
				},
			},
		},
	},
	plugins: [],
};
