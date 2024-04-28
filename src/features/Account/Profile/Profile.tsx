/* eslint-disable react/no-unescaped-entities */
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/hooks/useUser";
import { Edit } from "lucide-react";
import PersonalInfos from "./components/PersonalInfos";
import { Biography } from "./components/Biography";
import { AccountHeader } from "./components/AccountHeader";

export default function Profile() {
	const { user } = useUser();

	return (
		<>
			<div className="grid gap-4 md:gap-8 ">
				<AccountHeader />
			</div>
			<div className="grid gap-4 md:gap-8 md:grid-cols-7">
				<PersonalInfos user={user} />
				<Biography user={user} />
			</div>
		</>
	);
}
