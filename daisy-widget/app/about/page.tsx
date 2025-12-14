'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About()
{
	return (
		<>
			<main
				className="flex min-h-screen flex-col items-center justify-center">
				<div
					className="text-4xl font-fbold mb-8">
						About Page
				</div>
				<motion.button
					whileHover={{scale:1.1}}
					whileTap={{scale: 0.9}}
					className="px-4 py-2 bg-blue-500 text-white rounded-md">
						<Link href='/'>Click Me</Link>
				</motion.button>
			</main>
		</>
	)
}
