import { HeroBanner } from "@/components/HeroBanner";
import { Content } from "@/containers/Blog/Content";

export default function Blog() {
	return (
		<div className="flex min-h-screen w-full lg:max-w-[1300px] mx-auto flex-col">
			<main className="flex flex-col gap-4 px-8 md:gap-8 md:px-18">
				<HeroBanner
					title="Découvrez les derniers articles de mon blog"
					description="Des articles sur le développement web, le design, le SEO, le marketing, et bien plus encore."
				/>
				<Content />
			</main>
		</div>
	);
}
