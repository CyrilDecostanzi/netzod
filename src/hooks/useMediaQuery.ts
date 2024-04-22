import { useEffect, useState } from "react";

/**
 * Custom hook to use media query in a component and update the state when the media query changes.
 * @param mediaQueryString
 * @returns matches
 * @example
 * ```tsx
 * const isDesktop = useMediaQuery("(min-width: 728px)");
 * ```
 * @see
 * - https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 */
export function useMediaQuery(mediaQueryString: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(mediaQueryString);

		const listener = () => setMatches(!!mediaQueryList.matches);
		mediaQueryList.addEventListener("change", listener);

		// Call the listener() function immediately to set the local
		// state as soon as possible.
		listener();

		return () => {
			mediaQueryList.removeEventListener("change", listener);
		};
	}, [mediaQueryString]);

	return matches;
}
