"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "@/lib/types/auth";
import { getData } from "@/lib/actions/getData";
import useCookie from "@/hooks/useCookie";

interface TAuthContext {
	user: User | null;
	setUser: (user: User | null) => void;
}

export const AuthContext = createContext<TAuthContext>({
	user: null,
	setUser: () => {}
});

interface Props {
	children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<User | null>(null);
	const { removeCookie } = useCookie();

	useEffect(() => {
		if (!user) {
			const getFromDatabase = async () => {
				const { data, error } = await getData("auth/profile");
				if (error) {
					removeCookie("token");
				}
				if (data && !error) {
					setUser(data);
				}
			};
			getFromDatabase();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
