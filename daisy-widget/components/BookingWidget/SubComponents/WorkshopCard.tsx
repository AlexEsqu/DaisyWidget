'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Workshop, WorkshopEventInstance } from '../types';
import { defaultTheme, type Theme } from '../theme';
import { MapPin, Users } from 'lucide-react';
import DatePicker from './DatePicker';

interface WorkshopCardProps {
    workshop: Workshop;
    selectedInstance: WorkshopEventInstance | null;
    onSelectInstance: (instance: WorkshopEventInstance) => void;
    onBookClick: () => void;
    theme: Theme;
}

export default function WorkshopCard({
    workshop,
    selectedInstance,
    onSelectInstance,
    onBookClick,
    theme
}: WorkshopCardProps) {

    const hasAvailableSpots = workshop.instances.some(i => i.spotsRemaining > 0);
    const totalSpotsRemaining = workshop.instances.reduce((sum, i) => sum + i.spotsRemaining, 0);

    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="overflow-visible rounded-3xl shadow-lg"
			style={{ backgroundColor: theme.background.basic }}
        >
            <div className="relative h-40 w-full">

				{/* Background image */}
                <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover rounded-t-md"
                />

				{/* Avatar */}
				{/* wrapped in many div to get the original framing */}
				{workshop.avatar && (
					<div className="absolute bottom-0 left-2 translate-y-1/2">
						<div className="relative w-34 h-38 shrink-0 -rotate-30 p-2 rounded-[50%_50%_50%_50%/65%_65%_35%_35%]"
							style={{ backgroundColor: theme.background.basic }}>
							<div className="relative w-full h-full overflow-hidden"
								style={{ borderRadius: '50% 50% 50% 50% / 65% 65% 35% 35%' }}>
								<div className="relative w-full h-full rotate-30 scale-115">
									<Image
										src={workshop.avatar}
										alt={`${workshop.title} avatar`}
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				)}

            </div>

            <div className="p-6">
                <div className={`${workshop.avatar ? 'ml-34 size-5xl text-right -mt-4' : 'text-center'}`}>
                    <h2 className={`font-bold ${workshop.avatar ? 'text-3xl' : 'text-5xl'}`}
                        style={{ color: theme.colors.primary }}>
                        {workshop.title}
                    </h2>
                </div>

                <div className={`space-y-3 mb-6`}>
                    <div className={`flex items-start gap-2 ${workshop.avatar ? 'ml-45 text-right' : 'mt-2 justify-center'}`}
					style={{ color: theme.fontColorLight }}>
                        {/* <MapPin size={20} className='mt-1.5' style={{ color: theme.colors.secondary  }} /> */}
                        <span>{workshop.location}</span>
                    </div>

                    {/* <div className="flex items-center gap-2">
                        <Users size={20} style={{ color: theme.colors.secondary  }} />
                        <span className={`font-semibold ${totalSpotsRemaining <= 3 ? 'text-red-500' : 'text-gray-700'}`}>
                            {totalSpotsRemaining} place{totalSpotsRemaining > 1 ? 's' : ''} restante{totalSpotsRemaining > 1 ? 's' : ''}
                        </span>
                    </div> */}
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
                        backgroundColor: selectedInstance ? theme.colors.primary : '#ccc',
                        borderColor: selectedInstance ? theme.colors.primary : 'transparent'
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
