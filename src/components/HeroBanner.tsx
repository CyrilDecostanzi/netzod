/* eslint-disable react/no-unescaped-entities */

import { formatImageUrl } from "@/lib/utils";

interface HeroBannerProps {
	title: string;
	description: string;
	cover?: string;
}

export function HeroBanner(props: HeroBannerProps) {
	const { title, description, cover } = props;

	return (
		<div className="flex flex-col items-center justify-center py-8 sm:mt-8 md:mt-16 rounded-xl">
			<h1 className={`text-2xl sm:text-3xl ${cover && "md:text-4xl"} font-bold text-center mb-4 z-10 text-secondary-foreground`}>{title}</h1>
			<p className="md:text-xl text-muted-foreground text-center z-10">{description}</p>
			{cover && (
				<div
					className="w-full h-52 sm:h-96 bg-cover bg-center rounded-xl z-0 mt-8 sm:mt-16"
					style={{ backgroundImage: `url(${formatImageUrl(cover, "cover")})` }}
				/>
			)}
		</div>
	);
}
