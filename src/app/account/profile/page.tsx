import { Skeleton } from "@/components/ui/skeleton";
import { HeroBanner } from "@/containers/Home/HeroBanner";
import Detail from "@/containers/Profile/Detail";
import { Suspense } from "react";

export default function Profile() {
	return (
		<div className="flex min-h-screen w-full lg:max-w-[1300px] mx-auto flex-col">
			<main className="flex flex-col gap-4 px-8 md:gap-8 md:px-18">
				<HeroBanner
					title="Apprenez quelque chose de nouveau chaque jour"
					description="Des tutoriels, des articles, des astuces, et des conseils pour vous aider à devenir un meilleur développeur web."
				/>
				<Suspense fallback={<Skeleton className="w-full h-30" />}>
					<Detail />
				</Suspense>
			</main>
		</div>
	);
}
