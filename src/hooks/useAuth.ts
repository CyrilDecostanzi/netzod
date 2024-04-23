import { useUser } from "@/hooks/useUser";
import { LoginFormData, LoginResponse } from "@/lib/types/auth";
import useCookie from "@/hooks/useCookie";
import { postData } from "@/lib/actions/postData";
import { useRouter } from "next/navigation";

export const useAuth = () => {
	const { user, addUser, removeUser } = useUser();
	const router = useRouter();

	const { getCookie } = useCookie();

	const refresh = () => {
		let existingUser = null;
		const getFromCookie = async () => (existingUser = getCookie("user"));
		getFromCookie();

		if (existingUser) {
			addUser(JSON.parse(existingUser));
		} else {
			removeUser();
		}
	};

	const register = async (creds: any) => {
		// TODO: Implement register function
	};

	const login = async (creds: LoginFormData): Promise<LoginResponse> => {
		const { data, error, loading } = await postData("auth/login", creds);

		if (data && !error) {
			addUser(data);
		}

		return { data, error, loading };
	};

	const logout = () => {
		removeUser();
		// redirect to home
		router.push("/");
	};

	return { user, login, register, logout, refresh };
};
