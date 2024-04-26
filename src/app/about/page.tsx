import { HeroBanner } from "@/components/HeroBanner";

export default function About() {
	return (
		<div className="flex min-h-screen w-full lg:max-w-[1300px] mx-auto flex-col">
			<main className="flex flex-col gap-4 px-8 md:gap-8 md:px-18">
				<HeroBanner
					title="A propos de moi"
					description="Je suis un développeur web full-stack passionné par le développement d'applications web modernes."
				/>
			</main>
		</div>
	);
}
