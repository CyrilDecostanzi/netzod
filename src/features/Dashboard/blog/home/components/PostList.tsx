/* eslint-disable react/no-unescaped-entities */
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getData } from "@/lib/fetch_actions/getData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableHeader, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { PostRow } from "./PostRow";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { ArrowBigLeftDash, ArrowBigRightDash, Terminal } from "lucide-react";

export function PostList() {
	const [posts, setPosts] = useState(null as any);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null as any);
	const [params, setParams] = useState<any>({
		page: 1,
		limit: 6,
		lastPage: 1
	});

	const { page, lastPage, limit } = params;

	const getPosts: any = useCallback(async () => {
		const { data, error, loading } = await getData(`posts/user/list?page=${page}&limit=${limit}`);

		setLoading(loading);

		if (error) {
			setError(error);
			return;
		}

		setParams({ ...params, lastPage: data.lastPage });
		setPosts(data.data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, limit]);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	if (!posts && !error) {
		return <Skeleton className="w-full h-[500px]" />;
	}

	if (error) {
		return (
			<Alert className="items-center space-x-2 col-span-4">
				<Terminal className="h-4 w-4 " color="white" />
				<AlertTitle className="text-white">{error.message}</AlertTitle>
			</Alert>
		);
	}

	return (
		<Card>
			{error && (
				<div className="text-red-500 text-center mt-4">
					<p>Une erreur s'est produite lors de la récupération des données.</p>
					<p>{error.message}</p>
				</div>
			)}
			<CardHeader className="px-10 flex sm:flex-row justify-between">
				<div className="flex flex-col">
					<CardTitle className="text-2xl">Vos articles de blog</CardTitle>
					<CardDescription className="text-base">Vous trouverez ici la liste de tous vos articles.</CardDescription>
				</div>
				<div className="flex">
					<Button
						size="sm"
						className="mb-4 gap-1 max-w-56"
						onClick={() => {
							localStorage.removeItem("draftPostId");
						}}
						asChild
					>
						<Link href="/dashboard/blog/editor">Nouvel article</Link>
					</Button>
				</div>
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
				<div className="grid gap-4 md:grid-cols-2 w-full mt-12">
					<Button
						onClick={() => {
							if (page > 1) {
								setParams({ ...params, page: page - 1 });
							}
						}}
						disabled={page === 1}
					>
						<ArrowBigLeftDash className="w-6 h-6 mr-2" /> Page précédente
					</Button>
					<Button
						onClick={() => {
							if (page < lastPage) {
								setParams({ ...params, page: page + 1 });
							}
						}}
						disabled={page === lastPage || lastPage === 0}
					>
						Page suivante <ArrowBigRightDash className="w-6 h-6 ml-2" />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
