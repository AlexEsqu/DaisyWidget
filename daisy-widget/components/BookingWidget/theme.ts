import { Black_And_White_Picture } from "next/font/google";

export interface Theme {
	colors: {
		primary: string,
		secondary: string;
		accent: string;
	}
	background: {
		basic: string;
		heavy: string;
	};
	fontName: string;
	fontColor: string;
	fontColorLight: string;
	borderRadius: string;
}

export const defaultTheme = {
	colors: {
		primary: '#f95441',
		secondary: '#331b3b',
		accent: '#7d0080',
	},
	background: {
		basic: '#ffffff',
		heavy: '#e1c6d2',
	},
	fontName: 'montserrat, sans-serif',
	fontColor: '#331b3b',
	fontColorLight: '#c1c1c1',
	borderRadius: '1rem',
}
