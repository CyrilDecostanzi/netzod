import { HeroBanner } from "@/components/HeroBanner";
import { Content } from "@/features/Blog/BlogContent";

export default function Blog() {
	return (
		<>
			<HeroBanner
				title="Découvrez les derniers articles de mon blog"
				description="Des articles sur le développement web, le design, le SEO, le marketing, et bien plus encore."
			/>
			<Content />
		</>
	);
}
