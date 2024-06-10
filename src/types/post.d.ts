import { User } from "./auth";
import { Category } from "./category";

export type Post = {
	id: number;
	title: string;
	description: string;
	content: string | TrustedHTML;
	cover: string;
	slug: string;
	published_at: string;
	created_at: string;
	updated_at: string;
	deleted_at: string;
	category: Category;
	category_id?: number | string;
	user: User;
	like_count: number;
	liked_by: User[];
};
