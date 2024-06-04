import { Alert, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

type AlertErrorProps = {
	message: string;
};

export const AlertError = (props: AlertErrorProps) => {
	const { message } = props;

	return (
		<Alert className="items-center space-x-2 col-span-4 mt-8">
			<Terminal className="h-4 w-4 " />
			<AlertTitle>{message}</AlertTitle>
		</Alert>
	);
};
