import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { CommentForm } from "./CommentForm";
import { useState } from "react";

export const CommentModal = ({
	params,
	user,
	comment,
	mutate,
	setMutate
}: {
	params: any;
	user: any;
	comment?: any;
	mutate: any;
	setMutate: any;
}) => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className={comment ? "text-xs px-0 py-0 p-1 h-auto bg-primary/60" : "mt-4"}>
					<Edit className={`h-4 w-4 ${!comment && "mr-2"}`} /> {comment ? "" : "Laisser un commentaire"}
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-3xl" forceMount>
				{user ? (
					<CommentForm params={params} setOpen={setOpen} comment={comment ?? null} mutate={mutate} setMutate={setMutate} />
				) : (
					<p>Vous devez être connecté pour laisser un commentaire.</p>
				)}
			</DialogContent>
		</Dialog>
	);
};
