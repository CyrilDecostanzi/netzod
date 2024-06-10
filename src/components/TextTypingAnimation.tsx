import { motion } from "framer-motion";

const TextTypingAnimation = ({ text, delay }: { text: string; delay: number }) => {
	// Transformer le texte en tableau de lettres en gardant les espaces
	const words = text?.split(" ").map((word) => word + " ");

	if (!words) {
		return null;
	}

	return (
		<div style={{ display: "inline-block" }}>
			{words?.map((word, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeOut", duration: 0.1, delay: index * delay }}
					style={{ display: "inline-block", whiteSpace: "pre" }}
				>
					{word}
				</motion.span>
			))}
		</div>
	);
};

export default TextTypingAnimation;
