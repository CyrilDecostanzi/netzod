import { HeroBanner } from "@/components/HeroBanner";
import Detail from "@/containers/Account/Profile/Detail";

export default function Profile() {
	return (
		<div className="flex min-h-screen w-full lg:max-w-[1300px] mx-auto flex-col">
			<main className="flex flex-col gap-4 px-8 md:gap-8 md:px-18">
				<HeroBanner title="Votre profil" description="Consultez et modifiez vos informations personnelles." />
				<Detail />
			</main>
		</div>
	);
}
