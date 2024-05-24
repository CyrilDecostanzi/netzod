/* eslint-disable react/no-unescaped-entities */
import { HeroBanner } from "@/components/HeroBanner";

import { getData } from "@/lib/fetch_actions/getData";
import { AlertError } from "@/components/AlertError";

export default async function Post({ params }: { params: { slug: string } }) {
	const { data, error } = await getData(`posts/detail/${params.slug}`);

	if (error) {
		return <AlertError message="Une erreur est survenue lors de la récupération de l'article." />;
	}

	return (
		<div className="w-full md:w-[90%] xl:w-[80%] mx-auto">
			<HeroBanner title={data.title} description={data.description} cover={data.cover} />
			<div dangerouslySetInnerHTML={{ __html: data.content }} />
		</div>
	);
}
