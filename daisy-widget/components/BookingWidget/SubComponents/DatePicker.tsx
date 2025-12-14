'use client';

import { motion } from 'framer-motion';
import { daisyTheme } from '../theme';
import { Calendar } from 'lucide-react';

interface DatePickerProps {
dates: Date[];
selectedDate: Date | null;
onSelectDate: (date: Date) => void;
theme: 'pro' | 'user';
}

export default function DatePicker({ dates, selectedDate, onSelectDate, theme }: DatePickerProps) {
const themeColors = theme === 'pro' ? daisyTheme.colors.pro : daisyTheme.colors.user;

const formatDate = (date: Date) => {
	return new Intl.DateTimeFormat('fr-FR', {
	weekday: 'long',
	day: 'numeric',
	month: 'long',
	year: 'numeric',
	hour: '2-digit',
	minute: '2-digit'
	}).format(date);
};

return (
	<div className="mt-6">
	<div className="flex items-center gap-2 mb-4">
		<Calendar size={20} style={{ color: themeColors.primary }} />
		<h3 className="text-lg font-semibold" style={{ color: themeColors.primary }}>
		Choisissez une date
		</h3>
	</div>

	<div className="space-y-3">
		{dates.map((date, index) => {
		const isSelected = selectedDate?.getTime() === date.getTime();

		return (
			<motion.button
			key={index}
			onClick={() => onSelectDate(date)}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className={`
				w-full p-4 rounded-2xl text-left
				transition-all duration-200
				${isSelected ? 'ring-2' : 'ring-1 ring-gray-200'}
			`}
			style={{
				backgroundColor: isSelected ? `${themeColors.primary}15` : 'white',
				borderColor: isSelected ? themeColors.primary : undefined,
				color: isSelected ? themeColors.primary : '#374151'
			}}
			>
			<span className="capitalize font-medium">
				{formatDate(date)}
			</span>
			</motion.button>
		);
		})}
	</div>
	</div>
);
}
