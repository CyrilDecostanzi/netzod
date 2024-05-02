"use server";

import { cookies } from "next/headers";
import { api } from "@/lib/ky_config";
import { HTTPError } from "ky";
import { ApiResponse } from "@/types/api";

export async function postFileData(url: string, payload: object): Promise<ApiResponse> {
	const token = cookies().get("token")?.value;
	const response: ApiResponse = {
		data: null,
		loading: true,
		error: null
	};

	try {
		const data = await api
			.post(url, {
				body: payload as BodyInit,
				headers: {
					"Authorization": `Bearer ${token}`
				}
			})
			.json<any>();
		response.data = data;
		response.loading = false;
	} catch (error: any) {
		response.loading = false;
		if (error instanceof HTTPError) {
			// Try to retrieve the response body that contains the JSON error message
			try {
				const errorBody = await error.response.json();
				response.error = errorBody || { message: "Une erreur est survenue lors de la récupération de l'erreur", field: null, status: 500 };
			} catch (parseError) {
				response.error = { message: "Une erreur est survenue lors de la récupération de l'erreur", field: null, status: 500 };
			}
		} else {
			// For other non-HTTP error types, such as network errors, etc.
			response.error = error.message;
		}
	}

	return response;
}
