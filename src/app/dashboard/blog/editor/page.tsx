"use client";

import { HeroBanner } from "@/components/HeroBanner";
import { PostProvider } from "@/context/PostContext";
import { CreatePost } from "@/features/Dashboard/blog/create/CreatePost";

export default function Create() {
	return (
		<PostProvider>
			<HeroBanner title="Créer un article" description="Rédigez un article pour le publier sur le blog." />
			<CreatePost />
		</PostProvider>
	);
}
