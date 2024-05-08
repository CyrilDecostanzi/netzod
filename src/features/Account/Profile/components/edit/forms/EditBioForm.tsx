/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { EditBioFormData } from "@/types/edit";
import { Error } from "@/types/api";
import { getData } from "@/lib/fetch_actions/getData";
import { SkeletonBioForm } from "../../skeletons/SkeletonBioForm";
import useCookie from "@/hooks/useCookie";
import { AuthContext } from "@/context/AuthContext";
import { User } from "@/types/auth";
import { BioFormSchema, EditFormSchema } from "../../../lib/schemas";
import { patchData } from "@/lib/fetch_actions/patchData";
import { TextAreaField } from "./TextAreaField";
import { EditFormProps } from "@/types/edit";

export const EditBioForm = ({ open, setOpen }: EditFormProps) => {
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

	const onSubmit = async (formData: EditBioFormData) => {
		const { data, error } = await patchData("users", formData);
		if (error) {
			setState({ ...state, serverError: error.status ? error : error.errors[0] });
			return;
		}
		toast.success("Enregistrement réussi");
		setNewUser(data);
		setOpen && setOpen(!open);
		return;
	};

	const {
		register,
		handleSubmit,
		formState: { errors, defaultValues }
	} = useForm<EditBioFormData>({
		defaultValues: async () => (await getData("auth/profile")).data,
		resolver: zodResolver(BioFormSchema)
	});

	return (
		<Card className="border-none shadow-none bg-transparent overflow-y-auto">
			<form onSubmit={handleSubmit(onSubmit)} onChange={() => setState({ ...state, serverError: null })}>
				<CardHeader>
					<CardTitle>Modifier votre biographie</CardTitle>
					<CardDescription>Décrivez-vous en quelques mots</CardDescription>
				</CardHeader>
				{defaultValues ? (
					<CardContent>
						<div className="grid gap-4">
							<TextAreaField
								label="Biographie"
								register={register("bio")}
								error={errors.bio}
								serverError={state.serverError?.message}
							/>
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
				) : (
					<SkeletonBioForm />
				)}
			</form>
		</Card>
	);
};
