"use client";

import { HeroBanner } from "@/components/HeroBanner";
import { PostProvider } from "@/context/PostContext";
import { CreatePost } from "./CreatePost";

export const EditorContent = () => {
	return (
		<PostProvider>
			<HeroBanner title="Créer un article" description="Rédigez un article pour le publier sur le blog." />
			<CreatePost />
		</PostProvider>
	);
};
