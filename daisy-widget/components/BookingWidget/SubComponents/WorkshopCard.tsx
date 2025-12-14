'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Workshop, WorkshopEventInstance } from '../types';
import { daisyTheme } from '../theme';
import { MapPin, Users } from 'lucide-react';
import DatePicker from './DatePicker';

interface WorkshopCardProps {
    workshop: Workshop;
    theme: 'pro' | 'user';
    selectedInstance: WorkshopEventInstance | null;
    onSelectInstance: (instance: WorkshopEventInstance) => void;
    onBookClick: () => void;
}

export default function WorkshopCard({
    workshop,
    theme,
    selectedInstance,
    onSelectInstance,
    onBookClick
}: WorkshopCardProps) {
    const themeColors = theme === 'pro' ? daisyTheme.colors.pro : daisyTheme.colors.user;
    const iconColor = 'secondary' in themeColors ? themeColors.secondary : themeColors.accent;

    const hasAvailableSpots = workshop.instances.some(i => i.spotsRemaining > 0);
    const totalSpotsRemaining = workshop.instances.reduce((sum, i) => sum + i.spotsRemaining, 0);

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
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-24 h-28 shrink-0 -rotate-120"
                         style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', overflow: 'hidden' }}>
                        <div className="relative w-full h-full rotate-120 scale-115">
                            <Image
                                src={workshop.avatar}
                                alt={`${workshop.title} avatar`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold" style={{ color: themeColors.primary }}>
                        {workshop.title}
                    </h2>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={20} style={{ color: iconColor }} />
                        <span>{workshop.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Users size={20} style={{ color: iconColor }} />
                        <span className={`font-semibold ${totalSpotsRemaining <= 3 ? 'text-red-500' : 'text-gray-700'}`}>
                            {totalSpotsRemaining} place{totalSpotsRemaining > 1 ? 's' : ''} restante{totalSpotsRemaining > 1 ? 's' : ''}
                        </span>
                    </div>
                </div>

                <DatePicker
                    instances={workshop.instances}
                    selectedInstance={selectedInstance}
                    onSelectInstance={onSelectInstance}
                    theme={theme}
                />

                <motion.button
                    onClick={onBookClick}
                    disabled={!selectedInstance || !hasAvailableSpots}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                        w-full mt-6 py-4 px-6 rounded-2xl
                        font-semibold text-white text-lg
                        transition-all duration-200
                        disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                    style={{
                        backgroundColor: selectedInstance ? themeColors.primary : '#ccc'
                    }}
                >
                    {!hasAvailableSpots
                        ? 'Complet'
                        : selectedInstance
                        ? 'Réserver'
                        : 'Sélectionnez une date'}
                </motion.button>
            </div>
        </motion.div>
    );
}
