/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Images } from "@/enums/images";
import { postFileData } from "@/lib/fetch_actions/postFileData";
import { getFormDataWithFile } from "../lib/utils";
import { toast } from "sonner";
import Image from "next/image";
import { formatImageUrl } from "@/lib/utils";

type UploadAvatarProps = {
	state: { avatar: string | null; serverError: any };
	setState: (state: any) => void;
	setNewUser: (user: any) => void;
};

export const UploadAvatar = ({ state, setState, setNewUser }: UploadAvatarProps) => {
	const fileRef = useRef<HTMLInputElement>(null);
	const handleAvatarChange = async (event: any) => {
		event.preventDefault();

		const file = event.target.files[0];

		if (file && file.type.substr(0, 5) === "image") {
			const formData = getFormDataWithFile(file);
			const { data, error } = await postFileData("image/avatar", formData);
			if (error) {
				setState({ ...state, serverError: error });
				return;
			}
			setNewUser(data);
			toast.success("Avatar mis à jour");
		} else {
			console.log("Not an image file");
		}
	};

	return (
		<div className="flex justify-start gap-5 items-center">
			<div className="min-w-[100px] min-h-[100px] sm:flex">
				<AspectRatio ratio={1} className="rounded-full overflow-hidden border-primary border-2">
					<Image src={formatImageUrl(state.avatar)} alt="avatar" fill className="object-cover" sizes="100%" />
				</AspectRatio>
			</div>
			<input type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: "none" }} ref={fileRef} />
			<Button
				variant="outline"
				className="w-full mt-[1.4rem]"
				onClick={(e) => {
					e.preventDefault();
					fileRef?.current?.click();
				}}
			>
				Changer l'avatar
			</Button>
		</div>
	);
};
