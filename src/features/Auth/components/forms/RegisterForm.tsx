// Imports de bibliothèques externes
import React, { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GraduationCapIcon } from "lucide-react";

// Imports absolus pour les hooks et les types
import { useAuth } from "@/hooks/useAuth";
import { RegisterFormData } from "@/types/auth";
import { Error } from "@/types/api";

// Imports absolus pour les composants UI
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Imports relatifs pour les composants et les schémas spécifiques
import { InputField } from "../InputField";
import { RegisterFormSchema } from "../../lib/schemas";

type RegisterFormProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

const useServerError = () => {
	const [serverError, setServerError] = useState<Error>(null);
	const resetError = useCallback(() => setServerError(null), []);
	return { serverError, setServerError, resetError };
};

export const RegisterForm = ({ open, setOpen }: RegisterFormProps) => {
	const { register: submit } = useAuth();
	const { serverError, setServerError, resetError } = useServerError();

	const formOptions = { resolver: zodResolver(RegisterFormSchema) };

	// useEffect(() => {
	// 	// scroll to top when form is opened
	// 	if (open) {
	// 		window.scrollTo(0, 0);
	// 	}
	// }, [open]);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<RegisterFormData>(formOptions);

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

	const formFields = [
		{ name: "email", label: "Email", type: "email" },
		{ name: "username", label: "Pseudo" },
		{ name: "lastname", label: "Nom" },
		{ name: "firstname", label: "Prénom" },
		{ name: "password", label: "Mot de passe", type: "password" },
		{ name: "conf_password", label: "Confirmation mot de passe", type: "password" }
	];

	return (
		<Card className="border-none shadow-none bg-transparent">
			<form onSubmit={handleSubmit(onSubmit)} onChange={resetError}>
				<CardHeader>
					<CardTitle>Inscription</CardTitle>
					<CardDescription>Créez un compte pour accéder à votre espace personnel.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid sm:grid-cols-2 gap-4">
						{formFields.map((field) => (
							<InputField
								key={field.name}
								label={field.label}
								error={errors[field.name as keyof RegisterFormData]}
								register={register(field.name as keyof RegisterFormData)}
								type={field.type || "text"}
								serverError={serverError && serverError.field === field.name && serverError.message}
							/>
						))}

						{/* <Button variant="outline" className="w-full">
							<GraduationCapIcon className="w-4 h-4 mr-2" />
							Inscription avec Google
						</Button> */}
					</div>
					<Button type="submit" className="w-full mx-auto mt-6">
						Inscription
					</Button>
				</CardContent>
			</form>
		</Card>
	);
};
