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
		const fetchTimeCookie = getCookie("lastFetchTime");

		if (userCookie && fetchTimeCookie) {
			const userData = JSON.parse(userCookie);
			const fetchTime = parseInt(fetchTimeCookie, 10);

			if (Date.now() - fetchTime < USERDATA_TTL * 1000) {
				setUser(userData);
			} else {
				refreshUserData();
			}
		} else {
			setUser(null);
			refreshUserData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const refreshUserData = async () => {
		const userData = await getUser();
		if (userData) {
			setUser(userData);
			setCookie("user", JSON.stringify(userData));
			setCookie("lastFetchTime", Date.now().toString());
		} else {
			setUser(null);
		}
	};

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

async function getUser() {
	const { data, error, loading } = await getData("auth/profile");
	if (data && !error && !loading) {
		return data;
	}
	return null;
}
