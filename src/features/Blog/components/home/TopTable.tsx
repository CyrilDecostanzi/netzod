"use client";

import { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Enregistrement des composants nécessaires de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type DownloadData = {
	packageName: string;
	downloads: number;
};

const fetchNpmDownloads = async (packageName: string, period: string): Promise<number> => {
	try {
		const response = await fetch(`https://api.npmjs.org/downloads/point/last-${period}/${packageName}`);

		const data = await response.json();
		return data.downloads || 0;
	} catch (error) {
		console.error(`Erreur lors de la récupération des téléchargements pour ${packageName}:`, error);
		return 0;
	}
};

const useNpmDownloads = (packageNames: string[], period: string) => {
	const [downloads, setDownloads] = useState<DownloadData[]>([]);

	useEffect(() => {
		const fetchDownloads = async () => {
			const downloadPromises = packageNames.map((packageName) =>
				fetchNpmDownloads(packageName, period).then((downloads) => ({ packageName, downloads }))
			);
			const downloads = await Promise.all(downloadPromises);
			setDownloads(downloads);
		};

		fetchDownloads();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return downloads;
};

const chartColors: Record<string, string> = {
	react: "rgba(54, 162, 235, 0.2)",
	vue: "rgba(75, 192, 192, 0.2)",
	"@angular/core": "rgba(255, 99, 132, 0.2)",
	svelte: "rgba(255, 159, 64, 0.2)",
	next: "rgba(153, 102, 255, 0.2)"
};

export const TopTable = () => {
	const packageNames = ["react", "vue", "@angular/core", "svelte", "next"];
	const period = "week";
	const downloads = useNpmDownloads(packageNames, period);

	const sortedDownloads = [...downloads].sort((a, b) => b.downloads - a.downloads);

	const chartData = {
		labels: sortedDownloads.map((d) => d.packageName),
		datasets: [
			{
				label: `Téléchargements par semaine`,
				data: sortedDownloads.map((d) => d.downloads),
				backgroundColor: sortedDownloads.map((d) => chartColors[d.packageName]),
				// borderColor: sortedDownloads.map((d) => chartColors[d.packageName].replace("0.2", "1")),
				borderWidth: 1
			}
		]
	};

	return <Bar data={chartData} />;
};
