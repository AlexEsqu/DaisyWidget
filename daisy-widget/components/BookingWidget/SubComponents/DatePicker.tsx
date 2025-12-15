'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { type Theme } from '../theme';
import { Calendar, Euro, Users } from 'lucide-react';
import { WorkshopEventInstance } from '../types';

interface DatePickerProps {
    instances: WorkshopEventInstance[];
    selectedInstance: WorkshopEventInstance | null;
    onSelectInstance: (instance: WorkshopEventInstance) => void;
    theme: Theme,
}

export default function DatePicker(
	{
		instances,
		selectedInstance,
		onSelectInstance,
		theme
	}
	: DatePickerProps
)
{
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const formatDate = (date: Date) => {
        if (isMobile) {
            return new Intl.DateTimeFormat('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            }).format(date);
        }
        return new Intl.DateTimeFormat('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        }).format(date);
    };

	const formatHour = (date: Date) => {
		return new Intl.DateTimeFormat('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
	}

    return (
        <div className="mt-6">

			{/* Call to action container */}
            {/* <div className="flex items-center gap-2 mb-4 justify-center">
                <Calendar size={20} style={{ color: theme.colors.primary }} />
                <h3 className="text-lg font-semibold" style={{ color: theme.colors.primary }}>
                    Choisissez une date
                </h3>
				<Calendar size={20} style={{ color: theme.colors.primary }} />
            </div> */}

			{/* Actual date picker container */}
            <div className="grid grid-cols-2 gap-2">
                {instances.map((instance) => {
                    const isSelected = selectedInstance?.id === instance.id;
                    const isAvailable = instance.spotsRemaining > 0;

                    return (

                        <motion.button
                            key={instance.id}
                            onClick={() => isAvailable && onSelectInstance(instance)}
                            disabled={!isAvailable}
                            whileHover={isAvailable ? { scale: 1.02 } : {}}
                            whileTap={isAvailable ? { scale: 0.98 } : {}}
                            className={`
                                p-3 rounded-xl text-center
                    			transition-colors duration-200 border-2
                                ${!isAvailable ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                            style={{
                                backgroundColor: isSelected ? `${theme.colors.primary}15` : `${theme.background.basic}`,
                                borderColor: isSelected ? theme.colors.primary : `${theme.colors.primary}15`,
                            }}
                        >

							{/* Date Card */}
                            <div className="flex flex-col gap-1">

								{/* Day */}
                                <span className={`capitalize font-medium whitespace-pre-line text-xl ${isSelected ? '' : 'text-gray-700'}`}
                                    style={{ color: isSelected ? theme.colors.primary : theme.fontColor }}>
                                    {formatDate(instance.date)}
                                </span>

								{/* Time */}
								<span className={`capitalize font-medium whitespace-pre-line text-sm ${isSelected ? '' : 'text-gray-700'}`}
                                    style={{ color: isSelected ? theme.colors.primary : theme.fontColor }}>
                                    {formatHour(instance.date)}
                                </span>

								{/* Details */}
                                <div className="flex items-center justify-center gap-2 text-sm">

									{/* Price */}
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold"
										style={{ color: isSelected ? theme.colors.primary : theme.fontColor }}
										>{instance.price}€</span>
                                    </div>

									{/* Spot remaining */}
                                    <div className="flex items-center gap-1">
                                        <Users size={16} style={{ color: instance.spotsRemaining <= 3 ? theme.colors.accent : theme.colors.secondary  }} />
                                        <span
                                            className="font-semibold"
                                            style={{
                                                color: instance.spotsRemaining <= 3 ? theme.colors.accent : theme.colors.secondary,
                                                fontWeight: instance.spotsRemaining <= 3 ? 700 : 400
                                            }}
                                        >
                                            {instance.spotsRemaining} place{instance.spotsRemaining > 1 ? 's' : ''}
                                        </span>
                                    </div>

                                </div>

                            </div>


                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
