import { HeroBanner } from "@/containers/Home/HeroBanner";
import { Content } from "@/containers/Home/Content";

export default function Dashboard() {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<main className="flex flex-col gap-4 p-4 md:gap-8 md:px-24">
				<HeroBanner />
				<Content />
			</main>
		</div>
	);
}
