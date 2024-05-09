/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { editorConfig } from "./lib/editor_config";
import { AddCover } from "./components/AddCover";
import { TitleForm } from "./components/TitleForm";
import { Toolbar } from "./components/Toolbar";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { usePostContext } from "@/hooks/usePostContext";
import { Alert } from "./components/Alert";

export function CreatePost() {
	const { post, createDraft, updatePost, deletePost } = usePostContext();
	const editor = useEditor({ ...editorConfig, content: post?.content });
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (editor && post) {
			editor.commands.setContent(post.content);
		}
	}, [editor, post]);

	useEffect(() => {
		const draftPostId = localStorage.getItem("draftPostId");

		if (draftPostId) {
			setOpen(true);
			return;
		}
		createDraft();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!editor) return <Skeleton className="w-full xl:w-[80%] h-[500px] mx-auto" />;

	return (
		<div className="flex flex-col items-center gap-6">
			<Alert open={open} setOpen={setOpen} />
			<div className="w-full mx-auto flex gap-6 justify-center">
				<Button
					onClick={(e) => {
						e.preventDefault();
						updatePost({
							...post,
							content: editor.getHTML()
						});
					}}
				>
					Sauvegarder
				</Button>
				<Button onClick={() => deletePost(post?.id)}>Nouvel article</Button>
			</div>
			<TitleForm />
			<AddCover />
			<Toolbar editor={editor} />
			<EditorContent editor={editor} className="w-full xl:w-[80%] mx-auto" />
			<div className="flex flex-col w-full xl:w-[80%] mx-auto" dangerouslySetInnerHTML={{ __html: editor.getHTML() }} />
		</div>
	);
}
