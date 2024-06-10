/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card";

import { Metadata } from "next";
import { Technos } from "./components/Technos";
import { Experiences } from "./components/Experiences";
import { Formation } from "./components/Formation";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";

export const metadata: Metadata = {
	title: "À propos",
	description: "Découvrez mon parcours, mes compétences et mes expériences."
};

export const AboutContent = () => {
	return (
		<Card className="p-4 md:p-12 mt-8">
			<Header />
			<Technos />
			<Experiences />
			<Formation />
			<Contact />
		</Card>
	);
};
