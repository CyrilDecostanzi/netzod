"use server";

import { cookies } from "next/headers";
import { api } from "@/lib/ky_config";
import { HTTPError } from "ky";
import { ApiResponse } from "@/types/api";

export async function postData(url: string, payload: object): Promise<ApiResponse> {
	const token = cookies().get("token")?.value;
	const response: ApiResponse = {
		data: null,
		loading: true,
		error: null
	};

	try {
		const data = await api
			.post(url, {
				json: payload,
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
		// console.error(error.response.json());
		response.loading = false;
		if (error instanceof HTTPError) {
			// console.log(error, "error");
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
