/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from "@/components/ui/drawer";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function Auth() {
	const [open, setOpen] = useState(false);
	const [haveAccount, setHaveAccount] = useState(true);
	const isDesktop = useMediaQuery("(min-width: 728px)");

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant="outline">Connexion</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					{!haveAccount ? <RegisterForm /> : <LoginForm />}
					<Button variant="outline" className="mt-4 w-ful mx-auto" onClick={() => setHaveAccount(!haveAccount)}>
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
				{!haveAccount ? <RegisterForm /> : <LoginForm />}
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
