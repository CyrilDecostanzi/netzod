export type EditProfileFormData = {
	username: string;
	avatar: string;
	lastname: string;
	firstname: string;
	email: string;
	mobile: string;
};

export type EditBioFormData = {
	bio: string;
};

export type EditPasswordFormData = {
	old_password: string;
	password: string;
	confirmPassword: string;
};

export type EditFormProps = {
	open?: boolean;
	setOpen?: (open: boolean) => void;
};
