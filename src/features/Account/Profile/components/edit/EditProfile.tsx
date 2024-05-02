import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DesktopPersonalInfos } from "./DesktopProfile";
import { MobilePersonalInfos } from "./MobileProfile";

export type EditPersonalInfosProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

export function EditPersonalInfos() {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 728px)");

	const props = { open, setOpen };

	if (isDesktop) {
		return <DesktopPersonalInfos {...props} />;
	}

	return <MobilePersonalInfos {...props} />;
}
