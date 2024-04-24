"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ToggleTheme } from "@/components/ToggleTheme";
import { Auth } from "@/containers/Auth";
import { LinkList } from "./components/LinkList";
import { useUser } from "@/hooks/useUser";
import { DropMenu } from "./components/DropMenu";

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
				{mounted ? user ? <DropMenu user={user} /> : <Auth type={type} /> : null}
			</div>
		</header>
	);
}
