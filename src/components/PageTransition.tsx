"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
	const context = useContext(LayoutRouterContext ?? {});
	const frozen = useRef(context).current;

	return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
}
const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 }
};

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
	// The `key` is tied to the url using the `usePathname` hook.
	// When the url changes, the `key` changes, which triggers a re-render.
	const key = usePathname();

	return (
		<AnimatePresence mode="popLayout">
			<motion.main
				key={key}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{ duration: 0.3, ease: "easeIn" }}
				className="flex flex-col gap-4 px-2 sm:px-8 md:gap-8 md:px-18 pb-28 lg:max-w-[1400px] mx-auto "
			>
				<FrozenRouter>{children}</FrozenRouter>
			</motion.main>
		</AnimatePresence>
	);
};

export default PageTransitionEffect;
