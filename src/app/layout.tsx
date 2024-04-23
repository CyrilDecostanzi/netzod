import type { Metadata } from "next";

import "./styles/globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { Header } from "@/containers/Layout/Header";
import { Footer } from "@/containers/Layout/Footer";
import { Providers } from "./providers";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans"
});

export const metadata: Metadata = {
	title: "Netzod",
	description: "Netzod.fr est un blog sur le développement web et mobile, les nouvelles technologies et l'actualité informatique."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
