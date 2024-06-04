import { HeroBanner } from "@/components/HeroBanner";
import { PostsList } from "@/features/Blog/PostsList";

export default function Posts() {
	return (
		<>
			<HeroBanner
				title="Tous les articles de mon blog"
				description="Des articles sur le développement web, la cybersécurité, les systèmes Linux, et bien plus encore."
			/>

			<PostsList />
		</>
	);
}
