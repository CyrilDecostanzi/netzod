import { z } from "zod";

export const RegisterFormSchema = z
	.object({
		username: z
			.string()
			.min(3, { message: "Le pseudo doit contenir au moins 3 caractères" })
			.max(50, { message: "Le pseudo doit contenir au plus 50 caractères" }),
		lastname: z
			.string()
			.min(3, { message: "Le nom doit contenir au moins 3 caractères" })
			.max(50, { message: "Le nom doit contenir au plus 50 caractères" }),
		firstname: z
			.string()
			.min(3, { message: "Le prénom doit contenir au moins 3 caractères" })
			.max(50, { message: "Le prénom doit contenir au plus 50 caractères" }),
		email: z.string().email({ message: "Veuillez entrer un email valide" }),
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

export const LoginFormSchema = z.object({
	email: z.string().email({ message: "Veuillez entrer un email valide" }),
	password: z
		.string()
		.min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" })
		.max(50, { message: "Le mot de passe doit contenir au maximum 50 caractères" })
});
