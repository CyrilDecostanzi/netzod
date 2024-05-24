import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/types/post";
import { formatDateTime, formatImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function ContentCard({ ...post }: Post) {
	const { category, title, content, cover, user, published_at, description } = post;

	return (
		<Card className="rounded-lg shadow-lg overflow-hidden">
			<Link href={`/blog/${post.slug}`}>
				<AspectRatio ratio={16 / 9} className="bg-muted rounded-t-lg relative">
					<Image src={formatImageUrl(cover, "cover")} alt={title} fill sizes="100%" className="rounded-t-lg object-cover" />
					<div className="absolute bottom-4 left-4 bg-primary px-2 rounded-xl">
						<p className="text-sm font-medium text-primary-foreground">{category.name}</p>
					</div>
				</AspectRatio>

				<CardContent className="pt-4 pb-2">
					<p className="text-lg/6 line-clamp-2 font-medium">{title}</p>
					<p className="text-sm line-clamp-3 mt-2 min-h-12">{description}</p>
					<Separator className="my-2" />
					<em className="text-foreground text-xs">
						par <span className="text-primary">{user?.username}</span> le {formatDateTime(published_at)}
					</em>
				</CardContent>
			</Link>
		</Card>
	);
}
