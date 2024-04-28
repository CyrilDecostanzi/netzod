import { Edit } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "@/types/auth";

type BiographyProps = {
	user: User | null;
};

export function Biography({ user }: BiographyProps) {
	return (
		<Card className="md:col-span-4">
			<CardHeader>
				<div className="flex flex-row justify-between gap-2 w-full text-xl">
					Biographie <Edit className="h-4 w-4 cursor-pointer" onClick={() => alert("Edition de la biographie")} />
				</div>
			</CardHeader>
			<CardContent>
				{user ? (
					<div>{user.bio ? <div>{user.bio}</div> : <div className="text-muted-foreground">Pas de biographie</div>}</div>
				) : (
					<Skeleton className="h-16" />
				)}
			</CardContent>
		</Card>
	);
}
