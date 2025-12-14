'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Workshop, WorkshopEventInstance } from './types';
import { defaultTheme, type Theme } from './theme';
import WorkshopCard from './SubComponents/WorkshopCard';
import BookingModal from './SubComponents/BookingModal';

interface BookingWidgetProps {
    workshop: Workshop;
    onBook?: (instance: WorkshopEventInstance) => void;
    theme?: Partial<Theme>;
    className?: string;
}

export default function BookingWidget(
	{
		workshop,
		onBook,
		theme,
		className = ''
	}
	: BookingWidgetProps
)
{
	const [selectedInstance, setSelectedInstance] = useState<WorkshopEventInstance | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isBooked, setIsBooked] = useState(false);

	// merging the potentially partial theme with the default to ensure data is accessible
	const mergedTheme: Theme = {
        ...defaultTheme,
        ...theme,
        colors: {
            ...defaultTheme.colors,
            ...(theme?.colors || {}),
        },
        background: {
            ...defaultTheme.background,
            ...(theme?.background || {}),
        },
		fontName: theme?.fontName || defaultTheme.fontName,
    };

	const handleInstanceSelect = (instance: WorkshopEventInstance) => {
		setSelectedInstance(instance);
	};

	const handleBookClick = () => {
		if (selectedInstance) {
			setIsModalOpen(true);
		}
	};

	const handleConfirmBooking = () => {
		if (selectedInstance) {
			onBook?.(selectedInstance);
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
			className={`booking-widget w-full max-w-2xl mx-auto ${mergedTheme.fontName} text-${mergedTheme.fontColor} ${className}`}
		>
			<WorkshopCard
				workshop={workshop}
				theme={mergedTheme}
				selectedInstance={selectedInstance}
				onSelectInstance={handleInstanceSelect}
				onBookClick={handleBookClick}
			/>

			<BookingModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onConfirm={handleConfirmBooking}
				workshop={workshop}
				selectedInstance={selectedInstance}
				isBooked={isBooked}
				theme={mergedTheme}
			/>

		</motion.div>
	);
}
