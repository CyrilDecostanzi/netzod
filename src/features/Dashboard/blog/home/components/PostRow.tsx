"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { formatImageUrl } from "@/lib/utils";
import { getPostStatus } from "@/features/Dashboard/blog/create/lib/utils";
import { Ellipsis, ShieldCloseIcon, Edit, CheckCircle, Delete } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { usePostContext } from "@/hooks/usePostContext";
import { PostStatus } from "@/enums/posts";
import Link from "next/link";

type PostRowProps = {
	post: any;
	setLoading: any;
	onPostUpdate?: any;
};

export function PostRow({ post, setLoading, onPostUpdate }: PostRowProps) {
	const router = useRouter();
	const { cover, title, description, status, id } = post;

	const { deletePost, desactivatePost, updatePost } = usePostContext();

	const isActive = post.status === PostStatus.ACTIVE || post.status === PostStatus.AWAITING_APPROVAL;

	return (
		<TableRow>
			<TableCell className="grid grid-cols-8 gap-4 max-w-[600px]">
				<div className="col-span-2 hidden md:grid lg:min-w-28">
					<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
						<Image src={formatImageUrl(cover, "cover")} alt={"title"} fill sizes="100%" className="rounded-lg object-cover" priority />
					</AspectRatio>
				</div>
				<div className="col-span-8 sm:col-span-6">
					<Link href={`/blog/${post.slug}`} passHref>
						<div className="text-lg line-clamp-1">{title}</div>
						<p className="hidden text-sm md:line-clamp-2 text-muted-foreground ">{description}</p>
					</Link>
				</div>
			</TableCell>
			<TableCell className="hidden sm:table-cell">{getPostStatus(status)}</TableCell>
			<TableCell className="hidden md:table-cell">
				{post.published_at === null
					? "Non publié"
					: new Date(post.published_at).toLocaleDateString("fr-FR", {
							year: "numeric",
							month: "long",
							day: "numeric"
					  })}
			</TableCell>
			<TableCell className="text-right">
				<Popover>
					<PopoverTrigger asChild>
						<Button size="sm" className="gap-1">
							<Ellipsis className="w-4 h-4" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-40" align="end">
						<div className="flex flex-col gap-2 justify-start">
							<Button
								variant="ghost"
								className="w-full justify-start"
								onClick={() => {
									isActive ? desactivatePost(post.id) : updatePost(id, {}, true);
									onPostUpdate();
								}}
							>
								{isActive ? <ShieldCloseIcon className="w-4 h-4 mr-2" /> : <CheckCircle className="w-4 h-4 mr-2" />}
								{isActive ? "Désactiver" : "Publier"}
							</Button>
							<Button
								variant="ghost"
								className="w-full justify-start"
								onClick={() => {
									localStorage.setItem("draftPostId", post.id);
									setLoading(true);
									router.push(`/dashboard/blog/editor`);
								}}
							>
								<Edit className="w-4 h-4 mr-2" />
								Modifier
							</Button>
							<Button
								variant="ghost"
								className="w-full justify-start"
								onClick={() => {
									deletePost(post.id);
									onPostUpdate();
								}}
							>
								<Delete className="w-4 h-4 mr-2" />
								Supprimer
							</Button>
						</div>
					</PopoverContent>
				</Popover>
			</TableCell>
		</TableRow>
	);
}
