'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Workshop } from '../types';
import { daisyTheme } from '../theme';
import { MapPin, Euro, Users } from 'lucide-react';
import DatePicker from './DatePicker';

interface WorkshopCardProps {
	workshop: Workshop;
	theme: 'pro' | 'user';
	selectedDate: Date | null;
	onSelectDate: (date: Date) => void;
	onBookClick: () => void;
}

export default function WorkshopCard({
	workshop,
	theme,
	selectedDate,
	onSelectDate,
	onBookClick
}: WorkshopCardProps) {
	const themeColors = theme === 'pro' ? daisyTheme.colors.pro : daisyTheme.colors.user;
	const iconColor = 'secondary' in themeColors ? themeColors.secondary : themeColors.accent;

	return (
		<motion.div
			whileHover={{ y: -4 }}
			className="overflow-hidden rounded-3xl bg-white shadow-lg"
		>
			<div className="relative h-64 w-full">
				<Image
					src={workshop.image}
					alt={workshop.title}
					fill
					className="object-cover"
				/>
			</div>

			<div className="p-6">
				<h2 className="text-2xl font-bold mb-4" style={{ color: themeColors.primary }}>
					{workshop.title}
				</h2>

				<div className="space-y-3 mb-6">
					<div className="flex items-center gap-2 text-gray-700">
						<MapPin size={20} style={{ color: iconColor }} />
						<span>{workshop.location}</span>
					</div>

					<div className="flex items-center gap-2 text-gray-700">
						<Euro size={20} style={{ color: iconColor }} />
						<span className="font-semibold">{workshop.price}€</span>
					</div>

					<div className="flex items-center gap-2">
						<Users size={20} style={{ color: iconColor }} />
						<span className={`font-semibold ${workshop.spotsRemaining <= 3 ? 'text-red-500' : 'text-gray-700'}`}>
							{workshop.spotsRemaining} place{workshop.spotsRemaining > 1 ? 's' : ''} restante{workshop.spotsRemaining > 1 ? 's' : ''}
						</span>
					</div>
				</div>

				<DatePicker
					dates={workshop.dates}
					selectedDate={selectedDate}
					onSelectDate={onSelectDate}
					theme={theme}
				/>

				<motion.button
					onClick={onBookClick}
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
			</div>
		</motion.div>
	);
}
