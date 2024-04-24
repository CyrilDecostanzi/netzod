import Link from "next/link";
import { Icons } from "@/components/icons";

export function LinkList() {
	return (
		<>
			<Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
				<Icons.logo />
				<span className="sr-only">Netzod</span>
			</Link>
			<Link href="/" className="text-foreground transition-colors hover:text-foreground">
				Accueil
			</Link>
			<Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
				Blog
			</Link>
			<Link href="/learning" className="text-muted-foreground transition-colors hover:text-foreground">
				Learning
			</Link>
			<Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
				Contact
			</Link>
			<Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground md:w-16">
				A propos
			</Link>
		</>
	);
}
