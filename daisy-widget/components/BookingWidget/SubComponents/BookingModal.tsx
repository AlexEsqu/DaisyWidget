'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Workshop, WorkshopEventInstance } from '../types';
import { type Theme } from '../theme';
import { X, Check } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    workshop: Workshop;
    selectedInstance: WorkshopEventInstance | null;
    isBooked: boolean;
    theme: Theme;
}

export default function BookingModal({
    isOpen,
    onClose,
    onConfirm,
    workshop,
    selectedInstance,
    isBooked,
    theme
}: BookingModalProps) {

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
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-40"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                    w-full max-w-md rounded-3xl shadow-2xl z-50 p-6"
						style={{
                            backgroundColor: theme.background.basic,
                            borderRadius: theme.borderRadius
                        }}
                    >
                        {isBooked ? (
                            <div className="text-center py-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', duration: 0.5 }}
                                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${theme.colors.primary}20` }}
                                >
                                    <Check size={40} style={{ color: theme.colors.primary }} />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.primary }}>
                                    Réservation confirmée !
                                </h3>
                                <p className="text-gray-600">Vous recevrez un email de confirmation</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
                                        Confirmer la réservation
                                    </h3>
                                    <button
                                        onClick={onClose}
                                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <p className="text-sm text-gray-500">Atelier</p>
                                        <p className="font-semibold text-lg">{workshop.title}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">Date</p>
                                        <p className="font-semibold capitalize">
                                            {selectedInstance && formatDate(selectedInstance.date)}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">Prix</p>
                                        <p className="font-semibold text-xl">{selectedInstance?.price}€</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={onClose}
                                        className="flex-1 py-3 px-4 rounded-xl border-2 font-semibold transition-colors"
                                        style={{
                                            borderColor: theme.colors.primary,
                                            color: theme.colors.primary
                                        }}
                                    >
                                        Annuler
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={onConfirm}
                                        className="flex-1 py-3 px-4 rounded-xl text-white font-semibold"
                                        style={{ backgroundColor: theme.colors.primary }}
                                    >
                                        Confirmer
                                    </motion.button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
