export const getFormDataWithFile = (file: any) => {
	const formData = new FormData();
	formData.append("avatar", file);
	return formData;
};

export const fields = [
	{ name: "username", label: "Pseudo", type: "text" },
	{ name: "lastname", label: "Nom", type: "text" },
	{ name: "firstname", label: "Prénom", type: "text" },
	{ name: "email", label: "Email", type: "email" },
	{ name: "mobile", label: "Mobile", type: "text" }
];
