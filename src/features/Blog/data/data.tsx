import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
export const topData = [
	{
		title: "React",
		category: "Librairie",
		utilisation: "50"
	},
	{
		title: "Vue",
		category: "Framework",
		utilisation: "20"
	},
	{
		title: "Angular",
		category: "Framework",
		utilisation: "15"
	},
	{
		title: "Svelte",
		category: "Framework",
		utilisation: "10"
	},
	{
		title: "Next",
		category: "Framework",
		utilisation: "5"
	}
];

export const articlesData = [
	{
		image: "/assets/card_hero3.jpg",
		title: "La nouvelle version de React",
		description: "React 18 est disponible"
	},
	{
		image: "/assets/card_hero2.jpg",
		title: "La nouvelle version de Vue",
		description: "Vue 3 est disponible"
	},
	{
		image: "/assets/card_hero3.jpg",
		title: "Une application avec Angular",
		description: "Angular 13 est disponible"
	},
	{
		image: "/assets/card_hero4.jpg",
		title: "La nouvelle version de Svelte",
		description: "Svelte 4 est disponible"
	},
	{
		image: "/assets/card_hero5.jpg",
		title: "Nouvelle version de Next",
		description: "Next 12 est disponible"
	},
	{
		image: "/assets/card_hero5.jpg",
		title: "Créer une application avec Next",
		description: "Next 12 est disponible"
	}
];

export const contentCardData = [
	{
		image: "/assets/card_hero.jpg",
		title: "Nouvelle sortie chez Linux Mint",
		description: "Linux Mint 20.3 est disponible",
		category: "Actualité",
		icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
	},
	{
		image: "/assets/card_hero3.jpg",
		title: "Web",
		description: "Création d'une api avec NestJS et MongoDB",
		category: "Web",
		icon: <Users className="h-4 w-4 text-muted-foreground" />
	},
	{
		image: "/assets/card_hero2.jpg",
		title: "Finance",
		description: "Découvrez la nouvelle crypto monnaie",
		category: "Finance",
		icon: <CreditCard className="h-4 w-4 text-muted-foreground" />
	},
	{
		image: "/assets/card_hero4.jpg",
		title: "IA",
		description: "Découvrez la nouvelle IA de Google",
		category: "IA",
		icon: <Activity className="h-4 w-4 text-muted-foreground" />
	}
];
