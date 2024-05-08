import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { Suspense } from "react";
import { SkeletonEditForm } from "../skeletons/SkeletonEditForm";

type DesktopModaleProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	children: React.ReactNode;
	withButton?: boolean;
	variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | undefined;
};

export const DesktopModale = ({ open, setOpen, children, withButton, variant }: DesktopModaleProps) => {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				{withButton ? (
					<Button className="btn btn-primary md:mr-2" variant={variant}>
						{variant === "destructive" ? "Supprimer" : "Modifier"}
					</Button>
				) : (
					<Edit className="h-4 w-4 cursor-pointer" />
				)}
			</DialogTrigger>
			<DialogContent className="max-w-2xl">
				<Suspense fallback={<SkeletonEditForm />}>{children}</Suspense>
			</DialogContent>
		</Dialog>
	);
};
