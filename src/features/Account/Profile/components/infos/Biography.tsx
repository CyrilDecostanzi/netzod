import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { getData } from "@/lib/fetch_actions/getData";
import { Edit } from "../edit/Edit";
import { EditBioForm } from "../edit/forms/EditBioForm";

type BiographyProps = {
	user: any;
};

export function Biography({ user }: BiographyProps) {
	const [profile, setProfile] = useState<any>(null);
	const [error, setError] = useState<any>(null);
	useEffect(() => {
		if (!user) return;
		async function getProfile() {
			const { data, error } = await getData("auth/profile");
			if (error) {
				setError(error);
				return;
			}
			setProfile(data);
		}
		getProfile();

		return () => {
			setProfile(null);
			setError(null);
		};
	}, [user]);
	return (
		<Card className="md:col-span-4">
			<CardHeader>
				<div className="flex flex-row justify-between gap-2 w-full text-lg">
					Biographie{" "}
					<Edit>
						<EditBioForm />
					</Edit>
				</div>
			</CardHeader>
			<CardContent>
				{profile ? (
					<div>{profile.bio ? <p className="text-base">{profile.bio}</p> : <p className="text-muted-foreground">Pas de biographie</p>}</div>
				) : (
					<Skeleton className="h-16" />
				)}
			</CardContent>
		</Card>
	);
}
