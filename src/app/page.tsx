/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<>
			<video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover -z-10" disablePictureInPicture>
				<source src="/assets/videos/video4.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<motion.div
				className="flex flex-col w-full justify-center items-center mt-52 sm:mt-72 px-5 opacity-40"
				initial={{ opacity: 0, scale: 0, y: 150 }}
				animate={{ opacity: 0.4, scale: 1, y: 0 }}
				transition={{ duration: 0.75, ease: "easeInOut" }}
			>
				<div className="flex flex-row items-end justify-center">
					<Image
						src="/assets/pngs/NETZOD3.png"
						alt="hero"
						width={300}
						height={300}
						priority
						style={{ width: "100%", height: "auto" }}
						className="rounded-xl"
					/>{" "}
				</div>
				<p className="text-xl text-center text-primary-foreground mt-8 max-w-[600px]">
					“L'ordinateur obéit à vos ordres, pas à vos intentions.”
				</p>
			</motion.div>
		</>
	);
}
