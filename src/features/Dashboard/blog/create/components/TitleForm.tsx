import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export const TitleForm = () => {
	return (
		<form className="grid md:grid-cols-7 gap-4 w-full xl:w-[80%] mx-auto">
			<Input type="text" placeholder="Titre" className="text-2xl p-6 md:col-span-4 rounded-xl" />
			<Select>
				<SelectTrigger className="text-xl p-6 md:col-span-3 rounded-xl ">
					<SelectValue placeholder="Catégorie" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Catégories</SelectLabel>
						<SelectItem value="1" key={1}>
							Catégorie 1
						</SelectItem>
						<SelectItem value="2" key={2}>
							Catégorie 2
						</SelectItem>
						<SelectItem value="3" key={3}>
							Catégorie 3
						</SelectItem>
						<SelectItem value="4" key={4}>
							Catégorie 4
						</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</form>
	);
};
