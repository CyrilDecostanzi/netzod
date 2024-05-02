import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldError } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type InputFieldProps = {
	label: string;
	type?: React.HTMLInputTypeAttribute;
	placeholder?: string;
	error?: FieldError;
	register: UseFormRegisterReturn;
	serverError?: string | false | null;
};

export const InputField: React.FC<InputFieldProps> = ({ label, type = "text", placeholder, error, register, serverError }) => {
	return (
		<div className="grid gap-2">
			<Label htmlFor={register.name} className="white">
				{label}
			</Label>
			{error && <span className="text-red-500 text-xs">{error?.message}</span>}
			{serverError && <span className="text-red-500 text-xs">{serverError}</span>}
			<Input {...register} type={type} placeholder={placeholder || ""} className={`${error || serverError ? "border-red-500" : ""} `} />
		</div>
	);
};
