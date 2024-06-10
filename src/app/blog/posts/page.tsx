import { HeroBanner } from "@/components/HeroBanner";
import { PostsList } from "@/features/Blog/PostsList";

export default function Posts() {
	return (
		<>
			<HeroBanner title="Tous les articles du blog" description="Ici vous trouverez tous les articles publiés sur le blog." />

			<PostsList />
		</>
	);
}
