"use client";

/* eslint-disable react/no-unescaped-entities */
import { HeroBanner } from "@/components/HeroBanner";
import { PostList } from "@/features/Dashboard/blog/home/components/PostList";
import { PostProvider } from "@/context/PostContext";

export default function Dashboard() {
	return (
		<PostProvider>
			<HeroBanner title="Tableau de bord" description="Vue d'ensemble de vos activités." />

			<PostList />
		</PostProvider>
	);
}
