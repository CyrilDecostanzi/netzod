import { Button } from "@/components/ui/button";
import { Editor } from "@tiptap/react";
import { LinkIcon } from "lucide-react";
import { Dialog, DialogHeader, DialogFooter, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface AddLinkProps {
	editor: Editor;
}

export const AddLink = ({ editor }: AddLinkProps) => {
	const [url, setUrl] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);

	const handleLink = () => {
		const urlRegex = new RegExp(/^(http|https):\/\/[^ "]+$/);
		if (!urlRegex.test(url)) {
			return;
		}
		editor.commands.setLink({ href: url });
		// detach the link from the selection
		editor.commands.focus();

		setOpen(false);
		setUrl("");
	};

	return (
		<>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button onClick={() => setOpen(true)} variant="border">
						<LinkIcon />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>Ajouter un lien</DialogHeader>
					<Input type="text" placeholder="Entrez l'URL" value={url} onChange={(e) => setUrl(e.target.value)} />
					<DialogFooter>
						<Button onClick={handleLink}>Ajouter</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};
