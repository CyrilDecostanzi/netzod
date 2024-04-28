import { HeroBanner } from "@/components/HeroBanner";
import Profile from "@/features/Account/Profile/Profile";

export default function Account() {
	return (
		<>
			<HeroBanner title="Mon compte" description="Consulter et modifier mes informations personnelles." />
			<Profile />
		</>
	);
}
