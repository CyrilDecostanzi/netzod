/* eslint-disable react/no-unescaped-entities */
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArticleRow } from "@/features/Blog/components/home/ArticleRow";
import { CommentRow } from "@/features/Blog/components/post_detail/CommentRow";
import { useAuth } from "@/hooks/useAuth";
import { getData } from "@/lib/fetch_actions/getData";
import { ArrowBigLeftDash, ArrowBigRightDash, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export const Comments = () => {
	const [comments, setComments] = useState(null as any);
	const [error, setError] = useState(null as any);
	const [params, setParams] = useState<any>({
		page: 1,
		limit: 3,
		lastPage: 1
	});
	const { page, lastPage, limit } = params;
	const [mutate, setMutate] = useState(false);

	const { user } = useAuth();

	useEffect(() => {
		const getComments = async () => {
			const { data, error } = await getData(`comment/user/all?page=${page}&limit=${limit}`);

			if (error) {
				setError(error);
				console.error(error);
				return;
			}
			setComments(data.data);
			setParams({ ...params, lastPage: data.lastPage });
		};

		getComments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [limit, page, mutate]);

	if (error) {
		return (
			<Alert className="items-center space-x-2 col-span-4">
				<Terminal className="h-4 w-4 " />
				<AlertTitle>{error.message}</AlertTitle>
			</Alert>
		);
	}

	return (
		<Card className="relative overflow-hidden lg:col-span-1 xl:col-span-2">
			<CardHeader className="flex flex-col items-start sticky top-0 bg-transparent z-50">
				<CardTitle>Vos commentaires</CardTitle>
				<CardDescription>Les commentaires que vous avez reçu récemment</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-2 pb-8">
				{comments?.length === 0 && <p className="text-center text-gray-500 mt-4">Vous n'avez pas encore reçu de commentaires.</p>}
				{comments &&
					comments.map((comment: any) => (
						<CommentRow key={comment.id} comment={comment} user={user} mutate={mutate} setMutate={setMutate} />
					))}
				{comments?.length ? (
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
				) : null}
			</CardContent>
		</Card>
	);
};
