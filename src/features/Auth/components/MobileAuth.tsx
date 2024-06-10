import { AuthProps } from "../AuthContent";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { LoginForm } from "./forms/LoginForm";
import { RegisterForm } from "./forms/RegisterForm";
import { useEffect } from "react";

export function MobileAuth({ open, setOpen, haveAccount, setHaveAccount }: AuthProps) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant="outline">Connexion</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="overflow-auto">
					{!haveAccount ? <RegisterForm open={open} setOpen={setOpen} /> : <LoginForm open={open} setOpen={setOpen} />}
					<DrawerFooter className="flex flex-col gap-2 mx-auto">
						<Button variant="outline" className="mt-4 w-full" onClick={() => setHaveAccount(!haveAccount)}>
							{haveAccount ? "Pas encore de compte ? Inscrivez-vous" : "Déjà un compte ? Connectez-vous"}
						</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
