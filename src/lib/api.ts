import ky from "ky";

export const api = ky.create({
	prefixUrl: process.env.NEXT_PUBLIC_API_URL,
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
