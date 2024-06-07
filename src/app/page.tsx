import { HomeContent } from "@/features/Home/HomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Netzod.fr",
	description: "Netzod.fr est un blog sur la tech, le developpement web, la cybersecurité et bien plus encore."
};

export default function Home() {
	return <HomeContent />;
}
