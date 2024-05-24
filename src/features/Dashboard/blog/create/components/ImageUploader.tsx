import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { postFileData } from "@/lib/fetch_actions/postFileData";
import { Editor } from "@tiptap/react";
import { ImageIcon } from "lucide-react";
import { usePostContext } from "@/hooks/usePostContext";
import { formatImageUrl } from "@/lib/utils";

interface ImageUploaderProps {
	editor: Editor;
}

export const ImageUploader = ({ editor }: ImageUploaderProps) => {
	const inputFileRef = useRef<HTMLInputElement>(null);
	const { post } = usePostContext();

	const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		const file = event.target.files?.[0];

		if (file && file.type.startsWith("image")) {
			const formData = new FormData();
			formData.append("file", file);
			const { data, error } = await postFileData(`images/post/${post.id}`, formData);
			if (error) {
				toast.error("Erreur lors du téléchargement de l'image");
				return;
			}

			const imageUrl = data.url; // Assurez-vous que le backend renvoie l'URL de l'image uploadée
			editor
				.chain()
				.focus()
				.setImage({ src: formatImageUrl(imageUrl) })
				.run();
			toast.success("Image ajoutée avec succès");
		} else {
			toast.error("Veuillez sélectionner un fichier image valide");
		}
	};

	return (
		<>
			<input type="file" accept="image/*" ref={inputFileRef} style={{ display: "none" }} onChange={handleImageUpload} />
			<Button onClick={() => inputFileRef.current?.click()} variant="border">
				<ImageIcon />
			</Button>
		</>
	);
};
