import { cookies } from "next/headers";
import { jwtVerify, JWTPayload } from "jose";
import { JWTExpired } from "jose/errors";
import { api } from "./ky_config";

// ########################################################################
// ################################## JWT #################################
// ########################################################################

/**
 * Récupère la clé secrète pour le JWT à partir des variables d'environnement.
 * Lance une exception si la clé secrète n'est pas définie.
 * @returns Uint8Array - La clé secrète encodée.
 */
function getJwtSecretKey(): Uint8Array {
	const secret = process.env.JWT_SECRET;
	if (!secret) {
		throw new Error("La clé secrète JWT n'est pas définie.");
	}
	return new TextEncoder().encode(secret);
}

/**
 * Vérifie la validité d'un token JWT et retourne son payload.
 * @param token - Le JWT à vérifier.
 * @returns Promise<JWTPayload | null> - Le payload du JWT ou null si la vérification échoue.
 */
async function verifyJwtToken(token: string): Promise<JWTPayload | null> {
	try {
		const { payload } = await jwtVerify(token, getJwtSecretKey());
		return payload;
	} catch (error: JWTExpired | any) {
		if (error instanceof JWTExpired) {
			const data = (await refreshJwtToken(token)) as { access_token: string } | null;
			if (data) {
				return {
					payload: await verifyJwtToken(data.access_token),
					access_token: data.access_token
				};
			}
		}
		return null;
	}
}

async function refreshJwtToken(token: string) {
	try {
		const response = await api.post("auth/refresh", {
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ token })
		});

		const data = await response.json();

		return data;
	} catch (error: JWTExpired | any) {
		console.error("Le token de rafraîchissement a expiré.");
		return null;
	}
}

/**
 * Récupère et vérifie le JWT à partir des cookies d'une requête.
 * @param req - L'objet requête de Next.js, facultatif.
 * @returns Promise<any | null> - Le payload JWT enrichi ou null si aucune donnée valide n'est trouvée.
 */
export async function getJwt(req?: any): Promise<any | null> {
	const token = req ? req.cookies.get("token") : cookies().get("token");

	if (token) {
		const payload = (await verifyJwtToken(token.value)) as any;

		if (payload && payload.role_id) {
			return {
				user: payload,
				access_token: payload.access_token
			};
		}

		if (payload && payload.payload) {
			return {
				user: payload.payload,
				access_token: payload.access_token
			};
		}
	}

	return null;
}
