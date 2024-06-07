/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CardList } from "./components/home/CardList";
import { TopTable } from "./components/home/TopTable";
import { ArticleList } from "./components/home/ArticleList";
import { Suspense } from "react";
import { CardListSkeleton } from "./components/home/CardListSkeleton";

export function Content() {
	return (
		<>
			<div className="grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-4 w-full">
				<Suspense fallback={<CardListSkeleton />}>
					<CardList />
				</Suspense>
			</div>
			<div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
				<Card className="xl:col-span-2 relative overflow-hidden">
					<CardHeader className="flex flex-col items-start sticky top-0 bg-transparent z-50 ">
						<div className="grid gap-2">
							<CardTitle>Top 5 JS frameworks</CardTitle>
							<CardDescription>Les 5 frameworks JS frontend les plus téléchargés sur npm hier</CardDescription>
						</div>
					</CardHeader>
					<CardContent>
						<TopTable />
					</CardContent>
				</Card>
				<Card className="relative overflow-hidden">
					<CardHeader className="flex flex-col items-center sticky top-0 bg-transparent z-50">
						<CardTitle>Les derniers articles</CardTitle>
						<CardDescription>Les derniers articles publiés sur le blog</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-8 pb-8">
						<ArticleList />
					</CardContent>
				</Card>
			</div>
		</>
	);
}
