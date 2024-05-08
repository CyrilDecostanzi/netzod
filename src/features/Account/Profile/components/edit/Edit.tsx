import { useState, isValidElement, cloneElement, ReactElement } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DesktopModale } from "./DesktopModale";
import { EditBioForm } from "./forms/EditBioForm";
import { MobileDrawer } from "./MobileDrawer";

// Définir un type générique pour les props des enfants
type ChildProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	withButton?: boolean;
};

// Définir les props pour le composant Edit qui accepte un ReactElement avec ChildProps
type EditProps = {
	children: ReactElement<ChildProps>;
	withButton?: boolean;
	variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | undefined;
};

export function Edit({ children, withButton = false, variant }: EditProps) {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 728px)");

	const props = { open, setOpen, withButton, variant };

	const childrenWithProps = isValidElement(children) ? cloneElement(children as ReactElement<ChildProps>, props) : children;

	if (isDesktop) {
		return <DesktopModale {...props}>{childrenWithProps}</DesktopModale>;
	}

	return <MobileDrawer {...props}>{childrenWithProps}</MobileDrawer>;
}
