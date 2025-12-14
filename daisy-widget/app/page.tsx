'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import BookingWidget from "@/components/BookingWidget";
import { Workshop } from "@/components/BookingWidget/types";

const mockWorkshop: Workshop = {
  id: "wk-1",
  title: "Atelier Bouquets d’Hiver",
  image: "https://site-assets.plasmic.app/a7cc2b75f4ab6f16b5d71059d345ef1a.jpg",
  location: "Paris 11e",
  price: 45,
  dates: [
    new Date("2025-12-18T18:30:00"),
    new Date("2025-12-20T14:00:00"),
    new Date("2025-12-22T19:00:00"),
  ],
  spotsRemaining: 5,
};

export default function Home() {
  return (
    <>
      <main className='flex min-h-75 flex-col items-center justify-center'>
        <motion.div
          className='text-4xl font-fbold mb-8'
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
            Demo: Booking Widget For Daisy
        </motion.div>

        <BookingWidget
          workshop={mockWorkshop}
          onBook={(date) => console.log("Booked for", date.toISOString())}
        />
      </main>
    </>
  );
}
