import { CookiesProvider } from "next-client-cookies/server";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/AuthContext";

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" enableSystem disableTransitionOnChange defaultTheme="dark">
			<CookiesProvider>
				<AuthProvider>
					<TooltipProvider>{children}</TooltipProvider>
				</AuthProvider>
			</CookiesProvider>
		</ThemeProvider>
	);
}
