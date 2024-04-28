/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from "@/components/ui/drawer";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { LogIn } from "lucide-react";

export function AuthContent(type: any) {
	const [open, setOpen] = useState(false);
	const [haveAccount, setHaveAccount] = useState(true);
	const isDesktop = useMediaQuery("(min-width: 728px)");

	const { type: authType } = type;

	useEffect(() => {
		if (authType === "login") {
			setOpen(true);
		}
		// cleanup
		return () => {
			setOpen(false);
		};
	}, [authType]);

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant="outline">
						<LogIn className="h-4 w-4 mr-2" /> Connexion
					</Button>
				</DialogTrigger>
				<DialogContent className={!haveAccount ? "max-w-2xl" : "max-w-md"}>
					{!haveAccount ? <RegisterForm open={open} setOpen={setOpen} /> : <LoginForm open={open} setOpen={setOpen} />}
					<Button variant="outline" className="mt-4  mx-auto" onClick={() => setHaveAccount(!haveAccount)}>
						{haveAccount ? "Pas encore de compte ? Inscrivez-vous" : "Déjà un compte ? Connectez-vous"}
					</Button>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant="outline">Connexion</Button>
			</DrawerTrigger>
			<DrawerContent>
				{!haveAccount ? <RegisterForm open={open} setOpen={setOpen} /> : <LoginForm open={open} setOpen={setOpen} />}
				<DrawerFooter className="pt-2 mx-auto">
					<Button variant="outline" className="mt-4 w-full" onClick={() => setHaveAccount(!haveAccount)}>
						{haveAccount ? "Pas encore de compte ? Inscrivez-vous" : "Déjà un compte ? Connectez-vous"}
					</Button>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
