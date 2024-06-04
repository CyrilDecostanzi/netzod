import { z } from "zod";

export const ContactFormSchema = z.object({
	email: z.string().email({ message: "Veuillez entrer un email valide" }),
	lastname: z.string().min(3, { message: "Le nom doit contenir au moins 3 caractères" }),
	firstname: z.string().min(3, { message: "Le prénom doit contenir au moins 3 caractères" }),
	mobile: z.string().optional(),
	company: z.string().optional(),
	object: z.string().min(3, { message: "L'objet doit contenir au moins 3 caractères" }),
	message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" })
});
