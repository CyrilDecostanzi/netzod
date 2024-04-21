import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./styles/globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/containers/Layout/Header";
import { Footer } from "@/containers/Layout/Footer";

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
				<ThemeProvider attribute="class" enableSystem disableTransitionOnChange defaultTheme="dark">
					<TooltipProvider>
						<Header />
						{children}
						<Footer />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
