import { HeroBanner } from "@/components/HeroBanner";
import { ContactForm } from "@/features/Contact/components/forms/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contactez-moi",
	description: "Vous avez une question, une suggestion, ou vous voulez simplement dire bonjour ? N'hésitez pas à me contacter !"
};

export default function Contact() {
	return (
		<>
			<HeroBanner
				title="Contactez-moi"
				description="Vous avez une question, une suggestion, ou vous souhaiteriez discuter de votre projet ? N'hésitez pas à me contacter !"
			/>
			<ContactForm />
		</>
	);
}
