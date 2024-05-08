export const getFormDataWithFile = (file: any) => {
	const formData = new FormData();
	formData.append("avatar", file);
	return formData;
};

export const profileFields = [
	{ name: "username", label: "Pseudo", type: "text" },
	{ name: "lastname", label: "Nom", type: "text" },
	{ name: "firstname", label: "Prénom", type: "text" },
	{ name: "email", label: "Email", type: "email" },
	{ name: "mobile", label: "Mobile", type: "text" }
];

export const passwordFields = [
	{ name: "old_password", label: "Ancien mot de passe", type: "password" },
	{ name: "password", label: "Nouveau mot de passe", type: "password" },
	{ name: "conf_password", label: "Confirmation mot de passe", type: "password" }
];
