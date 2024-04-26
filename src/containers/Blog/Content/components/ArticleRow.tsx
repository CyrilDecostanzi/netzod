import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const ArticleRow = ({ image, title, description }: { image: string; title: string; description: string }) => {
	return (
		<div className="flex items-center gap-4">
			<div className="hidden h-12 w-16 sm:flex">
				<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg ">
					<Image src={image} alt="Photo by Drew Beamer" fill className="rounded-lg object-cover" sizes="100%" />
				</AspectRatio>
			</div>
			<div className="grid gap-1">
				<p className="text-sm font-medium leading-none">{title}</p>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
			<div className="ml-auto font-medium">Voir</div>
		</div>
	);
};
