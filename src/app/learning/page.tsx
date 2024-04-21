import { HeroBanner } from "@/containers/Home/HeroBanner";

export default function Learning() {
	return (
		<div className="flex min-h-screen w-full lg:max-w-[1300px] mx-auto flex-col">
			<main className="flex flex-col gap-4 px-8 md:gap-8 md:px-18">
				<HeroBanner
					title="Apprenez quelque chose de nouveau chaque jour"
					description="Des tutoriels, des articles, des astuces, et des conseils pour vous aider à devenir un meilleur développeur web."
				/>
			</main>
		</div>
	);
}
