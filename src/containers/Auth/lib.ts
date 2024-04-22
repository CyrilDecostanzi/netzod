import { postData } from "@/lib/actions/postData";
import { setCookie } from "@/lib/actions/cookies";

interface loginFormData {
	email: string;
	password: string;
}

export async function login(formData: loginFormData) {
	const { data, error, loading } = await postData("auth/login", formData);
	// set cookie with jwt token
	setCookie("token", data.access_token, 7);

	window.location.reload();
	return { data, error, loading };
}

export async function logout() {
	// remove cookie
	setCookie("token", "", -1);
	window.location.reload();
}
