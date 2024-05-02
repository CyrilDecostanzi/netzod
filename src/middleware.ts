import { NextResponse, NextRequest } from "next/server";
import { getJwt } from "./lib/jwt_lib";
import { isAdmin } from "./enums/roles";
import { Navigation } from "./enums/navigation";

// Liste des routes nécessitant une authentification
const authRoutes = ["/account/*", "/admin/*"];

/**
 * Supprime spécifiquement les cookies liés à l'authentification de l'utilisateur.
 * @param response - L'objet response de Next.js où les cookies seront modifiés.
 */
const deleteCookies = (response: NextResponse) => {
	const cookieOptions = { path: "/", expires: new Date(0) }; // Options de cookies pour leur suppression
	["user", "token"].forEach(
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
	const requiresAuth = authRoutes.some((pattern) => matchesWildcard(req.nextUrl.pathname, pattern)); // Vérifie si la route actuelle nécessite une authentification

	// Si la route ne nécessite pas d'authentification, passe directement à la suite sans vérifier le JWT
	if (!requiresAuth) {
		return NextResponse.next();
	}

	// Récupération du JWT de l'utilisateur seulement si l'authentification est nécessaire
	const user = await getJwt(req);

	// Construit l'URL pour la redirection en cas de besoin
	const url = new URL("/?type=login&next=" + req.nextUrl.pathname, req.nextUrl.origin);

	// Si aucun utilisateur n'est trouvé et que l'authentification est nécessaire, redirige vers la page de connexion
	if (!user) {
		const response = NextResponse.redirect(url.toString());
		deleteCookies(response);
		return response;
	}

	if (requiresAuth && user && user.access_token) {
		console.log("Rafraichissement du token JWT...");
		const response = NextResponse.next();
		response.cookies.set("user", JSON.stringify(user.user));
		response.cookies.set("token", user.access_token);
		return response;
	}

	// Vérifie si l'utilisateur a le droit d'accéder aux routes d'administration
	if (req.nextUrl.pathname.startsWith("/admin") && !isAdmin(user.role_id)) {
		// Redirection des utilisateurs non administrateurs
		return NextResponse.redirect(Navigation.HOME);
	}

	// Continue la requête si toutes les conditions sont remplies
	return NextResponse.next();
}
