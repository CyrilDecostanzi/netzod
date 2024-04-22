import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export interface ContentCardProps {
	cover: string;
	title: string;
	description: string;
	category: string;
	icon: React.ReactNode;
}

export function ContentCard({ cover = "/assets/card_hero2.jpg", title, description, category, icon }: ContentCardProps) {
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
				<CardTitle className="text-sm font-medium">{category}</CardTitle>
				{icon}
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{title}</div>
				<p className="text-xs text-muted-foreground">{description}</p>
			</CardContent>
		</Card>
	);
}
