"use client";

import { Button } from "@/components/ui/button";
import { logout } from "./lib";

export function LogoutButton() {
	const handleLogout = async () => {
		await logout();
	};

	return (
		<Button onClick={handleLogout} className="w-full" variant="link">
			Logout
		</Button>
	);
}
