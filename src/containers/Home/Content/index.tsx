/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { topData, articlesData } from "./data/data";
import { CardList } from "./components/CardList";
import { TopTable } from "./components/TopTable";
import { ArticleList } from "./components/ArticleList";
import { Suspense } from "react";
import { CardListSkeleton } from "./components/CardListSkeleton";

export function Content() {
	return (
		<>
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 w-full">
				{/* Fallback is a loop of 4 card with skeleton */}
				<Suspense fallback={<CardListSkeleton />}>
					<CardList />
				</Suspense>
			</div>
			<div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
				<Card className="xl:col-span-2 max-h-[500px] overflow-y-auto relative pb-12">
					<CardHeader className="flex flex-col items-center sticky top-0 bg-card z-50">
						<div className="grid gap-2">
							<CardTitle>Top 5 JS frameworks</CardTitle>
							<CardDescription>Les 5 frameworks JS les plus utilisés</CardDescription>
						</div>
					</CardHeader>
					<CardContent>
						<TopTable data={topData} />
					</CardContent>
				</Card>
				<Card className="max-h-[500px] overflow-y-auto relative pb-12">
					<CardHeader className="flex flex-col items-center sticky top-0 bg-card z-50">
						<CardTitle>Les derniers articles</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-8">
						<ArticleList data={articlesData} />
					</CardContent>
				</Card>
			</div>
		</>
	);
}
