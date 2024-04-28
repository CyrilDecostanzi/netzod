import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { GraduationCapIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Error } from "@/types/api";
import { InputField } from "./InputField";
import { LoginFormSchema } from "../lib/schemas";
import { LoginFormData } from "@/types/auth";

type LoginFormProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

export function LoginForm({ open, setOpen }: LoginFormProps) {
	const [serverError, setServerError] = useState<Error>(null);
	const searchParams = useSearchParams();
	const { login } = useAuth();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginFormData>({
		resolver: zodResolver(LoginFormSchema)
	});

	async function onSubmit(formData: LoginFormData) {
		const { data, error } = await login(formData);

		if (error) {
			setServerError(error);
		}

		if (data) {
			toast.success("Connexion réussie");
			const next = searchParams.get("next");
			if (next) router.push(next);
			setOpen(!open);
		}
	}

	return (
		<Card className="mx-auto max-w-sm border-none shadow-none bg-transparent">
			<form onSubmit={handleSubmit(onSubmit)} onChange={() => setServerError(null)}>
				<CardHeader>
					<CardTitle className="text-2xl">Connexion</CardTitle>
					<CardDescription>Connectez-vous pour accéder à votre compte.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<InputField
							label="Email"
							error={errors.email}
							register={register("email")}
							type="email"
							serverError={serverError && serverError.field === "email" && serverError.message}
						/>
						<InputField
							label="Mot de passe"
							error={errors.password}
							register={register("password")}
							type="password"
							serverError={serverError && serverError.field === "password" && serverError.message}
						/>
						<Button type="submit" className="w-full">
							Connexion
						</Button>
						<Button variant="outline" className="w-full">
							<GraduationCapIcon className="w-4 h-4 mr-2" />
							Connexion avec Google
						</Button>
					</div>
				</CardContent>
			</form>
		</Card>
	);
}
