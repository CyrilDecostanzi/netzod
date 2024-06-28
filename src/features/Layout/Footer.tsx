"use client";

import Link from "next/link";

export function Footer() {
	return (
		<footer className="flex items-center justify-center w-full h-16 border-t absolute bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex items-center justify-center">
				<span className="text-sm text-center">
					© 2024{" "}
					<Link href="" className="text-primary">
						Cyril Decostanzi
					</Link>
					<br />
					Built with{" "}
					<Link href="https://nextjs.org/" className="text-primary" target="_blank">
						Next.js
					</Link>
					,{" "}
					<Link href="https://tailwindcss.com/" className="text-primary" target="_blank">
						Tailwind CSS
					</Link>{" "}
					and{" "}
					<Link href="https://www.framer.com/motion/" className="text-primary" target="_blank">
						Framer Motion
					</Link>
				</span>
			</div>
		</footer>
	);
}
