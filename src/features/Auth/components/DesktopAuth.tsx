import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { LoginForm } from "./forms/LoginForm";
import { RegisterForm } from "./forms/RegisterForm";
import { AuthProps } from "../AuthContent";

export function DesktopAuth({ open, setOpen, haveAccount, setHaveAccount }: AuthProps) {
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
