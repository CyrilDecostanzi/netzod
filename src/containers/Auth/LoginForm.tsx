"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { login } from "./lib";

export function LoginForm() {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleSubmit = async () => {
		const { data, error, loading } = await login(formData);

		console.log(data, "response");
	};

	return (
		<Card className="mx-auto max-w-sm border-none shadow-none">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>Enter your email below to login to your account</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							required
							onChange={(e) => setFormData({ ...formData, email: e.target.value })}
						/>
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
							<Link href="#" className="ml-auto inline-block text-sm underline">
								Forgot your password?
							</Link>
						</div>
						<Input id="password" type="password" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
					</div>
					<Button type="submit" className="w-full" onClick={handleSubmit}>
						Login
					</Button>
					<Button variant="outline" className="w-full">
						Login with Google
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
