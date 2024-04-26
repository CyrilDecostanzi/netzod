"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export function LogoutButton() {
	const { logout } = useAuth();
	const handleLogout = () => {
		toast.warning("Vous avez été déconnecté");
		logout();
	};

	return (
		<Button onClick={handleLogout} className="px-2 text-foreground" variant="link">
			Déconnexion
		</Button>
	);
}
