import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { GraduationCapIcon } from "lucide-react";

// #################################################
// #################### TYPES ######################
// #################################################

type FormDataType = {
	email: string;
	password: string;
};

type ErrorType = { field: string | null; message: string; status: number } | null;

type LoginFormProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

// #################################################
// ################## COMPONENT ####################
// #################################################

export function LoginForm({ open, setOpen }: LoginFormProps) {
	const [formData, setFormData] = useState<FormDataType>({ email: "", password: "" });
	const [error, setError] = useState<ErrorType>(null);
	const searchParams = useSearchParams();
	const { login } = useAuth();
	const router = useRouter();

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setError(null);
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	}

	async function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		const { data, error } = await login(formData);

		if (error) {
			setError(error);
		}

		if (data) {
			toast.success("Connexion réussie");
			const next = searchParams.get("next");
			if (next) router.push(next);
			setOpen(!open);
		}
	}

	function inputClassName(field: string): string {
		return error && error.field === field ? "border-red-500" : "";
	}

	return (
		<Card className="mx-auto max-w-sm border-none shadow-none">
			<form onSubmit={handleSubmit}>
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>Enter your email below to login to your account</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div>
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="email@exemple.com"
								value={formData.email}
								onChange={handleInputChange}
								className={inputClassName("email") + " mt-1"}
								required
							/>
							{error && error.field === "email" && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
						</div>
						<div>
							<div className="flex items-center justify-between">
								<Label htmlFor="password">Password</Label>
								<Link href="#" className="text-sm underline">
									Forgot your password?
								</Link>
							</div>
							<Input
								id="password"
								name="password"
								type="password"
								value={formData.password}
								onChange={handleInputChange}
								className={inputClassName("password") + " mt-1"}
								required
							/>
							{error && error.field === "password" && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
						</div>
						{error && !error.field && <p className="text-red-500 text-sm">{error.message}</p>}
						<Button type="submit" className="w-full">
							Login
						</Button>
						<Button variant="outline" className="w-full">
							<GraduationCapIcon className="w-4 h-4 mr-2" />
							Login with Google
						</Button>
					</div>
				</CardContent>
			</form>
		</Card>
	);
}
