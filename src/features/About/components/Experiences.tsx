"use client";

import { Card } from "@/components/ui/card";
import { Code } from "lucide-react";
import { experiences } from "../lib/data";
import { motion } from "framer-motion";

export const Experiences = () => {
	return (
		<>
			<h2 className="text-3xl font-bold mb-4 ml-4 md:ml-8 flex items-center">
				<Code className="min-h-8 min-w-8 mr-4" />
				Expérience
			</h2>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-4">
				{experiences.map((experience, index) => (
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
						key={index}
					>
						<Card key={index} className="p-4 md:p-8 h-full">
							<h3 className="text-xl font-bold">{experience.title}</h3>
							<p className="text-base text-gray-600 font-bold">
								<span className="text-primary">{experience.company}</span> - {experience.duration}
							</p>
							<p className="mt-2">{experience.description}</p>
						</Card>
					</motion.div>
				))}
			</div>
		</>
	);
};
