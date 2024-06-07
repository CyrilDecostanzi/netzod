import { HeroBanner } from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Content } from "@/features/Blog/BlogContent";
import { ArrowBigRightDash } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Blog",
	description: "Découvrez les derniers articles de mon blog."
};

export default function Blog() {
	return (
		<>
			<HeroBanner
				title="Découvrez les derniers articles de mon blog"
				description="Des articles sur le développement web, le design, le SEO, le marketing, et bien plus encore."
			/>
			<div className="flex justify-start">
				<Button asChild>
					<Link href="/blog/posts">
						Tous les articles <ArrowBigRightDash className="w-6 h-6 ml-2" />
					</Link>
				</Button>
			</div>
			<Content />
		</>
	);
}
