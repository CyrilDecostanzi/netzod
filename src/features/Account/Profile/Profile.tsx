/* eslint-disable react/no-unescaped-entities */
"use client";

import { useUser } from "@/hooks/useUser";
import ProfileContent from "./components/infos/ProfileContent";
import { Biography } from "./components/infos/Biography";
import { AccountHeader } from "./components/infos/AccountHeader";
import { Security } from "./components/infos/Security";

export default function Profile() {
	const { user } = useUser();

	return (
		<>
			<div className="grid gap-4 md:gap-8 ">
				<AccountHeader />
			</div>
			<div className="grid gap-4 md:gap-8 md:grid-cols-7">
				<ProfileContent user={user} />
				<Biography user={user} />
				<Security user={user} />
			</div>
		</>
	);
}
