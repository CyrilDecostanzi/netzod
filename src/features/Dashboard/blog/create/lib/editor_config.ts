import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Heading from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import Document from "@tiptap/extension-document";
import ImageExt from "@tiptap/extension-image";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import CodeBlock from "@tiptap/extension-code-block";
import Code from "@tiptap/extension-code";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { mergeAttributes } from "@tiptap/core";

export const editorConfig = {
	extensions: [
		Document,
		Paragraph.configure({
			HTMLAttributes: {
				class: "text-base leading-8"
			}
		}),
		Bold,
		Italic,
		Strike,
		Heading.extend({
			levels: [1, 2],
			renderHTML({ node, HTMLAttributes }) {
				const level: any = this.options.levels.includes(node.attrs.level) ? node.attrs.level : this.options.levels[0];
				const classes: { [index: number]: string } = {
					2: "text-2xl my-5",
					3: "text-xl my-5"
				};
				return [
					`h${level}`,
					mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
						class: `${classes[level]}`
					}),
					0
				];
			}
		}).configure({ levels: [2, 3] }),
		Text,
		ImageExt.configure({
			inline: true,
			HTMLAttributes: {
				class: "rounded-xl shadow-lg object-cover w-full my-5 aspect-video"
			}
		}),
		BulletList.configure({
			HTMLAttributes: {
				class: "list-disc my-5"
			}
		}),
		OrderedList.configure({
			HTMLAttributes: {
				class: "list-decimal my-5"
			}
		}),
		ListItem,
		CodeBlock.configure({
			HTMLAttributes: {
				class: "rounded-xl bg-gray-800 text-white p-4 my-5 text-base overflow-x-auto"
			}
		}),
		Code.configure({
			HTMLAttributes: {
				class: "rounded-xl bg-gray-800 text-white py-1 px-2 mx-1 text-base"
			}
		}),
		Color,
		TextStyle
	],
	content: "",
	editorProps: {
		attributes: {
			class: "rounded-xl border-none p-4 sm:p-6 md:p-12 bg-card shadow-lg min-h-[600px]"
		}
	}
};
