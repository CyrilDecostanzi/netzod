import { User } from "./auth";
import { Post } from "./post";

export type Comment = {
	id: number;
	content: string;
	status: number;
	created_at: string;
	updated_at: string;
	deleted_at: string;
	published_at: string;
	user: User;
	post?: Post;
};
