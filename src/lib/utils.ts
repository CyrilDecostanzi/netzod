import { Images } from "@/enums/images";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDateTime(date: string) {
	return new Date(date).toLocaleString("fr-FR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric"
	});
}

export function formatImageUrl(url: string | null | undefined) {
	if (url) {
		return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
	}
	return Images.DEFAULT_AVATAR;
}
