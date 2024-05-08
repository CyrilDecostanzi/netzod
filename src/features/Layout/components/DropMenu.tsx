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
import { User } from "@/types/auth";
import Link from "next/link";
import { LogoutButton } from "@/features/Auth/components/LogoutButton";
import Image from "next/image";
import { Navigation } from "@/enums/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { formatImageUrl } from "@/lib/utils";

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
					<AspectRatio ratio={1} className="rounded-full overflow-hidden border-primary border-2">
						<Image src={formatImageUrl(user.avatar)} alt="avatar" fill className="object-cover" sizes="100%" />
					</AspectRatio>
					<span className="sr-only">Ouvrir le menu utilisateur</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="p-6">
				<DropdownMenuLabel>{user.username}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer" asChild>
					<Link href={Navigation.DASHBOARD} onClick={closeMenu}>
						Tableau de bord
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className="cursor-pointer" asChild>
					<Link href={Navigation.ACCOUNT} onClick={closeMenu}>
						Mon compte
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<div className="flex items-center justify-center gap-2 w-full pt-4">
					<LogoutButton />
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
