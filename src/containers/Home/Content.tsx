/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Login } from "@/components/Login";

export function Content() {
	return (
		<>
			{/* <Login /> */}
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
				<Card>
					<AspectRatio ratio={16 / 9} className="bg-muted rounded-t-lg">
						<Image src="/assets/card_hero.jpg" alt="Photo by Drew Beamer" fill className="rounded-t-lg object-cover" />
					</AspectRatio>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Actualité</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-xl font-bold">Nouvelle sortie chez Linux Mint</div>
						<p className="text-xs text-muted-foreground">Linux Mint 20.3 est disponible</p>
					</CardContent>
				</Card>
				<Card>
					<AspectRatio ratio={16 / 9} className="bg-muted rounded-t-lg">
						<Image src="/assets/card_hero3.jpg" alt="Photo by Drew Beamer" fill className="rounded-t-lg object-cover" />
					</AspectRatio>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Web</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">Une api avec NestJS</div>
						<p className="text-xs text-muted-foreground">Création d'une api avec NestJS et MongoDB</p>
					</CardContent>
				</Card>
				<Card>
					<AspectRatio ratio={16 / 9} className="bg-muted rounded-t-lg">
						<Image src="/assets/card_hero2.jpg" alt="Photo by Drew Beamer" fill className="rounded-t-lg object-cover" />
					</AspectRatio>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Finance</CardTitle>
						<CreditCard className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">Une nouvelle crypto</div>
						<p className="text-xs text-muted-foreground">Découvrez la nouvelle crypto monnaie</p>
					</CardContent>
				</Card>
				<Card>
					<AspectRatio ratio={16 / 9} className="bg-muted rounded-t-lg">
						<Image src="/assets/card_hero4.jpg" alt="Photo by Drew Beamer" fill className="rounded-t-lg object-cover" />
					</AspectRatio>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">IA</CardTitle>
						<Activity className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">Innovation IA</div>
						<p className="text-xs text-muted-foreground">Découvrez la nouvelle IA de Google</p>
					</CardContent>
				</Card>
			</div>
			<div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
				<Card className="xl:col-span-2 max-h-[500px] overflow-y-auto relative pb-12">
					<CardHeader className="flex flex-col items-center sticky top-0 bg-card z-50">
						<div className="grid gap-2">
							<CardTitle>Top 5 JS frameworks</CardTitle>
							<CardDescription>Les 5 frameworks JS les plus utilisés</CardDescription>
						</div>
					</CardHeader>
					<CardContent>
						<Table className="z-0">
							<TableHeader>
								<TableRow>
									<TableHead>Framework</TableHead>
									<TableHead className="text-right">Utilisation</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>
										<div className="font-medium">React</div>
										<div className="hidden text-sm text-muted-foreground md:inline">Librairie</div>
									</TableCell>
									<TableCell className="text-right">50%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Vue</div>
										<div className="hidden text-sm text-muted-foreground md:inline">Framework</div>
									</TableCell>
									<TableCell className="text-right">20%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Angular</div>
										<div className="hidden text-sm text-muted-foreground md:inline">Framework</div>
									</TableCell>
									<TableCell className="text-right">15%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Svelte</div>
										<div className="hidden text-sm text-muted-foreground md:inline">Framework</div>
									</TableCell>
									<TableCell className="text-right">10%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Next</div>
										<div className="hidden text-sm text-muted-foreground md:inline">Framework</div>
									</TableCell>
									<TableCell className="text-right">5%</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
				<Card className="max-h-[500px] overflow-y-auto relative pb-12">
					<CardHeader className="flex flex-col items-center sticky top-0 bg-card z-50">
						<CardTitle>Les derniers articles</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-8">
						<div className="flex items-center gap-4">
							<div className="hidden h-12 w-16 sm:flex">
								<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg ">
									<Image src="/assets/card_hero.jpg" alt="Photo by Drew Beamer" fill className="rounded-lg object-cover" />
								</AspectRatio>
							</div>
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">La nouvelle version de React</p>
								<p className="text-sm text-muted-foreground">React 18 est disponible</p>
							</div>
							<div className="ml-auto font-medium">Voir</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="hidden h-12 w-16 sm:flex">
								<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg ">
									<Image src="/assets/card_hero2.jpg" alt="Photo by Drew Beamer" fill className="rounded-lg object-cover" />
								</AspectRatio>
							</div>
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">La nouvelle version de Vue</p>
								<p className="text-sm text-muted-foreground">Vue 3 est disponible</p>
							</div>
							<div className="ml-auto font-medium">Voir</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="hidden h-12 w-16 sm:flex">
								<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
									<Image src="/assets/card_hero3.jpg" alt="Photo by Drew Beamer" fill className="rounded-lg object-cover" />
								</AspectRatio>
							</div>
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">Une application avec Angular</p>
								<p className="text-sm text-muted-foreground">Angular 13 est disponible</p>
							</div>
							<div className="ml-auto font-medium">Voir</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="hidden h-12 w-16 sm:flex">
								<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg ">
									<Image src="/assets/card_hero4.jpg" alt="Photo by Drew Beamer" fill className="rounded-lg object-cover" />
								</AspectRatio>
							</div>
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">La nouvelle version de Svelte</p>
								<p className="text-sm text-muted-foreground">Svelte 4 est disponible</p>
							</div>
							<div className="ml-auto font-medium">Voir</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="hidden h-12 w-16 sm:flex">
								<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
									<Image src="/assets/card_hero5.jpg" alt="Photo by Drew Beamer" fill className="rounded-lg object-cover" />
								</AspectRatio>
							</div>
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">Nouvelle version de Next</p>
								<p className="text-sm text-muted-foreground">Next 12 est disponible</p>
							</div>
							<div className="ml-auto font-medium">Voir</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="hidden h-12 w-16 sm:flex">
								<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg ">
									<Image src="/assets/card_hero.jpg" alt="Photo by Drew Beamer" fill className="rounded-lg object-cover" />
								</AspectRatio>
							</div>
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">Créer une application avec Next</p>
								<p className="text-sm text-muted-foreground">Next 12 est disponible</p>
							</div>
							<div className="ml-auto font-medium">Voir</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
