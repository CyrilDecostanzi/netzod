/* eslint-disable react/no-unescaped-entities */
import { useCallback, useEffect, useState } from "react";
import { getData } from "@/lib/fetch_actions/getData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableHeader, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { PostRow } from "./PostRow";
import { Skeleton } from "@/components/ui/skeleton";

export function PostList() {
	const [posts, setPosts] = useState(null as any);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null as any);

	const getPosts: any = useCallback(async () => {
		const { data, error, loading } = await getData("posts/user/list");

		setLoading(loading);

		if (error) {
			setError(error);
			return;
		}
		setPosts(data);
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	if (!posts) {
		return <Skeleton className="w-full h-48" />;
	}

	return (
		<Card x-chunk="dashboard-05-chunk-3">
			<CardHeader className="px-7">
				<CardTitle>Vos articles</CardTitle>
				<CardDescription>Vue d'ensemble de vos articles.</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Article</TableHead>
							<TableHead className="hidden sm:table-cell">Status</TableHead>
							<TableHead className="hidden md:table-cell">Date de publication</TableHead>
							<TableHead className="text-right">Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{posts.length === 0 && (
							<TableRow>
								<TableCell colSpan={4} className="text-center">
									Vous n'avez pas encore d'article.
								</TableCell>
							</TableRow>
						)}
						{posts?.map((post: any) => (
							<PostRow key={post.id} post={post} setLoading={setLoading} onPostUpdate={getPosts} />
						))}
					</TableBody>
				</Table>
				{/* Display error */}
				{error && (
					<div className="text-red-500 text-center mt-4">
						<p>Une erreur s'est produite lors de la récupération des données.</p>
						<p>{error.message}</p>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
