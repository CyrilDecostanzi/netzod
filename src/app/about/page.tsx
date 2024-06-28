/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { AboutContent } from "@/features/About/AboutContent";

export const metadata: Metadata = {
	title: "À propos",
	description:
		"Je m'appelle Cyril, développeur web freelance basé à Bordeaux. Avec une solide expérience en développement web fullstack et une expertise en Next.js, React, NestJS et Laravel, je suis dédié à la création de solutions robustes et efficaces pour vos projets.",
	alternates: {
		canonical: "https://netzod.fr/about"
	}
};

export default function About() {
	return <AboutContent />;
}
