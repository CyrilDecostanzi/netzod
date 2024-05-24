import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { formatImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const ArticleRow = ({ cover, title, description, slug }: { cover: string; title: string; description: string; slug: string }) => {
	return (
		<div className="flex items-center gap-4 justify-between">
			<div className="flex items-center gap-4">
				<div className="h-12 w-16 min-w-16 flex">
					<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg ">
						<Image src={formatImageUrl(cover)} alt="Photo by Drew Beamer" fill className="rounded-lg object-cover" sizes="100%" />
					</AspectRatio>
				</div>
				<div className="grid gap-1">
					<p className="text-sm font-medium leading-none line-clamp-1">{title}</p>
					<p className=" text-sm text-muted-foreground line-clamp-2">{description}</p>
				</div>
			</div>
			<Button variant="default" size="icon" className="rounded-full h-8 w-8 min-w-8" asChild>
				<Link href={`/blog/${slug}`}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</Link>
			</Button>
		</div>
	);
};
