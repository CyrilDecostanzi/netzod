import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TopRow } from "./TopRow";

export function TopTable({ data }: { data: any[] }) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Framework</TableHead>
					<TableHead className="text-right">Utilisation</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((row, index) => (
					<TopRow key={index} {...row} />
				))}
			</TableBody>
		</Table>
	);
}
