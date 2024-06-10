"use client";

/* eslint-disable react/no-unescaped-entities */
import { HeroBanner } from "@/components/HeroBanner";

import { getData } from "@/lib/fetch_actions/getData";
import { AlertError } from "@/components/AlertError";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { formatImageUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SocialsShareIcons } from "./lib/data";
import { Likes } from "@/components/Likes";

export const PostContent = ({ params }: { params: { slug: string } }) => {
	const [data, setData] = useState<any>({});
	const [error, setError] = useState<any>(null);
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			const { error, data } = await getData(`posts/detail/${params.slug}`);
			if (error) {
				setError(error);
				console.error(error);
				return;
			}
			setData(data);
		};
		fetchData();
	}, [params.slug]);

	if (error) {
		return <AlertError message="Une erreur est survenue lors de la récupération de l'article." />;
	}

	return (
		<div className="w-full px-4 sm:px-12 xl:px-24 pb-12 mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 rounded-xl shadow-lg mt-8">
			<HeroBanner title={data.title} description={data.description} cover={data.cover} />
			{data.published_at && (
				<div className="text-left flex justify-start items-center">
					<div className="w-10 h-10 mr-3">
						<AspectRatio ratio={1} className="rounded-full overflow-hidden border-primary border-2">
							<Image src={formatImageUrl(data.user.avatar)} alt="avatar" fill className="object-cover" sizes="100%" />
						</AspectRatio>
					</div>

					<>
						<div className="flex flex-col">
							<div className="text-sm text-gray-500 max-w-[100px] sm:max-w-full overflow-hidden">
								<p className="font-bold overflow-hidden overflow-ellipsis whitespace-nowrap m-0">Publié par {data.user.username}</p>
							</div>
							<p className="text-sm text-gray-500">
								Le <span className="font-bold">{new Date(data.published_at).toLocaleDateString()}</span>
							</p>
						</div>
						<div className="flex flex-row gap-1 sm:gap-2 ml-auto">
							{SocialsShareIcons.map((icon) => (
								<Button key={icon.name} variant="secondary" className="p-2 w-8 h-8" asChild>
									<Link href={`${icon.url}${process.env.NEXT_PUBLIC_APP_URL}blog/${data.slug}`} target="_blank">
										{icon.icon}
									</Link>
								</Button>
							))}
							<Likes like_count={data.like_count} liked_by={data.liked_by} post_id={data.id} />
						</div>
					</>
				</div>
			)}
			<div dangerouslySetInnerHTML={{ __html: data.content }} />
		</div>
	);
};
