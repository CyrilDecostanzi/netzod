/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigRightIcon, Info, Send } from "lucide-react";

export const HomeContent = () => {
	const videoRef = useRef<any>(null);

	useEffect(() => {
		// Re-trigger the video playback when the component is mounted
		if (videoRef.current) {
			videoRef.current.play().catch((error: any) => {
				console.error("Error attempting to play the video:", error);
			});
		}
	}, []);

	// Parallax effect
	const { scrollY, scrollYProgress } = useScroll();
	const y = useTransform(scrollY, [0, 1000], [-100, 0]);

	return (
		<>
			<div>
				<video
					ref={videoRef}
					autoPlay
					width={800}
					height={600}
					muted
					loop
					playsInline
					preload="auto"
					className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
					disablePictureInPicture
					disableRemotePlayback
				>
					<source src="/assets/videos/dev.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<motion.div
				className="flex flex-col w-full justify-center items-center h-[90vh] px-5 z-40 "
				initial={{ opacity: 0, scale: 0, y: 300 }}
				animate={{ opacity: 0.8, scale: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				exit={{ opacity: 0, scale: 0, y: 300 }}
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
				<h1 className="text-base sm:text-xl text-center text-primary-foreground mt-8 max-w-[600px]">
					Netzod.fr est un blog dédié au développement web, à la programmation et à la technologie.
				</h1>
				<Button asChild className="mt-8 z-40">
					<Link href="/blog">
						Découvrir le blog <ArrowBigRightIcon className="h-6 w-6 ml-2" />
					</Link>
				</Button>
			</motion.div>
			<div className="flex flex-col w-full justify-center items-center h-[80vh] px-5 overflow-hidden fixed left-0 opacity-80 z-20">
				<motion.div
					className="flex flex-row items-center justify-center"
					style={{ opacity: scrollYProgress, scale: scrollYProgress }}
					initial={{ rotate: -2 }}
					animate={{ rotate: 2, transition: { duration: 8, repeat: Infinity, repeatType: "reverse" } }}
				>
					<Image
						src="/assets/pngs/illus1.png"
						alt="hero"
						width={350}
						height={350}
						priority
						style={{ width: "100%", height: "auto" }}
						className="rounded-xl"
					/>{" "}
				</motion.div>
				<motion.h2
					className="text-base sm:text-xl text-center text-primary-foreground mt-8 max-w-[600px]"
					style={{ y: y, opacity: scrollYProgress, scale: scrollYProgress }}
				>
					Vous voulez en savoir plus sur moi ?
				</motion.h2>
				<motion.p className="text-base text-primary-foreground" style={{ y: y, opacity: scrollYProgress, scale: scrollYProgress }}>
					Consultez mon parcours et mes compétences ou contactez-moi pour parler de votre projet.
				</motion.p>
				<motion.div className="flex flex-row items-center justify-center" style={{ opacity: scrollYProgress, scale: scrollYProgress }}>
					<Button asChild className="mt-8 ">
						<Link href="/about">
							<Info className="h-4 w-4 mr-2" /> En savoir plus
						</Link>
					</Button>
					<Button asChild className="mt-8 ml-4 ">
						<Link href="/contact">
							<Send className="h-4 w-4 mr-2" /> Me contacter
						</Link>
					</Button>
				</motion.div>
			</div>
			<div className="h-screen" />
		</>
	);
};
