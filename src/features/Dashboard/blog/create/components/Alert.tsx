/* eslint-disable react/no-unescaped-entities */
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { usePostContext } from "@/hooks/usePostContext";

type AlertProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

export const Alert = ({ open, setOpen }: AlertProps) => {
	const { loadPost, createDraft } = usePostContext();

	const handleContinue = () => {
		loadPost(localStorage.getItem("draftPostId"));
		setOpen(false);
	};

	const handleNewPost = () => {
		setOpen(false);
		localStorage.removeItem("draftPostId");
		createDraft();
	};

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Vous avez un brouillon en cours</AlertDialogTitle>
					<AlertDialogDescription>Voulez-vous continuer à éditer votre brouillon ou commencer un nouveau post ?</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={handleNewPost}>Nouveau post</AlertDialogCancel>
					<AlertDialogAction onClick={handleContinue}>Continuer</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
