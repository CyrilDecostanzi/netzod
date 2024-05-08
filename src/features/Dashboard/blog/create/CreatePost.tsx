/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEditor, EditorContent } from "@tiptap/react";

import { Skeleton } from "@/components/ui/skeleton";
import { editorConfig } from "./lib/editor_config";
import { AddCover } from "./components/AddCover";
import { TitleForm } from "./components/TitleForm";
import { Toolbar } from "./components/Toolbar";
import { postData } from "@/lib/fetch_actions/postData";
import { useEffect, useState } from "react";
import { getData } from "@/lib/fetch_actions/getData";
import { deleteData } from "@/lib/fetch_actions/deleteData";
import { Button } from "@/components/ui/button";

export function CreatePost() {
	const editor = useEditor(editorConfig);
	const [post, setPost] = useState<any>(null);

	const savePost = async () => {
		const data = {
			title: "New Post",
			content: editor?.getHTML() || "Initial content",
			category_id: 1
		};

		const { data: draftData } = await postData("posts", data);

		if (draftData) {
			setPost(draftData);
			// store post id in local storage
			localStorage.setItem("draftPostId", draftData.id);
			console.log("Draft post created successfully", draftData);
		}

		return draftData;
	};

	const getPost = async (id: string) => {
		const { data: draftData } = await getData(`posts/${id}`);

		if (draftData) {
			setPost(draftData);
			console.log("Post loaded successfully", draftData);
		}

		return postData;
	};

	const deletePost = async (id: string) => {
		const { data: draftData, error } = await deleteData(`posts/${id}`);

		console.log("Draft post error", error);

		if (draftData) {
			setPost(null);
			localStorage.removeItem("draftPostId");
			console.log("Draft post deleted successfully", draftData);
		}

		return draftData;
	};

	useEffect(() => {
		if (post) return;

		if (localStorage.getItem("draftPostId")) {
			console.log("Loading draft post from local storage");
			getPost(localStorage.getItem("draftPostId") || "");
			return;
		}
		// create a new draft post on page load
		savePost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!editor) return <Skeleton className="w-full xl:w-[80%] h-[500px] mx-auto" />;

	console.log("Post", post?.id);

	return (
		<div className="flex flex-col items-center gap-6">
			<Button onClick={savePost}>Save</Button>
			<Button onClick={() => deletePost(post?.id)}>Delete</Button>
			<AddCover />
			<TitleForm />
			<Toolbar editor={editor} />
			<EditorContent editor={editor} className="w-full xl:w-[80%] mx-auto" />
			{/* <div className="flex flex-col w-full xl:w-[80%] mx-auto" dangerouslySetInnerHTML={{ __html: editor.getHTML() }} /> */}
		</div>
	);
}
