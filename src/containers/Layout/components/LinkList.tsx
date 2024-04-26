import Link from "next/link";
import { Icons } from "@/components/icons";
import { ToggleTheme } from "@/components/ToggleTheme";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type LinkListProps = {
	pathname: string;
	onLinkClick?: () => void;
};

export function LinkList({ pathname, onLinkClick }: LinkListProps) {
	const isDesktop = useMediaQuery("(min-width: 728px)");

	const links = [
		{ href: "/", label: "Accueil", icon: null },
		{ href: "/blog", label: "Blog", icon: null },
		{ href: "/learning", label: "Learning", icon: null },
		{ href: "/contact", label: "Contact", icon: null },
		{ href: "/about", label: "À propos", icon: null }
	];

	return (
		<>
			<Link href="/" className="flex flex-row justify-between">
				<Icons.logo /> {!isDesktop && <ToggleTheme />}
				<span className="sr-only">Netzod</span>
			</Link>
			{links.map(({ href, label, icon }) => (
				<Link
					key={href}
					href={href}
					className={`transition-colors ${pathname === href ? "text-foreground" : "text-muted-foreground"} whitespace-nowrap`}
					onClick={onLinkClick}
				>
					{label}
				</Link>
			))}
		</>
	);
}
