"use client";

/* eslint-disable react/no-unescaped-entities */
import { ContentCard } from "./components/home/ContentCard";
import { getData } from "@/lib/fetch_actions/getData";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { ArrowBigLeftDash, ArrowBigRightDash, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CardListSkeleton } from "./components/home/CardListSkeleton";

export function PostsList() {
	const [data, setData] = useState<any>({});
	const [error, setError] = useState<any>(null);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	const [params, setParams] = useState<any>({
		page: 1,
		limit: 12,
		lastPage: 1,
		category: 0
	});

	const { page, limit, lastPage, category } = params;

	useEffect(() => {
		async function fetchData() {
			const { error, data } = await getData(`posts?page=${page}&limit=${limit}&category=${category}`);
			if (data) {
				setParams({ ...params, lastPage: data.lastPage });
			}

			setData(data);
			setError(error);
		}
		fetchData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, limit, category]);

	useEffect(() => {
		async function getCategories() {
			const { data: categoriesData, error } = await getData("categories");
			if (error) {
				toast.error(error.message);
			}
			setCategories(categoriesData);
		}
		getCategories();
	}, []);

	if (error) {
		return (
			<Alert className="items-center space-x-2 col-span-4 bg-red-800">
				<Terminal className="h-4 w-4 " />
				<AlertTitle>{error.message}</AlertTitle>
			</Alert>
		);
	}

	if (!data.data && !error) {
		return (
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 w-full mt-16">
				<CardListSkeleton />
			</div>
		);
	}

	return (
		<>
			<div className="filters_bar flex justify-between items-center">
				<div className="filters flex space-x-4">
					<Select
						onValueChange={(value) => {
							setParams({ ...params, category: value });
						}}
						value={category.toString()}
					>
						<SelectTrigger>
							<SelectValue placeholder="Catégorie" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Catégories</SelectLabel>
								<SelectItem value="0">Toutes les catégories</SelectItem>
								{categories.map((category: any) => (
									<SelectItem key={category.id} value={category.id.toString()} onClick={(e) => e.stopPropagation()}>
										{category.name}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 w-full">
				{data.data && data.data.length === 0 && (
					<Alert className="items-center space-x-2 col-span-4">
						<Terminal className="h-4 w-4 " />
						<AlertTitle>Aucun article trouvé</AlertTitle>
					</Alert>
				)}

				{data.data && data.data?.map((card: any, index: any) => <ContentCard key={index} post={card} index={index} />)}
			</div>
			<div className="grid gap-4 md:grid-cols-2 w-full">
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
		</>
	);
}
