"use client";

// Imports de bibliothèques externes
import React, { useState, useCallback } from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Imports absolus pour les hooks et les types
import { useAuth } from "@/hooks/useAuth";
import { Error } from "@/types/api";

// Imports absolus pour les composants UI
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Imports relatifs pour les composants et les schémas spécifiques
import { InputField } from "@/features/Auth/components/InputField";
import { TextAreaField } from "@/features/Account/Profile/components/edit/forms/TextAreaField";
import { ContactFormData } from "@/types/contact";
import { ContactFormSchema } from "@/features/Contact/lib/schemas";
import { postData } from "@/lib/fetch_actions/postData";
import { useRouter } from "next/navigation";

const useServerError = () => {
	const [serverError, setServerError] = useState<Error>(null);
	const resetError = useCallback(() => setServerError(null), []);
	return { serverError, setServerError, resetError };
};

export const ContactForm = () => {
	const { serverError, setServerError, resetError } = useServerError();
	const router = useRouter();

	const formOptions = { resolver: zodResolver(ContactFormSchema) };

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ContactFormData>(formOptions);

	const onSubmit = async (formData: ContactFormData) => {
		const { data, error } = await postData("users/contact", formData);
		if (error) {
			if (typeof error === "string") {
				toast.error(error);
				return;
			}
			setServerError({ ...serverError, ...error.errors[0] });
		}
		if (data) {
			toast.success("Votre message a bien été envoyé !");
			// Reset form
			reset();
			router.push("/");
		}
	};

	const formFields = [
		{ name: "email", label: "Adresse email" },
		{ name: "lastname", label: "Nom" },
		{ name: "firstname", label: "Prénom" },
		{ name: "mobile", label: "Téléphone (facultatif)" },
		{ name: "company", label: "Société (facultatif)" },
		{ name: "object", label: "Objet" }
	];

	return (
		<Card className="border-none shadow-none bg-transparent w-full sm:w-[90%] mx-auto">
			<form onSubmit={handleSubmit(onSubmit)} onChange={resetError}>
				<CardHeader>
					<CardTitle>Contact</CardTitle>
					<CardDescription>Merci de remplir le formulaire ci-dessous pour me contacter.</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<div className="grid sm:grid-cols-2 gap-4">
						{formFields.map((field) => (
							<InputField
								key={field.name}
								label={field.label}
								error={errors[field.name as keyof ContactFormData]}
								register={register(field.name as keyof ContactFormData)}
								type={"text"}
								serverError={serverError && serverError.field === field.name && serverError.message}
							/>
						))}
					</div>
					<TextAreaField
						label="Message"
						error={errors["message"]}
						register={register("message")}
						serverError={serverError && serverError.field === "message" && serverError.message}
					/>
					<Button type="submit" className="w-full mx-auto mt-6">
						Envoyer
					</Button>
				</CardContent>
			</form>
		</Card>
	);
};
