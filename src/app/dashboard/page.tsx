import { DashboardContent } from "@/features/Dashboard/DashboardContent";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tableau de bord",
	description: "Vue d'ensemble de vos activités."
};

export default function Dashboard() {
	return <DashboardContent />;
}
