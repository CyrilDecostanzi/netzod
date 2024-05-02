import { Edit } from "lucide-react";
import { EditPersonalInfosProps } from "./EditProfile";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { EditProfileForm } from "./forms/EditProfileForm";

export function MobilePersonalInfos({ open, setOpen }: EditPersonalInfosProps) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Edit className="h-4 w-4 cursor-pointer" />
			</DrawerTrigger>
			<DrawerContent className="max-h-screen">
				<EditProfileForm open={open} setOpen={setOpen} />
			</DrawerContent>
		</Drawer>
	);
}
