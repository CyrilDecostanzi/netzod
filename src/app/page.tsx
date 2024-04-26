import { HeroBanner } from "@/components/HeroBanner";

export default function Home() {
	return (
		<div className="flex min-h-screen w-full lg:max-w-[1300px] mx-auto flex-col">
			<main className="flex flex-col gap-4 px-8 md:gap-8 md:px-18">
				<HeroBanner
					title='"Codez comme si la personne qui devra maintenir votre code est un psychopathe violent qui sait où vous vivez." - Jeff Atwood'
					description="Et le pire c'est que parfois ça peut être le cas, surtout si vous maintenez votre propre code..."
				/>
			</main>
		</div>
	);
}
