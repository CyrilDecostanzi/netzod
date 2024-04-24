import { useUser } from "@/hooks/useUser";
import { LoginFormData, LoginResponse } from "@/lib/types/auth";
import { postData } from "@/lib/actions/postData";
import { useRouter } from "next/navigation";
import useCookie from "@/hooks/useCookie";

export const useAuth = () => {
	const { user, addUser, removeUser } = useUser();
	const { setCookie } = useCookie();
	const router = useRouter();

	const register = async (creds: any) => {
		// TODO: Implement register function
	};

	const login = async (creds: LoginFormData): Promise<LoginResponse> => {
		const { data, error, loading } = await postData("auth/login", creds);

		if (data && !error) {
			addUser(data);
			setCookie("lastFetchTime", Date.now().toString());
		}

		return { data, error, loading };
	};

	const logout = () => {
		removeUser();
		// redirect to home
		router.push("/");
	};

	return { user, login, register, logout };
};
