"use server";

import { cookies } from "next/headers";
import { api } from "@/lib/ky_config";
import { HTTPError } from "ky";
import { ApiResponse } from "@/types/api";

export async function deleteData(url: string, revalidate: number = 0): Promise<ApiResponse> {
	// get token from cookie
	const token = cookies().get("token")?.value;
	// Initialisation de l'état de chargement
	const response: ApiResponse = {
		data: null,
		loading: true,
		error: null
	};

	try {
		// Tentative de récupération des données
		const data = await api
			.delete(url, {
				next: {
					revalidate: revalidate
				},
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				}
			})
			.json<any>();

		if (data?.status === 400) {
			response.error = data;
			response.loading = false;
			return response;
		}

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
			return response;
		}
		response.error = error.message;
	}

	return response;
}
