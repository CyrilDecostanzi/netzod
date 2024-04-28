import { HeroBanner } from "@/components/HeroBanner";
import Detail from "@/features/Account/Detail";

export default function Account() {
	return (
		<>
			<HeroBanner title="Mon compte" description="Consulter et modifier mes informations personnelles." />
			<Detail />
		</>
	);
}
