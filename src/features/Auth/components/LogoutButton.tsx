"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

export function LogoutButton() {
	const { logout } = useAuth();
	const handleLogout = () => {
		toast.warning("Vous avez été déconnecté");
		logout();
	};

	return (
		<Button onClick={handleLogout} className="px-2 text-foreground hover:no-underline hover:bg-secondary" variant="outline">
			<LogOut className="h-4 w-4 mr-2" /> Déconnexion
		</Button>
	);
}
