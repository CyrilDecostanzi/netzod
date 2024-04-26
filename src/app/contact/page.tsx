import { HeroBanner } from "@/components/HeroBanner";

export default function Contact() {
	return (
		<div className="flex min-h-screen w-full lg:max-w-[1300px] mx-auto flex-col">
			<main className="flex flex-col gap-4 px-8 md:gap-8 md:px-18">
				<HeroBanner
					title="Contactez-moi"
					description="Vous avez une question, une suggestion, ou vous voulez simplement dire bonjour ? N'hésitez pas à me contacter !"
				/>
			</main>
		</div>
	);
}
