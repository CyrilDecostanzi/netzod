import { HeroBanner } from "@/components/HeroBanner";
import { ContactForm } from "@/features/Contact/components/forms/ContactForm";

export default function Contact() {
	return (
		<>
			<HeroBanner
				title="Contactez-moi"
				description="Vous avez une question, une suggestion, ou vous voulez simplement dire bonjour ? N'hésitez pas à me contacter !"
			/>
			<ContactForm />
		</>
	);
}
