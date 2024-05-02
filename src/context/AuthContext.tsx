"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "@/types/auth";
import { getData } from "@/lib/fetch_actions/getData";
import useCookie from "@/hooks/useCookie";

const USERDATA_TTL = 300; // 300 seconds or 5 minutes

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
	const { getCookie, setCookie } = useCookie();

	useEffect(() => {
		const userCookie = getCookie("user");

		if (userCookie) {
			const userData = JSON.parse(userCookie);
			setUser(userData);
		} else {
			setUser(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
