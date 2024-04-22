import { ContentCard } from "./ContentCard";
import { getData } from "@/lib/actions/getData";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export async function CardList() {
	const { error, data } = await getData("posts");

	if (error) {
		return (
			<Alert className="items-center space-x-2 md:w-[700px] mx-auto bg-red-800">
				<Terminal className="h-4 w-4 " color="white" />
				<AlertTitle className="text-white">Oops! An error occurred.</AlertTitle>
				<AlertDescription className="text-white">{error.message}</AlertDescription>
			</Alert>
		);
	}

	return data && data?.map((card: any, index: any) => <ContentCard key={index} {...card} />);
}
