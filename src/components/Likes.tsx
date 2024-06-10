"use client";

import { ThumbsUp } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "./ui/button";
import { User } from "@/types/auth";
import { postData } from "@/lib/fetch_actions/postData";
import { toast } from "sonner";

export const Likes = ({ like_count, liked_by, post_id }: { like_count: number; liked_by: User[]; post_id: number }) => {
	const [liked, setLiked] = useState(false);
	const { user } = useContext(AuthContext);
	const [count, setCount] = useState(like_count);

	async function handleLike() {
		const { data, error } = await postData(`posts/${liked ? "unlike" : "like"}/${post_id}`, {});
		if (error) {
			console.error(error);
			toast.error("Une erreur est survenue lors de l'opération");
			return;
		}
		setLiked(!liked);
		setCount(liked ? count - 1 : count + 1);
		if (liked) {
			toast.success("Vous avez retiré votre like");
			return;
		}
		toast.success("Vous avez liké cet article");
	}

	useEffect(() => {
		if (user) {
			const isLiked = liked_by.some((like) => like.id === user.id);
			setLiked(isLiked);
		}
	}, [user, liked_by]);

	return (
		<Button onClick={handleLike} className={`flex items-center gap-1 h-8 w-12 px-2`} aria-label="like" variant={liked ? "default" : "secondary"}>
			<ThumbsUp size={16} className={liked ? "" : "text-secondary-foreground"} />
			<p className={liked ? "" : "text-secondary-foreground"}>{count}</p>
		</Button>
	);
};
