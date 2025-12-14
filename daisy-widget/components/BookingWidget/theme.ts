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
		primary: '#7e0181',
		secondary: '#ff5c28',
		accent: '#ff5c28',
	},
	background: {
		basic: '#faf8e6',
		heavy: '#ffffff',
	},
	fontName: 'montserrat',
	fontColor: 'black',
	fontColorLight: '#c1c1c1',
	borderRadius: '1rem',
}
