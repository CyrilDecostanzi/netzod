import { z } from "zod";

export const EditFormSchema = z.object({
	username: z
		.string()
		.min(3, { message: "Le pseudo doit contenir au moins 3 caractères" })
		.max(50, { message: "Le pseudo doit contenir au maximum 50 caractères" }),
	lastname: z
		.string()
		.min(3, { message: "Le nom doit contenir au moins 3 caractères" })
		.max(50, { message: "Le nom doit contenir au maximum 50 caractères" }),

	firstname: z
		.string()
		.min(3, { message: "Le prénom doit contenir au moins 3 caractères" })
		.max(50, { message: "Le prénom doit contenir au maximum 50 caractères" }),
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

export const BioFormSchema = z.object({
	bio: z
		.string({ message: "La biographie doit contenir au moins 10 caractères" })
		.min(10, { message: "La biographie doit contenir au moins 10 caractères" })
		.max(600, { message: "La biographie doit contenir au maximum 600 caractères" })
});

export const PasswordFormSchema = z
	.object({
		old_password: z
			.string()
			.min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" })
			.max(50, { message: "Le mot de passe doit contenir au maximum 50 caractères" }),
		password: z
			.string()
			.min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" })
			.max(50, { message: "Le mot de passe doit contenir au plus 50 caractères" })
			.refine(
				(value) => {
					const hasNumber = /\d/.test(value);
					const hasUpperCase = /[A-Z]/.test(value);
					const hasSpecial = /[^A-Za-z0-9]/.test(value);
					return hasNumber && hasUpperCase && hasSpecial;
				},
				{ message: "Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial" }
			),

		conf_password: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" })
	})
	.superRefine(({ conf_password, password }, ctx) => {
		if (password !== conf_password) {
			return ctx.addIssue({
				path: ["conf_password"],
				code: z.ZodIssueCode.custom,
				message: "Les mots de passe ne correspondent pas"
			});
		}
	});
