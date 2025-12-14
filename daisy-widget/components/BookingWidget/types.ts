export interface Workshop {
	id: string;
	title: string;
	image: string;
	location: string;
	price: number;
	dates: Date[];
	spotsRemaining: number;
}

export interface BookingWidgetProps {
	workshop: Workshop;
	onBook?: (date: Date) => void;
	theme?: 'pro' | 'user';
}
