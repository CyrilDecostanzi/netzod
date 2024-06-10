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

export function formatImageUrl(url: string | null | undefined, type: "avatar" | "cover" | "post" = "avatar") {
	if (url) {
		// check if the url is starting with assets or http
		if (url.startsWith("assets") || url.startsWith("http")) {
			return url;
		}

		return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
	}

	switch (type) {
		case "avatar":
			return Images.DEFAULT_AVATAR;
		case "cover":
			return Images.DEFAULT_COVER;
		default:
			return Images.DEFAULT_AVATAR;
	}
}
