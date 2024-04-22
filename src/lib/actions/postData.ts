"use client";

import { api } from "../utils";
import { cookies } from "next/headers";

interface ApiResponse {
	data: any;
	loading: boolean;
	error: any;
}

export async function postData(url: string, payload: object): Promise<ApiResponse> {
	// Initialisation de l'état de chargement
	const response: ApiResponse = {
		data: null,
		loading: true,
		error: null
	};

	// Revalidation de la page
	// revalidatePath(process.env.NEXT_PUBLIC_API_URL + url, "layout");

	try {
		// Tentative de récupération des données
		const data = await api.post(url, { json: payload }).json<any>();
		// Mise à jour de l'état
		response.data = data;
		response.loading = false;
	} catch (error) {
		response.error = error;
		response.loading = false;
	}

	return response;
}
