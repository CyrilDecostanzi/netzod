/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { useState } from "react";
import { useKey } from "react-use";

import { Skeleton } from "@/components/ui/skeleton";
import { editorConfig } from "./lib/editor_config";
import { AddCover } from "./components/AddCover";
import { TitleForm } from "./components/TitleForm";
import { Toolbar } from "./components/Toolbar";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { usePostContext } from "@/hooks/usePostContext";
import { Alert } from "./components/Alert";
import { getPostStatus } from "./lib/utils";
import { useRouter } from "next/navigation";
import { ArrowLeftCircle } from "lucide-react";

export function CreatePost() {
	const { post, createDraft, updatePost, loadPost } = usePostContext();
	const editor = useEditor({ ...editorConfig, content: post?.content });
	const [open, setOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (editor && post) {
			editor.commands.setContent(post.content);
			return;
		}
	}, [editor, post]);

	useEffect(() => {
		const draftPostId = localStorage.getItem("draftPostId");
		if (draftPostId) {
			loadPost(localStorage.getItem("draftPostId"));
			return;
		}
		createDraft();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Utilisation de useKey pour détecter Ctrl+S et sauvegarder
	useKey(
		(event) => (event.ctrlKey || event.metaKey) && event.key === "s",
		(event) => {
			event.preventDefault();
			updatePost(post.id, {
				...post,
				content: editor?.getHTML()
			});
		},
		{},
		[post, editor, updatePost]
	);

	if (!editor) return <Skeleton className="w-full mx-auto" />;

	return (
		<div className="flex flex-col items-center gap-6 relative">
			<Alert open={open} setOpen={setOpen} />
			<div className="w-full mx-auto flex gap-6 justify-between">
				<div className="flex gap-2 sm:gap-6">
					<Button
						onClick={() => {
							localStorage.removeItem("draftPostId");
							router.back();
						}}
					>
						<ArrowLeftCircle className="w-6 h-6" />
					</Button>
					<Button
						onClick={(e) => {
							e.preventDefault();
							updatePost(post.id, {
								...post,
								content: editor.getHTML()
							});
						}}
					>
						Sauvegarder
					</Button>
					<Button
						onClick={(e) => {
							e.preventDefault();
							updatePost(
								post.id,
								{
									...post,
									content: editor.getHTML()
								},
								true
							);
						}}
					>
						Publier
					</Button>
				</div>
				{/* Show status of the post */}
				<div className="flex items-center">{getPostStatus(post?.status)}</div>
			</div>
			<TitleForm />
			<AddCover />
			<Toolbar editor={editor} />
			<EditorContent editor={editor} placeholder="Commencez à écrire ici..." className="w-full" />
		</div>
	);
}
