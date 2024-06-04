import { Card } from "@/components/ui/card";
import { postData } from "@/lib/fetch_actions/postData";
export default async function Confirm({ params }: { params: { token: string } }) {
	const decodedToken = decodeURIComponent(params.token);
	const { error, data } = await postData("auth/verify-email", { token: decodedToken });
	if (error) {
		console.error(error);
		return (
			<div className="flex justify-center items-center h-screen">
				<p>Une erreur est survenue lors de la vérification de votre email.</p>
			</div>
		);
	}

	return (
		<Card>
			<h1>Votre email a bien été vérifié !</h1>
			<p>Vous pouvez maintenant vous connecter à votre compte.</p>
		</Card>
	);
}
