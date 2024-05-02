import { Edit } from "lucide-react";
import { EditPersonalInfosProps } from "./EditProfile";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { EditProfileForm } from "./forms/EditProfileForm";
import { Suspense } from "react";
import { SkeletonEditForm } from "../SkeletonEditForm";

export function DesktopPersonalInfos({ open, setOpen }: EditPersonalInfosProps) {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Edit className="h-4 w-4 cursor-pointer" />
			</DialogTrigger>
			<DialogContent className="max-w-2xl">
				<Suspense fallback={<SkeletonEditForm />}>
					<EditProfileForm open={open} setOpen={setOpen} />
				</Suspense>
			</DialogContent>
		</Dialog>
	);
}
