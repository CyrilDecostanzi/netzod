import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import { User } from "@/lib/types/auth";
import Link from "next/link";
import { LogoutButton } from "@/containers/Auth/LogoutButton";

type DropMenuProps = {
	user: User;
};

export function DropMenu({ user }: DropMenuProps) {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
			<DropdownMenuTrigger asChild>
				<Button onClick={handleMenuToggle} variant="secondary" size="icon" className="rounded-full">
					<CircleUser className="h-5 w-5" />
					<span className="sr-only">Ouvrir le menu utilisateur</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel asChild>
					<Link href="/account/profile" onClick={closeMenu}>
						{user.firstname}
					</Link>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onSelect={closeMenu}>Paramètres</DropdownMenuItem>
				<DropdownMenuItem onSelect={closeMenu}>Support</DropdownMenuItem>
				<DropdownMenuSeparator />
				<LogoutButton />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
