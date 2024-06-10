import { User } from "@/types/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { formatImageUrl } from "@/lib/utils";
import { Edit } from "../edit/Edit";
import { EditProfileForm } from "../edit/forms/EditProfileForm";

type PersonalInfosProps = {
	user: User | null;
};

export default function ProfileContent({ user }: PersonalInfosProps) {
	return (
		<Card className="md:col-span-3">
			<CardHeader>
				<div className="flex flex-row justify-between items-center gap-2 w-full text-lg">
					Informations personelles{" "}
					<Edit>
						<EditProfileForm />
					</Edit>
				</div>
			</CardHeader>
			<CardContent>
				{user ? (
					<div className="flex flex-col md:gap-2">
						<div className="flex flex-row gap-4">
							<div className="min-w-[50px] min-h-[50px] sm:flex">
								<AspectRatio ratio={1} className="rounded-full overflow-hidden border-primary border-2">
									<Image src={formatImageUrl(user.avatar)} alt="avatar" fill className="object-cover" sizes="100%" priority />
								</AspectRatio>
							</div>
							<div>
								<div className="">{user.username}</div>
								<div className="text-sm font-bold text-muted-foreground">
									{user.firstname} {user.lastname}
								</div>
							</div>
						</div>
						<div className="flex flex-row mt-4 gap-6">
							<div className="flex flex-col gap-2 ">
								<div className="text-base font-bold whitespace-nowrap">Pseudo</div>
								<div className="text-base font-bold">Email</div>
								<div className="text-base font-bold">Prénom</div>
								<div className="text-base font-bold">Nom</div>
								<div className="text-base font-bold">Téléphone</div>
							</div>
							<div className="flex flex-col gap-2 max-w-[150px] sm:max-w-[250px] overflow-hidden">
								<div className="text-base overflow-hidden overflow-ellipsis whitespace-nowrap">{user?.username}</div>
								<div className="text-base overflow-hidden overflow-ellipsis whitespace-nowrap">{user?.email}</div>
								<div className="text-base overflow-hidden overflow-ellipsis whitespace-nowrap">{user?.firstname}</div>
								<div className="text-base overflow-hidden overflow-ellipsis whitespace-nowrap">{user?.lastname}</div>
								<div className="text-base overflow-hidden overflow-ellipsis whitespace-nowrap">
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
	);
}
