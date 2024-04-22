import Link from "next/link";
import { CircleUser, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ToggleTheme } from "@/components/ToggleTheme";
import { Icons } from "@/components/icons";
import { Auth } from "@/containers/Auth";
import { getData } from "@/lib/actions/getData";
import { removeCookie } from "@/lib/actions/cookies";
import { LogoutButton } from "../Auth/LogoutButton";

async function LinkList() {
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

export async function Header() {
	const { data, loading, error } = await getData("auth/profile");

	console.log(data, "response");

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
				<form className="ml-auto flex-1 sm:flex-initial">
					{/* <div className="relative">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input type="search" placeholder="Search products..." className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
					</div> */}
				</form>
				{data?.id ? (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="secondary" size="icon" className="rounded-full">
								<CircleUser className="h-5 w-5" />
								<span className="sr-only">Toggle user menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>
								<Link href="/profile">Account</Link>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							{/* <DropdownMenuItem>Logout</DropdownMenuItem> */}
							<LogoutButton />
						</DropdownMenuContent>
					</DropdownMenu>
				) : (
					<Auth />
				)}
			</div>
		</header>
	);
}
