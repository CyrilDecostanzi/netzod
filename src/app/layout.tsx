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
	title: "Netzod",
	description: "Netzod.fr est un blog sur le développement web et mobile, les nouvelles technologies et l'actualité informatique."
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
			<body
				className={cn(
					"font-sans min-h-screen w-full mx-auto flex-col relative bg-[url(/assets/pngs/bg8.png)] bg-fixed bg-cover bg-center bg-no-repeat",
					fontSans.variable
				)}
			>
				<Providers>
					<Header />
					<PageTransitionEffect>{children}</PageTransitionEffect>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
