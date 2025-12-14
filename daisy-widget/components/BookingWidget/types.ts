import { type Theme } from './theme';

export interface Workshop {
	id: string;
	title: string;
	image: string;
	avatar: string | null;
	location: string;
	instances: WorkshopEventInstance[];
}

export interface WorkshopEventInstance {
	id: string;
	workshopId: string;
	price: number;
	date: Date;
	spotsRemaining: number;
}

export interface BookingWidgetProps {
	workshop: Workshop;
	onBook?: (instance: WorkshopEventInstance) => void;
	theme?: Theme;
	className?: string;
}
