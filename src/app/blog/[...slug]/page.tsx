import { PostContent } from "@/features/Blog/PostContent";
import { Metadata, ResolvingMetadata } from "next";
import { getData } from "@/lib/fetch_actions/getData";
import { formatImageUrl } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { CommentSection } from "@/features/Blog/components/post_detail/CommentSection";

type Props = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	// fetch data
	const { data, error } = await getData(`posts/detail/${params.slug}`);

	if (error) {
		console.error(error);
		return {
			title: "Erreur",
			description: "Une erreur est survenue lors de la récupération des données."
		};
	}

	return {
		title: data.title,
		description: data.description,
		openGraph: {
			images: [formatImageUrl(data.cover)]
		}
	};
}

export default function Post({ params }: Props) {
	return (
		<>
			<PostContent params={params} />
			<CommentSection params={params} />
		</>
	);
}
