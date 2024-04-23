import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/profile"];

export default function middleware(req: NextRequest) {
	// get token from cookie
	const token = cookies().get("token")?.value;
	const isAuthenticated = token ? true : false;

	if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
		const absoluteURL = new URL("/?type=redirect", req.nextUrl.origin);
		return NextResponse.redirect(absoluteURL.toString());
	}
}
