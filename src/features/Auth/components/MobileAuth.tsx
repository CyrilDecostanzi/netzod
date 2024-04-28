import { AuthProps } from "../AuthContent";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function MobileAuth({ open, setOpen, haveAccount, setHaveAccount }: AuthProps) {
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
