/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { AboutContent } from "@/features/About/AboutContent";

export const metadata: Metadata = {
	title: "À propos",
	description: "Découvrez mon parcours, mes compétences et mes expériences."
};

export default function About() {
	return <AboutContent />;
}
