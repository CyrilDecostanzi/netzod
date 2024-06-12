"use client";
/* eslint-disable react/no-unescaped-entities */
import { ContentCard } from "./ContentCard";
import { getData } from "@/lib/fetch_actions/getData";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { CardListSkeleton } from "./CardListSkeleton";

export function CardList() {
	const [data, setData] = useState<any>(null);
	const [error, setError] = useState<any>(null);

	useEffect(() => {
		async function fetchData() {
			const { error, data } = await getData("posts/featured/list");
			setData(data);
			setError(error);
		}
		fetchData();
	}, []);

	if (data && data.length === 0) {
		return (
			<Alert className="items-center space-x-2 col-span-4">
				<Terminal className="h-4 w-4 " />
				<AlertTitle>Aucun article trouvé</AlertTitle>
			</Alert>
		);
	}

	if (error) {
		return (
			<Alert className="items-center space-x-2 col-span-4 bg-red-800">
				<Terminal className="h-4 w-4 " color="white" />
				<AlertTitle className="text-white">{error.message}</AlertTitle>
			</Alert>
		);
	}

	return data ? data?.map((card: any, index: any) => <ContentCard key={index} post={card} index={index} />) : <CardListSkeleton />;
}
