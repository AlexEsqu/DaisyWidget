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
		primary: '#7d0080',
		secondary: '#331b3b',
		accent: '#f95441',
	},
	background: {
		basic: '#ffffff',
		heavy: '#e1c6d2',
	},
	fontName: 'montserrat',
	fontColor: '#331b3b',
	fontColorLight: '#c1c1c1',
	borderRadius: '1rem',
}
