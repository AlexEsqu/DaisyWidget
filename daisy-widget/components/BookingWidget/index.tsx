'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Workshop } from './types';
import { daisyTheme } from './theme';
import WorkshopCard from './SubComponents/WorkshopCard';
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
                selectedDate={selectedDate}
                onSelectDate={handleDateSelect}
                onBookClick={handleBookClick}
            />

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
