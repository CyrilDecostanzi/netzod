"use client";

import { PostProvider } from "@/context/PostContext";
import { HeroBanner } from "@/components/HeroBanner";
import { PostList } from "@/features/Dashboard/blog/home/components/PostList";

export const DashboardContent = () => {
	return (
		<PostProvider>
			<HeroBanner title="Tableau de bord" description="Vue d'ensemble de vos activités." />
			<PostList />
		</PostProvider>
	);
};
