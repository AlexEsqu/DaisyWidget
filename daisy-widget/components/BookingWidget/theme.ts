
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
});

export const daisyTheme = {
	colors: {
	pro: {
		primary: '#7e0181',
		secondary: '#ff5c28',
	},
	user: {
		primary: '#f85441',
		accent: '#7c0080',
	},
	background: {
		light: '#faf8e6',
		medium: '#f0eeda',
		pink: '#ffded4',
	}
	},
	font: montserrat,
	borderRadius: '1rem',
}
