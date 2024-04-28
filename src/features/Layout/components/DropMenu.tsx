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
import { User } from "@/types/auth";
import Link from "next/link";
import { LogoutButton } from "@/features/Auth/components/LogoutButton";
import Image from "next/image";
import { Images } from "@/enums/default";
import { Navigation } from "@/enums/navigation";

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
					<Image
						src={user.avatar ? process.env.NEXT_PUBLIC_API_URL + user.avatar : Images.DEFAULT_AVATAR}
						alt="Photo by Drew Beamer"
						width={60}
						height={60}
						className="rounded-full object-cover border-2 border-primary"
					/>
					<span className="sr-only">Ouvrir le menu utilisateur</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="p-6">
				<DropdownMenuLabel>{user.username}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer" asChild>
					<Link href={Navigation.ACCOUNT} onClick={closeMenu}>
						Mon compte
					</Link>
				</DropdownMenuItem>
				{/* <DropdownMenuItem onSelect={closeMenu} className="cursor-pointer">
					Support
				</DropdownMenuItem> */}
				<DropdownMenuSeparator />
				<div className="flex items-center justify-center gap-2 w-full pt-4">
					<LogoutButton />
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
