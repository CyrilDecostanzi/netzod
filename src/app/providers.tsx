import { CookiesProvider } from "next-client-cookies/server";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" enableSystem disableTransitionOnChange defaultTheme="system">
			<CookiesProvider>
				<AuthProvider>
					<TooltipProvider>{children}</TooltipProvider>
					<Toaster position="top-center" />
					<GoogleTagManager gtmId="GTM-PZKZZ29Z" />
					<GoogleAnalytics gaId="G-MQQLGY0Q6Q" />
				</AuthProvider>
			</CookiesProvider>
		</ThemeProvider>
	);
}
