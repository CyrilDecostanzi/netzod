import { useUser } from "@/hooks/useUser";
import { LoginFormData, LoginResponse } from "@/lib/types/auth";
import { postData } from "@/lib/actions/postData";
import { useRouter } from "next/navigation";
import useCookie from "@/hooks/useCookie";

export const useAuth = () => {
	const { user, addUser, removeUser } = useUser();
	const { setCookie } = useCookie();
	const router = useRouter();

	/**
	 * Register a new user with provided credentials.
	 * TODO: Implement the actual registration logic.
	 *
	 * @param creds - The credentials for registration, currently of any type but should be defined.
	 */
	const register = async (creds: any) => {
		// Implementation needed here.
	};

	/**
	 * Authenticate a user with provided login credentials.
	 *
	 * @param creds - The login credentials.
	 * @returns An object containing the response data, error status, and loading state.
	 */
	const login = async (creds: LoginFormData): Promise<LoginResponse> => {
		const { data, error, loading } = await postData("auth/login", creds);

		if (data && !error) {
			addUser(data);
			setCookie("lastFetchTime", Date.now().toString());
		}

		return { data, error, loading };
	};

	/**
	 * Log out the current user and redirect to the homepage.
	 */
	const logout = () => {
		removeUser();
		router.push("/");
	};

	return { user, login, register, logout };
};
