import { PostStatus } from "@/enums/posts";
import { LucideCheckSquare, LucideLoader2, LucideMonitorX, LucideSquareBottomDashedScissors } from "lucide-react";

export const getPostStatus = (status: number) => {
	switch (status) {
		case PostStatus.ACTIVE:
			return (
				<div className="flex items-center border border-green-500 rounded-lg px-2 sm:px-4 py-2 sm:max-w-[100px]">
					<span className="hidden sm:inline text-green-500">Publié</span>
					<LucideCheckSquare className="h-4 w-4 sm:ml-2 text-green-500" />
				</div>
			);
		case PostStatus.AWAITING_APPROVAL:
			return (
				<div className="flex items-center border border-yellow-500 rounded-lg px-2 sm:px-4 py-2 max-w-[215px]">
					<span className="hidden sm:inline text-yellow-500">En attente</span>
					<LucideLoader2 className="h-4 w-4 sm:ml-2 text-yellow-500" />
				</div>
			);
		case PostStatus.INACTIVE:
			return (
				<div className="flex items-center border border-red-500 rounded-lg px-2 sm:px-4 py-2 max-w-[100px]">
					<span className="hidden sm:inline text-red-500">Inactif</span>
					<LucideMonitorX className="h-4 w-4 sm:ml-2 text-red-500" />
				</div>
			);

		case PostStatus.DRAFT:
			return (
				<div className="flex items-center border border-blue-500 rounded-lg px-2 sm:px-4 py-2 max-w-[115px]">
					<span className="hidden sm:inline text-blue-500">Brouillon</span>
					<LucideSquareBottomDashedScissors className="h-4 w-4 sm:ml-2 text-blue-500" />
				</div>
			);
		default:
			return null;
	}
};
