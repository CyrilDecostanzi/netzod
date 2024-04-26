/* eslint-disable react/no-unescaped-entities */

interface HeroBannerProps {
	title: string;
	description: string;
}

export function HeroBanner(props: HeroBannerProps) {
	const { title, description } = props;
	return (
		<div className="flex flex-col items-center justify-center h-auto min-h-96  rounded-t-lg px-8 md:px-28 pb-8 md:pb-16 mt-8 relative">
			{/* <div className="absolute inset-0 bg-gradient-to-b from-transparent from-20% to-card z-0 rounded-t-md" /> */}
			<h1 className="text-2xl md:text-3xl font-bold text-center mb-4 z-10 text-secondary-foreground/80">{title}</h1>
			<p className="md:text-lg text-muted-foreground text-center z-10">{description}</p>
		</div>
	);
}
