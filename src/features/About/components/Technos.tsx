import { AspectRatio } from "@/components/ui/aspect-ratio";
import { technoCards } from "../lib/data";
import Image from "next/image";
import { TechnoCard } from "./TechnoCard";

export const Technos = () => {
	return (
		<div className="grid grid-cols-2 gap-4 my-12 md:grid-cols-4">
			{technoCards.map((card, index) => (
				<TechnoCard key={index} card={card} delay={index} />
			))}
		</div>
	);
};
