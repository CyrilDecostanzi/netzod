import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TextAreaField } from "@/features/Account/Profile/components/edit/forms/TextAreaField";
import { useAuth } from "@/hooks/useAuth";
import { patchData } from "@/lib/fetch_actions/patchData";
import { postData } from "@/lib/fetch_actions/postData";
import { zodResolver } from "@hookform/resolvers/zod";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type CommentFormData = {
	content: string;
	slug: string;
};

const CommentFormSchema = z.object({
	content: z.string().min(5, "Le commentaire doit contenir au moins 5 caractères")
});

export const CommentForm = ({
	params,
	setOpen,
	comment,
	mutate,
	setMutate
}: {
	params?: any;
	setOpen: any;
	comment?: any;
	mutate: any;
	setMutate: any;
}) => {
	const [error, setError] = useState<any>(null);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, defaultValues }
	} = useForm<CommentFormData>({
		resolver: zodResolver(CommentFormSchema),
		defaultValues: {
			content: comment ? comment.content : ""
		}
	});

	const onSubmit = async (formData: CommentFormData) => {
		if (comment) {
			// update comment
			const { data, error } = await patchData(`comment/${comment.id}`, formData);

			if (error) {
				setError(error);
				console.error(error);
				return;
			}

			setOpen(false);
			setMutate(!mutate);
			toast.success("Commentaire modifié avec succès");
			return;
		}
		// add post id to the form data
		formData = { ...formData, slug: params.slug[0] };
		const { data, error } = await postData(`comment`, formData);

		if (error) {
			setError(error);
			console.error(error);
			return;
		}

		setOpen(false);
		setMutate(!mutate);
		toast.success("Commentaire ajouté avec succès");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} onChange={() => setError(null)}>
			{error && (
				<Alert className="items-center space-x-2 col-span-4">
					<Terminal className="h-4 w-4 " />
					<AlertTitle>{error.message}</AlertTitle>
				</Alert>
			)}
			<div className="flex flex-col  gap-4">
				<TextAreaField
					register={register("content")}
					error={errors.content}
					label="Votre commentaire"
					placeholder="Dites-nous ce que vous pensez de cet article..."
				/>
				<Button type="submit" className="ml-2">
					Enregistrer
				</Button>
				<Button
					variant={"outline"}
					onClick={(e) => {
						e.preventDefault();
						comment = null;
						setOpen(false);
					}}
					className="ml-2"
				>
					Annuler
				</Button>
			</div>
		</form>
	);
};
