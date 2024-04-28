import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const ArticleRow = ({ image, title, description }: { image: string; title: string; description: string }) => {
	return (
		<div className="flex items-center gap-4 justify-between">
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
			</div>
			<Button variant="default" size="icon" className="rounded-full">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
				</svg>
			</Button>
		</div>
	);
};
