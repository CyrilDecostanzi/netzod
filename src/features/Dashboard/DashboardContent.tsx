"use client";

import { PostProvider } from "@/context/PostContext";
import { HeroBanner } from "@/components/HeroBanner";
import { PostList } from "@/features/Dashboard/blog/home/components/PostList";
import { LikedPosts } from "./blog/home/components/LikedPosts";
import { Card } from "@/components/ui/card";
import { Comments } from "./blog/home/components/Comments";

export const DashboardContent = () => {
	return (
		<PostProvider>
			<HeroBanner title="Tableau de bord" description="Vue d'ensemble de vos activités." />
			<PostList />
			<div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
				<Comments />
				<LikedPosts />
			</div>
		</PostProvider>
	);
};
