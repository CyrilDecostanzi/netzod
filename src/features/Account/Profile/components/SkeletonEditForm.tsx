import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonEditForm = () => {
	return (
		<CardContent>
			<Skeleton className="h-11 w-full mb-2" />
			<Skeleton className="h-11 w-full mb-2" />
			<Skeleton className="h-11 w-full mb-2" />
			<Skeleton className="h-11 w-full mb-2" />
			<Skeleton className="h-11 w-full mb-2" />
			<Skeleton className="h-11 w-full mb-2" />
		</CardContent>
	);
};
