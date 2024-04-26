import { Skeleton } from "@/components/ui/skeleton";

export function CardListSkeleton() {
	return (
		<>
			<Skeleton className="w-full h-80" />
			<Skeleton className="w-full h-80" />
			<Skeleton className="w-full h-80" />
			<Skeleton className="w-full h-80" />
		</>
	);
}
