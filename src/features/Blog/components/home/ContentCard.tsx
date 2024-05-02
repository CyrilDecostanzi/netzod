import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/types/post";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";

export function ContentCard({ ...post }: Post) {
	const { category, title, content, cover, user, published_at } = post;

	return (
		<Card className="rounded-lg shadow-lg overflow-hidden">
			<AspectRatio ratio={16 / 9} className="bg-muted rounded-t-lg relative">
				<Image
					src={process.env.NEXT_PUBLIC_API_URL + cover}
					alt="Photo by Drew Beamer"
					fill
					sizes="100%"
					className="rounded-t-lg object-cover"
				/>
				<div className="absolute bottom-4 left-4 bg-primary px-2 rounded-xl">
					<p className="text-sm font-medium text-primary-foreground">{category.name}</p>
				</div>
			</AspectRatio>

			<CardContent className="pt-4 pb-2">
				<p className="text-xl/6 line-clamp-3 font-medium">{title}</p>
				<p className=" text-muted-foreground line-clamp-2 my-2">{content}</p>
				<Separator className="mb-2" />
				<em className="text-foreground text-xs">
					par <span className="text-primary">{user.username}</span> le {formatDateTime(published_at)}
				</em>
			</CardContent>
		</Card>
	);
}
