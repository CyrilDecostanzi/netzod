import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-90vh py-2">
			<h2 className="text-4xl font-bold">Not Found</h2>
			<p className="mt-3 text-2xl">The page you are looking for does not exist.</p>
			<Link href="/" className="mt-6 text-blue-600 hover:underline focus:underline">
				Go back to home
			</Link>
		</div>
	);
}
