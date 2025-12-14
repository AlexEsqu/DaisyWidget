'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import BookingWidget from "@/components/BookingWidget";
import { Workshop } from "@/components/BookingWidget/types";

const mockWorkshop: Workshop = {
  id: "wk-1",
  title: "FrontEnd From Interns",
  image: "https://site-assets.plasmic.app/a7cc2b75f4ab6f16b5d71059d345ef1a.jpg",
  avatar: "https://site-assets.plasmic.app/07835041663d8a1eb3781df76288fcd7.png",
  location: "5, Parvis Alan Turing - 75013 Paris",
  instances: [
    {
      id: "inst-1",
			workshopId: "wk-1",
      price: 45,
      date: new Date("2025-12-18T18:30:00"),
      spotsRemaining: 5,
    },
    {
      id: "inst-2",
			workshopId: "wk-1",
      price: 45,
      date: new Date("2025-12-20T14:00:00"),
      spotsRemaining: 2,
    },
    {
      id: "inst-3",
			workshopId: "wk-1",
      price: 50,
      date: new Date("2025-12-22T19:00:00"),
      spotsRemaining: 0,
    },
    {
      id: "inst-4",
			workshopId: "wk-1",
      price: 45,
      date: new Date("2025-12-28T10:00:00"),
      spotsRemaining: 8,
    },
  ],
};

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-center p-8'>
        <motion.div
          className='text-4xl font-bold mb-8'
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
            Demo: Booking Widget For Daisy
        </motion.div>

        <BookingWidget
          workshop={mockWorkshop}
          onBook={(instance) => console.log("Booked instance:", instance)}
        />
      </main>
    </>
  );
}
