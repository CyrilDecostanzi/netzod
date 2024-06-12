/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowBigLeftDash, ArrowBigRightDash, Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { CommentForm } from "./CommentForm";
import { useAuth } from "@/hooks/useAuth";
import { getData } from "@/lib/fetch_actions/getData";
import { CommentRow } from "./CommentRow";
import { CommentModal } from "./CommentModal";

export const CommentSection = ({ params }: { params: any }) => {
	const [error, setError] = useState(null as any);
	const [comments, setComments] = useState(null as any);
	const { user } = useAuth();
	const [paramsPagination, setParamsPagination] = useState<any>({
		page: 1,
		limit: 5,
		lastPage: 1
	});

	const [mutate, setMutate] = useState(false);

	const { page, lastPage, limit } = paramsPagination;

	useEffect(() => {
		const getComments = async () => {
			const { data, error } = await getData(`comment/post/${params.slug[0]}?page=${page}&limit=${limit}`);
			if (error) {
				console.error(error);
				setError(error);
				return;
			}
			setParamsPagination({ ...paramsPagination, lastPage: data.lastPage });
			setComments(data.data);
		};
		getComments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.slug, page, limit, mutate]);

	if (error) {
		return (
			<Card className="w-full px-4 sm:px-12 xl:px-24 pb-12 mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 rounded-xl shadow-lg">
				<CardHeader className="p-0 pt-8">
					<CardTitle>Commentaires</CardTitle>
					<CardDescription>Les commentaires de cet article</CardDescription>
				</CardHeader>
				<CardContent className="p-0 py-4">
					<p>Une erreur s'est produite lors de la récupération des commentaires.</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="w-full px-4 sm:px-12 xl:px-24 pb-12 mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 rounded-xl shadow-lg">
			<CardHeader className="p-0 pt-8">
				<div className="flex flex-col sm:flex-row justify-between items-center">
					<div className="flex flex-col">
						<CardTitle>Commentaires</CardTitle>
						<CardDescription>Les commentaires de cet article</CardDescription>
					</div>
					<CommentModal params={params} user={user} mutate={mutate} setMutate={setMutate} />
				</div>
			</CardHeader>
			<CardContent className="flex flex-col p-0 py-8 gap-4">
				{comments?.length === 0 && <p className="text-center text-gray-500 mt-4">Il n'y a pas encore de commentaires sur cet article.</p>}
				{comments &&
					comments.map((comment: any) => (
						<CommentRow key={comment.id} comment={comment} user={user} params={params} mutate={mutate} setMutate={setMutate} />
					))}
				{comments?.length ? (
					<div className="grid gap-4 md:grid-cols-2 w-full mt-12">
						<Button
							onClick={() => {
								if (page > 1) {
									setParamsPagination({ ...paramsPagination, page: page - 1 });
								}
							}}
							disabled={page === 1}
						>
							<ArrowBigLeftDash className="w-6 h-6 mr-2" /> Page précédente
						</Button>
						<Button
							onClick={() => {
								if (page < lastPage) {
									setParamsPagination({ ...paramsPagination, page: page + 1 });
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
