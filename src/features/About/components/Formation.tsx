import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

export const Formation = () => {
	return (
		<>
			<h2 className="text-3xl font-bold mb-4 ml-4 md:ml-8 flex items-center">
				<GraduationCap className="min-h-8 min-w-8 mr-4" /> Formation
			</h2>
			<Card className="p-4 md:p-8">
				<h3 className="text-xl font-bold flex ">Titre professionnel DWWM Développeur Web et Web Mobile</h3>
				<h3 className="text-xl font-bold flex ">
					<Image
						src="/assets/pngs/logo_eni.png"
						alt="ENI Ecole Informatique"
						width={100}
						height={50}
						style={{ height: "auto", width: "auto" }}
						className="bg-white my-4"
					/>
				</h3>
				<p>diplôme de niveau 5 (Bac+2)</p>
				<p className="text-sm text-gray-600">2020 - 2021</p>
				<p className="mt-4">
					Formation au développement web et web mobile. Apprentissage des technologies front-end et back-end, des bonnes pratiques de
					développement, des outils de versionning et de déploiement.
				</p>
			</Card>
		</>
	);
};
