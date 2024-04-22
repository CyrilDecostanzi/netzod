export const getCookie = (name: string) => {
	const cookies = document.cookie.split(";").map((cookie) => cookie.split("="));
	const cookie = cookies.find((cookie) => cookie[0].trim() === name);
	return cookie ? cookie[1] : null;
};

export const setCookie = (name: string, value: string, days: number) => {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax; Secure;`;
};

export const removeCookie = (name: string) => {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax; Secure;`;
};
