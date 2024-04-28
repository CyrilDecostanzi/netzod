import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AccountHeader() {
	return (
		<Card>
			<CardHeader className="text-2xl">Vos informations</CardHeader>
			<CardContent>
				<p>Ici vous pouvez consulter et modifier vos informations personnelles. Vous pouvez également ajouter une photo de profil.</p>
			</CardContent>
		</Card>
	);
}
