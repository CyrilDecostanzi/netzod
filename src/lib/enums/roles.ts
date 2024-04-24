"use server";

export enum Role {
	USER = 1,
	EDITOR = 2,
	ADMIN = 3
}

export const isAdmin = (role: number) => role === Role.USER;
