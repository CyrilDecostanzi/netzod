export type LoginFormData = {
	email: string;
	password: string;
};

export type User = {
	id: string;
	username: string;
	email: string;
	mobile: string;
	firstname: string;
	lastname: string;
	avatar: string;
	bio: string;
};

export type AuthUser = {
	user: User;
	access_token: string;
};

export type LoginResponse = {
	data: {
		access_token?: string;
		data?: User;
	};
	error?: {
		message: string;
		field: string;
		status: number;
	};
	loading: boolean;
};
