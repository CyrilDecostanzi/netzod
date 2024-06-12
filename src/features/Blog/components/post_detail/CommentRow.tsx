/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { formatDateTime, formatImageUrl } from "@/lib/utils";
import { User } from "@/types/auth";
import { Comment } from "@/types/comment";
import { Edit, Trash } from "lucide-react";
import Image from "next/image";
import { CommentModal } from "./CommentModal";
import { deleteData } from "@/lib/fetch_actions/deleteData";
import { toast } from "sonner";

export const CommentRow = ({
	comment,
	user,
	params,
	mutate,
	setMutate
}: {
	comment: Comment;
	user?: any;
	params?: any;
	mutate: any;
	setMutate: any;
}) => {
	const handleDelete = async () => {
		if (!confirm("Voulez-vous vraiment supprimer ce commentaire ?")) return;
		const { data, error } = await deleteData(`comment/${comment.id}`);
		if (error) {
			console.error(error);
			return;
		}
		setMutate(!mutate);
		toast.success("Commentaire supprimé avec succès.");
	};

	return (
		<>
			{comment.post && (
				<p className="text-sm text-gray-500 px-4 mt-4">
					Commentaire sur l'article : <span className="font-semibold text-gray-700">"{comment.post.title}"</span>
				</p>
			)}
			<div className="flex flex-col gap-2 bg-secondary/60 mb-2 p-4 rounded-xl">
				<div className="flex flex-row gap-2 items-center justify-between">
					<div className="flex flex-row gap-2 items-center">
						<div className="w-8 h-8 relative rounded-full">
							<Image
								src={formatImageUrl(comment.user.avatar)}
								alt={comment.user.username}
								fill
								className="rounded-full object-cover border-2 border-primary"
								sizes="100px"
							/>
						</div>

						<div>
							<p className="font-semibold">{comment.user.username}</p>
							<p className="text-sm text-gray-500">le {formatDateTime(comment.published_at)}</p>
						</div>
					</div>
					{user && user.id === comment.user.id ? (
						<div className="actions flex flex-row gap-2 items-center">
							<Button className="text-xs px-0 py-0 p-1 h-auto bg-primary/60" onClick={handleDelete}>
								<Trash className="h-4 w-4" />
							</Button>
							<CommentModal params={params} user={user} comment={comment} mutate={mutate} setMutate={setMutate} />
						</div>
					) : null}
				</div>
				<p>{comment.content}</p>
			</div>
		</>
	);
};
