/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**"
			},
			{
				protocol: "http",
				hostname: "localhost"
			}
		]
	},
	env: {
		// Reference a variable that was defined in the .env file and make it available at Build Time for Docker Image build (Fix)
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.netzod.fr/",
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://netzod.fr/"
	}
};

export default nextConfig;
