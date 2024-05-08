/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Images } from "@/enums/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export const AddCover = () => {
	const inputFileRef = useRef<HTMLInputElement>(null);
	return (
		<Card className="w-full xl:w-[80%] mx-auto overflow-hidden lg:p-12 rounded-xl">
			<CardHeader>
				<CardTitle>Image de couverture</CardTitle>
			</CardHeader>
			<CardContent className="relative">
				<AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
					<Image src={Images.DEFAULT_COVER} alt="card hero" className="rounded-xl shadow-lg object-cover w-full" fill priority />
					{/* Display a mask with button ONLY on hover image */}
					<AspectRatio
						ratio={16 / 9}
						className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
					>
						<Button variant="secondary" size="lg" onClick={() => inputFileRef.current?.click()}>
							Changer l'image
						</Button>
					</AspectRatio>
				</AspectRatio>
				<Input type="file" className="absolute inset-0 opacity-0 cursor-pointer" ref={inputFileRef} />
			</CardContent>
		</Card>
	);
};
