/* eslint-disable react/no-unescaped-entities */
import { useState, useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Error } from "@/types/api";
import useCookie from "@/hooks/useCookie";
import { AuthContext } from "@/context/AuthContext";
import { EditFormProps } from "@/types/edit";
import { deleteData } from "@/lib/fetch_actions/deleteData";
import { useRouter } from "next/navigation";

export const DeleteAccount = ({ open, setOpen }: EditFormProps) => {
	const { setUser } = useContext(AuthContext);
	const { removeCookie } = useCookie();

	const router = useRouter();

	const clearUser = () => {
		setUser(null);
		removeCookie("user");
		removeCookie("token");
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { error } = await deleteData("users/delete");
		if (error) {
			console.log(error, "error");
			toast.error("Une erreur s'est produite lors de la suppression de votre compte.");
			return;
		}
		toast.success("Votre compte a été supprimé avec succès.");
		clearUser();
		router.push("/");
		setOpen && setOpen(!open);
		return;
	};

	return (
		<Card className="border-none shadow-none bg-transparent overflow-y-auto">
			<form onSubmit={(e: any) => handleSubmit(e)}>
				<CardHeader>
					<CardTitle>Supprimer mon compte</CardTitle>
					<CardDescription>Attention, cette action est irréversible. Vous perdrez toutes vos données.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div className="flex flex-col sm:flex-row gap-2">
							<Button type="submit" className="w-full mt-2" variant="destructive">
								Confirmer la suppression du compte
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
