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
import Link from "@tiptap/extension-link";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { mergeAttributes } from "@tiptap/core";
import Placeholder from "@tiptap/extension-placeholder";

const CustomLink = Link.extend({
	addAttributes() {
		return {
			href: {
				default: null
			},
			target: {
				default: "_blank"
			},
			rel: {
				default: null // Set default to null to avoid adding noreferrer nofollow
			}
		};
	},
	inclusive: false,
	exitable: true
});

export const editorConfig = {
	extensions: [
		Document,
		Paragraph.configure({
			HTMLAttributes: {
				class: "text-lg leading-8 mb-4"
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
					3: "text-lg sm:text-xl  my-5"
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
				class: "list-disc my-2 ml-5 sm:ml-10"
			}
		}),
		OrderedList.configure({
			HTMLAttributes: {
				class: "list-decimal my-2 ml-5 sm:ml-10 text-lg"
			}
		}),
		ListItem.configure({
			HTMLAttributes: {
				class: "pb-5"
			}
		}),
		CodeBlock.configure({
			HTMLAttributes: {
				class: "rounded-xl bg-gray-800 text-white p-4 my-8 text-sm overflow-x-auto"
			}
		}),
		Code.configure({
			HTMLAttributes: {
				class: "rounded-lg bg-gray-800 text-white py-1 px-2 mx-1 text-sm"
			}
		}),
		CustomLink.configure({
			HTMLAttributes: {
				class: "text-primary underline"
			}
		}),
		Color,
		TextStyle,
		Placeholder.configure({
			placeholder: "Commencez à écrire ici...",
			emptyEditorClass: "cursor-text before:content-[attr(data-placeholder)]  before:text-mauve-11 before:opacity-50 before-pointer-events-none"
		})
	],
	editorProps: {
		attributes: {
			class: "rounded-xl p-6 sm:p-6 md:p-12 bg-card shadow-lg min-h-[600px] border w-full"
		}
	}
};
