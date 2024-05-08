import { Button } from "@/components/ui/button";
import {
	BoldIcon,
	CodeIcon,
	CodeSquareIcon,
	Heading2,
	Heading3,
	ImageIcon,
	ItalicIcon,
	ListIcon,
	ListOrdered,
	StrikethroughIcon
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { Input } from "@/components/ui/input";

export const Toolbar = ({ editor }: { editor: Editor }) => {
	return (
		<div className="sticky top-[5rem] flex  flex-wrap gap-4  justify-center z-10">
			<Button onClick={() => editor.chain().focus().toggleBold().run()} variant={editor.isActive("bold") ? "default" : "border"}>
				<BoldIcon />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleStrike().run()} variant={editor.isActive("strike") ? "default" : "border"}>
				<StrikethroughIcon className="h-4 w-4" />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				variant={editor.isActive("heading", { level: 2 }) ? "default" : "border"}
			>
				<Heading2 />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				variant={editor.isActive("heading", { level: 3 }) ? "default" : "border"}
			>
				<Heading3 />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleItalic().run()} variant={editor.isActive("italic") ? "default" : "border"}>
				<ItalicIcon />
			</Button>
			<Button
				onClick={() => editor.chain().focus().setImage({ src: "/assets/card_hero4.jpg" }).run()}
				variant={editor.isActive("image") ? "default" : "border"}
			>
				<ImageIcon />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleBulletList().run()} variant={editor.isActive("bulletList") ? "default" : "border"}>
				<ListIcon />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleOrderedList().run()} variant={editor.isActive("orderedList") ? "default" : "border"}>
				<ListOrdered />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleCodeBlock().run()} variant={editor.isActive("codeBlock") ? "default" : "border"}>
				<CodeSquareIcon />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleCode().run()} variant={editor.isActive("code") ? "default" : "border"}>
				<CodeIcon />
			</Button>
			<Input
				type="color"
				className="rounded-xl border border-primary/60 p-2 w-10 h-10 cursor-pointer"
				onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
				value={editor.getAttributes("textStyle").color || "#ffffff"}
			/>
		</div>
	);
};
