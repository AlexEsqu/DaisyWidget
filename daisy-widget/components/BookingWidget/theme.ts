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
	font: string;
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
		heavy: '#f0eeda',
	},
	font: 'montserrat',
	borderRadius: '1rem',
}
