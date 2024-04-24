"use client";

import Link from "next/link";
import { CircleUser, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ToggleTheme } from "@/components/ToggleTheme";
import { Icons } from "@/components/icons";
import { Auth } from "@/containers/Auth";
import { LogoutButton } from "../Auth/LogoutButton";
import { useUser } from "@/hooks/useUser";
import { useSearchParams } from "next/navigation";

function LinkList() {
	return (
		<>
			<Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
				<Icons.logo />
				<span className="sr-only">Netzod</span>
			</Link>
			<Link href="/" className="text-foreground transition-colors hover:text-foreground">
				Accueil
			</Link>
			<Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
				Blog
			</Link>
			<Link href="/learning" className="text-muted-foreground transition-colors hover:text-foreground">
				Learning
			</Link>
			<Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
				Contact
			</Link>
			<Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground md:w-16">
				A propos
			</Link>
		</>
	);
}

export function Header() {
	const { user, removeUser } = useUser();

	const searchParams = useSearchParams();
	const type = searchParams.get("type");

	useEffect(() => {
		if (type === "login") {
			removeUser();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [type]);

	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	return (
		<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 z-50">
			<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<LinkList />
				<ToggleTheme />
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="pl-8 pt-12">
					<nav className="grid gap-6 text-lg font-medium ">
						<ToggleTheme />
						<LinkList />
					</nav>
				</SheetContent>
			</Sheet>
			<div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
				<form className="ml-auto flex-1 sm:flex-initial"></form>
				{mounted ? (
					user ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="secondary" size="icon" className="rounded-full">
									<CircleUser className="h-5 w-5" />
									<span className="sr-only">Toggle user menu</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>
									<Link href="/account/profile">{user.firstname}</Link>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuItem>Support</DropdownMenuItem>
								<DropdownMenuSeparator />
								<LogoutButton />
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Auth type={type} />
					)
				) : null}
			</div>
		</header>
	);
}
