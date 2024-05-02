import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { AuthUser } from "@/types/auth";
import useCookie from "@/hooks/useCookie";

export const useUser = () => {
	const { user, setUser } = useContext(AuthContext);
	const { setCookie, removeCookie } = useCookie();

	const addUser = (user: AuthUser) => {
		setUser(user.user);
		const cookiesToSet = [
			{ key: "token", value: user.access_token },
			{ key: "user", value: JSON.stringify(user.user) }
		];
		cookiesToSet.forEach((cookie) => setCookie(cookie.key, cookie.value));
	};

	const removeUser = () => {
		setUser(null);
		const cookiesToRemove = ["token", "user"];
		cookiesToRemove.forEach((cookie) => removeCookie(cookie));
	};

	return { user, addUser, removeUser };
};
