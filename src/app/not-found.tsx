/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-90vh py-2">
			<h2 className="text-4xl font-bold mt-52 text-center">Oups! Il n'y a rien ici.</h2>
			<p className="mt-3 text-2xl text-center">La page que vous cherchez n'existe pas.</p>
			<Button className="mt-6" asChild>
				<Link href="/">Revenir à l'accueil</Link>
			</Button>
		</div>
	);
}
