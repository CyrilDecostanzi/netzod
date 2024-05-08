import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonBioForm = () => {
	return (
		<CardContent>
			<Skeleton className="h-56 w-full mb-2" />
		</CardContent>
	);
};
