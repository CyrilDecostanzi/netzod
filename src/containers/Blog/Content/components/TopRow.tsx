import { TableCell, TableRow } from "@/components/ui/table";

export function TopRow({ title, category, utilisation }: { title: string; category: string; utilisation: string }) {
	return (
		<TableRow>
			<TableCell>
				<div className="font-medium">{title}</div>
				<div className="hidden text-sm text-muted-foreground md:inline">{category}</div>
			</TableCell>
			<TableCell className="text-right">{utilisation}%</TableCell>
		</TableRow>
	);
}
