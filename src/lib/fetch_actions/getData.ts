"use server";

import { cookies } from "next/headers";
import { api } from "@/lib/ky_config";
import { HTTPError } from "ky";
import { ApiResponse } from "@/types/api";

export async function getData(url: string, revalidate: number = 0): Promise<ApiResponse> {
	// Initialisation de l'état de chargement
	const response: ApiResponse = {
		data: null,
		loading: true,
		error: null
	};

	// get token from cookie
	const token = cookies().get("token")?.value;

	try {
		// Tentative de récupération des données
		const data = await api
			.get(url, {
				next: {
					revalidate: revalidate
				},
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				}
			})
			.json<any>();

		response.data = data;
		response.loading = false;
	} catch (error: any) {
		response.loading = false;
		// if the error status is 401, we need to logout the user

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
