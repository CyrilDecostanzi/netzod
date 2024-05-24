"use client";

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroBanner } from "@/components/HeroBanner";
import { PostList } from "@/features/Dashboard/blog/home/components/PostList";
import { PostProvider } from "@/context/PostContext";

export default function Dashboard() {
	return (
		<PostProvider>
			<HeroBanner title="Tableau de bord" description="Vue d'ensemble de vos activités." />
			<Button
				size="sm"
				className="mb-4 gap-1"
				onClick={() => {
					localStorage.removeItem("draftPostId");
				}}
				asChild
			>
				<Link href="/dashboard/blog/editor">Créer un article</Link>
			</Button>
			<PostList />
		</PostProvider>
	);
}
