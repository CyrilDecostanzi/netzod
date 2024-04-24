"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/hooks/useUser";

export default function Detail() {
	const { user } = useUser();

	return (
		<Card>
			<CardHeader>Profile</CardHeader>
			<CardContent>
				{user ? (
					<div>
						<div>Username: {user.username}</div>
						<div>Email: {user.email}</div>
					</div>
				) : (
					<Skeleton className="w-full h-20" />
				)}
			</CardContent>
		</Card>
	);
}
