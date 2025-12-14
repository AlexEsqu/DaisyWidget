'use client';

import BookingWidget from "@/components/BookingWidget";

// THEMES
import { coralTealTheme, purpleGoldTheme, blueOrangeTheme, minimalistTheme, natureTheme, sunsetTheme } from "./themes/theme"

// MOCK DATA to choose from
import { mockWorkshop, mockWorkshopWithoutAvatar } from "./mockData/mockWorkshops";


export default function Home() {

	const activeTheme = coralTealTheme;

	return (
		<>

			<main className='flex min-h-screen flex-col items-center justify-center p-8'>

				<BookingWidget
					workshop={mockWorkshop}
					onBook={(instance) => console.log("Booked:", instance)}
					theme= {activeTheme}
				/>

				<BookingWidget
					workshop={mockWorkshopWithoutAvatar}
					onBook={(instance) => console.log("Booked:", instance)}
					theme= {activeTheme}
				/>

			</main>

		</>
	);
}
