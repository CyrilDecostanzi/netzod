import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { AuthUser } from "@/lib/types/auth";
import useCookie from "@/hooks/useCookie";

export const useUser = () => {
	const { user, setUser } = useContext(AuthContext);
	const { setCookie, removeCookie } = useCookie();

	const addUser = (user: AuthUser) => {
		setUser(user.user);
		const cookiesToSet = [
			{ key: "token", value: user.access_token },
			{ key: "user", value: JSON.stringify(user.user) },
			{ key: "lastFetchTime", value: Date.now().toString() }
		];
		cookiesToSet.forEach((cookie) => setCookie(cookie.key, cookie.value));
	};

	const removeUser = () => {
		setUser(null);
		const cookiesToRemove = ["token", "user", "lastFetchTime"];
		cookiesToRemove.forEach((cookie) => removeCookie(cookie));
	};

	return { user, addUser, removeUser };
};
