"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CircleUser, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AuthContent } from "@/features/Auth/AuthContent";
import { LinkList } from "./components/LinkList";
import { useUser } from "@/hooks/useUser";
import { DropMenu } from "./components/DropMenu";
import { usePathname } from "next/navigation";
import { ToggleTheme } from "@/components/ToggleTheme";

export function Header() {
	const { user, removeUser } = useUser();
	const [sheetOpen, setSheetOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();

	const closeSheet = () => setSheetOpen(false);

	const searchParams = useSearchParams();
	const type = searchParams.get("type");

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		if (type === "login") {
			removeUser();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [type]);

	return (
		<header className="sticky top-0 flex h-20 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 z-50">
			<nav className="hidden flex-col gap-12 md:flex md:flex-row md:items-center">
				<LinkList pathname={pathname} />
				<ToggleTheme />
			</nav>
			<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="top" className="pl-8 pt-12">
					<nav className="grid gap-6">
						<LinkList pathname={pathname} onLinkClick={closeSheet} />
					</nav>
				</SheetContent>
			</Sheet>
			<div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
				<form className="ml-auto flex-1 sm:flex-initial"></form>
				{mounted ? user ? <DropMenu user={user} /> : <AuthContent type={type} /> : null}
			</div>
		</header>
	);
}
