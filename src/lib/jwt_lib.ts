import { cookies } from "next/headers";
import { jwtVerify, JWTPayload, decodeJwt } from "jose";

// ########################################################################
// ################################## JWT #################################
// ########################################################################

/**
 * Récupère la clé secrète pour le JWT à partir des variables d'environnement.
 * Lance une exception si la clé secrète n'est pas définie.
 * @returns Uint8Array - La clé secrète encodée.
 */
function getJwtSecretKey(): Uint8Array {
	const secret = process.env.JWT_SECRET || "";
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
	} catch (error) {
		console.error("Échec de la vérification du JWT:", error);
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
		const payload = await verifyJwtToken(token.value);
		if (payload) {
			return {
				id: payload.id,
				username: payload.username,
				email: payload.email,
				role_id: payload.role_id,
				firstname: payload.firstname,
				lastname: payload.lastname,
				avatar: payload.avatar,
				mobile: payload.mobile,
				status: payload.status
			};
		}
	}
	return null;
}
