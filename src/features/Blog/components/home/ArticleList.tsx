import { getData } from "@/lib/fetch_actions/getData";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { ArticleRow } from "./ArticleRow";

export async function ArticleList() {
	const { error, data } = await getData("posts/latest/list");

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
				<Terminal className="h-4 w-4 " />
				<AlertTitle>{error.message}</AlertTitle>
			</Alert>
		);
	}

	return data && data?.map((card: any, index: any) => <ArticleRow key={index} {...card} />);
}
