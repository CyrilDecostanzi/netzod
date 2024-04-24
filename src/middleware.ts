import { NextResponse, NextRequest } from "next/server";
import { getJwt } from "./lib/jwt_lib";
import { isAdmin } from "./lib/enums/roles";

// Liste des routes nécessitant une authentification
const authRoutes = ["/account/*", "/admin/*"];

/**
 * Supprime spécifiquement les cookies liés à l'authentification de l'utilisateur.
 * @param response - L'objet response de Next.js où les cookies seront modifiés.
 */
const deleteCookies = (response: NextResponse) => {
	const cookieOptions = { path: "/", expires: new Date(0) }; // Options de cookies pour leur suppression
	["user", "lastFetchTime", "token"].forEach(
		(cookie) => response.cookies.set(cookie, "", cookieOptions) // Suppression de chaque cookie
	);
};

/**
 * Vérifie si le chemin actuel correspond à un motif avec joker (wildcard).
 * @param path - Chemin de l'URL actuelle.
 * @param pattern - Motif à vérifier, peut inclure un joker '*'.
 * @returns boolean - True si le chemin correspond au motif, sinon false.
 */
const matchesWildcard = (path: string, pattern: string): boolean => {
	return pattern.endsWith("/*") ? path.startsWith(pattern.slice(0, -2)) : path === pattern;
};

/**
 * Middleware pour la gestion de l'authentification et des droits d'accès.
 * @param req - Requête entrante traitée par le middleware.
 * @returns NextResponse - Réponse modifiée en fonction de l'authentification et des droits.
 */
export default async function middleware(req: NextRequest) {
	const user = await getJwt(req); // Récupération du JWT de l'utilisateur
	const requiresAuth = authRoutes.some((pattern) => matchesWildcard(req.nextUrl.pathname, pattern)); // Vérifie si la route actuelle nécessite une authentification

	const url = new URL("/?type=login&next=" + req.nextUrl.pathname, req.nextUrl.origin);

	if (!user && requiresAuth) {
		console.log(req.nextUrl.pathname, "requires authentication.");

		const response = NextResponse.redirect(url.toString());
		deleteCookies(response);
		return response;
	}

	if (requiresAuth && req.nextUrl.pathname.startsWith("/admin") && !isAdmin(user.role_id)) {
		// Redirection des utilisateurs non administrateurs sur les routes d'administration
		return NextResponse.redirect("/");
	}

	return NextResponse.next(); // Continue la requête si aucune condition de redirection n'est remplie
}
