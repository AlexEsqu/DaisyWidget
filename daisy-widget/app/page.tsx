'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
	return (
	<>
		<main className='flex min-h-screen flex-col items-center justify-center'>
			<motion.div
				className='text-4xl font-fbold mb-8'
				initial={{opacity: 0, y: -50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.5}}>
					Welcome to Framer Motion
			</motion.div>

			<motion.button
				whileHover={{scale:1.1}}
				whileTap={{scale: 0.9}}
				className="px-4 py-2 bg-blue-500 text-white rounded-md">
					<Link href='/about'>Click Me</Link>
			</motion.button>
		</main>
	</>
	);
}
