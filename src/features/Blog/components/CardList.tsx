/* eslint-disable react/no-unescaped-entities */
import { ContentCard } from "./ContentCard";
import { getData } from "@/lib/fetch_actions/getData";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { CardListSkeleton } from "./CardListSkeleton";

export async function CardList() {
	const { error, data } = await getData("posts/featured/cardlist");

	if (data && data.length === 0) {
		return (
			<Alert className="items-center space-x-2 md:w-[700px] mx-auto">
				<Terminal className="h-4 w-4 " color="white" />
				<AlertTitle className="text-white">Aucun article trouvé</AlertTitle>
			</Alert>
		);
	}

	if (error) {
		return (
			<Alert className="items-center space-x-2 md:w-[700px] mx-auto bg-red-800">
				<Terminal className="h-4 w-4 " color="white" />
				<AlertTitle className="text-white">{error.message}</AlertTitle>
			</Alert>
		);
	}

	return data && data?.map((card: any, index: any) => <ContentCard key={index} {...card} />);
}
