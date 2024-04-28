import { Error } from "./api";

export type LoginFormData = {
	email: string;
	password: string;
};

export type RegisterFormData = {
	username: string;
	lastname: string;
	firstname: string;
	email: string;
	password: string;
	conf_password: string;
};

export type User = {
	id: string;
	username: string;
	email: string;
	mobile: string;
	role_id: string;
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
	error?: Error;
	loading: boolean;
};

export type RegisterReponse = {
	data: User;
	error?: Error;
	loading: boolean;
};
