import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Contact = () => {
	return (
		<div className="flex flex-col justify-between items-center p-4 mt-12">
			<h2 className="text-2xl text-center font-bold">Contactez moi pour discuter de votre projet ou pour en savoir plus sur mon parcours.</h2>
			<div className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-4">
				<Button asChild>
					<Link href="/contact">
						<Send className="h-4 w-4 mr-2" /> Contact
					</Link>
				</Button>
				<Button asChild className="w-36">
					<Link href="https://www.malt.fr/profile/cyrildecostanzi" target="_blank">
						<Image src="/assets/pngs/malt.png" alt="malt" width={60} height={20} style={{ width: "auto" }} />
					</Link>
				</Button>
			</div>
		</div>
	);
};
