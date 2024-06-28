/* eslint-disable react/no-unescaped-entities */
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArticleRow } from "@/features/Blog/components/home/ArticleRow";
import { getData } from "@/lib/fetch_actions/getData";
import { ArrowBigLeftDash, ArrowBigRightDash, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export const LikedPosts = () => {
	const [likedPosts, setLikedPosts] = useState(null as any);
	const [error, setError] = useState(null as any);
	const [params, setParams] = useState<any>({
		page: 1,
		limit: 5,
		lastPage: 1
	});
	const { page, lastPage, limit } = params;

	useEffect(() => {
		async function getLikedPosts() {
			try {
				const { data, error } = await getData(`posts/user/liked?page=${page}&limit=${limit}`);

				if (error) {
					setError(error);
					return;
				}

				setLikedPosts(data.data);
				setParams({ ...params, lastPage: data.lastPage });
			} catch (error) {
				setError(error);
			}
		}
		getLikedPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [limit, page]);

	if (error) {
		return (
			<Alert className="items-center space-x-2 col-span-3">
				<Terminal className="h-4 w-4 " />
				<AlertTitle>{error.message}</AlertTitle>
			</Alert>
		);
	}

	return (
		<Card className="relative overflow-hidden ">
			<CardHeader className="flex flex-col items-start sticky top-0 bg-transparent z-50">
				<CardTitle>Les articles que vous aimez</CardTitle>
				<CardDescription>Les articles que vous avez aimé récemment</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-8 pb-8">
				{likedPosts?.length === 0 && <p className="text-center text-gray-500 mt-4">Vous n'avez pas encore aimé d'articles.</p>}
				{likedPosts && likedPosts.map((post: any) => <ArticleRow key={post.id} {...post} />)}
				{likedPosts?.length ? (
					<div className="grid gap-4 md:grid-cols-2 w-full mt-12 mx-auto ">
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
				) : null}
			</CardContent>
		</Card>
	);
};
