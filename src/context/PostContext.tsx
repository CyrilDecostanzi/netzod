import { createContext, useState } from "react";
import { postData } from "@/lib/fetch_actions/postData";
import { patchData } from "@/lib/fetch_actions/patchData";
import { deleteData } from "@/lib/fetch_actions/deleteData";
import { getData } from "@/lib/fetch_actions/getData";

import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import { Post } from "@/types/post";

export type PostContextType = {
	post: any;
	setPost: Dispatch<SetStateAction<Post | null>>;
	createDraft: () => Promise<Post>;
	updatePost: (content: string) => Promise<void>;
	deletePost: (id: string) => Promise<void>;
	loadPost: (id: string) => Promise<void>;
};

export const PostContext = createContext<any>(null);

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
	const [post, setPost] = useState<any>(null);

	const createDraft = async (): Promise<Post> => {
		const data: any = { title: "Nouvel article !", content: "Commencez à écrire ici...", category_id: 1 };
		const { data: draftData } = await postData("posts", data);
		setPost(draftData);
		localStorage.setItem("draftPostId", draftData.id.toString());
		return draftData;
	};

	const updatePost = async (content: any, publish?: boolean): Promise<void> => {
		const { data: updatedData, error } = await patchData(`posts/${post?.id}`, content);
		if (error) {
			console.error(error);
			toast.error("Erreur lors de la sauvegarde de l'article merci de réessayer.");
			return;
		}
		toast.success("Article sauvegardé avec succès !");
		setPost(updatedData);
	};

	const deletePost = async (id: string): Promise<void> => {
		await deleteData(`posts/${id}`);
		createDraft();
	};

	const loadPost = async (id: string): Promise<void> => {
		const { data: loadedPost } = await getData(`posts/${id}`);
		setPost(loadedPost);
	};

	return <PostContext.Provider value={{ post, setPost, createDraft, updatePost, deletePost, loadPost }}>{children}</PostContext.Provider>;
};
