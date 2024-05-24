import Link from "next/link";
import { Icons } from "@/components/icons";
import { ToggleTheme } from "@/components/ToggleTheme";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Navigation } from "@/enums/navigation";

type LinkListProps = {
	pathname: string;
	onLinkClick?: () => void;
};

export function LinkList({ pathname, onLinkClick }: LinkListProps) {
	const isDesktop = useMediaQuery("(min-width: 728px)");

	const links = [
		{ href: Navigation.HOME, label: "Accueil", icon: null },
		{ href: Navigation.BLOG, label: "Blog", icon: null },
		// { href: Navigation.LEARNING, label: "Learning", icon: null },
		{ href: Navigation.CONTACT, label: "Contact", icon: null },
		{ href: Navigation.ABOUT, label: "À propos", icon: null }
	];

	return (
		<>
			<Link href="/" className="flex flex-row justify-between">
				<Icons.logo />
				{/* {!isDesktop && <ToggleTheme />} */}
				<span className="sr-only">Netzod</span>
			</Link>
			{links.map(({ href, label, icon }) => (
				<Link
					key={href}
					href={href}
					className={`transition-colors ${pathname === href ? "text-foreground" : "text-muted-foreground"} whitespace-nowrap text-base`}
					onClick={onLinkClick}
				>
					{label}
				</Link>
			))}
		</>
	);
}
