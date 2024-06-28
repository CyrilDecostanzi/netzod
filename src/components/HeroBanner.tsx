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
		<div className="flex flex-col items-center justify-center py-8 sm:mt-8 md:mt-8 rounded-xl ">
			<h1 className={`text-2xl ${cover && "text-3xl/12 md:text-4xl"} font-bold text-center mb-4 z-8 text-secondary-foreground`}>{title}</h1>
			<p className={`text-base md:text-xl text-muted-foreground text-center z-8`}>{description}</p>
			{cover && (
				<div
					className="w-full h-52 sm:h-[450px] bg-cover bg-center rounded-xl z-0 mt-8 sm:mt-16"
					style={{ backgroundImage: `url(${formatImageUrl(cover, "cover")})` }}
				/>
			)}
		</div>
	);
}
