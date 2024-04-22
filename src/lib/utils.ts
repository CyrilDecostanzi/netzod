import { type ClassValue, clsx } from "clsx";
import ky from "ky";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const api = ky.create({
	prefixUrl: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
	},
	hooks: {
		beforeRequest: [
			async (request) => {
				return request;
			}
		],
		afterResponse: [
			async (request, options, response) => {
				return response;
			}
		]
	},
	throwHttpErrors: true
});
