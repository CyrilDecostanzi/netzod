import { HeroBanner } from "@/components/HeroBanner";
import { CreatePost } from "@/features/Dashboard/blog/create/CreatePost";
import { Suspense } from "react";

export default function Create() {
	return (
		<>
			<HeroBanner title="Créer un article" description="Rédigez un article pour le publier sur le blog." />
			<Suspense fallback={<div>Chargement...</div>}>
				<CreatePost />
			</Suspense>
		</>
	);
}
