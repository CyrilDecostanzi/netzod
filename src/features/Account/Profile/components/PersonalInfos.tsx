import { User } from "@/types/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Edit } from "lucide-react";
import Image from "next/image";
import { Images } from "@/enums/default";

type PersonalInfosProps = {
	user: User | null;
};

export default function PersonalInfos({ user }: PersonalInfosProps) {
	return (
		<Card className="md:col-span-3 ">
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
								src={user.avatar ? process.env.NEXT_PUBLIC_API_URL + user.avatar : Images.DEFAULT_AVATAR}
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
								<div className="text-base">{user?.mobile ?? <span className="text-muted-foreground">Non renseigné</span>}</div>
							</div>
						</div>
					</div>
				) : (
					<Skeleton className="h-16" />
				)}
			</CardContent>
		</Card>
	);
}
