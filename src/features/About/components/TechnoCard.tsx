"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

type TechnoCardProps = {
	card: {
		name: string;
		title: string;
	};
	delay: number;
};

export const TechnoCard = ({ card, delay }: TechnoCardProps) => {
	return (
		<motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: delay * 0.1 }}>
			<Card className="flex flex-col items-center justify-center p-4 gap-4 border border-primary/30">
				<div className="flex items-center justify-center w-16 h-16 min-w-16 rounded-full bg-secondary-foreground/10 p-3 shadow-xl">
					<AspectRatio ratio={1}>
						<Image src={`/assets/dev_logos/${card.name}.png`} alt={card.title} width={100} height={100} className="object-contain" />
					</AspectRatio>
				</div>
				<h3 className="text-lg font-bold text-center">{card.title}</h3>
			</Card>
		</motion.div>
	);
};
