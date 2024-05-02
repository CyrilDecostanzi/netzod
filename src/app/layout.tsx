import type { Metadata } from "next";

import "../styles/globals.css";

import { Baloo_2 as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { Header } from "@/features/Layout/Header";
import { Footer } from "@/features/Layout/Footer";
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
			<body className={cn("min-h-screen bg-background font-sans antialiased bg-gradient-to-b from-background to-secondary", fontSans.variable)}>
				<Providers>
					<Header />
					<div className="flex min-h-screen w-full lg:max-w-[1300px] mx-auto flex-col">
						<main className="flex flex-col gap-4 px-4 sm:px-8 md:gap-8 md:px-18">{children}</main>
					</div>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
