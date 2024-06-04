/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User } from "@/types/auth";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Edit } from "../edit/Edit";
import { EditPasswordForm } from "../edit/forms/EditPasswordForm";
import { DeleteAccount } from "../edit/forms/DeleteAccount";

type SecurityProps = {
	user: User | null;
};

export function Security({ user }: SecurityProps) {
	return (
		<Card className="md:col-span-7">
			<CardHeader>
				<div className="flex flex-row justify-between gap-2 w-full text-lg">Sécurité</div>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 md:grid-cols-7 gap-12">
					<div className="grid gap-4 md:col-span-3">
						<div className="text-base font-bold">Vous désirez changer de mot de passe ?</div>
						<div className="text-muted-foreground text-base">
							Pour des raisons de sécurité, nous vous recommandons de changer régulièrement votre mot de passe.
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
							<div className="grid gap-4">
								<div className="text-base font-bold">Mot de passe</div>
								<div>**************</div>
							</div>
							<Edit withButton>
								<EditPasswordForm />
							</Edit>
						</div>
					</div>
					<div className="grid gap-4 md:col-span-4 md:pl-4">
						<div className="text-base font-bold">Vous désirez supprimer votre compte ?</div>
						<div className="text-muted-foreground text-base">
							Si vous supprimez votre compte, toutes vos données seront définitivement effacées.
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
							<div className="grid">
								<div className="text-lg font-bold text-red-500">Attention !</div>
								<div className="text-muted-foreground">Cette action est irréversible.</div>
							</div>
							<div className="grid gap-4">
								<Edit withButton variant="destructive">
									<DeleteAccount />
								</Edit>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
