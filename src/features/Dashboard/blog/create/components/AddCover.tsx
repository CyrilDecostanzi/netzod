/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Images } from "@/enums/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Post } from "@/types/post";
import { formatImageUrl } from "@/lib/utils";
import { usePostContext } from "@/hooks/usePostContext";
import { postFileData } from "@/lib/fetch_actions/postFileData";
import { toast } from "sonner";

export const AddCover = () => {
	const inputFileRef = useRef<HTMLInputElement>(null);
	const [state, setState] = useState<any>({ cover: null, serverError: null });
	const { post, setPost } = usePostContext();

	const handleCoverChange = async (event: any) => {
		event.preventDefault();

		const file = event.target.files[0];

		if (file && file.type.substr(0, 5) === "image") {
			const formData = new FormData();
			formData.append("file", file);
			const { data, error } = await postFileData(`image/post/cover/${post.id}`, formData);
			if (error) {
				console.log("error", error);
				setState({ ...state, serverError: error });
				return;
			}
			setPost({ ...post, cover: data.cover });
			toast.success("Image de couverture mise à jour");
			return;
		}
		console.log("Not an image file");
	};
	return (
		<Card className="w-full xl:w-[80%] mx-auto overflow-hidden lg:p-12 rounded-xl">
			<CardHeader>
				<CardTitle>Image de couverture</CardTitle>
			</CardHeader>
			<CardContent className="relative">
				<AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
					<Image
						src={formatImageUrl(post?.cover, "cover")}
						alt="card hero"
						className="rounded-xl shadow-lg object-cover w-full"
						fill
						sizes="100%"
						priority
					/>
					{/* Display a mask with button ONLY on hover image */}
					<AspectRatio
						ratio={16 / 9}
						className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
					>
						<Button variant="secondary" size="lg" onClick={() => inputFileRef.current?.click()}>
							Changer l'image
						</Button>
					</AspectRatio>
				</AspectRatio>
				<Input type="file" className="absolute inset-0 opacity-0 cursor-pointer" ref={inputFileRef} onChange={handleCoverChange} />
			</CardContent>
		</Card>
	);
};
