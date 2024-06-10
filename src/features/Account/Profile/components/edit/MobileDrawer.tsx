import { Edit } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

type MobileDrawerProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	children: React.ReactNode;
	withButton?: boolean;
	variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | undefined;
};

export function MobileDrawer({ open, setOpen, children, withButton, variant }: MobileDrawerProps) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				{withButton ? (
					<Button className="btn btn-primary md:mr-2" variant={variant}>
						{variant === "destructive" ? "Supprimer" : "Modifier"}
					</Button>
				) : (
					<Edit className="h-4 w-4 cursor-pointer" />
				)}
			</DrawerTrigger>
			<DrawerContent>{children}</DrawerContent>
		</Drawer>
	);
}
