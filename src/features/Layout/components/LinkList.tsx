import { useEffect, useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Navigation } from "@/enums/navigation";

type LinkListProps = {
	pathname: string;
	onLinkClick?: () => void;
	isDarkTheme?: boolean;
};

export function LinkList({ pathname, onLinkClick, isDarkTheme }: LinkListProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const links = [
		{ href: Navigation.HOME, label: "Accueil", icon: null },
		{ href: Navigation.BLOG, label: "Blog", icon: null },
		{ href: Navigation.ABOUT, label: "À propos", icon: null },
		{ href: Navigation.CONTACT, label: "Contact", icon: null }
	];
	// color={isDarkTheme ? "#fff" : "#000"}
	return (
		<>
			{mounted && (
				<Link href="/" className="flex flex-row justify-between" onClick={onLinkClick}>
					<Icons.logo color={isDarkTheme ? "#fff" : "#000"} className="w-8 h-8 animate-spin-slow" />
					<span className="sr-only">Netzod</span>
				</Link>
			)}
			{links.map(({ href, label }) => (
				<Link
					key={href}
					href={href}
					className={`transition-colors ${pathname === href ? "text-primary/70" : "text-muted-foreground"} whitespace-nowrap text-base`}
					onClick={onLinkClick}
				>
					{label}
				</Link>
			))}
		</>
	);
}
