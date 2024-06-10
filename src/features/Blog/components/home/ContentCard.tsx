"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/types/post";
import { formatDateTime, formatImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";
import { Likes } from "@/components/Likes";

export function ContentCard({ post, index }: { post: Post; index: number }) {
	const { category, title, cover, user, published_at, description, like_count } = post;

	return (
		<motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
			<Card className="rounded-lg shadow-lg overflow-hidden">
				<Link href={`/blog/${post.slug}`}>
					<AspectRatio ratio={16 / 9} className="bg-muted rounded-t-lg relative">
						<Image src={formatImageUrl(cover, "cover")} alt={title} fill sizes="100%" className="rounded-t-lg object-cover" priority />
						<div className="absolute bottom-2 left-2 bg-primary px-2 rounded-xl">
							<p className="text-sm font-medium text-primary-foreground">{category.name}</p>
						</div>
						{/* <Likes like_count={like_count} liked_by={post.liked_by} /> */}
					</AspectRatio>

					<CardContent className="pt-4 pb-2">
						<p className="text-lg/6 line-clamp-2 font-medium min-h-12">{title}</p>
						<p className="text-sm text-muted-foreground line-clamp-2 mt-2 min-h-10">{description}</p>
						<Separator className="my-2" />
						<em className="text-muted-foreground text-xs">
							par <span className="text-primary">{user?.username}</span> le {formatDateTime(published_at)}
						</em>
					</CardContent>
				</Link>
			</Card>
		</motion.div>
	);
}
