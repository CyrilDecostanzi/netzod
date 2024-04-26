import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/lib/types/post";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";

export function ContentCard({ ...post }: Post) {
	const { category, title, content, cover, user, published_at } = post;

	return (
		<Card>
			<AspectRatio ratio={16 / 9} className="bg-muted rounded-t-lg">
				<Image
					src={process.env.NEXT_PUBLIC_API_URL + cover}
					alt="Photo by Drew Beamer"
					fill
					sizes="100%"
					className="rounded-t-lg object-cover"
				/>
			</AspectRatio>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-xs font-medium">{category.name}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-lg/2 line-clamp-3 font-bold">{title}</div>
				<p className="text-xs text-muted-foreground line-clamp-2 my-2">{content}</p>
				<em className="text-xs text-foreground">
					par {user.username} le {formatDateTime(published_at)}
				</em>
			</CardContent>
		</Card>
	);
}
