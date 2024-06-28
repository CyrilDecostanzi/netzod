import { HeroBanner } from "@/components/HeroBanner";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

export const Header = () => {
	return (
		<>
			<HeroBanner
				title="À propos de moi"
				description="Je m'appelle Cyril, développeur web freelance basé à Bordeaux. Après plusieurs années passées en CDI, j'ai décidé de me lancer en tant que freelance pour aider les entreprises à réaliser leurs projets."
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
		</>
	);
};
