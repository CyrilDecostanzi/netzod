/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { DesktopAuth } from "./components/DesktopAuth";
import { MobileAuth } from "./components/MobileAuth";

export type AuthProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	haveAccount: boolean;
	setHaveAccount: (haveAccount: boolean) => void;
};

export function AuthContent(type: any) {
	const [open, setOpen] = useState(false);
	const [haveAccount, setHaveAccount] = useState(true);
	const isDesktop = useMediaQuery("(min-width: 728px)");

	const { type: authType } = type;

	useEffect(() => {
		if (authType === "login") {
			setOpen(true);
		}
	}, [authType]);

	const props = { open, setOpen, haveAccount, setHaveAccount };

	if (isDesktop) {
		return <DesktopAuth {...props} />;
	}

	return <MobileAuth {...props} />;
}
