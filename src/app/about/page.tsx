/* eslint-disable react/no-unescaped-entities */
import { HeroBanner } from "@/components/HeroBanner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Code, Download, GraduationCap, Send } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Metadata } from "next";

const technoCards = [
	{
		title: "Next.js",
		name: "next",
		description: "Framework React pour le rendu côté serveur."
	},
	{
		title: "React",
		name: "react",
		description: "Bibliothèque JavaScript pour créer des interfaces utilisateur."
	},
	{
		title: "NestJS",
		name: "nest",
		description: "Framework Node.js pour le développement d'applications back-end."
	},
	{
		title: "Laravel",
		name: "laravel",
		description: "Framework PHP pour le développement web."
	}
];

const experiences = [
	{
		title: "Développeur Fullstack",
		company: "Kweezine",
		duration: "Déc 2021 - Présent",
		description: "Développement d'applications web full-stack utilisant Next.js et Laravel."
	},
	{
		title: "E-commerçant",
		company: "Indépendant",
		duration: "Mars 2018 - Déc 2019",
		description: "Gestion et développement d'une boutique e-commerce spécialisée dans les accessoires de randonnée."
	},
	{
		title: "Logistique chantier maintenance aéronautique",
		company: "AIRBUS",
		duration: "Juin 2015 - Oct 2018",
		description: "Gestion du flux logistique et relevés techniques sur logiciel interne (SAP)."
	},
	{
		title: "Militaire",
		company: "Armée de terre",
		duration: "Fév 2009 - Fév 2014",
		description: "Chef d'équipe en companie de combat, missions opérationnelles en France et à l'étranger."
	}
];

export const metadata: Metadata = {
	title: "À propos",
	description: "Découvrez mon parcours, mes compétences et mes expériences."
};

export default function About() {
	return (
		<Card className="p-4 md:p-12 mt-8">
			<HeroBanner
				title="À propos de moi"
				description="Je m'appelle Cyril, développeur web fullstack passionné, je suis spécialisé dans le développement d'applications web modernes, performantes et sécurisées."
			/>
			<div className="flex justify-center items-center space-x-4 mt-4 flex-wrap">
				<Button asChild>
					<Link href="https://github.com/CyrilDecostanzi" target="_blank">
						<Icons.gitHub className="w-4 h-4 mr-2" />
						<span>Github</span>
					</Link>
				</Button>
				<Button asChild>
					<Link href="/contact">
						<Send className="w-4 h-4 mr-2" />
						<span>Contact</span>
					</Link>
				</Button>
			</div>
			<div className="grid grid-cols-2 gap-4 my-12 md:grid-cols-4">
				{technoCards.map((card, index) => (
					<div key={index} className="flex flex-col items-center justify-center p-4">
						<div className="flex items-center justify-center w-12 h-12 rounded-full">
							<AspectRatio ratio={1}>
								<Image
									src={`/assets/dev_logos/${card.name}.png`}
									alt={card.title}
									width={100}
									height={100}
									className="object-contain"
								/>
							</AspectRatio>
						</div>
						<h3 className="mt-4 text-xl font-bold text-center">{card.title}</h3>
						{/* <p className="mt-2 text-center">{card.description}</p> */}
					</div>
				))}
			</div>
			<h2 className="text-3xl font-bold mb-4 ml-4 md:ml-8 flex items-center">
				<Code className="min-h-8 min-w-8 mr-4" />
				Expérience
			</h2>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-4">
				{experiences.map((experience, index) => (
					<Card key={index} className="p-4 md:p-8">
						<h3 className="text-xl font-bold">{experience.title}</h3>
						<p className="text-base text-gray-600 font-bold">
							<span className="text-primary">{experience.company}</span> - {experience.duration}
						</p>
						<p className="mt-2">{experience.description}</p>
					</Card>
				))}
			</div>
			<h2 className="text-3xl font-bold mb-4 ml-4 md:ml-8 flex items-center">
				<GraduationCap className="min-h-8 min-w-8 mr-4" /> Formation
			</h2>
			<Card className="p-4 md:p-8">
				<h3 className="text-xl font-bold flex ">Titre professionnel DWWM Développeur Web et Web Mobile</h3>
				<p>diplôme de niveau 5 (Bac+2)</p>
				<p className="text-sm text-gray-600">2020 - 2021</p>
			</Card>

			<div className="flex flex-col justify-between items-center p-4 mt-12">
				<h2 className="text-2xl text-center font-bold">
					Contactez moi pour discuter de votre projet ou pour en savoir plus sur mon parcours.
				</h2>
				<div className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-4">
					<Button asChild>
						<Link href="/contact">
							<Send className="h-4 w-4 mr-2" /> Contact
						</Link>
					</Button>
					<Button asChild>
						<Link href="/assets/pdf/cv.pdf" target="_blank">
							<Download className="h-4 w-4 mr-2" />
							Téléchargez mon CV
						</Link>
					</Button>
					<Button asChild className="w-36">
						<Link href="https://www.malt.fr/profile/cyrildecostanzi" target="_blank">
							<Image src="/assets/pngs/malt.png" alt="malt" width={60} height={20} />
						</Link>
					</Button>
				</div>
			</div>
		</Card>
	);
}
