import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { InputField } from "./InputField";
import { Button } from "@/components/ui/button";
import { GraduationCapIcon } from "lucide-react";
import { toast } from "sonner";
import { RegisterFormSchema } from "../lib/schemas";
import { RegisterFormData } from "@/types/auth";
import { Error } from "@/types/api";

type RegisterFormProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

export const RegisterForm = ({ open, setOpen }: RegisterFormProps) => {
	const { register: submit } = useAuth();
	const [serverError, setServerError] = useState<Error>(null);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<RegisterFormData>({
		resolver: zodResolver(RegisterFormSchema)
	});

	const onSubmit = async (formData: RegisterFormData) => {
		const { data, error } = await submit(formData);
		if (error) {
			setServerError({ ...serverError, ...error.errors[0] });
		}
		if (data) {
			toast.success("Inscription réussie");
			setOpen(!open);
		}
	};

	return (
		<Card className="border-none shadow-none bg-transparent">
			<form onSubmit={handleSubmit(onSubmit)} onChange={() => setServerError(null)}>
				<CardHeader>
					<CardTitle>Inscription</CardTitle>
					<CardDescription>Creez un compte pour accéder à votre espace personnel.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid sm:grid-cols-2 gap-4 ">
						<InputField
							label="Email"
							error={errors.email}
							register={register("email")}
							type="email"
							serverError={serverError && serverError.field === "email" && serverError.message}
						/>
						<InputField label="Pseudo" error={errors.username} register={register("username")} />
						<InputField label="Nom" error={errors.lastname} register={register("lastname")} />
						<InputField label="Mot de passe" error={errors.password} type="password" register={register("password")} />
						<InputField label="Prénom" error={errors.firstname} register={register("firstname")} />
						<InputField
							label="Confirmation mot de passe"
							error={errors.conf_password}
							type="password"
							register={register("conf_password")}
						/>
						<Button type="submit" className="w-full">
							Inscription
						</Button>
						<Button variant="outline" className="w-full">
							<GraduationCapIcon className="w-4 h-4 mr-2" />
							Inscription avec Google
						</Button>
					</div>
				</CardContent>
			</form>
		</Card>
	);
};
