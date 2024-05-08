import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldError } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaFieldProps = {
	label: string;
	placeholder?: string;
	error?: FieldError;
	register: UseFormRegisterReturn;
	serverError?: string | false | null;
};

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, placeholder, error, register, serverError }) => {
	return (
		<div className="grid gap-2">
			<Label htmlFor={register.name} className="white">
				{label}
			</Label>
			{error && <span className="text-red-500 text-xs">{error?.message}</span>}
			{serverError && <span className="text-red-500 text-xs">{serverError}</span>}
			<Textarea {...register} placeholder={placeholder || ""} className={`${error || serverError ? "border-red-500" : ""} `} rows={8} />
		</div>
	);
};
