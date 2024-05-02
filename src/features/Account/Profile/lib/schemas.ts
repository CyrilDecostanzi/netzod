import { z } from "zod";

export const EditFormSchema = z.object({
	username: z.string().min(3, { message: "Le pseudo doit contenir au moins 3 caractères" }),
	lastname: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
	firstname: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
	email: z.string().email({ message: "Veuillez entrer un email valide" }),
	// mobile is optional and checks if it's a valid phone number with a regex
	mobile: z
		.string()
		.optional()
		.nullable()
		.refine(
			(value: any) => {
				// Check if the value is a non-empty string before applying the regex
				if (typeof value === "string" && value.trim() !== "") {
					const phoneRegex = /^0[1-9]\d{8}$/;
					return phoneRegex.test(value);
				}
				// Return true if the value is undefined, null, or an empty string
				return true;
			},
			{ message: "Veuillez entrer un numéro de téléphone valide" }
		)
});
