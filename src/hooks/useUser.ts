import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { AuthUser } from "@/lib/types/auth";
import useCookie from "@/hooks/useCookie";

export const useUser = () => {
	const { user, setUser } = useContext(AuthContext);
	const { setCookie, removeCookie } = useCookie();

	const addUser = (user: AuthUser) => {
		setUser(user.user);
		setCookie("token", user.access_token);
	};

	const removeUser = () => {
		setUser(null);
		removeCookie("token");
	};

	return { user, addUser, removeUser };
};
