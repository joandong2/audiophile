import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				dancing_script: [`var(--font-dancing_script)`, "sans-serif"],
				manrope: [`var(--font-manrope)`, "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
};
export default config;
