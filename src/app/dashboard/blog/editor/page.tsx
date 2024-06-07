import { EditorContent } from "@/features/Dashboard/blog/create/EditorContent";

export const metadata = {
	title: "Edition d'un article",
	description: "Rédigez un article pour le publier sur le blog."
};

export default function Create() {
	return <EditorContent />;
}
