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
	desactivatePost: (id: string) => Promise<void>;
};

export const PostContext = createContext<any>(null);

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
	const [post, setPost] = useState<any>(null);

	const createDraft = async (): Promise<Post | void> => {
		const data: any = { title: "Nouvel article" };
		const { data: draftData, error } = await postData("posts", data);

		if (error) {
			console.error(error);
			toast.error("Erreur lors de la création du brouillon merci de réessayer.");
			return;
		}

		setPost(draftData);
		localStorage.setItem("draftPostId", draftData.id.toString());
		toast.success("Brouillon créé avec succès !");
		return draftData;
	};

	const updatePost = async (id: any, content: any, publish?: boolean): Promise<void> => {
		const { data: updatedData, error } = await patchData(`posts/${id}`, {
			...content,
			published_at: publish ? new Date().toISOString() : content.published_at
		});

		if (error) {
			console.error(error);
			toast.error("Erreur lors de la sauvegarde de l'article merci de réessayer.");
			return;
		}
		toast.success(publish ? "Article publié avec succès !" : "Article sauvegardé avec succès !");
		setPost(updatedData);
	};

	const deletePost = async (id: string): Promise<void> => {
		await deleteData(`posts/${id}`);
		toast.success("Article supprimé avec succès !");
	};

	const loadPost = async (id: string): Promise<void> => {
		const { data: loadedPost } = await getData(`posts/${id}`);
		setPost(loadedPost);
	};

	const desactivatePost = async (id: string): Promise<void> => {
		const { data: updatedData, error } = await patchData(`posts/desactivate/${id}`, {
			status: "inactive"
		});
		if (error) {
			console.error(error);
			toast.error("Erreur lors de la désactivation de l'article merci de réessayer.");
			return;
		}
		toast.success("Article désactivé avec succès !");
		setPost(updatedData);
	};

	return (
		<PostContext.Provider value={{ post, setPost, createDraft, updatePost, deletePost, loadPost, desactivatePost }}>
			{children}
		</PostContext.Provider>
	);
};
