/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { InputField } from "@/features/Auth/components/InputField";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { EditProfileFormData } from "@/types/edit";
import { Error } from "@/types/api";
import { getData } from "@/lib/fetch_actions/getData";
import { SkeletonEditForm } from "../../skeletons/SkeletonEditForm";
import useCookie from "@/hooks/useCookie";
import { AuthContext } from "@/context/AuthContext";
import { User } from "@/types/auth";
import { EditFormSchema } from "../../../lib/schemas";
import { patchData } from "@/lib/fetch_actions/patchData";
import { profileFields } from "../lib/utils";
import { UploadAvatar } from "./UploadAvatar";
import { EditFormProps } from "@/types/edit";

export const EditProfileForm = ({ open, setOpen }: EditFormProps) => {
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

	const onSubmit = async (formData: EditProfileFormData) => {
		const { data, error } = await patchData("users", formData);
		if (data) {
			toast.success("Enregistrement réussi");
			setNewUser(data);
			setOpen && setOpen(!open);
		}
		if (error) {
			setState({ ...state, serverError: error.status ? error : error.errors[0] });
		}
	};

	const {
		register,
		handleSubmit,
		formState: { errors, defaultValues }
	} = useForm<EditProfileFormData>({
		defaultValues: async () => (await getData("auth/profile")).data,
		resolver: zodResolver(EditFormSchema)
	});

	useEffect(() => {
		if (defaultValues?.avatar) {
			setState({ ...state, avatar: defaultValues.avatar });
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [defaultValues?.avatar]);

	return (
		<Card className="border-none shadow-none bg-transparent overflow-y-auto">
			<form onSubmit={handleSubmit(onSubmit)} onChange={() => setState({ ...state, serverError: null })}>
				<CardHeader>
					<CardTitle>Modifier vos informations personelles</CardTitle>
					<CardDescription>Dans cette section, vous pouvez modifier vos informations personnelles.</CardDescription>
				</CardHeader>
				{defaultValues ? (
					<CardContent>
						<div className="grid sm:grid-cols-2 gap-4 ">
							<UploadAvatar state={state} setState={setState} setNewUser={setNewUser} />
							{profileFields.map((field) => (
								<InputField
									key={field.name}
									label={field.label}
									error={errors[field.name as keyof EditProfileFormData]}
									register={register(field.name as keyof EditProfileFormData)}
									type={field.type}
									serverError={state.serverError && state.serverError.field === field.name && state.serverError.message}
								/>
							))}
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
					</CardContent>
				) : (
					<SkeletonEditForm />
				)}
			</form>
		</Card>
	);
};
