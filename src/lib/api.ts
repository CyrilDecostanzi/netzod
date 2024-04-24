import ky from "ky";

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
