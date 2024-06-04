export function Footer() {
	return (
		<footer className="flex items-center justify-center w-full h-20 border-t absolute bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex items-center justify-center">
				<span className="text-sm text-center">
					© 2024{" "}
					<a href="#" className="text-primary">
						Cyril Decostanzi
					</a>
					. All rights reserved.
				</span>
			</div>
		</footer>
	);
}
