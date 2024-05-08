/* eslint-disable react/no-unescaped-entities */
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Error } from "@/types/api";
import useCookie from "@/hooks/useCookie";
import { AuthContext } from "@/context/AuthContext";
import { User } from "@/types/auth";
import { BioFormSchema, PasswordFormSchema } from "../../../lib/schemas";
import { patchData } from "@/lib/fetch_actions/patchData";
import { EditFormProps } from "@/types/edit";
import { EditPasswordFormData } from "@/types/edit";
import { passwordFields } from "../lib/utils";
import { InputField } from "@/features/Auth/components/InputField";

export const EditPasswordForm = ({ open, setOpen }: EditFormProps) => {
	const { setUser } = useContext(AuthContext);
	const { setCookie } = useCookie();

	const [state, setState] = useState<{
		serverError: Error | null;
		avatar: string | null;
	}>({
		serverError: null,
		avatar: null
	});

	const setNewUser = (user: User) => {
		setState({ ...state, avatar: user.avatar });
		setUser(user);
		setCookie("user", JSON.stringify(user));
	};

	const onSubmit = async (formData: EditPasswordFormData) => {
		const { data, error } = await patchData("users", formData);
		if (error) {
			setState({ ...state, serverError: error.status ? error : error.errors[0] });
			return;
		}
		toast.success("Votre mot de passe a été modifié avec succès");
		setNewUser(data);
		setOpen && setOpen(!open);
		return;
	};

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditPasswordFormData>({
		resolver: zodResolver(PasswordFormSchema)
	});

	return (
		<Card className="border-none shadow-none bg-transparent overflow-y-auto">
			<form onSubmit={handleSubmit(onSubmit)} onChange={() => setState({ ...state, serverError: null })}>
				<CardHeader>
					<CardTitle>Modifier votre mot de passe</CardTitle>
					<CardDescription>
						Pour des raisons de sécurité, nous vous recommandons de changer régulièrement votre mot de passe.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						{passwordFields.map((field) => (
							<InputField
								key={field.name}
								label={field.label}
								error={errors[field.name as keyof EditPasswordFormData]}
								register={register(field.name as keyof EditPasswordFormData)}
								type={field.type}
								serverError={state.serverError && state.serverError.field === field.name && state.serverError.message}
							/>
						))}
						<div className="flex flex-col sm:flex-row gap-2">
							<Button type="submit" className="w-full mt-2">
								Enregistrer
							</Button>
							<Button
								variant="outline"
								className="w-full mt-2"
								onClick={(e) => {
									e.preventDefault();
									setOpen && setOpen(!open);
								}}
							>
								Annuler
							</Button>
						</div>
					</div>
				</CardContent>
			</form>
		</Card>
	);
};
