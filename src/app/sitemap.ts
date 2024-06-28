import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://netzod.fr",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5
		},
		{
			url: "https://netzod.fr/about",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1
		},
		{
			url: "https://netzod.fr/blog",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8
		},
		{
			url: "https://netzod.fr/contact",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5
		},
		{
			url: "https://netzod.fr/blog/contribuer-pour-la-premiere-fois-sur-un-projet-open-source",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5
		},
		{
			url: "https://netzod.fr/blog/les-tendances-actuelles-en-intelligence-artificielle",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5
		},
		{
			url: "https://netzod.fr/blog/introduction-a-tailwind-css-avec-nextjs",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5
		},
		{
			url: "https://netzod.fr/blog/installation-rapide-de-docker-swarm-sur-ubuntu-2204",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5
		},
		{
			url: "https://netzod.fr/blog/utilisez-votre-raspberry-pi-en-mode-kiosque",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5
		},
		{
			url: "https://netzod.fr/blog/introduction-a-nestjs-un-framework-interressant",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5
		},
		{
			url: "https://netzod.fr/blog/nmap-la-securite-reseau-et-lexploration",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5
		},
		{
			url: "https://netzod.fr/blog/configuration-dun-serveur-web-nginx-sur-ubuntu",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5
		}
	];
}
