export interface Workshop {
	id: string;
	title: string;
	image: string;
	avatar: string;
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
	theme?: 'pro' | 'user';
	className?: string;
}
