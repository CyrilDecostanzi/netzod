import type { Metadata, Viewport } from "next";

import "../styles/globals.css";

import { Baloo_2 as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { Header } from "@/features/Layout/Header";
import { Footer } from "@/features/Layout/Footer";
import { Providers } from "./providers";
import PageTransitionEffect from "@/components/PageTransition";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans"
});

export const metadata: Metadata = {
	title: {
		template: "%s | Netzod.fr",
		default: "Netzod.fr"
	},
	description: "Netzod.fr est un blog sur la tech, développement web, systèmes linux, intelligence artificielle, actualités et tutoriels.",
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://netzod.fr"
	}
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("font-sans min-h-screen w-full mx-auto flex-col relative ", fontSans.variable)}>
				<div className="bg-[url(/assets/pngs/bg8.png)] bg-cover bg-center bg-no-repeat w-screen h-screen fixed top-0 left-0 -z-10"></div>
				<Providers>
					<Header />
					<PageTransitionEffect>{children}</PageTransitionEffect>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
