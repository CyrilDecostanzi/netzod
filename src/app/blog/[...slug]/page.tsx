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
import { ArrowLeftSquare } from "lucide-react";
const SocialsShareIcons = [
	{
		name: "facebook",
		icon: (
			<span className="[&>svg]:h-5 [&>svg]:w-5">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
					<path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
				</svg>
			</span>
		),
		url: "https://www.facebook.com/sharer/sharer.php?u="
	},
	{
		name: "twitter",
		icon: (
			<span className="[&>svg]:h-5 [&>svg]:w-5">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
					<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
				</svg>
			</span>
		),
		url: "https://twitter.com/intent/tweet?url="
	},
	{
		name: "linkedin",
		icon: (
			<span className="[&>svg]:h-5 [&>svg]:w-5">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
					<path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
				</svg>
			</span>
		),
		url: "https://www.linkedin.com/shareArticle?url="
	}
];

export default function Post({ params }: { params: { slug: string } }) {
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
						<div className="flex flex-row gap-2 ml-auto">
							{SocialsShareIcons.map((icon) => (
								<Button key={icon.name} variant="secondary" className="p-2 w-10 h-10" asChild>
									<Link href={`${icon.url}${process.env.NEXT_PUBLIC_APP_URL}blog/${data.slug}`} target="_blank">
										{icon.icon}
									</Link>
								</Button>
							))}
						</div>
					</>
				</div>
			)}
			<div dangerouslySetInnerHTML={{ __html: data.content }} />
		</div>
	);
}
