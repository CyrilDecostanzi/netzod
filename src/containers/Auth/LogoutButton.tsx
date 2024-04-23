"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export function LogoutButton() {
	const { logout } = useAuth();
	const handleLogout = async () => {
		await logout();
	};

	return (
		<Button onClick={handleLogout} className="px-2 text-foreground" variant="link">
			Logout
		</Button>
	);
}
