/* eslint-disable react/no-unescaped-entities */
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/hooks/useUser";
import { Edit } from "lucide-react";
import Image from "next/image";

export default function Detail() {
	const { user } = useUser();
	const defaultAvatar = "/assets/default-avatar.jpg";

	return (
		<>
			<div className="grid gap-4 md:gap-8 ">
				<Card className="border-primary">
					<CardHeader className="text-2xl">Vos informations</CardHeader>
					<CardContent>
						<p>Ici vous pouvez consulter et modifier vos informations personnelles. Vous pouvez également ajouter une photo de profil.</p>
					</CardContent>
				</Card>
			</div>
			<div className="grid gap-4 md:gap-8 md:grid-cols-7">
				<Card className="md:col-span-3 border-primary">
					<CardHeader>
						<div className="flex flex-row justify-between items-center gap-2 w-full text-xl">
							Informations personelles <Edit className="h-4 w-4 cursor-pointer" onClick={() => alert("Edition du profil")} />
						</div>
					</CardHeader>
					<CardContent>
						{user ? (
							<div className="flex flex-col gap-2">
								<div className="flex flex-row gap-4">
									<Image
										src={user.avatar ? process.env.NEXT_PUBLIC_API_URL + user.avatar : defaultAvatar}
										alt="Photo by Drew Beamer"
										width={50}
										height={50}
										className="rounded-full object-cover border-2 border-primary"
									/>
									<div>
										<div className="">{user.username}</div>
										<div className="text-sm font-bold text-muted-foreground">
											{user.firstname} {user.lastname}
										</div>
									</div>
								</div>
								<div className="flex flex-row gap-6 w-[80%] sm:w-[70%] lg:w-[80%] justify-between mt-4">
									<div className="flex flex-col gap-2 ">
										<div className="text-base font-bold whitespace-nowrap">Pseudo</div>
										<div className="text-base font-bold">Email</div>
										<div className="text-base font-bold">Prénom</div>
										<div className="text-base font-bold">Nom</div>
										<div className="text-base font-bold">Téléphone</div>
									</div>
									<div className="flex flex-col gap-2">
										<div className="text-base">{user?.username}</div>
										<div className="text-base">{user?.email}</div>
										<div className="text-base">{user?.firstname}</div>
										<div className="text-base">{user?.lastname}</div>
										<div className="text-base">
											{user?.mobile ?? <span className="text-muted-foreground">Non renseigné</span>}
										</div>
									</div>
								</div>
							</div>
						) : (
							<Skeleton className="h-16" />
						)}
					</CardContent>
				</Card>
				<Card className="md:col-span-4 border-primary">
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
			</div>
		</>
	);
}
