import { User } from "./auth";
import { Category } from "./category";

export type Post = {
	id: number;
	title: string;
	content: string;
	cover: string;
	slug: string;
	published_at: string;
	created_at: string;
	updated_at: string;
	deleted_at: string;
	category: Category;
	user: User;
};
