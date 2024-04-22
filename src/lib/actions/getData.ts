"use server";

import { cookies } from "next/headers";
import { api } from "../utils";
import { getCookie } from "./cookies";

interface ApiResponse {
	data: any;
	loading: boolean;
	error: any;
}

export async function getData(url: string): Promise<ApiResponse> {
	// Initialisation de l'état de chargement
	const response: ApiResponse = {
		data: null,
		loading: true,
		error: null
	};

	// get token from cookie
	const cookie = cookies().get("token")?.value;

	try {
		// Tentative de récupération des données
		const data = await api
			.get(url, {
				next: {
					revalidate: 0
				},
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${cookie}`
				}
			})
			.json<any>();
		// Mise à jour de l'état
		response.data = data;
		response.loading = false;
	} catch (error) {
		// Gestion des erreurs
		response.error = error;
		response.loading = false;
	}

	return response;
}
