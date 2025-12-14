'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Workshop } from './types';
import { daisyTheme } from './theme';
import WorkshopCard from './SubComponents/WorkshopCard';
import DatePicker from './SubComponents/DatePicker';
import BookingModal from './SubComponents/BookingModal';



interface BookingWidgetProps {
	workshop: Workshop;
	onBook?: (date: Date) => void;
	theme?: 'pro' | 'user';
	className?: string;
}

export default function BookingWidget({
	workshop,
	onBook,
	theme = 'user',
	className = ''
}: BookingWidgetProps) {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isBooked, setIsBooked] = useState(false);

	const themeColors = theme === 'pro' ? daisyTheme.colors.pro : daisyTheme.colors.user;

	const handleDateSelect = (date: Date) => {
	setSelectedDate(date);
	};

	const handleBookClick = () => {
	if (selectedDate) {
		setIsModalOpen(true);
	}
	};

	const handleConfirmBooking = () => {
	if (selectedDate) {
		onBook?.(selectedDate);
		setIsBooked(true);
		setTimeout(() => {
		setIsModalOpen(false);
		setIsBooked(false);
		}, 2000);
	}
	};

	return (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
		className={`booking-widget w-full max-w-2xl mx-auto ${daisyTheme.font.className} ${className}`}
	>
		<WorkshopCard
		workshop={workshop}
		theme={theme}
		/>

		<DatePicker
		dates={workshop.dates}
		selectedDate={selectedDate}
		onSelectDate={handleDateSelect}
		theme={theme}
		/>

		<motion.button
		onClick={handleBookClick}
		disabled={!selectedDate || workshop.spotsRemaining === 0}
		whileHover={{ scale: 1.02 }}
		whileTap={{ scale: 0.98 }}
		className={`
			w-full mt-6 py-4 px-6 rounded-2xl
			font-semibold text-white text-lg
			transition-all duration-200
			disabled:opacity-50 disabled:cursor-not-allowed
		`}
		style={{
			backgroundColor: selectedDate ? themeColors.primary : '#ccc'
		}}
		>
		{workshop.spotsRemaining === 0
			? 'Complet'
			: selectedDate
			? 'Réserver'
			: 'Sélectionnez une date'}
		</motion.button>

		<BookingModal
		isOpen={isModalOpen}
		onClose={() => setIsModalOpen(false)}
		onConfirm={handleConfirmBooking}
		workshop={workshop}
		selectedDate={selectedDate}
		isBooked={isBooked}
		theme={theme}
		/>
	</motion.div>
	);
}
